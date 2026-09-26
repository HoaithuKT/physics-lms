/* Kiểm cơ chế chống trùng bằng đúng mã sẽ chạy (biên dịch thẳng tệp thật) và bằng 236
 * công thức thật của kho. Chỉ đọc, không ghi gì. */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { chuanHoaLatex, doTrung, gomNhomTrung, locLoMoi } from './trungCT.mjs';

const GOC = process.env.GOC_APP || 'D:/claude/math-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

let dat = 0, tong = 0;
const kiem = (ten, thuc, mong) => {
  tong++;
  const ok = JSON.stringify(thuc) === JSON.stringify(mong);
  if (ok) dat++;
  console.log(`${ok ? '✓' : '✗ HỎNG'} ${ten}${ok ? '' : `  (ra ${JSON.stringify(thuc)}, cần ${JSON.stringify(mong)})`}`);
};

console.log('— Chuẩn hoá LaTeX: hai cách gõ cùng một công thức phải ra một chuỗi —');
const nhu = (a, b, ten) => kiem(ten, chuanHoaLatex(a) === chuanHoaLatex(b), true);
nhu('\\dfrac{a}{b}', '\\frac{a}{b}', 'dfrac ≡ frac');
nhu('\\tfrac{a}{b}', '\\frac{a}{b}', 'tfrac ≡ frac');
nhu('\\left( x + 1 \\right)', '(x+1)', 'left/right chỉ là co giãn ngoặc');
nhu('a \\, b \\; c', 'abc', 'lệnh khoảng cách bị bỏ');
nhu('$x^2$', 'x^{2}', 'dấu $ và ngoặc nhọn thừa');
nhu('\\mathrm{d}x', 'dx', 'mathrm chỉ đổi kiểu chữ');
nhu('S = \\frac{1}{2}ah', 'S=\\dfrac{1}{2}ah', 'công thức thật, hai cách gõ');

console.log('\n— KHÔNG được gộp nhầm hai công thức khác nhau —');
kiem('sin khác cos', chuanHoaLatex('\\sin x') === chuanHoaLatex('\\cos x'), false);
kiem('\\sin không bị cắt thành "in"', chuanHoaLatex('\\sin x'), '\\sinx');
kiem('a/b khác b/a', chuanHoaLatex('\\frac{a}{b}') === chuanHoaLatex('\\frac{b}{a}'), false);

const { data: kho } = await sb.from('formulas').select('id,title,latex_content,category_id');
const { data: dm } = await sb.from('formula_categories').select('id,name');
const ten = new Map((dm || []).map(x => [x.id, x.name]));

console.log(`\n— Trên kho thật: ${kho.length} công thức —`);
const nhom = gomNhomTrung(kho);
console.log(`Gom được ${nhom.length} nhóm trùng:`);
for (const n of nhom) {
  const chuong = [...new Set(n.cacBan.map(c => ten.get(c.category_id) || '?'))];
  console.log(`   ${n.cacBan.length} bản (${n.lyDo}) | ${n.cacBan[0].title.slice(0, 40)} | ${chuong.join(' + ').slice(0, 55)}`);
}
kiem('bắt đúng 4 nhóm trùng LaTeX + 1 nhóm trùng tên', nhom.length, 5);

console.log('\n— Bắt được trùng KHÁC CHƯƠNG (chỗ bộ lọc cũ bó tay) —');
const khacChuong = nhom.filter(n => new Set(n.cacBan.map(c => c.category_id)).size > 1);
kiem('có nhóm trùng nằm khác chương và vẫn bị bắt', khacChuong.length >= 3, true);

console.log('\n— Thêm mới: lấy đúng một công thức đã có rồi thử thêm lại —');
const daCo = kho.find(c => c.latex_content && c.latex_content.length > 8);
kiem('thêm lại y nguyên -> bị chặn', doTrung(daCo, kho, 'id-khac').trungVoi !== null, true);
const goKhac = { title: 'Tên hoàn toàn khác', latex_content: daCo.latex_content.replace(/\\frac/g, '\\dfrac') };
kiem('gõ dfrac thay frac -> vẫn bị chặn', doTrung(goKhac, kho).trungVoi !== null, true);
kiem('công thức thật sự mới -> cho qua', doTrung({ title: 'Công thức bịa xyz', latex_content: 'Q_{xyz} = 12345abc' }, kho).trungVoi, null);
kiem('sửa chính nó thì không tự báo trùng', doTrung(daCo, kho, daCo.id).trungVoi, null);

console.log('\n— Lô nhiều công thức: trùng NGAY TRONG LÔ cũng phải bắt —');
const lo = [
  { title: 'Mới A', latex_content: 'P_{abc} = 999' },
  { title: 'Mới A lần hai', latex_content: 'P_{abc}=999' },
  { title: 'Mới B', latex_content: 'R_{xyz} = 111' },
];
const { giuLai, boQua } = locLoMoi(lo, kho);
kiem('lô 3 cái, 2 cái giống nhau -> giữ 2, bỏ 1', [giuLai.length, boQua.length], [2, 1]);

console.log(`\n${dat}/${tong} phép thử đạt.`);
