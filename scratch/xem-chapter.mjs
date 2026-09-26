import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('chapters').select('*').eq('course_id', '8486e14a-17c8-4f41-80b4-ea381a2c0a25').order('order_index');
console.log(JSON.stringify(data, null, 1));
const { data: ls } = await sb.from('lessons').select('*').eq('chapter_id', data[1].id).order('order_index').limit(2);
console.log(JSON.stringify(ls, null, 1));
