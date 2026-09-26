import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('question_categories').select('grade, subject');
const mon = [...new Set((data||[]).map(x => x.subject).filter(Boolean))];
const lop = [...new Set((data||[]).map(x => x.grade).filter(Boolean))].sort();
console.log('phân môn:', JSON.stringify(mon));
console.log('lớp     :', JSON.stringify(lop));
