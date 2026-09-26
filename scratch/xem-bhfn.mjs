import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('question_id,explanation,content,option_a,option_b,option_c,option_d').in('question_id', ['CH_1787549492341_bhfn', 'CH_1787130555318_ceix', 'CH_1787135757516_p7ka']);
for (const q of data) console.log('\n' + q.question_id + '\n' + q.explanation.slice(-400));
const anh = await sb.from('questions').select('question_id,option_a,option_b,option_c,option_d').like('option_a', '%![%');
const urls = anh.data.flatMap(q => ['option_a','option_b','option_c','option_d'].flatMap(k => [...String(q[k]||'').matchAll(/\((https?:[^)]+)\)/g)].map(m => m[1])));
let hong = 0; for (const u of urls) { const r = await fetch(u, { method: 'HEAD' }); if (!r.ok) hong++; }
console.log('\nảnh trong phương án:', urls.length, 'hỏng:', hong);
