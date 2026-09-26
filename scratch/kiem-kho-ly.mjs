/**
 * Soi toàn bộ kho câu hỏi app Lý: đếm, rồi liệt kê từng loại bất cập kèm ví dụ.
 * Chỉ đọc, không ghi. Kết quả ghi thêm ra scratch/kiem-kho-ly.json để sửa theo.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
import { tachYDungSai } from './tachDungSai.mjs';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

async function lay(bang, cot = '*') {
  let ra = [], from = 0;
  while (true) { const { data, error } = await sb.from(bang).select(cot).range(from, from + 999); if (error) throw error; ra.push(...(data || [])); if (!data || data.length < 1000) break; from += 1000; }
  return ra;
}
const kho = await lay('questions');
const dm = await lay('question_categories');
const courses = await lay('courses', 'id,title');
const chapters = await lay('chapters', 'id,title,course_id,loai');
const lessons = await lay('lessons', 'id,title,chapter_id');

const S = (x) => String(x ?? '').trim();
const vd = (qs, n = 3) => qs.slice(0, n).map(q => `${q.question_id} · ${S(q.content).replace(/\s+/g, ' ').slice(0, 70)}`);
const ketQua = {};
const bao = (ten, qs, moTa) => { ketQua[ten] = { so: qs.length, moTa, ma: qs.map(q => q.question_id) }; console.log(`\n■ ${ten}: ${qs.length}${moTa ? '  — ' + moTa : ''}`); for (const v of vd(qs)) console.log('     ' + v); };

console.log(`KHO LÝ: ${kho.length} câu · ${dm.length} danh mục`);
const dem = (arr, f) => { const d = {}; for (const x of arr) { const k = f(x); d[k] = (d[k] || 0) + 1; } return d; };
console.log('theo khối:', JSON.stringify(dem(kho, q => q.grade)));
console.log('theo loại:', JSON.stringify(dem(kho, q => q.question_type)));
console.log('theo mức:', JSON.stringify(dem(kho, q => q.difficulty)));

/* 1. Thiếu đáp án / đáp án sai khuôn */
bao('NLC thiếu đáp án hoặc đáp án không phải A-D', kho.filter(q => q.question_type === 'NLC' && !/^[A-D]$/i.test(S(q.correct_answer))));
bao('NLC thiếu phương án', kho.filter(q => q.question_type === 'NLC' && ['option_a', 'option_b', 'option_c', 'option_d'].some(k => !S(q[k]))));
bao('NLC có phương án trùng nhau', kho.filter(q => q.question_type === 'NLC' && new Set(['option_a', 'option_b', 'option_c', 'option_d'].map(k => S(q[k]).toLowerCase())).size < 4));
bao('DS đáp án không phải 4 kí tự Đ/S', kho.filter(q => q.question_type === 'DS' && !/^[ĐS]{4}$/.test(S(q.correct_answer))));
bao('DS không tách được 4 ý', kho.filter(q => q.question_type === 'DS' && !tachYDungSai(q)));
bao('TLN thiếu đáp án', kho.filter(q => q.question_type === 'TLN' && !S(q.correct_answer)));
bao('TLN đáp án không phải số', kho.filter(q => q.question_type === 'TLN' && S(q.correct_answer) && !/^-?\d+([.,]\d+)?$/.test(S(q.correct_answer))), 'đề tốt nghiệp chỉ tô được số, tối đa 4 ô');
bao('TLN đáp án quá 4 kí tự (không tô được vào phiếu)', kho.filter(q => q.question_type === 'TLN' && S(q.correct_answer).replace(/[.,]/g, ',').replace('-', '').length > 4 && /^-?\d/.test(S(q.correct_answer))));
bao('TL (tự luận) không có lời giải', kho.filter(q => q.question_type === 'TL' && !S(q.explanation)));
bao('Loại câu lạ (không phải NLC/DS/TLN/TL)', kho.filter(q => !['NLC', 'DS', 'TLN', 'TL'].includes(q.question_type)));

/* 2. Nội dung */
bao('Đề trống hoặc quá ngắn (< 15 kí tự) mà không có phương án', kho.filter(q => S(q.content).length < 15 && !S(q.option_a)), 'đề kiểu "Nước sôi ở" + phương án là bình thường');
bao('Không có lời giải', kho.filter(q => !S(q.explanation) && q.question_type !== 'TL'));
bao('Lời giải chỉ có vài chữ (< 25 kí tự)', kho.filter(q => S(q.explanation) && S(q.explanation).length < 25));
bao('Đề nhắc "hình" nhưng không có ảnh', kho.filter(q => /hình (vẽ|bên|dưới|sau|\d)|đồ thị (bên|dưới|sau|hình)|như hình/i.test(S(q.content)) && !q.image_url && !['content', 'option_a', 'option_b', 'option_c', 'option_d'].some(k => /!\[/.test(S(q[k])))), 'đã kiểm cả ảnh nằm trong phương án');
/* Ghép cặp $ cho đúng: mẫu regex một dòng bắt nhầm khoảng giữa dấu $ đóng và dấu $ mở kế tiếp. */
const congThucXuongDong = (t) => { const p = t.replace(/\$\$[\s\S]*?\$\$/g, '').split('$'); for (let i = 1; i < p.length; i += 2) if (p[i].includes('\n')) return true; return false; };
bao('Công thức $...$ bị xuống dòng giữa chừng (Word in chữ thô)', kho.filter(q => congThucXuongDong(S(q.content)) || congThucXuongDong(S(q.explanation))));
bao('Còn chuỗi "\\n" hai kí tự (không phải \\neq)', kho.filter(q => /\\n(?!eq\b|e\b|abla\b|u(?![a-zA-Z])|ot\b)/.test(S(q.content) + S(q.explanation) + S(q.option_a))));
bao('Dấu $ lẻ (số dấu $ lẻ trong đề hoặc lời giải)', kho.filter(q => [S(q.content), S(q.explanation)].some(t => (t.replace(/\$\$/g, '').match(/\$/g) || []).length % 2 === 1)));
bao('Còn nhãn "[CÂU HỎI CÓ THỂ BỊ SAI ĐỀ]"', kho.filter(q => /\[CÂU HỎI CÓ THỂ BỊ SAI ĐỀ/i.test(S(q.content))));
bao('Có thẻ HTML trong đề', kho.filter(q => /<(span|div|p|br|b|i)\b/i.test(S(q.content))));

/* 3. Trùng lặp */
const chuan = (t) => S(t).toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:!?]/g, '');
const theoDe = {};
for (const q of kho) { const k = chuan(q.content) + '|' + chuan(q.option_a); (theoDe[k] ||= []).push(q); }
const trung = Object.values(theoDe).filter(g => g.length > 1);
bao('Đề trùng nhau (cùng đề + cùng phương án A)', trung.map(g => g[0]), `${trung.reduce((a, g) => a + g.length - 1, 0)} bản thừa`);
ketQua['Đề trùng nhau (cùng đề + cùng phương án A)'].nhom = trung.map(g => g.map(q => q.question_id));

/* 4. Phân loại: khối / chương / bài / dạng */
bao('Không có bài (lesson null/rỗng)', kho.filter(q => !S(q.lesson)));
bao('Không có dạng (math_form rỗng)', kho.filter(q => !S(q.math_form)));
bao('Không có chương (topic rỗng)', kho.filter(q => !S(q.topic)));
const khoaDM = new Set(dm.map(c => `${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`));
bao('Bộ khối/chương/bài/dạng không có trong danh mục', kho.filter(q => !khoaDM.has(`${q.grade}|${q.topic}|${q.lesson}|${q.math_form}`)), 'ma trận đề và bộ soi phủ dạng không thấy');
const khoaKho = new Set(kho.map(q => `${q.grade}|${q.topic}|${q.lesson}|${q.math_form}`));
const dmRong = dm.filter(c => !khoaKho.has(`${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`));
console.log(`\n■ Danh mục rỗng (không có câu nào): ${dmRong.length}`);
for (const c of dmRong.slice(0, 8)) console.log(`     ${c.grade} · ${c.topic} · ${c.lesson} · ${c.math_form}`);
ketQua['Danh mục rỗng'] = { so: dmRong.length, id: dmRong.map(c => c.id) };
const dmThieuYC = dm.filter(c => !S(c.yeu_cau_can_dat));
console.log(`\n■ Danh mục chưa có yêu cầu cần đạt: ${dmThieuYC.length}/${dm.length}`);
ketQua['Danh mục chưa có yêu cầu cần đạt'] = { so: dmThieuYC.length };
const dmTrung = Object.values(dem(dm, c => `${c.grade}|${c.topic}|${c.lesson}|${c.math_form}`)).filter(n => n > 1).length;
console.log(`■ Danh mục trùng (cùng bộ bốn trường): ${dmTrung}`);

/* Tên chương lệch nhau trong cùng khối */
console.log('\n■ Tên chương theo khối:');
for (const g of [...new Set(kho.map(q => q.grade))].sort()) {
  const t = dem(kho.filter(q => q.grade === g), q => q.topic);
  console.log(`   khối ${g}: ` + Object.entries(t).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} (${v})`).join(' · '));
}
/* Bài trong kho có khớp bài trong app không */
const baiApp = new Set(lessons.map(l => l.title));
const baiKho = dem(kho, q => `${q.grade}|${q.lesson}`);
const baiLech = Object.entries(baiKho).filter(([k]) => { const ten = k.split('|')[1]; return ten && ten !== 'null' && !baiApp.has(ten); });
console.log(`\n■ Tên bài trong kho KHÔNG có trong app: ${baiLech.length}`);
for (const [k, v] of baiLech.sort((a, b) => b[1] - a[1]).slice(0, 15)) console.log(`     ${v} câu · ${k}`);
ketQua['Tên bài không có trong app'] = Object.fromEntries(baiLech);

/* Nghi lạc chương: từ khoá nhiệt trong chương từ, v.v. */
const TU_KHOA = {
  'nhiệt': /nhiệt độ|nhiệt dung|nội năng|nóng chảy|hoá hơi|Celsius|Kelvin/i,
  'khí': /khí lí tưởng|Boyle|Charles|đẳng nhiệt|đẳng áp|đẳng tích|phương trình trạng thái/i,
  'từ': /từ trường|cảm ứng từ|lực từ|từ thông|suất điện động|máy biến áp|sóng điện từ|xoay chiều/i,
  'hạt nhân': /hạt nhân|phóng xạ|nuclôn|năng lượng liên kết|chu kì bán rã|đồng vị/i,
};
const chuongCua = (topic) => /nhiệt/i.test(topic) ? 'nhiệt' : /khí/i.test(topic) ? 'khí' : /từ/i.test(topic) ? 'từ' : /hạt nhân/i.test(topic) ? 'hạt nhân' : null;
const lacChuong = kho.filter(q => {
  const c = chuongCua(S(q.topic)); if (!c) return false;
  const t = S(q.content);
  const khop = Object.entries(TU_KHOA).filter(([, re]) => re.test(t)).map(([k]) => k);
  return khop.length && !khop.includes(c);
});
bao('Nghi lạc chương (đề toàn từ khoá của chương khác)', lacChuong, 'cần đọc tay từng câu');

/* 5. Mức độ và cân đối */
console.log('\n■ Cơ cấu loại × mức theo chương (khối 12):');
for (const t of [...new Set(kho.filter(q => q.grade === '12').map(q => q.topic))]) {
  const qs = kho.filter(q => q.topic === t);
  const m = dem(qs, q => q.difficulty); const l = dem(qs, q => q.question_type);
  console.log(`   ${t}: ${qs.length} câu · mức ${JSON.stringify(m)} · loại ${JSON.stringify(l)}`);
}
bao('Mức độ lạ (không phải 1-4)', kho.filter(q => !['1', '2', '3', '4'].includes(S(q.difficulty))));

/* 6. Ảnh */
const anh = kho.filter(q => q.image_url || /!\[/.test(S(q.content)));
console.log(`\n■ Câu có ảnh: ${anh.length} (image_url: ${kho.filter(q => q.image_url).length} · ảnh nhúng trong đề: ${kho.filter(q => /!\[/.test(S(q.content))).length})`);
const urls = [...new Set(anh.flatMap(q => [q.image_url, ...[...S(q.content).matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map(m => m[1])].filter(Boolean)))];
let hongAnh = [];
for (let i = 0; i < urls.length; i += 20) {
  await Promise.all(urls.slice(i, i + 20).map(async u => { try { const r = await fetch(u, { method: 'HEAD' }); if (!r.ok) hongAnh.push(u); } catch { hongAnh.push(u); } }));
}
console.log(`   địa chỉ ảnh: ${urls.length} · không mở được: ${hongAnh.length}`);
ketQua['Ảnh không mở được'] = { so: hongAnh.length, url: hongAnh.slice(0, 50) };

/* 7. Dùng câu */
const chuaDung = kho.filter(q => !(q.usage_count > 0));
console.log(`\n■ Câu chưa từng được dùng (usage_count = 0): ${chuaDung.length}/${kho.length}`);

writeFileSync('scratch/kiem-kho-ly.json', JSON.stringify(ketQua, null, 1));
console.log('\nĐã ghi chi tiết ra scratch/kiem-kho-ly.json');
