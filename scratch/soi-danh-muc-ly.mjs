/* 135 danh mục Lý đều trống yêu cầu cần đạt. Trước khi nhờ AI soạn, xem tên BÀI gắn cho
   từng dạng có đúng không - soạn yêu cầu dựa trên tên bài sai thì ra 135 câu sai. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: dm } = await sb.from('question_categories').select('*');
const theoBai = {};
for (const c of dm || []) {
  const k = `${c.grade || '?'} · ${c.topic || '(không rõ chương)'} · ${c.lesson || '(không rõ bài)'}`;
  (theoBai[k] ??= []).push(c.math_form);
}
console.log(`${dm.length} danh mục, nằm ở ${Object.keys(theoBai).length} bài\n`);
for (const [k, ds] of Object.entries(theoBai).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`${String(ds.length).padStart(4)} dạng  ${k}`);
  if (ds.length >= 10) for (const d of ds.slice(0, 5)) console.log(`         · ${String(d).slice(0, 84)}`);
}
