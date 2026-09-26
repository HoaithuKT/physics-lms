// Soi những câu mới vào kho gần đây: có đủ Chương/Bài/Dạng và có dòng danh mục tương ứng chưa.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: ch } = await sb.from('questions')
  .select('question_id, grade, subject, topic, lesson, math_form, question_type, difficulty, content, image_url, created_at')
  .order('created_at', { ascending: false }).limit(120);

const napDM = async () => { const ra = [];
  for (let p = 0; ; p++) {
    const { data } = await sb.from('question_categories')
      .select('grade, subject, topic, lesson, math_form').range(p * 1000, p * 1000 + 999);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  } return ra; };
const dm = new Set((await napDM()).map(r => [r.grade, r.subject, r.topic, r.lesson, r.math_form].join('¦')));

const thieu = [], moCoi = [], anhDoi = [];
for (const q of ch) {
  if (!q.topic?.trim() || !q.lesson?.trim() || !q.math_form?.trim()) thieu.push(q);
  else if (!dm.has([q.grade, q.subject, q.topic, q.lesson, q.math_form].join('¦'))) moCoi.push(q);
  // Câu có TỪ HAI ảnh trở lên trong nội dung: dấu hiệu vừa dán ảnh đã cắt vừa dán ảnh trang gốc
  const soAnh = (String(q.content || '').match(/!\[[^\]]*\]\([^)]+\)/g) || []).length
    + (String(q.content || '').match(/<img[^>]+src=/gi) || []).length;
  if (soAnh >= 2) anhDoi.push({ q, soAnh });
}

console.log(`Soi ${ch.length} câu mới nhất trong kho:`);
console.log(`  thiếu Chương/Bài/Dạng : ${thieu.length}`);
console.log(`  mồ côi (không có dòng danh mục) : ${moCoi.length}`);
console.log(`  có từ 2 ảnh trở lên trong nội dung : ${anhDoi.length}`);

if (thieu.length) { console.log('\nCâu thiếu phân loại:'); thieu.slice(0, 5).forEach(q => console.log(`  ${q.question_id} · ${q.topic}|${q.lesson}|${q.math_form}`)); }
if (moCoi.length) { console.log('\nCâu mồ côi:'); moCoi.slice(0, 5).forEach(q => console.log(`  ${q.question_id} · ${q.lesson} | ${q.math_form}`)); }
if (anhDoi.length) {
  console.log('\nCâu có nhiều ảnh (nghi vừa ảnh cắt vừa ảnh trang gốc):');
  anhDoi.slice(0, 6).forEach(x => {
    console.log(`  ${x.q.question_id} · ${x.soAnh} ảnh · ${String(x.q.content).replace(/\s+/g, ' ').slice(0, 80)}...`);
    (String(x.q.content).match(/!\[[^\]]*\]\(([^)]+)\)/g) || []).forEach(a => console.log(`      ${a.slice(0, 100)}`));
  });
}

const soCoAnh = ch.filter(q => /!\[|<img/i.test(String(q.content || '')) || String(q.image_url || '').trim()).length;
console.log(`\n${soCoAnh}/${ch.length} câu có ảnh.`);
