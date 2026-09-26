import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// modules của chương 1, 2 lớp 12
const { data: ls } = await sb.from('lessons').select('id,title,chapters!inner(title,course_id)').eq('chapters.course_id', '8486e14a-17c8-4f41-80b4-ea381a2c0a25');
for (const l of ls) {
  const { data: m } = await sb.from('lesson_modules').select('title,type,content_markdown').eq('lesson_id', l.id).order('order_index');
  console.log(`- ${l.title}: ` + (m || []).map(x => `${x.title}[${x.type},${(x.content_markdown||'').length}c,${((x.content_markdown||'').match(/```quiz/g)||[]).length}q]`).join(' · '));
}

// danh mục kho
const { data: cats } = await sb.from('question_categories').select('*').limit(5);
console.log('\ncột danh mục:', Object.keys(cats[0] || {}).join(', '));
let all = [], from = 0;
while (true) { const { data } = await sb.from('question_categories').select('*').range(from, from + 999); all.push(...(data||[])); if (!data || data.length < 1000) break; from += 1000; }
console.log('tổng danh mục:', all.length);
const l12 = all.filter(c => /12/.test(String(c.grade ?? c.lop ?? c.khoi ?? '')) || /12/.test(JSON.stringify(c)));
const byCh = {};
for (const c of l12) { const k = c.chapter || c.chuong || '?'; (byCh[k] ||= []).push(c); }
for (const [k, v] of Object.entries(byCh)) console.log(`  ${k}: ${v.length} dạng`);
