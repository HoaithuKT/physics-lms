import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const lay = async (b, c) => { let r = [], f = 0; while (true) { const { data } = await sb.from(b).select(c).range(f, f + 999); r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const q = await lay('questions', 'subject,grade,lesson,math_form');
const c = await lay('question_categories', 'subject,grade,lesson,math_form,created_at,id');
const dem = (a, f) => { const d = {}; for (const x of a) d[f(x)] = (d[f(x)] || 0) + 1; return d; };
console.log('subject câu:', JSON.stringify(dem(q, x => JSON.stringify(x.subject))));
console.log('subject danh mục:', JSON.stringify(dem(c, x => JSON.stringify(x.subject))));
console.log('grade danh mục:', JSON.stringify(dem(c, x => JSON.stringify(x.grade))));
for (const x of c.filter(x => /Quy đổi thang|Tính công suất tỏa/.test(x.math_form))) console.log(JSON.stringify(x));
