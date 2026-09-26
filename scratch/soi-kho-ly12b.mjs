import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
let cats = [], from = 0;
while (true) { const { data } = await sb.from('question_categories').select('*').range(from, from + 999); cats.push(...(data||[])); if (!data || data.length < 1000) break; from += 1000; }
const g12 = cats.filter(c => String(c.grade) === '12');
const topics = [...new Set(g12.map(c => c.topic))];
console.log('Chủ đề lớp 12:', topics);
// đếm câu theo danh mục
const dem = {};
from = 0;
while (true) {
  const { data } = await sb.from('questions').select('id,category_id,question_type,difficulty').range(from, from + 999);
  for (const q of data || []) { const c = cats.find(x => x.id === q.category_id); if (!c || String(c.grade) !== '12') continue; const k = `${c.topic}|||${c.lesson}`; (dem[k] ||= { n: 0, loai: {}, muc: {}, dang: new Set() }); dem[k].n++; dem[k].loai[q.question_type] = (dem[k].loai[q.question_type]||0)+1; dem[k].muc[q.difficulty] = (dem[k].muc[q.difficulty]||0)+1; dem[k].dang.add(c.math_form); }
  if (!data || data.length < 1000) break; from += 1000;
}
for (const t of topics) {
  console.log(`\n## ${t}`);
  for (const [k, v] of Object.entries(dem).filter(([k]) => k.startsWith(t + '|||'))) {
    console.log(`  ${k.split('|||')[1]}: ${v.n} câu · ${JSON.stringify(v.loai)} · mức ${JSON.stringify(v.muc)} · ${v.dang.size} dạng`);
    for (const d of v.dang) console.log(`       - ${d}`);
  }
}
