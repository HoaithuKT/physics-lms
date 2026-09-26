/**
 * Nắn lại Chương / Bài cho các danh mục Lý bị gắn nhầm.
 *
 * NGUYÊN NHÂN (đã truy được): đường "Đẩy câu từ Luyện tập sang kho" đóng dấu Chương/Bài
 * của BÀI ĐANG SOẠN lên MỌI câu trong lô, bất kể từng câu nói về gì. Hai bản vá đêm
 * 29-08 (01:16 và 01:36) đã bịt: khớp mờ tên chương với ngân hàng, không khớp thì BỎ
 * TRỐNG chứ không giữ tên thô. Hỏng còn lại là cặn của hai lô chạy TRƯỚC hai bản vá ấy.
 *
 * PHẠM VI: chỉ đụng đúng hai lô hỏng, nhận ra bằng mốc tạo. Không phân loại lại cả 135
 * dòng - 108 dòng kia đang đúng, đụng vào là rước thêm rủi ro.
 *
 * CÁCH NẮN:
 *   - Chương: dò từ khoá đặc trưng trong tên dạng. "phóng xạ" thì chắc chắn là hạt nhân.
 *   - Bài   : KHÔNG đoán bằng phép đếm chữ chung - đã thử, nó xếp "Tính nhiệt lượng nóng
 *             chảy" vào "Bài 3. Nhiệt độ. Thang nhiệt độ" chỉ vì chung chữ "nhiệt". Nhờ
 *             AI chọn trong ĐÚNG danh sách bài có thật của chương ấy, không được bịa;
 *             không chắc thì trả "không rõ" và để trống cho Thầy chọn tay.
 *
 * Chạy `node scratch/nan-ten-danh-muc-ly.mjs ghi` mới thật sự ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { pathToFileURL } from 'url';
import { join } from 'path';

const GHI = process.argv[2] === 'ghi';
const KHO = 'backups/nan-ten-danh-muc-ly-20260909';
/* Hai lô hỏng, nhận theo mốc tạo (phút) */
const LO_HONG = ['2026-08-28T17:55', '2026-08-18T16:13'];

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Nạp bộ gọi AI của app */
const TAM = join(process.cwd(), '.tam-nan');
rmSync(TAM, { recursive: true, force: true });
mkdirSync(TAM, { recursive: true });
for (const t of readdirSync('src/utils')) {
  if (!t.endsWith('.ts')) continue;
  writeFileSync(join(TAM, t), readFileSync(join('src/utils', t), 'utf8')
    .replace(/from '\.\/([A-Za-z0-9_]+)'/g, "from './$1.ts'")
    .replace(/from "\.\/([A-Za-z0-9_]+)"/g, 'from "./$1.ts"'));
}
const { goiGeminiTrenTrinhDuyet } = await import(pathToFileURL(join(TAM, 'geminiBrowser.ts')).href);
const cauHinh = {
  keys: ['GEMINI_API_KEY', 'GEMINI_API_KEY_1', 'GEMINI_API_KEY_2', 'GEMINI_API_KEY_3', 'GEMINI_API_KEY_4']
    .map(k => env[k]).filter(Boolean),
  models: ['gemini-3.6-flash', 'gemini-3.7-flash', 'gemini-3.5-flash'],
  treo: [],
};

/* ---------- Dữ liệu ---------- */
const { data: dm } = await sb.from('question_categories').select('*').order('created_at');
const hong = (dm || []).filter(c => LO_HONG.includes(String(c.created_at || '').slice(0, 16)));
console.log(`Danh mục: ${dm.length} · thuộc hai lô hỏng: ${hong.length}\n`);

/* Chương và bài CÓ THẬT trong chương trình, lấy từ bảng chapters/lessons */
const { data: kh } = await sb.from('courses').select('id,title').ilike('title', '%12%');
const { data: chuongThat } = await sb.from('chapters').select('id,title,loai').eq('course_id', kh[0].id);
const baiThat = {};
for (const ch of chuongThat || []) {
  const { data: ls } = await sb.from('lessons').select('title').eq('chapter_id', ch.id).order('order_index');
  baiThat[ch.title] = (ls || []).map(l => l.title);
}

/* Cách viết tên chương mà NGÂN HÀNG đang dùng - dùng lại đúng chuỗi ấy, không đẻ cách
   viết thứ hai. 108 dòng lành là chuẩn. */
const NHAN_TEN_CHUONG = [
  ['hat-nhan', /hạt nhân/i],
  ['tu-truong', /từ trường/i],
  ['khi-li-tuong', /khí l[íý] tưởng/i],
  ['vat-li-nhiet', /vật l[íý] nhiệt/i],
];
const lanh = (dm || []).filter(c => !LO_HONG.includes(String(c.created_at || '').slice(0, 16)));
const demTen = {};
for (const c of lanh) {
  const t = String(c.topic || '').trim(); if (!t) continue;
  for (const [ma, re] of NHAN_TEN_CHUONG) { if (!re.test(t)) continue; ((demTen[ma] ??= {})[t] ??= 0, demTen[ma][t]++); break; }
}
const tenChuan = {};
for (const [ma, ds] of Object.entries(demTen)) tenChuan[ma] = Object.entries(ds).sort((a, b) => b[1] - a[1])[0][0];

/* Chương của một dạng, dò theo từ khoá đặc trưng. Xếp cái riêng trước: "nhiệt hạch"
   phải về hạt nhân chứ không phải Vật lí nhiệt. */
const NHAN_DANG = [
  ['hat-nhan', /phóng xạ|hạt nhân|bán rã|ion ho[áa]|năng lượng liên kết|đồng vị|phân hạch|nhiệt hạch/i],
  ['tu-truong', /từ trường|cảm ứng|từ thông|máy phát điện|truyền tải|máy biến áp|sóng điện từ|lực từ|điện từ/i],
  ['khi-li-tuong', /khí l[íý] tưởng|khí thực|boyle|charles|đẳng áp|đẳng nhiệt|đẳng tích|phương trình trạng thái|áp suất khí|động năng phân tử|chu trình nhiệt động/i],
  ['vat-li-nhiet', /nhiệt dung|nhiệt nóng chảy|nhiệt ho[áa] hơi|nội năng|chuyển thể|thang nhiệt độ|nhiệt kế|nhiệt lượng|động học phân tử|thí nghiệm/i],
];
const chuongCuaDang = (d) => { for (const [ma, re] of NHAN_DANG) if (re.test(d)) return ma; return null; };

/* Tên chương trong bảng chapters ứng với mã, để lấy danh sách bài có thật */
const chuongThatCua = (ma) => {
  const re = NHAN_TEN_CHUONG.find(([m]) => m === ma)?.[1];
  return (chuongThat || []).find(ch => re?.test(ch.title))?.title || null;
};

/* Danh sách bài để AI chọn.
 *
 * Khoá Lý 12 mới dựng hai chương Vật lí nhiệt và Khí lí tưởng; Từ trường và Hạt nhân
 * chưa có bài nào trong bảng `lessons`. Nhưng ngân hàng thì đã có sẵn tên bài của hai
 * chương ấy (do 108 dòng lành mang theo) - gom thêm vào, không thì mọi dạng hạt nhân
 * đều phải để trống dù tên bài đã nằm ngay trong kho.
 */
function baiUngVien(ma) {
  const ra = new Set();
  const tenCh = chuongThatCua(ma);
  for (const b of baiThat[tenCh] || []) ra.add(b);
  const re = NHAN_TEN_CHUONG.find(([m]) => m === ma)?.[1];
  for (const c of lanh) {
    const t = String(c.topic || '').trim(), bai = String(c.lesson || '').trim();
    if (bai && t && re?.test(t)) ra.add(bai);
  }
  return [...ra];
}

/* ---------- Nhờ AI xếp bài ---------- */
const canXep = [];
for (const c of hong) {
  const ma = chuongCuaDang(String(c.math_form || ''));
  const tenCh = ma ? chuongThatCua(ma) : null;
  canXep.push({ id: c.id, dang: c.math_form, maChuong: ma, chuongNH: ma ? tenChuan[ma] : null,
                chuongThat: tenCh || (ma ? tenChuan[ma] : null), ungVien: ma ? baiUngVien(ma) : [] });
}
const coDuLieu = canXep.filter(x => x.ungVien.length);
console.log(`Nhờ AI xếp bài cho ${coDuLieu.length} dạng...\n`);

const prompt = `Bạn là giáo viên Vật lí THPT. Với mỗi dạng bài tập dưới đây, hãy chọn ĐÚNG MỘT bài học trong danh sách bài của chương đó.
QUY TẮC:
- Chỉ được chọn tên bài CÓ TRONG danh sách kèm theo. Tuyệt đối không bịa tên bài mới, không sửa tên.
- Không chắc chắn thì trả "" (chuỗi rỗng). Chọn bừa còn tệ hơn để trống.
Trả về DUY NHẤT một mảng JSON: [{"id":"...","bai":"tên bài đúng như trong danh sách, hoặc chuỗi rỗng"}]

DỮ LIỆU:
${coDuLieu.map(x => `- id: ${x.id}
  dạng: ${x.dang}
  chương: ${x.chuongThat}
  các bài của chương này: ${JSON.stringify(x.ungVien)}`).join('\n')}`;

let chon = {};
try {
  const kq = await goiGeminiTrenTrinhDuyet(cauHinh, [{ text: prompt }], { responseMimeType: 'application/json', temperature: 0.1 });
  const t = kq.text; const d = t.indexOf('['), c = t.lastIndexOf(']');
  for (const r of JSON.parse(t.slice(d, c + 1))) {
    const bai = String(r?.bai || '').trim();
    const x = coDuLieu.find(y => y.id === String(r?.id || '').trim());
    /* Chốt chặn: AI có bịa tên bài thì bỏ, chỉ nhận tên có thật trong chương */
    if (x && bai && x.ungVien.includes(bai)) chon[x.id] = bai;
  }
} catch (e) { console.log('   ✗ AI hỏng:', e?.message || e); }

/* ---------- Bảng đối chiếu ---------- */
const sua = [];
for (const c of hong) {
  const x = canXep.find(y => y.id === c.id);
  const chuongMoi = x?.chuongNH || String(c.topic || '').trim();
  const baiMoi = chon[c.id] || '';
  if (chuongMoi === String(c.topic || '').trim() && baiMoi === String(c.lesson || '').trim()) continue;
  sua.push({ id: c.id, dang: c.math_form, chuongCu: c.topic, chuongMoi, baiCu: c.lesson, baiMoi });
}
console.log(`── SẼ NẮN ${sua.length}/${hong.length} dòng ──`);
for (const s of sua) {
  const doiCh = String(s.chuongCu || '').trim() !== s.chuongMoi;
  console.log(`\n   ${String(s.dang).slice(0, 94)}`);
  console.log(`      chương ${doiCh ? '' : '(giữ nguyên) '}: ${s.chuongCu || '(trống)'}${doiCh ? `\n              -> ${s.chuongMoi}` : ''}`);
  console.log(`      bài           : ${s.baiCu || '(trống)'}`);
  console.log(`              -> ${s.baiMoi || '(để trống - AI không chắc, Thầy chọn tay)'}`);
}

if (!GHI) { console.log('\n(chưa ghi - chạy lại với tham số "ghi")'); rmSync(TAM, { recursive: true, force: true }); process.exit(0); }
mkdirSync(KHO, { recursive: true });
writeFileSync(`${KHO}/danh-muc-truoc-khi-nan.json`, JSON.stringify(hong, null, 1));
let xong = 0;
for (const s of sua) {
  const { error } = await sb.from('question_categories')
    .update({ topic: s.chuongMoi, lesson: s.baiMoi || null }).eq('id', s.id);
  if (error) console.log(`   ✗ ${String(s.dang).slice(0, 40)}: ${error.message}`); else xong++;
}
console.log(`\nĐÃ NẮN ${xong}/${sua.length} dòng. Bản gốc: ${KHO}/danh-muc-truoc-khi-nan.json`);
rmSync(TAM, { recursive: true, force: true });
