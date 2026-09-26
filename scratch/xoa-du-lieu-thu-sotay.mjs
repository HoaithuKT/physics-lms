// Xoa het du lieu THU da tao trong So tay app Ly, tra kho ve dung nhu truoc.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: dm } = await sb.from('formula_categories').select('id, name').ilike('name', 'ZZ THỬ%');
if (!dm?.length) { console.log('Khong con chuong thu nao.'); }

for (const c of dm || []) {
  const { data: xoaCt } = await sb.from('formulas').delete().eq('category_id', c.id).select('id, title');
  console.log(`xoa ${xoaCt?.length || 0} cong thuc thu trong "${c.name}"`);
  for (const f of xoaCt || []) console.log('   - ' + f.title);
  await sb.from('formula_categories').delete().eq('id', c.id);
  console.log('xoa chuong thu: ' + c.name);
}

// Soat lai: kho phai tro ve 0/0 nhu truoc khi thu
const { count: soCt } = await sb.from('formulas').select('id', { count: 'exact', head: true });
const { count: soDm } = await sb.from('formula_categories').select('id', { count: 'exact', head: true });
console.log(`\nSoat lai kho: ${soCt} cong thuc, ${soDm} chuong (truoc khi thu la 0 va 0).`);
