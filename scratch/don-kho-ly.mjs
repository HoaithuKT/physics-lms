/**
 * Dọn kho Lý — phần "máy làm ngay, an toàn" theo báo cáo kiem-kho-ly.mjs (11/9/2026):
 *
 *   1. 26 câu ghi TLN nhưng có 4 phương án + đáp án chữ cái          → NLC
 *   2. 28 câu loại ghi tên tiếng Anh, mức ghi bằng chữ              → mã loại + mã mức
 *   3. 11 câu DS trống/sai khuôn đáp án mà lời giải ghi rõ a) Đúng… → đáp án ĐSĐS
 *   4. "Bài 11. Phương trình trang thái…" (sai chính tả)             → "trạng thái"
 *   5. "Chương IV. Vật lí hạt nhân"                                  → "Chương 4. Vật lí hạt nhân"
 *   6. Danh mục trùng (cùng khối/chương/bài/dạng)                    → giữ dòng cũ nhất
 *   7. Bài 3 / "Vật lý tổng hợp" có 6 câu mà không có dòng danh mục → thêm dòng
 *   8. Chuỗi "\n" hai kí tự trong đề/lời giải/phương án               → xuống dòng thật
 *   9. Câu trùng nhau mà KHÔNG bản nào được dùng                     → xoá bản mới hơn
 *
 * Mọi bản ghi sắp sửa được ghi ra backups/don-kho-ly-20260911/ trước. Thử trước, `ghi` mới ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { xuongDong } from './donDeCauHoi.mjs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/don-kho-ly-20260911';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const lay = async (b, c = '*') => { let r = [], f = 0; while (true) { const { data, error } = await sb.from(b).select(c).range(f, f + 999); if (error) throw error; r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const S = (x) => String(x ?? '').trim();

const kho = await lay('questions');
const dm = await lay('question_categories');
const mods = await lay('lesson_modules', 'id,content_markdown');
const boDe = await lay('bo_de_thi', 'id,cau_hoi');

mkdirSync(SAO_LUU, { recursive: true });
const saoLuu = (ten, rows) => { const tep = `${SAO_LUU}/${ten}.json`; if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(rows, null, 1)); };
const doi = [];   // { bang, id, cot, moi, ly_do }
const xoa = [];   // { bang, id, ly_do }
const them = [];  // { bang, row, ly_do }

/* 10. Môn để trống: 58 câu (đúng lô nhiệt kế 28/8) và 13 danh mục (lô đẩy từ bài học 18/8) có
   subject = "" trong khi cả kho là "Vật lí" — bộ lọc theo môn không thấy chúng. */
for (const q of kho.filter(q => !S(q.subject))) { q.subject = 'Vật lí'; doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi: { subject: 'Vật lí' }, ly_do: '10. môn trống' }); }
for (const c of dm.filter(c => !S(c.subject))) { c.subject = 'Vật lí'; doi.push({ bang: 'question_categories', id: c.id, moi: { subject: 'Vật lí' }, ly_do: '10. môn trống' }); }

/* 1. TLN thực ra là NLC */
for (const q of kho.filter(q => q.question_type === 'TLN' && /^[A-D]$/i.test(S(q.correct_answer)) && ['option_a', 'option_b', 'option_c', 'option_d'].every(k => S(q[k]))))
  doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi: { question_type: 'NLC', correct_answer: S(q.correct_answer).toUpperCase() }, ly_do: '1. TLN→NLC' });

/* 2. Mã loại và mức */
const LOAI = { multiple_choice: 'NLC', short_answer: 'TLN', true_false_cluster: 'DS', essay: 'TL' };
const MUC = { 'Nhận biết': '1', 'Thông hiểu': '2', 'Vận dụng': '3', 'Vận dụng cao': '4' };
for (const q of kho.filter(q => LOAI[q.question_type] || MUC[S(q.difficulty)])) {
  const moi = {};
  if (LOAI[q.question_type]) moi.question_type = LOAI[q.question_type];
  if (MUC[S(q.difficulty)]) moi.difficulty = MUC[S(q.difficulty)];
  doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi, ly_do: '2. mã loại/mức' });
}

/* 3. DS: đáp án rút từ lời giải (chỉ khi đủ 4 ý rõ ràng) hoặc từ chuỗi "a) Đ, b) S…" */
const KHUON_DS = /^[ĐS]{4}$/;
for (const q of kho.filter(q => (q.question_type === 'DS' || q.question_type === 'true_false_cluster') && !KHUON_DS.test(S(q.correct_answer)))) {
  const tuDapAn = S(q.correct_answer).replace(/[^ĐS]/g, '');
  const tuGiai = ['a', 'b', 'c', 'd'].map(k => { const m = S(q.explanation).match(new RegExp(`(?:^|\\n)\\s*${k}\\)\\s*(Đúng|Sai|Đ\\b|S\\b)`, 'i')); return m ? (/^Đ/i.test(m[1]) ? 'Đ' : 'S') : '?'; }).join('');
  const dapAn = KHUON_DS.test(tuDapAn) ? tuDapAn : KHUON_DS.test(tuGiai) ? tuGiai : null;
  if (!dapAn) { console.log(`   (bỏ qua) ${q.question_id}: đáp án "${S(q.correct_answer)}", lời giải cho "${tuGiai}"`); continue; }
  if (KHUON_DS.test(tuDapAn) && KHUON_DS.test(tuGiai) && tuDapAn !== tuGiai) { console.log(`   (bỏ qua, mâu thuẫn) ${q.question_id}: đáp án ${tuDapAn} ≠ lời giải ${tuGiai}`); continue; }
  doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi: { correct_answer: dapAn }, ly_do: '3. đáp án DS' });
}

/* 4 + 5. Đổi tên bài / chương — trong cả câu lẫn danh mục */
const TEN = [
  ['lesson', 'Bài 11. Phương trình trang thái của khí lí tưởng', 'Bài 11. Phương trình trạng thái của khí lí tưởng', '4. chính tả "trạng thái"'],
  ['topic', 'Chương IV. Vật lí hạt nhân', 'Chương 4. Vật lí hạt nhân', '5. "Chương 4"'],
];
for (const [cot, cu, moi, ly_do] of TEN) {
  for (const q of kho.filter(q => q[cot] === cu)) doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi: { [cot]: moi }, ly_do });
  for (const c of dm.filter(c => c[cot] === cu)) { c[cot] = moi; doi.push({ bang: 'question_categories', id: c.id, moi: { [cot]: moi }, ly_do }); }
}

/* 6. Danh mục trùng (sau khi đã đổi tên ở bước 4-5 trong bộ nhớ) */
const khoaDM = (c) => `${c.grade}|${c.subject}|${c.topic}|${c.lesson}|${c.math_form}`;
const nhomDM = {};
for (const c of dm) (nhomDM[khoaDM(c)] ||= []).push(c);
const dmXoa = new Set();
for (const g of Object.values(nhomDM).filter(g => g.length > 1)) {
  g.sort((a, b) => (a.yeu_cau_can_dat ? -1 : 1) - (b.yeu_cau_can_dat ? -1 : 1) || String(a.created_at).localeCompare(String(b.created_at)));
  for (const c of g.slice(1)) { dmXoa.add(c.id); xoa.push({ bang: 'question_categories', id: c.id, ly_do: `6. danh mục trùng: ${c.lesson} / ${c.math_form}` }); }
}

/* 7. Danh mục thiếu */
const coDM = new Set(dm.filter(c => !dmXoa.has(c.id)).map(khoaDM));
const thieuDM = new Set();
for (const q of kho) {
  const k = `${q.grade}|${q.subject}|${q.topic}|${q.lesson}|${q.math_form}`;
  if (!S(q.lesson) || coDM.has(k) || thieuDM.has(k)) continue;
  thieuDM.add(k);
  them.push({ bang: 'question_categories', row: { grade: q.grade, subject: q.subject, topic: q.topic, lesson: q.lesson, math_form: q.math_form }, ly_do: '7. thêm danh mục' });
}
/* Câu đã đổi tên bài/chương ở bước 4-5 thì khoá của nó cũng đổi - tính lại theo tên mới. */
for (const t of them.slice()) { for (const [cot, cu, moi] of TEN) if (t.row[cot] === cu) t.row[cot] = moi; }
{ const seen = new Set(); for (let i = them.length - 1; i >= 0; i--) { const k = Object.values(them[i].row).join('|'); if (seen.has(k) || coDM.has(k)) them.splice(i, 1); else seen.add(k); } }

/* 8. Chuỗi "\n" hai kí tự */
const BSN = /\\n(?!eq\b|e\b|abla\b|u\b|ot\b|ewline\b)/;
for (const q of kho) {
  const moi = {};
  for (const cot of ['content', 'explanation', 'option_a', 'option_b', 'option_c', 'option_d']) {
    const v = q[cot]; if (v && BSN.test(v)) moi[cot] = xuongDong(v);
  }
  if (Object.keys(moi).length) doi.push({ bang: 'questions', id: q.id, ma: q.question_id, moi, ly_do: '8. chuỗi \\n' });
}

/* 9. Câu trùng chưa bản nào được dùng */
const dung = new Set();
for (const m of mods) for (const x of (m.content_markdown || '').matchAll(/"sourceQuestionId":\s*"([^"]+)"/g)) dung.add(x[1]);
for (const b of boDe) for (const x of JSON.stringify(b.cau_hoi || '').matchAll(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g)) dung.add(x[0]);
const chuan = (t) => S(t).toLowerCase().replace(/\s+/g, ' ').replace(/[.,;:!?]/g, '');
const nhomCau = {};
for (const q of kho) (nhomCau[chuan(q.content) + '|' + chuan(q.option_a)] ||= []).push(q);
let trungGiu = 0;
for (const g of Object.values(nhomCau).filter(g => g.length > 1)) {
  if (g.some(q => dung.has(q.id))) { trungGiu++; continue; }
  g.sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));
  for (const q of g.slice(1)) xoa.push({ bang: 'questions', id: q.id, ma: q.question_id, ly_do: `9. trùng với ${g[0].question_id}` });
}

/* Gộp các thay đổi cùng một câu lại */
const gop = {};
for (const d of doi) { const k = d.bang + d.id; gop[k] ||= { ...d, moi: {}, ly_do: [] }; Object.assign(gop[k].moi, d.moi); gop[k].ly_do.push(d.ly_do); }
const doiGop = Object.values(gop);

/* Tóm tắt */
const demLyDo = {};
for (const d of doi) demLyDo[d.ly_do.slice(0, 2)] = (demLyDo[d.ly_do.slice(0, 2)] || 0) + 1;
console.log('ĐỔI:', JSON.stringify(demLyDo), `→ ${doiGop.length} bản ghi`);
console.log(`XOÁ: ${xoa.filter(x => x.bang === 'question_categories').length} danh mục trùng · ${xoa.filter(x => x.bang === 'questions').length} câu trùng (giữ lại ${trungGiu} nhóm vì có bản đang dùng)`);
console.log(`THÊM: ${them.length} danh mục:`, them.map(t => `${t.row.lesson} / ${t.row.math_form}`).join(' · '));

if (!GHI) { console.log('\n(thử - chưa ghi)'); process.exit(0); }

/* Sao lưu rồi ghi */
const idDoi = new Set(doiGop.filter(d => d.bang === 'questions').map(d => d.id));
const idXoa = new Set(xoa.filter(x => x.bang === 'questions').map(x => x.id));
saoLuu('questions-truoc-khi-doi', kho.filter(q => idDoi.has(q.id)));
saoLuu('questions-da-xoa', kho.filter(q => idXoa.has(q.id)));
saoLuu('question_categories-goc', await lay('question_categories'));
saoLuu('ke-hoach', { doi: doiGop, xoa, them });

let ok = 0, loi = 0;
for (const d of doiGop) {
  const { error } = await sb.from(d.bang).update(d.moi).eq('id', d.id);
  if (!error) { ok++; continue; }
  /* Đổi tên danh mục mà đụng dòng đã có tên ấy (ràng buộc duy nhất) → dòng này thừa, xoá. */
  if (d.bang === 'question_categories' && /duplicate key/.test(error.message)) {
    const { error: e2 } = await sb.from(d.bang).delete().eq('id', d.id);
    console.log(e2 ? `✗ xoá danh mục trùng ${d.id}: ${e2.message}` : `↳ danh mục ${d.id} trùng với dòng đã có sau khi đổi tên → xoá`);
    if (!e2) ok++; else loi++;
    continue;
  }
  loi++; console.log('✗', d.ma || d.id, error.message);
}
console.log(`✓ đổi ${ok} · lỗi ${loi}`);
for (const x of xoa) { const { error } = await sb.from(x.bang).delete().eq('id', x.id); if (error) console.log('✗ xoá', x.id, error.message); }
console.log(`✓ xoá ${xoa.length}`);
for (const t of them) { const { error } = await sb.from(t.bang).insert(t.row); if (error) console.log('✗ thêm', error.message); }
console.log(`✓ thêm ${them.length} · sao lưu ở ${SAO_LUU}/`);
