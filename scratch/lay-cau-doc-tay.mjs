/* Lấy 47 câu lô nhiệt kế đang sai chương + 28 câu chưa có bài + 4 cặp trùng đang dùng, in ra để đọc tay. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const lay = async (b, c = '*') => { let r = [], f = 0; while (true) { const { data } = await sb.from(b).select(c).range(f, f + 999); r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const kho = await lay('questions');
const dm = await lay('question_categories');
const S = (x) => String(x ?? '').trim();
const gon = (t, n = 260) => S(t).replace(/!\[[^\]]*\]\([^)]*\)/g, '[ảnh]').replace(/\s+/g, ' ').slice(0, n);

console.log('=== DANH MỤC CHƯƠNG 1 (đích để gán) ===');
for (const c of dm.filter(c => /Chương 1/.test(c.topic)).sort((a, b) => (a.lesson + a.math_form).localeCompare(b.lesson + b.math_form)))
  console.log(`  ${c.lesson || '(không bài)'} | ${c.math_form}`);

const loNK = kho.filter(q => q.question_id.startsWith('CH_17879397015') && !/^Bài 3\./.test(S(q.lesson)));
console.log(`\n=== LÔ NHIỆT KẾ SAI CHƯƠNG: ${loNK.length} câu ===`);
for (const q of loNK) console.log(`\n[${q.question_id}] ${q.question_type} m${q.difficulty} · đang: ${q.topic.slice(0, 9)}/${S(q.lesson).slice(0, 7)}\n  ${gon(q.content)}${q.option_a ? '\n  A. ' + gon(q.option_a, 70) + ' | B. ' + gon(q.option_b, 70) : ''}`);

const khongBai = kho.filter(q => !S(q.lesson));
console.log(`\n=== CHƯA CÓ BÀI: ${khongBai.length} câu ===`);
for (const q of khongBai) console.log(`\n[${q.question_id}] ${q.question_type} m${q.difficulty} · dạng đang gắn: ${q.math_form}\n  ${gon(q.content)}${q.option_a ? '\n  A. ' + gon(q.option_a, 70) : ''}`);

const mods = await lay('lesson_modules', 'id,title,lesson_id,content_markdown');
const lessons = await lay('lessons', 'id,title');
const dungO = {};
for (const m of mods) for (const x of (m.content_markdown || '').matchAll(/"sourceQuestionId":\s*"([^"]+)"/g)) (dungO[x[1]] ||= []).push(`${lessons.find(l => l.id === m.lesson_id)?.title.slice(0, 12)}/${m.title}`);
const chuan = (t) => S(t).toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:!?]/g, '');
const nhom = {};
for (const q of kho) (nhom[chuan(q.content) + '|' + chuan(q.option_a)] ||= []).push(q);
console.log('\n=== CẶP TRÙNG ĐANG DÙNG ===');
for (const g of Object.values(nhom).filter(g => g.length > 1)) {
  console.log('\n  ' + gon(g[0].content, 100));
  for (const q of g) console.log(`     ${q.question_id} · ${S(q.lesson).slice(0, 8)} · dùng ở: ${(dungO[q.id] || ['—']).join(', ')}`);
}
writeFileSync('scratch/cau-doc-tay.json', JSON.stringify({ loNK: loNK.map(q => q.question_id), khongBai: khongBai.map(q => q.question_id) }, null, 1));
