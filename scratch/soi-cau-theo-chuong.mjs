/* Bảng `questions` có cột topic/lesson/math_form riêng. Nắn danh mục KHÔNG tự nắn câu.
   Đo xem bao nhiêu câu đang mang tên chương/bài sai. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Supabase mặc định chỉ trả 1000 dòng - phải đọc theo trang, không thì đo thiếu quá nửa. */
const q = [];
for (let t = 0; ; t++) {
  const { data } = await sb.from('questions').select('topic,lesson,math_form').range(t * 1000, t * 1000 + 999);
  if (!data?.length) break;
  q.push(...data);
  if (data.length < 1000) break;
}
console.log(`${q.length} câu\n`);
const gom = {};
for (const x of q || []) {
  const k = `${x.topic || '(trống)'}  ||  ${x.lesson || '(trống)'}`;
  gom[k] = (gom[k] || 0) + 1;
}
console.log('── Câu theo chương / bài ──');
for (const [k, v] of Object.entries(gom).sort((a, b) => b[1] - a[1]))
  console.log(`   ${String(v).padStart(5)}  ${k}`);

/* Danh mục hiện có, để biết cặp chương/bài nào là hợp lệ */
const { data: dm } = await sb.from('question_categories').select('topic,lesson');
const hopLe = new Set((dm || []).map(c => `${c.topic || ''}||${c.lesson || ''}`));
const mocoi = (q || []).filter(x => !hopLe.has(`${x.topic || ''}||${x.lesson || ''}`));
console.log(`\nCâu có cặp chương/bài KHÔNG khớp danh mục nào: ${mocoi.length}/${q.length}`);
