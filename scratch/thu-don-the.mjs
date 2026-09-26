/* Chạy "Dọn thẻ thừa" trên 29 bài lý thuyết THẬT. Chỉ đọc, không ghi gì vào kho.
 * Điều quan trọng nhất phải chắc: chữ nghĩa không mất đi đâu, chỉ mất thẻ. */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { donTheThua } from './donThe.mjs';

const GOC = process.env.GOC_APP || 'D:/claude/math-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Đo đúng những thứ TUYỆT ĐỐI không được mất khi dọn thẻ. Không so từng ký tự nữa: dọn
 * thẻ vốn CÓ bỏ đi mảnh rác như `p:last-child]:mb-0">`, so ký tự sẽ báo lệch giả. */
const demQuiz = (s) => (String(s || '').match(/```quiz/g) || []).length;
const demCongThuc = (s) => (String(s || '').match(/\$[^$\n]+\$/g) || []).length;
const demAnh = (s) => (String(s || '').match(/!\[[^\]]*\]\(/g) || []).length;
/** Chữ nghĩa NGOÀI các khối rào - phần văn xuôi thật sự. */
const chuVanXuoi = (s) => String(s || '')
  .replace(/```[\s\S]*?```/g, '')
  .replace(/<[^>]*>/g, '').replace(/[#*>`\-]/g, '').replace(/\s+/g, '');

const { data } = await sb.from('lesson_modules').select('title, content_markdown').eq('type', 'theory');

let tongTruoc = 0, tongSau = 0, baiCoThe = 0, baiHong = 0;
const viDu = [], boDi = [];
for (const m of data || []) {
  const c = m.content_markdown || ''; if (!c.trim()) continue;
  const kq = donTheThua(c);
  if (kq.soTheTruoc === 0) continue;
  baiCoThe++;
  tongTruoc += kq.soTheTruoc; tongSau += kq.soTheSau;

  const loi = [];
  if (demQuiz(kq.noiDungMoi) !== demQuiz(c)) loi.push(`MẤT CÂU HỎI: ${demQuiz(c)} → ${demQuiz(kq.noiDungMoi)} khối quiz`);
  if (demCongThuc(kq.noiDungMoi) !== demCongThuc(c)) loi.push(`MẤT CÔNG THỨC: ${demCongThuc(c)} → ${demCongThuc(kq.noiDungMoi)}`);
  if (demAnh(kq.noiDungMoi) !== demAnh(c)) loi.push(`MẤT ẢNH: ${demAnh(c)} → ${demAnh(kq.noiDungMoi)}`);

  if (loi.length) { baiHong++; viDu.push(`   ✗ "${m.title.slice(0,30)}" | ${loi.join(' | ')}`); }
  else if (viDu.length < 4) viDu.push(`   ✓ "${m.title.slice(0,30)}" | ${kq.soTheTruoc} → ${kq.soTheSau} thẻ | ${kq.daLam.join('; ')}`);

  // Ghi lại phần văn xuôi bị bỏ đi, để mắt người soi xem có phải rác không
  const a = chuVanXuoi(c), b = chuVanXuoi(kq.noiDungMoi);
  if (a !== b) {
    let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++;
    boDi.push(`   "${m.title.slice(0,26)}": bỏ ${a.length - b.length} ký tự, quanh vị trí ${i}: «${a.slice(i, i + 45)}»`);
  }
}

console.log(`Bài lý thuyết có thẻ HTML gõ tay: ${baiCoThe}`);
console.log(`Tổng số thẻ: ${tongTruoc} → ${tongSau}  (bỏ được ${tongTruoc - tongSau})`);
console.log(`\nBài bị MẤT câu hỏi / công thức / ảnh: ${baiHong}   ← phải là 0`);
console.log('\nTừng bài:');
viDu.forEach(v => console.log(v));
if (boDi.length) {
  console.log('\nPhần văn xuôi bị bỏ đi (soi xem có đúng là rác không):');
  boDi.forEach(v => console.log(v));
}
console.log(`\n${baiHong === 0 ? '✓ ĐẠT' : '✗ HỎNG'}: dọn thẻ mà không mất câu hỏi, công thức hay ảnh.`);
