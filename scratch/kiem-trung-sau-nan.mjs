import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const nanTen = (s) => String(s ?? '').replace(/\$\{\{([\s\S]*?)\}\}\$/g, '$$$1$$');
const { data: tatCa } = await sb.from('question_categories')
  .select('id, grade, subject, topic, lesson, math_form');
const data = tatCa.filter(r => String(r.math_form).includes('${{'));
const dem = new Map();
for (const r of data) {
  const k = [r.grade, r.subject, r.topic, r.lesson, nanTen(r.math_form)].join('¦');
  dem.set(k, [...(dem.get(k) || []), r.id]);
}
const trung = [...dem.entries()].filter(([, v]) => v.length > 1);
console.log(`${data.length} dòng hỏng -> ${dem.size} khoá sau khi nắn, ${trung.length} khoá bị đôi.`);
trung.forEach(([k, v]) => console.log('  ' + v.join(', ') + '  ' + k));
