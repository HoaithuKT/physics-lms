import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
let kho = [], from = 0;
while (true) { const { data } = await sb.from('questions').select('*').eq('grade', '12').ilike('topic', '%Từ trường%').range(from, from + 999); kho.push(...(data||[])); if (!data || data.length < 1000) break; from += 1000; }
writeFileSync('scratch/kho-ly12c3.json', JSON.stringify(kho, null, 1));
console.log('Tổng câu chương 3:', kho.length, '· topic:', [...new Set(kho.map(q => q.topic))]);
const bai = [...new Set(kho.map(q => q.lesson))].sort();
for (const b of bai) {
  const qs = kho.filter(q => q.lesson === b);
  const loai = {}; const muc = {};
  for (const q of qs) { loai[q.question_type] = (loai[q.question_type]||0)+1; muc[q.difficulty] = (muc[q.difficulty]||0)+1; }
  console.log(`\n${b}: ${qs.length} câu · ${JSON.stringify(loai)} · mức ${JSON.stringify(muc)}`);
  const dang = [...new Set(qs.map(q => q.math_form))];
  for (const d of dang) { const x = qs.filter(q => q.math_form === d); const l2 = {}; for (const q of x) l2[q.question_type] = (l2[q.question_type]||0)+1; console.log(`   ${String(x.length).padStart(3)}  ${d}  ${JSON.stringify(l2)}`); }
}
console.log('\nthiếu đáp án:', kho.filter(q => !String(q.correct_answer||'').trim()).length, '· có ảnh:', kho.filter(q => q.image_url).length);
