/*
 * Thử đúng tình huống ĐỀ CUỐI KỲ: lấy câu thật của NHIỀU PHÂN MÔN (Đại số, Hình học,
 * Thống kê...) trộn lẫn thành một đề, KHÔNG nói trước phân môn nào, xem máy có xếp mỗi
 * câu về đúng phân môn của nó không, hay dồn cả đề về một môn.
 * Chỉ đọc, không ghi gì.
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const GOC = process.env.GOC_APP || 'D:/claude/math-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const KHOA = env.GEMINI_API_KEY_1 || env.GEMINI_API_KEY;
const LOP = process.env.LOP || '12';

const chuanTen = (s) => String(s || '')
  .replace(/\$\{+([\s\S]*?)\}+\$/g, '$$$1$$')
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd')
  .toLowerCase().replace(/\s+/g, ' ').replace(/^[\s.,;:]+|[\s.,;:]+$/g, '');

const { dungCayDanhMuc, vietCayThanhChu, dungPromptPhanBo, docKetQuaPhanBo } =
  await import('file://' + GOC + 'scratch/phanBo.mjs');

const { data: dm } = await sb.from('question_categories')
  .select('subject, topic, lesson, math_form').eq('grade', LOP);

const cay = dungCayDanhMuc(dm);
const dsMon = [...cay.keys()];
console.log(`Danh mục lớp ${LOP}: ${dsMon.length} phân môn (${dsMon.join(', ')}), ${dm.length} dòng.`);

// Trộn đề: lấy câu thật của TỪNG phân môn
const cauThu = [];
for (const mon of dsMon) {
  const { data } = await sb.from('questions')
    .select('question_id, content, subject, topic, lesson, math_form')
    .eq('grade', LOP).eq('subject', mon).limit(3);
  (data || []).forEach(q => cauThu.push(q));
}
const monGoc = new Set(cauThu.map(c => c.subject));
console.log(`Đề trộn: ${cauThu.length} câu của ${monGoc.size} phân môn khác nhau.`);
console.log(`(KHÔNG nói trước phân môn nào cho máy)\n`);

const prompt = dungPromptPhanBo({ cauHoi: cauThu.map(q => ({ id: q.question_id, content: q.content })), cayChu: vietCayThanhChu(cay), grade: LOP, dsMon });

const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${KHOA}`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.2 } }),
});
const data = await res.json();
if (!res.ok) { console.error('LỖI: ' + JSON.stringify(data).slice(0, 300)); process.exit(1); }
const tho = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';

const { xepDuoc, khongXep } = docKetQuaPhanBo(tho, cay, chuanTen);

let dungMon = 0, dungChuong = 0, dangMoi = 0;
console.log('KẾT QUẢ:');
for (const r of xepDuoc) {
  const goc = cauThu.find(c => c.question_id === r.id);
  const okM = goc && chuanTen(goc.subject) === chuanTen(r.subject);
  const okC = goc && chuanTen(goc.topic) === chuanTen(r.topic);
  if (okM) dungMon++;
  if (okC) dungChuong++;
  if (r.dangMoi) dangMoi++;
  console.log(`  ${okM ? '✓ mòn' : '✗ SAI MÔN'} ${String(r.subject).padEnd(10)} · ${okC ? 'đúng chương' : 'khác chương'} · ${r.dangMoi ? 'DẠNG MỚI' : 'dạng có sẵn'} · ${String(r.lesson).slice(0, 40)}`);
}
for (const k of khongXep) console.log(`  KHÔNG XẾP: ${k.lyDo}`);

const monRa = new Set(xepDuoc.map(x => x.subject));
console.log(`\n${xepDuoc.length}/${cauThu.length} câu xếp vào nhánh CÓ THẬT, ${khongXep.length} câu không xếp được.`);
console.log(`Máy chia ra ${monRa.size} phân môn (đề gốc có ${monGoc.size}).`);
console.log(`${dungMon}/${xepDuoc.length} câu ĐÚNG PHÂN MÔN gốc. ${dungChuong}/${xepDuoc.length} đúng chương gốc. ${dangMoi} câu đề xuất dạng mới.`);
