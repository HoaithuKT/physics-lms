/* Đo nốt mấy con số cần cho báo cáo: TLN thực ra là NLC, DS trống đáp án có rút được từ lời giải
   không, câu trùng có bản nào đang được bài giảng dùng, và cách lệch tên bài. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const lay = async (b, c = '*') => { let r = [], f = 0; while (true) { const { data } = await sb.from(b).select(c).range(f, f + 999); r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const kho = await lay('questions');
const mods = await lay('lesson_modules', 'id,title,content_markdown');
const S = (x) => String(x ?? '').trim();

/* TLN mà có 4 phương án và đáp án là chữ cái → thực ra là NLC */
const tlnLaNlc = kho.filter(q => q.question_type === 'TLN' && /^[A-D]$/i.test(S(q.correct_answer)) && ['option_a', 'option_b', 'option_c', 'option_d'].every(k => S(q[k])));
console.log(`TLN thực ra là NLC (4 phương án + đáp án chữ cái): ${tlnLaNlc.length}`);
console.log('   lô tạo:', [...new Set(tlnLaNlc.map(q => q.question_id.slice(0, 16)))].join(' '));

/* Ngược lại: NLC không có phương án nào và đáp án là số → thực ra là TLN */
const nlcLaTln = kho.filter(q => q.question_type === 'NLC' && ['option_a', 'option_b', 'option_c', 'option_d'].every(k => !S(q[k])));
console.log(`NLC không có phương án nào: ${nlcLaTln.length}`);

/* DS trống đáp án: lời giải có ghi "a) Đúng ... d) Sai" không? */
const dsTrong = kho.filter(q => q.question_type === 'DS' && !/^[ĐS]{4}$/.test(S(q.correct_answer)));
for (const q of dsTrong) {
  const g = S(q.explanation);
  const y = ['a', 'b', 'c', 'd'].map(k => { const m = g.match(new RegExp(`(?:^|\\n)\\s*${k}\\)\\s*(Đúng|Sai|Đ\\b|S\\b)`, 'i')); return m ? (/^Đ/i.test(m[1]) ? 'Đ' : 'S') : '?'; }).join('');
  const tuDapAn = S(q.correct_answer).replace(/[^ĐS]/g, '');
  console.log(`   ${q.question_id} · đáp án "${S(q.correct_answer)}" → từ lời giải: ${y}${tuDapAn.length === 4 ? ' · từ đáp án: ' + tuDapAn : ''}`);
}

/* Câu trùng: bản nào đang được bài giảng/đề dùng (sourceQuestionId)? */
const dung = new Set();
for (const m of mods) for (const x of (m.content_markdown || '').matchAll(/"sourceQuestionId":\s*"([^"]+)"/g)) dung.add(x[1]);
const chuan = (t) => S(t).toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:!?]/g, '');
const nhom = {};
for (const q of kho) (nhom[chuan(q.content) + '|' + chuan(q.option_a)] ||= []).push(q);
const trung = Object.values(nhom).filter(g => g.length > 1);
let caHaiDung = 0, khongDung = 0, mucKhac = 0, baiKhac = 0;
for (const g of trung) {
  const d = g.filter(q => dung.has(q.id)).length;
  if (d >= 2) caHaiDung++; if (d === 0) khongDung++;
  if (new Set(g.map(q => q.difficulty)).size > 1) mucKhac++;
  if (new Set(g.map(q => q.lesson)).size > 1) baiKhac++;
}
console.log(`\nCâu trùng: ${trung.length} nhóm · cả hai bản đều đang được bài giảng dùng: ${caHaiDung} · không bản nào được dùng: ${khongDung} · hai bản khác mức: ${mucKhac} · khác bài: ${baiKhac}`);
for (const g of trung.slice(0, 5)) console.log(`   ${g.map(q => `${q.question_id}(${q.lesson?.slice(0, 7)}/m${q.difficulty}${dung.has(q.id) ? '/đang dùng' : ''})`).join('  ≈  ')}`);

/* Chuỗi "\n" hai kí tự thật (không phải \neq) */
const bsn = kho.filter(q => /\\n(?!eq\b|e\b|abla\b|u\b|ot\b)/.test(S(q.content) + S(q.explanation) + S(q.option_a) + S(q.option_b)));
console.log(`\nChuỗi "\\n" hai kí tự thật: ${bsn.length} · lô:`, [...new Set(bsn.map(q => q.question_id.slice(0, 16)))].join(' '));

/* Mức 4 hiếm: */
console.log(`\nMức 4 cả kho: ${kho.filter(q => S(q.difficulty) === '4').length} · theo chương:`, JSON.stringify(Object.fromEntries([...new Set(kho.map(q => q.topic))].map(t => [t.slice(0, 12), kho.filter(q => q.topic === t && S(q.difficulty) === '4').length]))));
