import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions').select('*').in('question_id', process.argv.slice(2));
for (const q of data) {
  console.log(`\n[${q.question_id}] ${q.question_type} · ${q.lesson?.slice(0, 8)}\n  ĐỀ: ${q.content.replace(/\n/g, ' ⏎ ').slice(0, 600)}\n  ĐÁP ÁN: ${JSON.stringify(q.correct_answer)}\n  GIẢI: ${q.explanation.replace(/\n/g, ' ⏎ ').slice(-500)}`);
}
