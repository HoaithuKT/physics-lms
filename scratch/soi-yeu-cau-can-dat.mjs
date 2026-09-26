/* Cửa "bảo đảm yêu cầu cần đạt" đã bịt kín chưa? Đo theo THÁNG TẠO: dạng tạo sau ngày
   gài cửa mà vẫn trống thì nghĩa là còn đường lọt. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: dm } = await sb.from('question_categories').select('*');
const trong = (s) => !String(s || '').trim();
const DAU_TAM = 'tự dựng theo tên dạng';

const thieu = (dm || []).filter(c => trong(c.yeu_cau_can_dat));
const tam = (dm || []).filter(c => String(c.yeu_cau_can_dat || '').includes(DAU_TAM));

console.log(`Tổng danh mục: ${dm.length}`);
console.log(`   có yêu cầu cần đạt : ${dm.length - thieu.length}`);
console.log(`   CÒN TRỐNG          : ${thieu.length}`);
console.log(`   dựng tạm theo mẫu, nên soát lại : ${tam.length}`);

const thang = {};
for (const c of dm || []) {
  const t = String(c.created_at || '').slice(0, 7) || '(không rõ)';
  thang[t] ??= { tong: 0, thieu: 0 };
  thang[t].tong++;
  if (trong(c.yeu_cau_can_dat)) thang[t].thieu++;
}
console.log('\nTheo tháng tạo:');
for (const [t, v] of Object.entries(thang).sort())
  console.log(`   ${t}  ${String(v.tong).padStart(4)} dạng · trống ${String(v.thieu).padStart(3)}` + (v.thieu ? '   ⚠' : '   ✓'));

/* Bao nhiêu câu đang nằm ở dạng còn trống */
let soCau = 0;
for (const c of thieu) {
  const { count } = await sb.from('questions')
    .select('id', { count: 'exact', head: true }).eq('math_form', c.math_form).eq('lesson', c.lesson || '');
  soCau += count || 0;
}
const { count: tongCau } = await sb.from('questions').select('id', { count: 'exact', head: true });
console.log(`\nCâu nằm ở dạng còn trống: ${soCau}/${tongCau}`);

if (thieu.length) {
  console.log('\nMười dạng trống gần đây nhất:');
  for (const c of thieu.sort((a, b) => String(b.created_at).localeCompare(String(a.created_at))).slice(0, 10))
    console.log(`   ${String(c.created_at || '').slice(0, 10)}  ${c.grade || '?'} · ${c.lesson || '(không rõ bài)'} · ${c.math_form}`);
}
