// Tim mot bai giang Ly co san noi dung ly thuyet de vao kiem trinh soan.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data, error } = await sb
  .from('lesson_modules')
  .select('id, lesson_id, title, content_markdown')
  .not('content_markdown', 'is', null)
  .limit(60);
if (error) { console.log('LOI:', error.message); process.exit(1); }

const co = (data || [])
  .map(m => ({ ...m, dai: (m.content_markdown || '').length }))
  .filter(m => m.dai > 1500)
  .sort((a, b) => b.dai - a.dai);

console.log('so muc co noi dung dai:', co.length);
for (const m of co.slice(0, 5)) {
  console.log(`  ${m.dai} ky tu | ${m.title} | lessonId=${m.lesson_id} moduleId=${m.id}`);
}
// Bai nao co the HTML go tay (de thu nut Don the) va co anh
const coThe = co.filter(m => /<span|<div/.test(m.content_markdown));
console.log('\nso muc co the HTML go tay:', coThe.length);
if (coThe[0]) console.log(`  ${coThe[0].title} | lessonId=${coThe[0].lesson_id} moduleId=${coThe[0].id}`);
const coCT = co.filter(m => /CÔNG THỨC CẦN NHỚ/.test(m.content_markdown));
console.log('so muc da co muc CONG THUC CAN NHO:', coCT.length);
