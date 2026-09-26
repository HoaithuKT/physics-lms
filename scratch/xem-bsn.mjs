import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('question_id,content,explanation,option_a').like('question_id', 'CH_1787055570428%').limit(2);
for (const q of data) { const t = q.content + q.explanation + q.option_a; const i = t.search(/\n(?!eq\b|e\b|abla\b|u\b|ot\b)/); console.log(q.question_id, JSON.stringify(t.slice(Math.max(0, i - 40), i + 40))); }
