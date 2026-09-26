import { readFileSync } from 'fs';
const kho = JSON.parse(readFileSync('scratch/kho-ly12c3.json', 'utf8'));
const in1 = (q) => console.log(JSON.stringify({ id: q.question_id, type: q.question_type, muc: q.difficulty, content: q.content.slice(0, 400), a: q.option_a, b: q.option_b, c: q.option_c, d: q.option_d, dap: q.correct_answer, giai: String(q.explanation||'').slice(0, 200) }, null, 1));
for (const t of ['DS', 'TLN', 'NLC']) { console.log(`\n##### ${t}`); kho.filter(q => q.question_type === t).slice(0, 2).forEach(in1); }
// DS layouts
const ds = kho.filter(q => q.question_type === 'DS');
const loiB = ds.filter(q => [q.option_a,q.option_b,q.option_c,q.option_d].every(x => String(x||'').trim()));
console.log(`\nDS: ${ds.length} · lối option_a..d: ${loiB.length} · đáp án mẫu:`, [...new Set(ds.map(q => q.correct_answer))].slice(0, 8));
console.log('TLN đáp án mẫu:', kho.filter(q => q.question_type === 'TLN').slice(0, 15).map(q => q.correct_answer));
console.log('thiếu đáp án:', kho.filter(q => !String(q.correct_answer||'').trim()).map(q => `${q.question_id}/${q.question_type}`).join(' '));
