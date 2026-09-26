import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('question_id,topic,lesson,math_form,question_type,difficulty,content,created_at').like('question_id', 'CH_17879397015%').order('question_id');
console.log('lô CH_17879397015…:', data.length, 'câu · tạo', data[0]?.created_at?.slice(0, 16));
const dem = {};
for (const q of data) { const k = `${q.topic} / ${q.lesson} / ${q.math_form}`; (dem[k] ||= []).push(q); }
for (const [k, v] of Object.entries(dem).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${v.length} câu · ${k}`);
  for (const q of v.slice(0, 3)) console.log(`     ${q.question_id} · ${q.content.replace(/\s+/g, ' ').slice(0, 90)}`);
}
