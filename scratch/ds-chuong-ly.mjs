import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data: kh } = await sb.from('courses').select('id,title').order('title');
for (const k of kh) {
  console.log(`\n## ${k.title} (${k.id})`);
  const { data: ch } = await sb.from('chapters').select('id,title,loai,order_index').eq('course_id', k.id).order('order_index');
  for (const c of ch || []) {
    const { data: ls } = await sb.from('lessons').select('id,title').eq('chapter_id', c.id).order('order_index');
    console.log(`  [${c.loai || '-'}] ${c.title}`);
    for (const l of ls || []) console.log(`       - ${l.title}  (${l.id})`);
  }
}
