/* Soi kĩ từng nhóm bất cập đã đếm ở kiem-kho-ly.mjs: in nội dung để đọc tay. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
let kho = [], from = 0;
while (true) { const { data } = await sb.from('questions').select('*').range(from, from + 999); kho.push(...(data || [])); if (!data || data.length < 1000) break; from += 1000; }
const S = (x) => String(x ?? '').trim();
const cat = (t, n = 90) => S(t).replace(/\s+/g, ' ').slice(0, n);

/* Công thức xuống dòng giữa chừng - ghép cặp $ cho đúng */
function congThucXuongDong(t) {
  t = t.replace(/\$\$[\s\S]*?\$\$/g, '');
  const p = t.split('$');
  for (let i = 1; i < p.length; i += 2) if (p[i].includes('\n')) return p[i];
  return null;
}
const xd = kho.filter(q => congThucXuongDong(S(q.content)) || congThucXuongDong(S(q.explanation)));
console.log(`■ Công thức $...$ bị xuống dòng giữa chừng (ghép cặp đúng): ${xd.length}`);
for (const q of xd.slice(0, 5)) console.log(`   ${q.question_id} · ${JSON.stringify(congThucXuongDong(S(q.content)) || congThucXuongDong(S(q.explanation))).slice(0, 100)}`);

console.log('\n■ 28 câu loại lạ / mức lạ / không bài:');
const la = kho.filter(q => !['NLC', 'DS', 'TLN', 'TL'].includes(q.question_type));
const nhom = {};
for (const q of la) (nhom[`${q.question_type} · mức "${q.difficulty}" · ${q.topic} · ${q.lesson} · ${q.math_form} · tạo ${String(q.created_at).slice(0, 10)}`] ||= []).push(q.question_id);
for (const [k, v] of Object.entries(nhom)) console.log(`   ${v.length} câu: ${k}`);
console.log('   đáp án mẫu:', la.slice(0, 6).map(q => `${q.question_type}=${JSON.stringify(q.correct_answer)}`).join(' · '));

console.log('\n■ DS đáp án lệch khuôn:');
for (const q of kho.filter(q => q.question_type === 'DS' && !/^[ĐS]{4}$/.test(S(q.correct_answer)))) console.log(`   ${q.question_id} · đáp án ${JSON.stringify(q.correct_answer)} · a="${cat(q.option_a, 40)}" · ${cat(q.content, 50)}`);

console.log('\n■ TLN đáp án không phải số:');
for (const q of kho.filter(q => q.question_type === 'TLN' && S(q.correct_answer) && !/^-?\d+([.,]\d+)?$/.test(S(q.correct_answer)))) console.log(`   ${q.question_id} · ${JSON.stringify(q.correct_answer)} · ${cat(q.content, 60)}`);

console.log('\n■ TLN đáp án dài quá 4 kí tự:');
for (const q of kho.filter(q => q.question_type === 'TLN' && /^-?\d/.test(S(q.correct_answer)) && S(q.correct_answer).replace(/[.,-]/g, '').length > 4)) console.log(`   ${q.question_id} · ${JSON.stringify(q.correct_answer)} · ${cat(q.content, 60)}`);

console.log('\n■ Đề quá ngắn:');
for (const q of kho.filter(q => S(q.content).length < 15)) console.log(`   ${q.question_id} · ${q.question_type} · "${S(q.content)}" · a="${cat(q.option_a, 40)}" · giải: ${cat(q.explanation, 60)}`);

console.log('\n■ NLC phương án trùng:');
for (const q of kho.filter(q => q.question_type === 'NLC' && new Set(['option_a', 'option_b', 'option_c', 'option_d'].map(k => S(q[k]).toLowerCase())).size < 4)) console.log(`   ${q.question_id} · đ/a ${q.correct_answer} · A="${cat(q.option_a, 30)}" B="${cat(q.option_b, 30)}" C="${cat(q.option_c, 30)}" D="${cat(q.option_d, 30)}"`);

console.log('\n■ Nhắc "hình" mà không có ảnh:');
for (const q of kho.filter(q => /hình (vẽ|bên|dưới|sau|\d)|đồ thị (bên|dưới|sau|hình)|như hình/i.test(S(q.content)) && !q.image_url && !/!\[/.test(S(q.content)))) console.log(`   ${q.question_id} · ${q.lesson?.slice(0, 8)} · ${cat(q.content, 80)}`);

console.log('\n■ Dấu $ lẻ:');
for (const q of kho.filter(q => [S(q.content), S(q.explanation)].some(t => (t.replace(/\$\$/g, '').match(/\$/g) || []).length % 2 === 1))) { const t = S(q.content).replace(/\$\$/g, ''); console.log(`   ${q.question_id} · đề ${(t.match(/\$/g) || []).length} dấu · giải ${(S(q.explanation).replace(/\$\$/g, '').match(/\$/g) || []).length} dấu`); }

console.log('\n■ Bộ không có trong danh mục:');
const dm = (await sb.from('question_categories').select('*')).data;
const khoaDM = new Set(dm.map(c => `${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`));
for (const q of kho.filter(q => !khoaDM.has(`${q.grade}|${q.topic}|${q.lesson}|${q.math_form}`))) console.log(`   ${q.question_id} · ${q.topic} · ${q.lesson} · ${q.math_form}`);

console.log('\n■ Danh mục trùng:');
const dmNhom = {};
for (const c of dm) (dmNhom[`${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`] ||= []).push(c);
for (const [k, v] of Object.entries(dmNhom).filter(([, v]) => v.length > 1)) console.log(`   ${v.length}× ${k.split('|').slice(1).join(' · ')} · yêu cầu: ${v.map(c => c.yeu_cau_can_dat ? 'có' : 'trống').join('/')}`);

console.log('\n■ "Bài 11. Phương trình trang thái" (lỗi chính tả) — trong danh mục:', dm.filter(c => /trang thái/.test(c.lesson || '')).length, 'dòng; trong kho:', kho.filter(q => /trang thái/.test(q.lesson || '')).length, 'câu');

/* Lạc chương - từ khoá chặt hơn */
const RE = {
  nhiệt: /nhiệt dung|nội năng|nóng chảy|hoá hơi|hóa hơi|nhiệt kế|thang nhiệt|cấu trúc của chất|chuyển thể|nguyên lí I|định luật I/i,
  khí: /khí lí tưởng|Boyle|Charles|đẳng nhiệt|đẳng áp|đẳng tích|phương trình trạng thái|động học phân tử|xi ?lanh|pít ?tông|áp suất khí/i,
  từ: /từ trường|cảm ứng từ|lực từ|từ thông|suất điện động|máy biến áp|sóng điện từ|xoay chiều|nam châm|máy phát điện|điện từ/i,
  'hạt nhân': /hạt nhân|phóng xạ|nuclôn|nucleon|liên kết|bán rã|đồng vị|phân hạch|nhiệt hạch/i,
};
const chuongCua = (t) => /nhiệt/i.test(t) ? 'nhiệt' : /khí/i.test(t) ? 'khí' : /từ/i.test(t) ? 'từ' : 'hạt nhân';
const lac = kho.filter(q => { const c = chuongCua(S(q.topic)); const t = S(q.content) + ' ' + S(q.option_a); const k = Object.entries(RE).filter(([, r]) => r.test(t)).map(([n]) => n); return k.length && !k.includes(c); });
console.log(`\n■ Nghi lạc chương (từ khoá chặt): ${lac.length}`);
for (const q of lac) console.log(`   ${q.question_id} · ${q.topic.slice(0, 12)} / ${(q.lesson || 'null').slice(0, 8)} · ${cat(q.content, 85)}`);
