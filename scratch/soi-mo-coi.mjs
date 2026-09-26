/*
 * Soi kỹ từng tổ hợp câu mồ côi: câu có Chương/Bài/Dạng nhưng danh mục không có dòng
 * đó. Liệt kê vài câu mẫu, và gợi ý dòng danh mục nào GẦN GIỐNG nhất (có thể là do gõ
 * tên chương khác nhau, như "Chương 1. Vật lí nhiệt" với "Chương 1. Nhiệt học") để
 * quyết định: đổi câu về danh mục có sẵn, hay đổi danh mục, hay chỉ cần thêm dòng mới.
 */
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
    if (error) throw new Error(bang + ': ' + error.message);
    if (!data?.length) break; ra.push(...data); if (data.length < 1000) break;
  }
  return ra;
};

const dm = await napHet('question_categories', 'id, grade, subject, topic, lesson, math_form');
const ch = await napHet('questions', 'question_id, grade, subject, topic, lesson, math_form, content');

const khoaDM = (r) => [r.grade, r.subject, r.topic, r.lesson, r.math_form].join('¦');
const dmSet = new Set(dm.map(khoaDM));

const nhom = new Map();
for (const q of ch) {
  const k = khoaDM(q);
  if (dmSet.has(k)) continue;
  if (!nhom.has(k)) nhom.set(k, []);
  nhom.get(k).push(q);
}

console.log(`${ch.length} câu, ${dm.length} dòng danh mục, ${nhom.size} tổ hợp mồ côi.\n`);

const dsTopic = [...new Set(dm.map(r => r.topic))];
const dsLesson = [...new Set(dm.map(r => r.lesson))];
const dsForm = [...new Set(dm.map(r => r.math_form))];

let i = 0;
for (const [k, qs] of nhom) {
  i++;
  const [grade, subject, topic, lesson, math_form] = k.split('¦');
  console.log(`--- ${i}. ${qs.length} câu ---`);
  console.log(`   Chương : ${topic}`);
  console.log(`   Bài    : ${lesson}`);
  console.log(`   Dạng   : ${math_form}`);

  // Chương/Bài có tồn tại ở NƠI KHÁC trong danh mục không (đổi tên hay thật sự thiếu)?
  const coTopic = dsTopic.filter(t => t !== topic && t.toLowerCase().includes(topic.slice(0, 10).toLowerCase()));
  const coLesson = dm.filter(r => r.grade === grade && r.subject === subject && r.lesson === lesson);
  console.log(`   -> Bài "${lesson}" đã có trong danh mục ở chương khác? ${coLesson.length ? coLesson.map(r => r.topic).join(', ') : 'KHÔNG - bài này chưa hề có trong danh mục'}`);

  qs.slice(0, 1).forEach(q => console.log(`   mẫu: ${String(q.content || '').replace(/\s+/g, ' ').slice(0, 90)}...`));
  console.log('');
}
