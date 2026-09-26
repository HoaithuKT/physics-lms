/* In đầy đủ các câu còn lại chờ sửa tay: 18 mất hình, 16 TLN đáp án không tô được, 4 NLC trùng phương án, 1 DS, 2 thiếu $, 14 danh mục rỗng. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const lay = async (b, c = '*') => { let r = [], f = 0; while (true) { const { data } = await sb.from(b).select(c).range(f, f + 999); r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const kho = await lay('questions');
const dm = await lay('question_categories');
const S = (x) => String(x ?? '').trim();
const in1 = (q, n = 500) => {
  console.log(`\n[${q.question_id}] ${q.question_type} m${q.difficulty} · ${S(q.lesson).slice(0, 8)} · ${q.math_form}`);
  console.log('  ĐỀ: ' + S(q.content).replace(/\n/g, ' ⏎ ').slice(0, n));
  if (S(q.option_a)) console.log(`  A. ${S(q.option_a)}\n  B. ${S(q.option_b)}\n  C. ${S(q.option_c)}\n  D. ${S(q.option_d)}`);
  console.log(`  ĐÁP ÁN: ${JSON.stringify(q.correct_answer)}`);
  console.log('  GIẢI: ' + S(q.explanation).replace(/\n/g, ' ⏎ ').slice(0, n));
};

console.log('════ 1. NHẮC HÌNH MÀ KHÔNG CÓ ẢNH (kiểm cả phương án) ════');
const matHinh = kho.filter(q => /hình (vẽ|bên|dưới|sau|\d)|đồ thị (bên|dưới|sau|hình)|như hình/i.test(S(q.content)) && !q.image_url && !/!\[/.test(S(q.content)));
for (const q of matHinh) { const anhPA = ['option_a', 'option_b', 'option_c', 'option_d'].filter(k => /!\[/.test(S(q[k]))).length; console.log(`  ${q.question_id} · ảnh trong phương án: ${anhPA} · ${S(q.content).slice(0, 70)}`); }
in1(matHinh[0]);

console.log('\n════ 2. TLN ĐÁP ÁN KHÔNG TÔ ĐƯỢC ════');
for (const q of kho.filter(q => q.question_type === 'TLN' && (!/^-?\d+([.,]\d+)?$/.test(S(q.correct_answer)) || S(q.correct_answer).replace(/[.,-]/g, '').length > 4))) in1(q, 420);

console.log('\n════ 3. NLC HAI PHƯƠNG ÁN GIỐNG NHAU ════');
for (const q of kho.filter(q => q.question_type === 'NLC' && new Set(['option_a', 'option_b', 'option_c', 'option_d'].map(k => S(q[k]).toLowerCase())).size < 4)) in1(q, 700);

console.log('\n════ 4. DS ĐÁP ÁN "SSĐ" ════');
for (const q of kho.filter(q => q.question_type === 'DS' && !/^[ĐS]{4}$/.test(S(q.correct_answer)))) in1(q, 1200);

console.log('\n════ 5. THIẾU DẤU $ ════');
for (const q of kho.filter(q => [S(q.content), S(q.explanation)].some(t => (t.replace(/\$\$/g, '').match(/\$/g) || []).length % 2 === 1))) { in1(q, 1500); }

console.log('\n════ 6. DANH MỤC RỖNG ════');
const khoaKho = new Set(kho.map(q => `${q.grade}|${q.topic}|${q.lesson}|${q.math_form}`));
for (const c of dm.filter(c => !khoaKho.has(`${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`))) console.log(`  ${c.id} · ${c.topic.slice(0, 10)} · ${S(c.lesson).slice(0, 8)} · ${c.math_form}`);
