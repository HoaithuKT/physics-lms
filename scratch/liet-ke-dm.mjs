import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('question_categories').select('id,topic,lesson,math_form').order('topic').order('lesson').order('math_form');
writeFileSync('scratch/dm-ly.json', JSON.stringify(data, null, 1));
let cur = '';
for (const c of data) { const k = `${c.topic} / ${c.lesson}`; if (k !== cur) { cur = k; console.log('\n## ' + k); } console.log(`- ${c.id.slice(0, 8)} | ${c.math_form}`); }
