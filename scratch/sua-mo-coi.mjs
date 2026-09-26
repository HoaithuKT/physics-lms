/*
 * Sửa 10 tổ hợp câu mồ côi tìm thấy qua scratch/soi-mo-coi.mjs. Hai loại khác nhau:
 *
 * 1. ĐỔI TÊN CHƯƠNG SAI: 24 câu gắn "Chương 1. Nhiệt học" - tên này không tồn tại một
 *    mình trong danh mục (đã kiểm bằng scratch/kiem-chuong-nhiet-hoc.mjs), Bài của
 *    những câu này đã có sẵn dưới "Chương 1. Vật lí nhiệt" - đổi câu về đúng tên đó.
 *
 * 2. THÊM DÒNG DANH MỤC CÒN THIẾU: 6 câu (rải ở 6 tổ hợp) đúng Chương/Bài nhưng danh
 *    mục chưa có dòng cho đúng Dạng - cây chọn dạng vì thế không hiện ra dù câu vẫn nằm
 *    trong kho. Thêm dòng, không đụng vào câu.
 *
 * Chạy không tham số = xem trước. Thêm --sua để ghi thật.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const GOC = 'D:/claude/physics-lms/';
const GHI = process.argv.includes('--sua');
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const napHet = async (bang, cot) => {
  const ra = [];
  for (let p = 0; ; p++) {
    const { data, error } = await sb.from(bang).select(cot).range(p * 1000, p * 1000 + 999);
    if (error) throw new Error(bang + ': ' + error.message);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  }
  return ra;
};

const dm = await napHet('question_categories', 'id, grade, subject, topic, lesson, math_form');
const ch = await napHet('questions', 'question_id, grade, subject, topic, lesson, math_form');
const khoa = (r) => [r.grade, r.subject, r.topic, r.lesson, r.math_form].join('¦');
const dmSet = new Set(dm.map(khoa));

/* ---------- 1. Đổi tên chương sai ---------- */
const CHUONG_SAI = 'Chương 1. Nhiệt học';
const CHUONG_DUNG = 'Chương 1. Vật lí nhiệt';
const doiTenChuong = ch.filter(q => q.topic === CHUONG_SAI);
console.log(`=== ĐỔI TÊN CHƯƠNG: ${doiTenChuong.length} câu "${CHUONG_SAI}" -> "${CHUONG_DUNG}" ===`);

// Soát: đổi xong mọi câu phải có dòng danh mục tương ứng
const thieuSauDoi = doiTenChuong.filter(q => !dmSet.has([q.grade, q.subject, CHUONG_DUNG, q.lesson, q.math_form].join('¦')));
if (thieuSauDoi.length) {
  console.log(`  ⚠ ${thieuSauDoi.length} câu đổi xong VẪN THIẾU danh mục - sẽ thêm dòng ở bước 2:`);
  thieuSauDoi.forEach(q => console.log(`     ${q.lesson} | ${q.math_form}`));
}

/* ---------- 2. Thêm dòng danh mục còn thiếu ---------- */
// Xét SAU KHI đổi tên chương ở bước 1, để không thêm nhầm dòng "Chương 1. Nhiệt học".
const sauDoi = (q) => doiTenChuong.includes(q) ? { ...q, topic: CHUONG_DUNG } : q;
const thieuDong = new Map();
for (const q0 of ch) {
  const q = sauDoi(q0);
  const k = khoa(q);
  if (dmSet.has(k)) continue;
  if (!thieuDong.has(k)) thieuDong.set(k, { grade: q.grade, subject: q.subject, topic: q.topic, lesson: q.lesson, math_form: q.math_form, soCau: 0 });
  thieuDong.get(k).soCau++;
}
console.log(`\n=== THÊM DÒNG DANH MỤC: ${thieuDong.size} dòng còn thiếu ===`);
for (const d of thieuDong.values()) console.log(`  ${d.soCau} câu · ${d.topic} | ${d.lesson} | ${d.math_form}`);

if (!GHI) { console.log('\n(xem trước - thêm --sua để ghi)'); process.exit(0); }

/* ---------- Ghi ---------- */
const thuMuc = path.join(GOC, 'backups', 'sua-mo-coi-20260825');
fs.mkdirSync(thuMuc, { recursive: true });
fs.writeFileSync(path.join(thuMuc, 'questions-truoc-khi-doi-ten-chuong.json'), JSON.stringify(doiTenChuong, null, 2));

let xong = 0;
for (const q of doiTenChuong) {
  const { data, error } = await sb.from('questions').update({ topic: CHUONG_DUNG }).eq('question_id', q.question_id).select('question_id');
  if (error) { console.error(`  LỖI ${q.question_id}: ${error.message}`); continue; }
  if (!data?.length) { console.error(`  KHÔNG GHI ĐƯỢC (RLS?) ${q.question_id}`); continue; }
  xong++;
}
console.log(`questions: đổi tên chương ${xong}/${doiTenChuong.length}`);

if (thieuDong.size > 0) {
  const { error } = await sb.from('question_categories').insert([...thieuDong.values()].map(({ soCau, ...d }) => d));
  if (error) console.error('LỖI thêm danh mục: ' + error.message);
  else console.log(`question_categories: thêm ${thieuDong.size} dòng`);
}
console.log('\nĐÃ GHI THẬT. Bản sao lưu: ' + thuMuc);
