// Kiem cot thu_tu da co chua sau khi chay SQL.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { error } = await sb.from('formulas').select('thu_tu').limit(1);
console.log('cot thu_tu:', error ? 'CHUA CO - ' + error.message.slice(0, 70) : 'DA CO');

const { count } = await sb.from('formulas').select('id', { count: 'exact', head: true });
const { count: soDm } = await sb.from('formula_categories').select('id', { count: 'exact', head: true });
console.log('so cong thuc:', count, '| so danh muc/chuong:', soDm);
