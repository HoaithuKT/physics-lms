// Lấy vài địa chỉ ảnh hình vẽ thật trong kho, để thử cho AI vẽ lại bằng SVG.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const nap = async () => { const ra = [];
  for (let p = 0; ; p++) {
    const { data } = await sb.from('questions')
      .select('question_id, lesson, math_form, content, image_url').range(p * 1000, p * 1000 + 999);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  } return ra; };

const kho = await nap();
const anh = [];
for (const q of kho) {
  const ds = [];
  if (String(q.image_url || '').startsWith('http')) ds.push(q.image_url);
  for (const m of String(q.content || '').matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)) ds.push(m[1]);
  for (const u of ds) anh.push({ q: q.question_id, lesson: q.lesson, url: u });
}
const tuCat = anh;
console.log(`${anh.length} ảnh trong kho, ${tuCat.length} ảnh do AI tự cắt.\n`);
console.log('Vài ảnh tự cắt để thử:');
tuCat.slice(0, 4).forEach(a => console.log(`  ${a.lesson}\n    ${a.url}`));
