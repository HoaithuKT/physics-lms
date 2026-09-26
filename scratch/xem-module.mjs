import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('lesson_modules').select('*').eq('lesson_id', process.argv[2]).order('order_index');
for (const m of data) { console.log(`\n===== ${m.title} [${m.type}] id=${m.id} order=${m.order_index} cols=${Object.keys(m).join(',')}`); console.log((m.content_markdown || '').slice(0, Number(process.argv[3] || 3000))); }
