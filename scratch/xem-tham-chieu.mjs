import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
for (const b of ['bo_de_thi', 'online_exams', 'remedial_exams', 'ban_nhap_soan']) {
  const { data, error } = await sb.from(b).select('*').limit(1);
  console.log(b, error ? error.message : `${data.length} dòng · cột: ${Object.keys(data[0] || {}).join(', ')}`);
  const { count } = await sb.from(b).select('id', { count: 'exact', head: true });
  console.log('   tổng:', count);
}
const { data: q } = await sb.from('questions').select('subject').limit(3);
console.log('subject mẫu:', q.map(x => x.subject));
