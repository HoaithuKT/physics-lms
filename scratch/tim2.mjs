// Tim mot bai giang Ly co san noi dung ly thuyet de vao kiem trinh soan.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);


const { data } = await sb.from('lesson_modules').select('id, lesson_id, title, type, content_markdown').limit(300);
const loai = {};
for (const m of data || []) loai[m.type || '(trong)'] = (loai[m.type || '(trong)'] || 0) + 1;
console.log('cac loai muc:', JSON.stringify(loai));
const giang = (data || []).filter(m => (m.content_markdown || '').length > 2000 && !/luyện tập|tự luyện|đề /i.test(m.title || ''));
console.log('so muc bai giang dai:', giang.length);
for (const m of giang.slice(0, 6)) console.log(`  ${(m.content_markdown||'').length} | ${m.type} | ${m.title} | lessonId=${m.lesson_id} moduleId=${m.id}`);
