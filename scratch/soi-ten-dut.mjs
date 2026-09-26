// Đếm những tên chương/bài/dạng có chứa "${{" - chuỗi làm tường lửa chặn cả truy vấn.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const napHet = async (bang, cot) => {
  const ra = [];
  for (let p = 0; ; p++) {
    const { data, error } = await sb.from(bang).select(cot).range(p * 1000, p * 1000 + 999);
    if (error) { console.error(bang, error.message); break; }
    if (!data?.length) break;
    ra.push(...data); if (data.length < 1000) break;
  }
  return ra;
};

const DUT = '${{';
const COT = ['topic', 'lesson', 'math_form'];

for (const bang of ['question_categories', 'questions']) {
  const khoa = bang === 'questions' ? 'question_id, grade, subject, ' : 'id, grade, subject, ';
  const rows = await napHet(bang, khoa + COT.join(', '));
  const dinh = rows.filter(r => COT.some(c => String(r[c] ?? '').includes(DUT)));
  console.log(`\n=== ${bang}: ${rows.length} dòng, ${dinh.length} dòng dính "\${{" ===`);
  const ten = new Map();
  for (const r of dinh) for (const c of COT) {
    const v = String(r[c] ?? '');
    if (v.includes(DUT)) ten.set(c + ' | ' + v, (ten.get(c + ' | ' + v) || 0) + 1);
  }
  [...ten.entries()].sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log(`  ${String(n).padStart(4)} × ${k}`));
}
