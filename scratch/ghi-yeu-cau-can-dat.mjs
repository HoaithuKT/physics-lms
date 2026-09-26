/* Ghi yêu cầu cần đạt (soạn tay theo văn phong Công văn 7991) cho 109 danh mục kho Lý. Chỉ ghi ô đang trống. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
const GHI = process.argv.includes('ghi');
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const yc = JSON.parse(readFileSync('scratch/yeu-cau-can-dat-ly.json', 'utf8'));
const { data: dm } = await sb.from('question_categories').select('*');
const thieu = dm.filter(c => !String(c.yeu_cau_can_dat || '').trim());
const khop = thieu.map(c => ({ c, y: yc[c.id.slice(0, 8)] }));
console.log(`danh mục trống: ${thieu.length} · có chữ soạn sẵn: ${khop.filter(k => k.y).length}`);
for (const k of khop.filter(k => !k.y)) console.log('  ✗ chưa soạn:', k.c.lesson, '/', k.c.math_form);
const trungDau = Object.keys(yc).filter(p => dm.filter(c => c.id.startsWith(p)).length !== 1);
if (trungDau.length) console.log('  ✗ đầu id không duy nhất:', trungDau);
if (!GHI) { console.log('(thử)'); process.exit(0); }
mkdirSync('backups/don-kho-ly-20260911', { recursive: true });
const tep = 'backups/don-kho-ly-20260911/danh-muc-truoc-yeu-cau.json';
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(dm, null, 1));
let ok = 0;
for (const k of khop.filter(k => k.y)) { const { error } = await sb.from('question_categories').update({ yeu_cau_can_dat: k.y }).eq('id', k.c.id); if (error) console.log('✗', k.c.math_form, error.message); else ok++; }
console.log(`✓ đã ghi ${ok}`);
