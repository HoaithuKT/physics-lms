/**
 * Dọn nốt các dạng còn trống "Yêu cầu cần đạt".
 *
 * Dùng lại ĐÚNG bộ soạn của app (`soanYeuCauCanDat.ts`) - cùng prompt, cùng giọng văn
 * với nút "AI soạn Yêu cầu cần đạt" trong Quản lý danh mục, để chữ trong kho không có
 * hai giọng khác nhau.
 *
 * Khoá AI lấy thẳng từ .env.local thay vì qua /api/admin/gemini-key, vì đường ấy đòi
 * phiên đăng nhập của trình duyệt.
 *
 * Chạy:
 *   node --experimental-strip-types scratch/don-yeu-cau-con-thieu.mjs        (thử, chưa ghi)
 *   node --experimental-strip-types scratch/don-yeu-cau-con-thieu.mjs ghi    (ghi thật)
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { pathToFileURL } from 'url';
import { join } from 'path';

const GHI = process.argv[2] === 'ghi';
const KHO = 'backups/yeu-cau-can-dat-20260909';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Nạp bộ soạn của app. Node không bóc kiểu cho tệp dưới node_modules nên thư mục tạm
   phải ở gốc repo; đường dẫn tương đối phải ghi rõ đuôi .ts. */
const TAM = join(process.cwd(), '.tam-yc');
rmSync(TAM, { recursive: true, force: true });
mkdirSync(TAM, { recursive: true });
for (const t of readdirSync('src/utils')) {
  if (!t.endsWith('.ts')) continue;
  writeFileSync(join(TAM, t), readFileSync(join('src/utils', t), 'utf8')
    .replace(/from '\.\/([A-Za-z0-9_]+)'/g, "from './$1.ts'")
    .replace(/from "\.\/([A-Za-z0-9_]+)"/g, 'from "./$1.ts"'));
}
const { soanYeuCauNhieuLo } = await import(pathToFileURL(join(TAM, 'soanYeuCauCanDat.ts')).href);
const { yeuCauTheoMau, thieuYeuCau } = await import(pathToFileURL(join(TAM, 'yeuCauCanDat.ts')).href);

/* ---------- Gom các dạng còn trống ---------- */
const { data: dm } = await sb.from('question_categories').select('*');
const trong = (dm || []).filter(c => thieuYeuCau(c.yeu_cau_can_dat) && String(c.math_form || '').trim());
console.log(`Dạng còn trống yêu cầu cần đạt: ${trong.length}/${dm.length}`);
if (!trong.length) { rmSync(TAM, { recursive: true, force: true }); process.exit(0); }

/* Máy soạn bám câu thật thì sát hơn hẳn so với chỉ nhìn tên dạng. */
const ds = [];
for (const c of trong) {
  const { data: q } = await sb.from('questions').select('content')
    .eq('math_form', c.math_form).eq('lesson', c.lesson || '').limit(3);
  ds.push({
    id: c.id,
    grade: String(c.grade || ''),
    subject: c.subject || '',
    topic: c.topic || '',
    lesson: c.lesson || '',
    math_form: c.math_form,
    cauMau: (q || []).map(x => String(x.content || '').slice(0, 300)).filter(Boolean),
  });
}
console.log(`   trong đó ${ds.filter(d => d.cauMau.length).length} dạng có câu thật để bám vào\n`);

/* ---------- Nhờ AI soạn ---------- */
const cauHinh = {
  keys: ['GEMINI_API_KEY', 'GEMINI_API_KEY_1', 'GEMINI_API_KEY_2', 'GEMINI_API_KEY_3', 'GEMINI_API_KEY_4']
    .map(k => env[k]).filter(Boolean),
  models: ['gemini-3.6-flash', 'gemini-3.7-flash', 'gemini-3.5-flash'],
  treo: [],
};
console.log(`Có ${cauHinh.keys.length} khoá AI.`);

let daSoan = [];
try {
  const kq = await soanYeuCauNhieuLo(ds, cauHinh, (m) => console.log('   ' + m));
  daSoan = kq.ketQua || kq.daSoan || [];
  if (kq.loHong?.length) console.log(`   ⚠ ${kq.loHong.length} lô hỏng`);
} catch (e) {
  console.log('   ✗ AI hỏng:', e?.message || e);
}
console.log(`\nAI soạn được ${daSoan.length}/${ds.length} dạng.`);

/* Dạng nào AI bỏ sót thì dựng theo mẫu - vẫn hơn để trống, và có đuôi đánh dấu để soát. */
const theoId = new Map(daSoan.map(x => [x.id, x.yeuCau]));
const ghiRa = trong.map(c => ({
  id: c.id,
  math_form: c.math_form,
  lesson: c.lesson,
  yeuCau: theoId.get(c.id) || yeuCauTheoMau(c),
  tuAI: theoId.has(c.id),
}));

console.log('\n── SẼ GHI ──');
for (const g of ghiRa)
  console.log(`   ${g.tuAI ? 'AI ' : 'mẫu'} · ${String(g.lesson || '').slice(0, 26).padEnd(26)} · ${String(g.math_form).slice(0, 40).padEnd(40)} -> ${g.yeuCau.slice(0, 90)}`);

if (!GHI) {
  console.log('\n(chưa ghi - chạy lại với tham số "ghi")');
  rmSync(TAM, { recursive: true, force: true });
  process.exit(0);
}

mkdirSync(KHO, { recursive: true });
writeFileSync(`${KHO}/danh-muc-truoc-khi-dien.json`, JSON.stringify(trong, null, 1));
let xong = 0, hong = 0;
for (const g of ghiRa) {
  const { error } = await sb.from('question_categories').update({ yeu_cau_can_dat: g.yeuCau }).eq('id', g.id);
  if (error) { hong++; console.log(`   ✗ ${g.math_form}: ${error.message}`); } else xong++;
}
console.log(`\nĐÃ GHI ${xong} dạng, hỏng ${hong}. Bản gốc: ${KHO}/danh-muc-truoc-khi-dien.json`);
rmSync(TAM, { recursive: true, force: true });
