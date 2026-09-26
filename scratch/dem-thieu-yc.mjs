import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
let dm = [], f = 0; while (true) { const { data } = await sb.from('question_categories').select('*').range(f, f + 999); dm.push(...data); if (data.length < 1000) break; f += 1000; }
const thieu = dm.filter(c => !String(c.yeu_cau_can_dat || '').trim());
const tam = dm.filter(c => /tự dựng theo tên dạng/.test(c.yeu_cau_can_dat || ''));
console.log(`danh mục: ${dm.length} · trống: ${thieu.length} · tự dựng theo mẫu (cần soát): ${tam.length}`);
const byG = {}; for (const c of thieu) byG[c.grade] = (byG[c.grade] || 0) + 1; console.log('trống theo khối:', JSON.stringify(byG));
console.log(dm.filter(c => c.yeu_cau_can_dat).slice(0, 3).map(c => `${c.math_form} → ${c.yeu_cau_can_dat}`).join('\n'));
