import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions')
  .select('question_id, grade, content, option_a, option_b, option_c, option_d, correct_answer, topic, lesson, math_form, difficulty, question_type')
  .eq('question_type','NLC').not('content','is',null).limit(60);
const q = (data||[]).find(x => (x.content||'').length > 70 && (x.content||'').length < 240 && !/!\[/.test(x.content||'') && x.option_a);
console.log(JSON.stringify(q, null, 1));
