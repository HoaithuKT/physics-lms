// Tao 1 chuong + 3 cong thuc THU de kiem mui ten sap thu tu va chong trung.
// Xoa lai bang scratch/xoa-du-lieu-thu-sotay.mjs ngay sau khi kiem xong.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const TEN = 'ZZ THỬ NGHIỆM - sẽ xoá';

// Chan: khong lam gi neu kho da co du lieu that
const { count } = await sb.from('formula_categories').select('id', { count: 'exact', head: true });
if (count > 0) { console.log('DUNG LAI: kho da co', count, 'danh muc - khong dung vao du lieu that.'); process.exit(1); }

const { data: dm, error: e1 } = await sb.from('formula_categories').insert([{ name: TEN }]).select('id, name');
if (e1) { console.log('LOI tao chuong:', e1.message); process.exit(1); }
const chuong = dm[0];

const ds = [
  { title: 'ZZ Thử - Định luật II Newton', latex_content: 'F = ma', description: 'thu nghiem 1', thu_tu: 1 },
  { title: 'ZZ Thử - Chu kì con lắc đơn', latex_content: 'T = 2\\pi\\sqrt{\\frac{l}{g}}', description: 'thu nghiem 2', thu_tu: 2 },
  { title: 'ZZ Thử - Động năng', latex_content: 'W_d = \\frac{1}{2}mv^2', description: 'thu nghiem 3', thu_tu: 3 },
].map(f => ({ ...f, category_id: chuong.id }));

const { error: e2 } = await sb.from('formulas').insert(ds);
if (e2) { console.log('LOI tao cong thuc:', e2.message); process.exit(1); }

console.log('da tao chuong thu:', chuong.name, chuong.id);
console.log('da tao 3 cong thuc thu, thu tu 1-2-3');
