// Những tên dạng chỉ khác nhau dấu chấm cuối hoặc cặp ngoặc thừa quanh công thức.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('question_categories').select('grade, subject, topic, lesson, math_form');

// Bỏ dấu chấm cuối, bỏ ngoặc nhọn thừa quanh công thức, gộp khoảng trắng
const gon = (s) => String(s ?? '').replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .replace(/\s+/g, ' ').replace(/[.\s]+$/, '').toLowerCase();

const nhom = new Map();
for (const r of data) {
  const k = [r.grade, r.subject, r.lesson, gon(r.math_form)].join('¦');
  nhom.set(k, [...(nhom.get(k) || []), r.math_form]);
}
const trung = [...nhom.values()].filter(v => new Set(v).size > 1);
console.log(`${data.length} dòng danh mục -> ${trung.length} nhóm tên gần trùng:\n`);
for (const v of trung) [...new Set(v)].forEach((t, i) => console.log(`  ${i === 0 ? '·' : ' '} ${t}`));
