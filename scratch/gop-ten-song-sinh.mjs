/*
 * Gộp những tên Chương/Bài/Dạng chỉ khác nhau vài dấu.
 *
 * Kho sinh ra chúng vì bản cũ so tên bằng đúng từng ký tự: AI mỗi lượt quét viết lệch
 * một dấu chấm cuối hay một cặp ngoặc nhọn là app coi như dạng MỚI, đề xuất thêm dòng
 * danh mục, thầy cô bấm duyệt là kho có thêm một dạng song sinh. Câu bị xé lẻ ra hai ba
 * chỗ nên ra đề theo dạng nào cũng hụt câu.
 *
 * Chọn tên giữ lại: ưu tiên bản viết SẠCH (không ngoặc nhọn thừa, không dấu chấm cuối);
 * trong số đó lấy bản đang có nhiều câu nhất.
 *
 * Chạy không tham số = xem trước. Thêm --sua để ghi thật.
 * GOC_APP=D:/claude/math-lms/ để chạy cho app Toán.
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

/** Bản sao của chuanTen trong src/utils/phanLoaiCauHoi.ts - phải khớp với app. */
const chuanTen = (s) => String(s || '')
  .replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd')
  .toLowerCase().replace(/\s+/g, ' ')
  .replace(/^[\s.,;:]+|[\s.,;:]+$/g, '');

/** Tên viết sạch: không ngoặc nhọn thừa quanh công thức, không dấu câu thừa ở hai đầu. */
const laSach = (t) => t === String(t)
  .replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .replace(/^[\s.,;:]+|[\s.,;:]+$/g, '');

const napHet = async (bang, cot) => {
  const ra = [];
  for (let p = 0; ; p++) {
    const { data, error } = await sb.from(bang).select(cot).range(p * 1000, p * 1000 + 999);
    if (error) throw new Error(bang + ': ' + error.message);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  }
  return ra;
};

const dm = await napHet('question_categories', 'id, grade, subject, topic, lesson, math_form, yeu_cau_can_dat');
const ch = await napHet('questions', 'question_id, grade, subject, topic, lesson, math_form');

/* Đếm số câu đang dùng mỗi tên, để chọn bản nào đông câu hơn khi cả hai đều sạch. */
const demCau = (cot, giaTri, r) => ch.filter(q =>
  String(q.grade) === String(r.grade) && q.subject === r.subject && q[cot] === giaTri).length;

/* Gom theo khoá đã chuẩn hoá. Mỗi cột xét trong phạm vi cha của nó. */
const PHAM_VI = {
  topic: (r) => [r.grade, r.subject],
  lesson: (r) => [r.grade, r.subject, r.topic],
  math_form: (r) => [r.grade, r.subject, r.topic, r.lesson],
};

const doiTen = [];   // { cot, pham, tuTen, veTen }
for (const cot of ['topic', 'lesson', 'math_form']) {
  const nhom = new Map();
  for (const r of dm) {
    const ten = String(r[cot] || ''); if (!ten) continue;
    const k = [...PHAM_VI[cot](r), chuanTen(ten)].join('¦');
    if (!nhom.has(k)) nhom.set(k, { mau: r, ten: new Set() });
    nhom.get(k).ten.add(ten);
  }
  for (const [k, v] of nhom) {
    if (v.ten.size < 2) continue;
    const ds = [...v.ten];
    const uuTien = ds.filter(laSach).length ? ds.filter(laSach) : ds;
    const giu = uuTien.sort((a, b) => demCau(cot, b, v.mau) - demCau(cot, a, v.mau) || a.length - b.length)[0];
    for (const t of ds) if (t !== giu) doiTen.push({ cot, pham: PHAM_VI[cot](v.mau), tuTen: t, veTen: giu, mau: v.mau });
  }
}

console.log(`${dm.length} dòng danh mục, ${ch.length} câu hỏi.`);
console.log(`\n=== ${doiTen.length} TÊN CẦN GỘP ===`);
for (const d of doiTen) {
  const soCau = demCau(d.cot, d.tuTen, d.mau);
  console.log(`  [${d.cot}] ${soCau} câu`);
  console.log(`     bỏ  : ${d.tuTen}`);
  console.log(`     giữ : ${d.veTen}`);
}

/* Dòng danh mục nào sau khi đổi tên sẽ trùng khít một dòng khác thì xoá bớt. */
const apDung = (r) => {
  const c = { ...r };
  for (const d of doiTen) {
    if (String(c.grade) !== String(d.mau.grade) || c.subject !== d.mau.subject) continue;
    if (c[d.cot] === d.tuTen) c[d.cot] = d.veTen;
  }
  return c;
};
const khoaDM = (c) => [c.grade, c.subject, c.topic, c.lesson, c.math_form].join('¦');

const giuLai = new Map();     // khoá -> dòng giữ
const xoaDi = [];             // dòng bị xoá vì trùng khít
const suaDM = [];             // dòng chỉ cần đổi tên

// Xét dòng ĐÃ ĐÚNG TÊN trước: giữ chính nó thì khỏi phải đổi tên một dòng khác rồi quay
// ra xoá đúng cái dòng vốn đã chuẩn - vừa đỡ một lượt ghi, vừa đỡ khó hiểu khi soát lại.
const theoThuTu = [...dm].sort((a, b) =>
  (khoaDM(apDung(a)) === khoaDM(a) ? 0 : 1) - (khoaDM(apDung(b)) === khoaDM(b) ? 0 : 1));

for (const r of theoThuTu) {
  const moi = apDung(r);
  const k = khoaDM(moi);
  if (giuLai.has(k)) {
    xoaDi.push({ r, gop: giuLai.get(k) });
  } else {
    giuLai.set(k, moi);
    if (k !== khoaDM(r)) suaDM.push({ r, moi });
  }
}

console.log(`\n=== DANH MỤC: ${suaDM.length} dòng đổi tên, ${xoaDi.length} dòng trùng khít (xoá) ===`);
for (const { r } of xoaDi) console.log(`  XOÁ  ${r.lesson} | ${r.math_form}`);

/* Yêu cầu cần đạt: dòng sắp xoá có mà dòng giữ lại chưa có thì bê sang, kẻo mất công soạn. */
const cheoYeuCau = [];
for (const { r, gop } of xoaDi) {
  if (!String(r.yeu_cau_can_dat || '').trim()) continue;
  const dongGiu = dm.find(x => khoaDM(apDung(x)) === khoaDM(gop) && !xoaDi.some(y => y.r.id === x.id));
  if (dongGiu && !String(dongGiu.yeu_cau_can_dat || '').trim()) {
    cheoYeuCau.push({ id: dongGiu.id, yeu_cau_can_dat: r.yeu_cau_can_dat, tu: r.id });
  }
}
if (cheoYeuCau.length) console.log(`\n  ${cheoYeuCau.length} Yêu cầu cần đạt được bê sang dòng giữ lại.`);

/* Câu hỏi cần đổi tên theo. */
const suaCH = [];
for (const q of ch) {
  const moi = {};
  for (const d of doiTen) {
    if (String(q.grade) !== String(d.mau.grade) || q.subject !== d.mau.subject) continue;
    if (q[d.cot] === d.tuTen) moi[d.cot] = d.veTen;
  }
  if (Object.keys(moi).length) suaCH.push({ q, moi });
}
console.log(`\n=== CÂU HỎI: ${suaCH.length} câu đổi tên theo ===`);

/*
 * Sau khi gộp, mọi câu vẫn phải có dòng danh mục tương ứng.
 *
 * Tách riêng mồ côi CÓ SẴN từ trước và mồ côi DO LẦN GỘP NÀY sinh ra - chỉ loại thứ hai
 * mới là lỗi của việc gộp, còn loại thứ nhất là chuyện dọn kho khác, gộp chung vào một
 * con số thì không biết đường nào mà lần.
 */
const dmTruoc = new Set(dm.map(khoaDM));
const dmSau = new Set([...giuLai.values()].map(khoaDM));
const coSan = new Set(), moiSinh = new Set();
for (const q of ch) {
  const moi = { ...q };
  const s = suaCH.find(x => x.q.question_id === q.question_id);
  if (s) Object.assign(moi, s.moi);
  if (dmSau.has(khoaDM(moi))) continue;
  (dmTruoc.has(khoaDM(q)) ? moiSinh : coSan).add(khoaDM(q));
}
console.log(`\n=== CÂU MỒ CÔI DO LẦN GỘP NÀY: ${moiSinh.size} tổ hợp ===`);
[...moiSinh].forEach(k => console.log('  ' + k));
console.log(`\n=== MỒ CÔI CÓ SẴN TỪ TRƯỚC (không phải do gộp): ${coSan.size} tổ hợp ===`);
[...coSan].slice(0, 10).forEach(k => console.log('  ' + k));

if (!GHI) { console.log('\n(xem trước - thêm --sua để ghi)'); process.exit(0); }

/* ---------- Ghi ---------- */
const thuMuc = path.join(GOC, 'backups', 'gop-ten-song-sinh-20260825');
fs.mkdirSync(thuMuc, { recursive: true });
fs.writeFileSync(path.join(thuMuc, 'question_categories.json'), JSON.stringify(dm, null, 2));
fs.writeFileSync(path.join(thuMuc, 'questions-truoc-khi-sua.json'),
  JSON.stringify(suaCH.map(x => x.q), null, 2));

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

// Đổi tên CÂU trước, rồi mới đụng vào danh mục - để không lúc nào câu bị mất chỗ dựa.
await ghi('questions', 'question_id', suaCH.map(x => ({ r: x.q, moi: x.moi })));
await ghi('question_categories', 'id', suaDM);
if (cheoYeuCau.length) {
  await ghi('question_categories', 'id',
    cheoYeuCau.map(c => ({ r: { id: c.id }, moi: { yeu_cau_can_dat: c.yeu_cau_can_dat } })));
}
let daXoa = 0;
for (const { r } of xoaDi) {
  const { data, error } = await sb.from('question_categories').delete().eq('id', r.id).select('id');
  if (error) { console.error(`  LỖI xoá ${r.id}: ${error.message}`); continue; }
  if (!data?.length) { console.error(`  KHÔNG XOÁ ĐƯỢC (RLS?) ${r.id}`); continue; }
  daXoa++;
}
console.log(`  question_categories: xoá ${daXoa}/${xoaDi.length}`);
console.log('\nĐÃ GHI THẬT. Bản sao lưu: ' + thuMuc);
