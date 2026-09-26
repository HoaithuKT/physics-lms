/*
 * Thử phần phân bổ: đưa vài câu thật của nhiều chương khác nhau cho AI, xem nó có xếp
 * mỗi câu về đúng Chương/Bài/Dạng CÓ TRONG danh mục không, hay lại bịa nhánh mới.
 * Chỉ đọc, không ghi gì.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const GOC = process.env.GOC_APP || 'D:/claude/math-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const KHOA = env.GEMINI_API_KEY_1 || env.GEMINI_API_KEY;
const LOP = process.env.LOP || '12';
const MON = process.env.MON || 'Đại số';

const chuanTen = (s) => String(s || '')
  .replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd')
  .toLowerCase().replace(/\s+/g, ' ').replace(/^[\s.,;:]+|[\s.,;:]+$/g, '');

const { data: dm } = await sb.from('question_categories')
  .select('topic, lesson, math_form').eq('grade', LOP).eq('subject', MON);

const cay = new Map();
for (const d of dm) {
  if (!d.topic?.trim() || !d.lesson?.trim()) continue;
  if (!cay.has(d.topic)) cay.set(d.topic, new Map());
  const b = cay.get(d.topic);
  if (!b.has(d.lesson)) b.set(d.lesson, new Set());
  if (d.math_form) b.get(d.lesson).add(d.math_form);
}
const cayChu = [...cay.entries()].map(([c, bs], i) =>
  `CHƯƠNG ${i + 1}: ${c}\n` + [...bs.entries()].map(([b, ds]) =>
    `  BÀI: ${b}\n` + [...ds].map(d => `    - ${d}`).join('\n')).join('\n')).join('\n');

// Lấy câu thật từ NHIỀU chương khác nhau, giả lập một đề kiểm tra
const cauThu = [];
for (const chuong of [...cay.keys()].slice(0, 4)) {
  const { data } = await sb.from('questions')
    .select('question_id, content, topic, lesson, math_form')
    .eq('grade', LOP).eq('subject', MON).eq('topic', chuong).limit(2);
  (data || []).forEach(q => cauThu.push(q));
}
console.log(`Danh mục lớp ${LOP} ${MON}: ${cay.size} chương, ${dm.length} dòng.`);
console.log(`Lấy ${cauThu.length} câu thật từ ${new Set(cauThu.map(c => c.topic)).size} chương khác nhau.\n`);

const LOI_DAN = `Bạn là giáo viên đang sắp xếp câu hỏi vào ngân hàng đề.

DANH MỤC HIỆN CÓ (lớp ${LOP}, phân môn ${MON}) - đây là DANH SÁCH ĐÓNG:
${cayChu}

NHIỆM VỤ: với TỪNG câu hỏi dưới đây, xếp nó về đúng một nhánh trong danh mục trên.

QUY TẮC BẮT BUỘC:
1. "topic" và "lesson" PHẢI chép NGUYÊN VĂN từ danh mục trên. TUYỆT ĐỐI không tự đặt tên
   chương hay bài mới, không ghi những thứ như "Bài kiểm tra", "Giữa kỳ I", "Đề số 1".
2. Mỗi câu xếp về đúng bài mà kiến thức của câu đó thuộc về. Tài liệu này là một ĐỀ THI
   nên các câu THƯỜNG THUỘC NHIỀU CHƯƠNG KHÁC NHAU - đừng dồn hết vào một bài.
3. "math_form" ưu tiên chọn trong danh sách dạng của đúng bài đó, đặt "dangMoi": false.
   Chỉ khi thật sự không dạng nào hợp thì mới tự đặt tên dạng mới và đặt "dangMoi": true.
4. "difficulty" chọn đúng một trong: Nhận biết | Thông hiểu | Vận dụng | Vận dụng cao.
5. "id" chép nguyên văn. Phải trả về ĐỦ ${cauThu.length} câu.

CÁC CÂU HỎI:

${cauThu.map((q, i) => `--- CÂU ${i + 1} (id: ${q.question_id}) ---\n${String(q.content).replace(/\s+/g, ' ').slice(0, 700)}`).join('\n\n')}`;

const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${KHOA}`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ contents: [{ parts: [{ text: LOI_DAN }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.2 } }),
});
const data = await res.json();
if (!res.ok) { console.error('LỖI: ' + JSON.stringify(data).slice(0, 300)); process.exit(1); }
const tho = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
let ra = [];
try { ra = JSON.parse((tho.match(/\[[\s\S]*\]/) || ['[]'])[0]); } catch { console.error('Khong doc duoc JSON'); process.exit(1); }

const traC = new Map([...cay.keys()].map(c => [chuanTen(c), c]));
let khop = 0, bia = 0, dungChuong = 0, dangMoi = 0;
console.log('KẾT QUẢ:');
for (const r of ra) {
  const goc = cauThu.find(c => c.question_id === r.id);
  const c = traC.get(chuanTen(r.topic));
  const b = c ? [...cay.get(c).keys()].find(x => chuanTen(x) === chuanTen(r.lesson)) : null;
  const dsD = b ? cay.get(c).get(b) : null;
  const dKhop = dsD ? [...dsD].find(x => chuanTen(x) === chuanTen(r.math_form)) : null;
  if (!c || !b) { bia++; console.log(`  BỊA   ${r.topic} | ${r.lesson}`); continue; }
  khop++;
  if (!dKhop) dangMoi++;
  const dungC = goc && chuanTen(goc.topic) === chuanTen(c);
  if (dungC) dungChuong++;
  console.log(`  ${dungC ? 'ĐÚNG CHƯƠNG' : 'khác chương  '} · ${dKhop ? 'dạng có sẵn' : 'DẠNG MỚI   '} · ${b.slice(0, 34)} | ${String(r.math_form).slice(0, 40)}`);
}
console.log(`\n${khop}/${ra.length} câu xếp vào nhánh CÓ THẬT, ${bia} câu bịa nhánh mới.`);
console.log(`${dungChuong}/${khop} câu về đúng chương gốc của nó. ${dangMoi} câu phải đề xuất dạng mới.`);
