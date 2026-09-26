import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('math_form,lesson,topic').eq('grade', '12').ilike('lesson', 'Bài 3.%');
const dem = {}; for (const q of data) dem[`${q.topic} | ${q.lesson} | ${q.math_form}`] = (dem[`${q.topic} | ${q.lesson} | ${q.math_form}`] || 0) + 1;
for (const [k, v] of Object.entries(dem)) console.log(v, k);
const { data: c } = await sb.from('question_categories').select('id,topic,lesson,math_form').eq('grade', '12').ilike('lesson', 'Bài 3.%');
console.log('danh mục:', c.map(x => x.math_form));
