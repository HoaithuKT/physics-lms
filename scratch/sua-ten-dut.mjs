/*
 * Nắn những tên dạng viết sai LaTeX kiểu "${{X}}$" thành "$X$".
 *
 * Vì sao phải sửa: chuỗi "${{" là dấu hiệu tấn công template injection, tường lửa đứng
 * trước Supabase chặn thẳng mọi truy vấn có chứa nó và trả về trang chặn không kèm cờ
 * CORS. Trình duyệt vì thế chỉ báo được "TypeError: Failed to fetch", che mất lý do
 * thật. Hễ đề chạm vào một dạng dính chuỗi này là cả trang chọn câu chết.
 *
 * Nắn THEO CẶP "${{ ... }}$", không thay rời từng vế: tên đúng sẵn có chứa "}}$" ở
 * cuối công thức lồng nhau (ví dụ $\sqrt{\overline{v^2}}$) sẽ bị cắt cụt nếu thay rời.
 *
 * Chạy không tham số = xem trước. Thêm --sua để ghi thật.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const GHI = process.argv.includes('--sua');
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

export const nanTen = (s) => String(s ?? '').replace(/\$\{\{([\s\S]*?)\}\}\$/g, '$$$1$$');

const COT = ['topic', 'lesson', 'math_form'];
const napHet = async (bang, cot) => {
  const ra = [];
  for (let p = 0; ; p++) {
    const { data, error } = await sb.from(bang).select(cot).range(p * 1000, p * 1000 + 999);
    if (error) throw new Error(bang + ': ' + error.message);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  }
  return ra;
};
const khoaDanhMuc = (r, moi = {}) =>
  [r.grade, r.subject, ...COT.map(c => moi[c] ?? r[c])].join('¦');

const thuMuc = path.join(GOC, 'backups', 'sua-ten-dut-20260824');
if (GHI) fs.mkdirSync(thuMuc, { recursive: true });

/* ---------- 1. Danh mục ---------- */
const dm = await napHet('question_categories', ['id', 'grade', 'subject', ...COT].join(', '));
const dmCu = new Set(dm.map(r => khoaDanhMuc(r)));
const dmSua = [], dmXoa = [];
for (const r of dm) {
  const moi = {};
  for (const c of COT) { const v = nanTen(r[c]); if (v !== String(r[c] ?? '')) moi[c] = v; }
  if (!Object.keys(moi).length) continue;
  (dmCu.has(khoaDanhMuc(r, moi)) ? dmXoa : dmSua).push({ r, moi });
}
console.log(`=== DANH MỤC: ${dmSua.length} dòng đổi tên, ${dmXoa.length} dòng hỏng trùng bản đúng (xoá) ===`);
for (const { r, moi } of dmSua) console.log(`  ĐỔI  ${Object.values(moi)[0]}`);
for (const { r } of dmXoa) console.log(`  XOÁ  ${r.math_form}`);

/* ---------- 2. Câu hỏi ---------- */
const ch = await napHet('questions', ['question_id', 'grade', 'subject', ...COT].join(', '));
const chSua = [];
for (const r of ch) {
  const moi = {};
  for (const c of COT) { const v = nanTen(r[c]); if (v !== String(r[c] ?? '')) moi[c] = v; }
  if (Object.keys(moi).length) chSua.push({ r, moi });
}
console.log(`\n=== CÂU HỎI: ${chSua.length} câu đổi tên ===`);
const daIn = new Set();
for (const { moi } of chSua) for (const v of Object.values(moi)) {
  if (!daIn.has(v)) { daIn.add(v); console.log(`  ${v}`); }
}

/* ---------- 3. Sau khi nắn, câu nào cũng phải có danh mục tương ứng ---------- */
const dmSauKhiNan = new Set([
  ...dm.filter(r => !dmXoa.some(x => x.r.id === r.id))
      .map(r => khoaDanhMuc(r, dmSua.find(x => x.r.id === r.id)?.moi || {})),
]);
const moCoi = new Set();
for (const { r, moi } of chSua) {
  const k = khoaDanhMuc(r, moi);
  if (!dmSauKhiNan.has(k)) moCoi.add(k);
}
console.log(`\n=== CÂU MỒ CÔI SAU KHI NẮN: ${moCoi.size} tổ hợp ===`);
[...moCoi].forEach(k => console.log('  ' + k));

if (!GHI) { console.log('\n(xem trước - thêm --sua để ghi)'); process.exit(0); }

/* ---------- 4. Ghi ---------- */
fs.writeFileSync(path.join(thuMuc, 'question_categories.json'),
  JSON.stringify([...dmSua, ...dmXoa].map(x => x.r), null, 2));
fs.writeFileSync(path.join(thuMuc, 'questions.json'), JSON.stringify(chSua.map(x => x.r), null, 2));

const ghi = async (bang, khoa, ds) => {
  let xong = 0;
  for (const { r, moi } of ds) {
    const { data, error } = await sb.from(bang).update(moi).eq(khoa, r[khoa]).select(khoa);
    if (error) { console.error(`  LỖI ${r[khoa]}: ${error.message}`); continue; }
    if (!data?.length) { console.error(`  KHÔNG GHI ĐƯỢC (RLS?) ${r[khoa]}`); continue; }
    xong++;
  }
  console.log(`  ${bang}: ghi ${xong}/${ds.length}`);
};

// Đổi tên CÂU trước, rồi mới xoá dòng danh mục hỏng - để không lúc nào câu bị mất chỗ dựa.
await ghi('questions', 'question_id', chSua);
await ghi('question_categories', 'id', dmSua);
let daXoa = 0;
for (const { r } of dmXoa) {
  const { data, error } = await sb.from('question_categories').delete().eq('id', r.id).select('id');
  if (error) { console.error(`  LỖI xoá ${r.id}: ${error.message}`); continue; }
  if (!data?.length) { console.error(`  KHÔNG XOÁ ĐƯỢC (RLS?) ${r.id}`); continue; }
  daXoa++;
}
console.log(`  question_categories: xoá ${daXoa}/${dmXoa.length}`);
console.log('\nĐÃ GHI THẬT. Bản sao lưu: ' + thuMuc);
