/* Lời giải trong kho xuống dòng bằng kí tự thật hay bằng chuỗi hai kí tự "\n"? Và có lệnh LaTeX
   bắt đầu bằng \n (\neq, \nabla, \nu, \not, \ne) bị phép thay "\n" -> xuống dòng làm hỏng không? */
import { readFileSync } from 'fs';
const kho = JSON.parse(readFileSync('scratch/kho-ly12c3.json', 'utf8'));
const BS_N = /\\n/;                 // hai kí tự: dấu chéo ngược + n
const LENH_N = /\\n(eq|abla|u\b|ot\b|e\b|ewline)/;
let that = 0, lit = 0, caHai = 0;
const hong = [];
for (const q of kho) {
  const e = String(q.explanation || '') + String(q.content || '');
  const a = e.includes('\n'), b = BS_N.test(e);
  if (a) that++; if (b) lit++; if (a && b) caHai++;
  if (LENH_N.test(e)) hong.push(q.question_id + ': ' + e.match(LENH_N)[0]);
}
console.log(`xuống dòng thật: ${that} · chuỗi "\\n" hai kí tự: ${lit} · cả hai: ${caHai}`);
console.log(`lệnh LaTeX bắt đầu bằng \\n: ${hong.length}`, hong.slice(0, 10));
