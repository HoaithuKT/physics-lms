import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
let kho = [], f = 0; while (true) { const { data } = await sb.from('questions').select('*').range(f, f + 999); kho.push(...data); if (data.length < 1000) break; f += 1000; }
const RE = /\n(?!eq\b|e\b|abla\b|u\b|ot\b|ewline\b)/;
const con = kho.filter(q => ['content', 'explanation', 'option_a', 'option_b', 'option_c', 'option_d'].some(c => RE.test(String(q[c] || ''))));
console.log('còn:', con.length);
for (const q of con.slice(0, 3)) { for (const c of ['content', 'explanation', 'option_a', 'option_b', 'option_c', 'option_d']) { const t = String(q[c] || ''); const i = t.search(RE); if (i >= 0) console.log(q.question_id, c, JSON.stringify(t.slice(Math.max(0, i - 30), i + 30))); } }
