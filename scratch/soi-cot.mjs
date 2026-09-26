import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('*').limit(1);
console.log(Object.keys(data[0]).join(', '));
const { count } = await sb.from('questions').select('id', { count: 'exact', head: true });
console.log('tổng câu:', count);
const { data: c } = await sb.from('question_categories').select('*').eq('grade', '12').eq('topic', 'Chương 3. Từ trường');
console.log(c.length, 'danh mục chương 3');
for (const x of c) console.log(`  ${x.lesson} | ${x.math_form} | ${x.id}`);
