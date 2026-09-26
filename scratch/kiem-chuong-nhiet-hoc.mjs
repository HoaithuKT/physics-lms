import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data: dm } = await sb.from('question_categories').select('id, topic, lesson, math_form').eq('topic', 'Chương 1. Nhiệt học');
console.log(`Dòng danh mục có Chương "Chương 1. Nhiệt học": ${dm.length}`);
dm.forEach(r => console.log('  ' + r.lesson + ' | ' + r.math_form));

const { data: ch } = await sb.from('questions').select('question_id').eq('topic', 'Chương 1. Nhiệt học');
console.log(`\nCâu hỏi có Chương "Chương 1. Nhiệt học": ${ch.length}`);

const { data: dm2 } = await sb.from('question_categories').select('id').eq('topic', 'Chương 1. Vật lí nhiệt');
console.log(`Dòng danh mục có Chương "Chương 1. Vật lí nhiệt": ${dm2.length}`);
