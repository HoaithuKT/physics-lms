import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('questions')
  .select('math_form, question_type, difficulty, content')
  .like('content', '%$%').limit(400);
const dem = new Map();
for (const q of data || []) {
  const k = `${q.math_form}||${q.question_type}||${q.difficulty}`;
  dem.set(k, (dem.get(k) || 0) + 1);
}
console.log(`Có ${data?.length || 0} câu chứa công thức. Nhóm nhiều nhất:`);
[...dem.entries()].sort((a,b)=>b[1]-a[1]).slice(0,4).forEach(([k,n]) => {
  const [f,t,d] = k.split('||');
  console.log(`  ${n} câu | dạng="${f}" loại=${t} mức=${d}`);
});
const mau = (data||[]).find(q => /\frac|\^|_\{/.test(q.content));
console.log('\nví dụ nội dung:', String(mau?.content||'').replace(/\s+/g,' ').slice(0,150));
