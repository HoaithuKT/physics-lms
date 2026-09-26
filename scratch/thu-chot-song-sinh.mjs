/*
 * Thử chốt "không đẻ thêm dạng song sinh" bằng chính hàm chuanTen của app, đối chiếu
 * với tên thật đang có trong kho. Chỉ ĐỌC, không ghi gì.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// Bản sao của chuanTen/doiVeTenChuan trong src/utils/phanLoaiCauHoi.ts
const chuanTen = (s) => String(s || '')
  .replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd')
  .toLowerCase().replace(/\s+/g, ' ')
  .replace(/^[\s.,;:]+|[\s.,;:]+$/g, '');
const doiVeTenChuan = (ten, ds) => {
  const t = chuanTen(ten); if (!t) return null;
  return ds.find(x => chuanTen(x) === t) || null;
};

const { data } = await sb.from('question_categories').select('math_form');
const ds = [...new Set((data || []).map(r => String(r.math_form || '')).filter(Boolean))];

const goc = 'Vận dụng công thức định luật I Nhiệt động lực học ($\\Delta U = A + Q$)';
const thu = [
  ['y hệt', goc],
  ['thêm dấu chấm cuối', goc + '.'],
  ['ngoặc nhọn thừa', goc.replace('$\\Delta U = A + Q$', '${\\Delta U = A + Q}$')],
  ['viết hoa lung tung', goc.toUpperCase()],
  ['thừa khoảng trắng', '  ' + goc.replace(/ /g, '  ') + '  '],
  ['dạng thật sự mới', 'Bài toán nén khí đẳng nhiệt trong xilanh hai ngăn'],
];

console.log(`Kho có ${ds.length} tên dạng. Thử nạp từng tên:\n`);
let sai = 0;
for (const [nhan, ten] of thu) {
  const khop = doiVeTenChuan(ten, ds);
  const mongDoi = nhan === 'dạng thật sự mới' ? null : goc;
  const dung = khop === mongDoi;
  if (!dung) sai++;
  console.log(`  ${dung ? 'ĐÚNG ' : 'SAI  '} ${nhan.padEnd(20)} -> ${khop ? 'gộp về tên cũ' : 'THÊM DẠNG MỚI'}`);
}
console.log(sai === 0 ? `\n${thu.length}/${thu.length} ca đúng.` : `\n${sai} ca sai.`);
