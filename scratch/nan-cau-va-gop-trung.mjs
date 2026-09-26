/**
 * Hai việc nốt sau khi đã nắn danh mục:
 *
 *  1. NẮN CÂU. Bảng `questions` mang tên chương/bài RIÊNG, sửa danh mục không tự sửa câu.
 *     58 câu còn đeo "CHƯƠNG 1. VẬT LÍ NHIỆT / Bài 3. Nhiệt độ" - tên của lô hỏng.
 *     Xếp lại theo `math_form`: dạng ấy giờ nằm ở chương/bài nào thì câu theo về đó.
 *
 *  2. GỘP DẠNG TRÙNG. Sáu dòng danh mục nắn xong thì đụng khoá trùng, nghĩa là dạng ấy
 *     ĐÃ CÓ sẵn một dòng đúng. Chuyển câu về dòng đúng rồi xoá dòng thừa.
 *
 * Chạy `node scratch/nan-cau-va-gop-trung.mjs ghi` mới thật sự ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const GHI = process.argv[2] === 'ghi';
const KHO = 'backups/nan-cau-ly-20260909';

/* Tên chương sai do lô hỏng để lại */
const CHUONG_SAI = 'CHƯƠNG 1. VẬT LÍ NHIỆT';

const docHet = async (bang, cot) => {
  const ra = [];
  for (let t = 0; ; t++) {
    const { data } = await sb.from(bang).select(cot).range(t * 1000, t * 1000 + 999);
    if (!data?.length) break;
    ra.push(...data);
    if (data.length < 1000) break;
  }
  return ra;
};

const dm = await docHet('question_categories', '*');
const q = await docHet('questions', 'id,grade,subject,topic,lesson,math_form');

/* Dạng -> chương/bài, lấy từ danh mục ĐÃ NẮN. Dạng nào có ở nhiều chương thì bỏ qua,
   không đoán bừa. */
const theoDang = {};
for (const c of dm) {
  const d = String(c.math_form || '').trim();
  if (!d) continue;
  (theoDang[d] ??= []).push(c);
}

/* ---------- 1. Câu cần nắn ---------- */
const canNan = q.filter(x => String(x.topic || '').trim() === CHUONG_SAI);
console.log(`Câu đeo tên chương sai "${CHUONG_SAI}": ${canNan.length}`);

/* Neo vào chính dòng danh mục CỦA LÔ HỎNG, không dò theo tên dạng chung chung: một tên
   dạng có thể có mặt ở nhiều chương (ví dụ "Vật lý tổng hợp"), dò theo tên là ra 2-5 ứng
   viên rồi đành chịu. Dòng của lô hỏng thì đúng một dòng cho mỗi dạng. */
const LO_HONG = ['2026-08-28T17:55', '2026-08-18T16:13'];
const cuaLoHong = {};
for (const c of dm) {
  if (!LO_HONG.includes(String(c.created_at || '').slice(0, 16))) continue;
  cuaLoHong[String(c.math_form || '').trim()] = c;
}

const nan = [], chiu = [];
for (const x of canNan) {
  const dang = String(x.math_form || '').trim();
  let c = cuaLoHong[dang];
  /* Sáu dòng ghi hỏng vì đụng khoá trùng vẫn còn đeo tên sai - lấy dòng song sinh đúng. */
  if (!c || String(c.topic || '').trim() === CHUONG_SAI) {
    const ung = (theoDang[dang] || []).filter(k => String(k.topic || '').trim() !== CHUONG_SAI);
    if (ung.length !== 1) { chiu.push({ x, so: ung.length }); continue; }
    c = ung[0];
  }
  nan.push({ id: x.id, dang: x.math_form, topic: c.topic, lesson: c.lesson });
}
const gomNan = {};
for (const n of nan) gomNan[`${n.topic} || ${n.lesson || '(trống)'}`] = (gomNan[`${n.topic} || ${n.lesson || '(trống)'}`] || 0) + 1;
console.log('\n── Sẽ xếp lại ──');
for (const [k, v] of Object.entries(gomNan).sort((a, b) => b[1] - a[1])) console.log(`   ${String(v).padStart(4)} câu -> ${k}`);
if (chiu.length) {
  console.log(`\n   ⚠ ${chiu.length} câu chưa xếp được (dạng có ở ${[...new Set(chiu.map(c => c.so))].join('/')} chương):`);
  for (const c of chiu.slice(0, 6)) console.log(`      ${String(c.x.math_form).slice(0, 80)}`);
}

/* ---------- 2. Dạng trùng ---------- */
const trung = [];
for (const [dang, ds] of Object.entries(theoDang)) {
  if (ds.length < 2) continue;
  const khoa = (c) => `${c.grade}|${c.subject}|${c.topic}|${c.lesson || ''}`;
  const nhom = {};
  for (const c of ds) (nhom[khoa(c)] ??= []).push(c);
  /* Dòng nào còn đeo chương sai thì là dòng thừa */
  const thua = ds.filter(c => String(c.topic || '').trim() === CHUONG_SAI);
  const dung = ds.filter(c => String(c.topic || '').trim() !== CHUONG_SAI);
  if (thua.length && dung.length === 1) trung.push({ dang, thua, dung: dung[0] });
}
console.log(`\n── Dạng có dòng thừa cần xoá: ${trung.length} ──`);
for (const t of trung) console.log(`   ${String(t.dang).slice(0, 70)}  ->  giữ: ${t.dung.topic} / ${t.dung.lesson || '(trống)'}`);

if (!GHI) { console.log('\n(chưa ghi - chạy lại với tham số "ghi")'); process.exit(0); }

mkdirSync(KHO, { recursive: true });
writeFileSync(`${KHO}/cau-truoc-khi-nan.json`, JSON.stringify(canNan, null, 1));
writeFileSync(`${KHO}/danh-muc-thua.json`, JSON.stringify(trung, null, 1));

let xongCau = 0;
for (const n of nan) {
  const { error } = await sb.from('questions').update({ topic: n.topic, lesson: n.lesson }).eq('id', n.id);
  if (error) console.log(`   ✗ câu ${n.id}: ${error.message}`); else xongCau++;
}
let xongXoa = 0;
for (const t of trung) for (const c of t.thua) {
  const { error } = await sb.from('question_categories').delete().eq('id', c.id);
  if (error) console.log(`   ✗ xoá ${c.id}: ${error.message}`); else xongXoa++;
}
console.log(`\nĐÃ NẮN ${xongCau}/${nan.length} câu · XOÁ ${xongXoa} dòng danh mục thừa.`);
console.log(`Bản gốc: ${KHO}/`);
