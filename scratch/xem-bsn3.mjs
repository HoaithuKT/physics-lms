import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const kq = JSON.parse(readFileSync('scratch/kiem-kho-ly.json', 'utf8'));
const ma = kq['Còn chuỗi "\\n" hai kí tự (không phải \\neq)'].ma;
console.log('mã:', ma.length, ma.slice(0, 3));
const { data } = await sb.from('questions').select('*').in('question_id', ma.slice(0, 3));
const RE = /\\n(?!eq\b|e\b|abla\b|u\b|ot\b|ewline\b)/;
for (const q of data) for (const c of ['content', 'explanation', 'option_a', 'option_b', 'option_c', 'option_d']) {
  const t = String(q[c] || ''); const i = t.search(RE);
  if (i >= 0) console.log(q.question_id, c, JSON.stringify(t.slice(Math.max(0, i - 30), i + 30)));
}
