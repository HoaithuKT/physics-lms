// Kiem dung cach ma trang lam: doc theo thu_tu, roi doi cho hai ban lien ke.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { doTrung } from './trungCT.mjs';

const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

let dat = 0, tong = 0;
const kiem = (ten, thuc, mong) => {
  tong++;
  const ok = JSON.stringify(thuc) === JSON.stringify(mong);
  if (ok) dat++;
  console.log(`${ok ? '✓' : '✗ HỎNG'} ${ten}${ok ? '' : `\n     ra : ${JSON.stringify(thuc)}\n     cần: ${JSON.stringify(mong)}`}`);
};

const { data: dm } = await sb.from('formula_categories').select('id, name').ilike('name', 'ZZ THỬ%');
const chuong = dm?.[0];
if (!chuong) { console.log('Khong thay chuong thu - chay tao-du-lieu-thu-sotay.mjs truoc.'); process.exit(1); }

/** Doc y het cach fetchFormulas cua trang lam. */
const doc = async () => {
  const { data } = await sb.from('formulas').select('*').eq('category_id', chuong.id).order('created_at');
  const ds = (data || []).slice();
  if (ds.some(f => f.thu_tu != null)) ds.sort((x, y) => (x.thu_tu ?? 1e9) - (y.thu_tu ?? 1e9));
  return ds;
};

/** Y het ham doiChoCongThuc cua trang. */
const doiCho = async (ds, i, huong) => {
  const j = i + huong;
  const a = ds[i], b = ds[j];
  const tta = a.thu_tu ?? i, ttb = b.thu_tu ?? j;
  const [r1, r2] = await Promise.all([
    sb.from('formulas').update({ thu_tu: ttb }).eq('id', a.id),
    sb.from('formulas').update({ thu_tu: tta }).eq('id', b.id),
  ]);
  const loi = r1.error || r2.error;
  if (loi) throw new Error(loi.message);
};

const gon = ds => ds.map(f => f.title.replace('ZZ Thử - ', ''));

// Dat lai thu tu goc truoc moi lan chay, de chay bao nhieu lan cung ra ket qua nhu nhau.
for (const [ten, n] of [['ZZ Thử - Định luật II Newton', 1], ['ZZ Thử - Chu kì con lắc đơn', 2], ['ZZ Thử - Động năng', 3]]) {
  await sb.from('formulas').update({ thu_tu: n }).eq('category_id', chuong.id).eq('title', ten);
}

console.log('— Sắp thứ tự —');
let ds = await doc();
kiem('đọc ra đúng thứ tự ban đầu', gon(ds), ['Định luật II Newton', 'Chu kì con lắc đơn', 'Động năng']);

await doiCho(ds, 0, 1);
ds = await doc();
kiem('đưa cái đầu xuống dưới', gon(ds), ['Chu kì con lắc đơn', 'Định luật II Newton', 'Động năng']);

await doiCho(ds, 2, -1);
ds = await doc();
kiem('đưa cái cuối lên trên', gon(ds), ['Chu kì con lắc đơn', 'Động năng', 'Định luật II Newton']);

// Trang LUON doc lai sau moi lan doi (fetchFormulas), nen phep thu cung phai doc lai -
// truyen danh sach cu vao la sai cach dung, khong phai loi cua ham.
await doiCho(ds, 1, -1);
ds = await doc();
await doiCho(ds, 0, 1);
ds = await doc();
kiem('đổi đi đổi lại thì về chỗ cũ', gon(ds), ['Chu kì con lắc đơn', 'Động năng', 'Định luật II Newton']);

console.log('\n— Chống trùng trên kho Lý thật —');
const { data: kho } = await sb.from('formulas').select('id, title, latex_content, category_id');
kiem('thêm lại y nguyên -> bị chặn',
  !!doTrung({ title: 'ZZ Thử - Động năng', latex_content: 'W_d = \\frac{1}{2}mv^2' }, kho).trungVoi, true);
kiem('gõ dfrac thay frac -> vẫn bị chặn',
  !!doTrung({ title: 'Động năng viết cách khác', latex_content: 'W_d = \\dfrac{1}{2}mv^2' }, kho).trungVoi, true);
kiem('công thức thật sự mới -> cho qua',
  !!doTrung({ title: 'Định luật Ôm', latex_content: 'I = \\frac{U}{R}' }, kho).trungVoi, false);

console.log(`\n${dat}/${tong} phép thử đạt.`);
