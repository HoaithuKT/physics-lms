/*
 * Sửa lệch tên Phân môn ở lớp 12: một số câu và một dòng danh mục ghi "Giải tích" trong
 * khi toàn bộ phần còn lại của lớp 12 (1706 câu, 85 dòng danh mục) dùng "Đại số". Đây
 * chính là nguyên nhân của 11 tổ hợp "câu mồ côi" phát hiện qua scratch/soi-mo-coi.mjs -
 * không phải thiếu Dạng, mà là câu và danh mục đang tra khác Phân môn nên không khớp
 * nhau. Đã kiểm: đổi "Giải tích" -> "Đại số" không đụng dòng danh mục nào có sẵn.
 *
 * Chạy không tham số = xem trước. Thêm --sua để ghi thật.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const GOC = 'D:/claude/math-lms/';
const GHI = process.argv.includes('--sua');
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: ch } = await sb.from('questions').select('question_id, lesson, math_form')
  .eq('grade', '12').eq('subject', 'Giải tích');
const { data: dmLa } = await sb.from('question_categories').select('id, lesson, math_form')
  .eq('grade', '12').eq('subject', 'Giải tích');

console.log(`=== ĐỔI PHÂN MÔN "Giải tích" -> "Đại số" (lớp 12) ===`);
console.log(`  ${ch.length} câu hỏi`);
console.log(`  ${dmLa.length} dòng danh mục`);

// Sau khi đổi, tìm những tổ hợp câu còn thiếu dòng danh mục (Bài 1 chưa từng có).
const { data: dmSau } = await sb.from('question_categories').select('topic, lesson, math_form')
  .eq('grade', '12').eq('subject', 'Đại số');
const dmSet = new Set(dmSau.map(r => [r.topic, r.lesson, r.math_form].join('¦')));
const { data: chDay } = await sb.from('questions').select('topic, lesson, math_form')
  .eq('grade', '12').eq('subject', 'Giải tích');
const thieuDong = new Map();
for (const q of chDay) {
  const k = [q.topic, q.lesson, q.math_form].join('¦');
  if (dmSet.has(k)) continue;
  if (!thieuDong.has(k)) thieuDong.set(k, { grade: '12', subject: 'Đại số', topic: q.topic, lesson: q.lesson, math_form: q.math_form, soCau: 0 });
  thieuDong.get(k).soCau++;
}
console.log(`\n=== THÊM DÒNG DANH MỤC CÒN THIẾU: ${thieuDong.size} dòng ===`);
for (const d of thieuDong.values()) console.log(`  ${d.soCau} câu · ${d.lesson} | ${d.math_form}`);

if (!GHI) { console.log('\n(xem trước - thêm --sua để ghi)'); process.exit(0); }

const thuMuc = path.join(GOC, 'backups', 'sua-giai-tich-vs-dai-so-20260825');
fs.mkdirSync(thuMuc, { recursive: true });
fs.writeFileSync(path.join(thuMuc, 'questions-truoc-khi-sua.json'), JSON.stringify(ch, null, 2));
fs.writeFileSync(path.join(thuMuc, 'question_categories-truoc-khi-sua.json'), JSON.stringify(dmLa, null, 2));

let xongCH = 0;
for (const q of ch) {
  const { data, error } = await sb.from('questions').update({ subject: 'Đại số' }).eq('question_id', q.question_id).select('question_id');
  if (error) { console.error(`  LỖI ${q.question_id}: ${error.message}`); continue; }
  if (!data?.length) { console.error(`  KHÔNG GHI ĐƯỢC ${q.question_id}`); continue; }
  xongCH++;
}
console.log(`questions: đổi Phân môn ${xongCH}/${ch.length}`);

let xongDM = 0;
for (const r of dmLa) {
  const { data, error } = await sb.from('question_categories').update({ subject: 'Đại số' }).eq('id', r.id).select('id');
  if (error) { console.error(`  LỖI ${r.id}: ${error.message}`); continue; }
  if (!data?.length) { console.error(`  KHÔNG GHI ĐƯỢC ${r.id}`); continue; }
  xongDM++;
}
console.log(`question_categories: đổi Phân môn ${xongDM}/${dmLa.length}`);

if (thieuDong.size > 0) {
  const { error } = await sb.from('question_categories').insert([...thieuDong.values()].map(({ soCau, ...d }) => d));
  if (error) console.error('LỖI thêm danh mục: ' + error.message);
  else console.log(`question_categories: thêm ${thieuDong.size} dòng`);
}
console.log('\nĐÃ GHI THẬT. Bản sao lưu: ' + thuMuc);
