/**
 * Rót câu hỏi từ ngân hàng vào các mốc <!--QUIZ|dạng|số câu|mức[|*]--> của bản thảo lý
 * thuyết chương 3 Vật lí 12 (Bài 14–20), rồi ghi vào app. Mặc định CHỈ THỬ; thêm `ghi`
 * mới ghi thật.
 *
 * Mốc có đuôi `|*` (Bài 20 dùng) thì rút từ MỌI bài trong chương.
 *
 * Câu "lạc bài" trong kho — cùng dạng nhưng gắn nhầm bài (2 câu "Tính lực từ" gắn Bài 14,
 * 1 câu "Chiều dòng cảm ứng" gắn Bài 18, 2 câu "Truyền tải P không đổi" không gắn bài) —
 * được rút vào bài NÀO ĐANG DẠY dạng đó, miễn là bài gốc của câu không tự dạy dạng ấy.
 *
 *   node scratch/soan-ly12c3.mjs
 *   node scratch/soan-ly12c3.mjs ghi
 */
import { createClient } from '@supabase/supabase-js';
import { tachYDungSai } from './tachDungSai.mjs';
import { donDe, xuongDong } from './donDeCauHoi.mjs';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/soan-ly12c3-20260911';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const kho = JSON.parse(readFileSync('scratch/kho-ly12c3.json', 'utf8'));
const anhCasio = existsSync('scratch/casio/dia-chi-anh-ly.json')
  ? JSON.parse(readFileSync('scratch/casio/dia-chi-anh-ly.json', 'utf8')) : {};

const BAI = [
  { so: 14, ten: 'Bài 14. Từ trường', lesson: 'b94d44f6-7a3f-470a-ba59-d6f14673cb7f' },
  { so: 15, ten: 'Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ', lesson: '9d3c7d0b-4f8c-420b-8a0a-4b7c12ac5c20' },
  { so: 16, ten: 'Bài 16. Từ thông. Hiện tượng cảm ứng điện từ', lesson: '28179ddb-d2b9-4ef4-82ac-428aefd449a8' },
  { so: 17, ten: 'Bài 17. Máy phát điện xoay chiều', lesson: '5f0d7dab-8e12-4421-a23b-849a23b66ecf' },
  { so: 18, ten: 'Bài 18. Ứng dụng hiện tượng cảm ứng điện từ', lesson: 'b7d9bd4e-4ef9-4f86-81e8-760e39c2832e' },
  { so: 19, ten: 'Bài 19. Điện từ trường. Mô hình sóng điện từ', lesson: '95cba988-5837-496d-b803-3eff9b84b705' },
  { so: 20, ten: 'Bài 20. Bài tập về từ trường', lesson: 'cd54a43a-f9f8-4a2b-8c3d-e7fef63e9c56' },
];
for (const b of BAI) b.tep = `scratch/lt-ly12c3-bai${b.so}.md`;

const MOC = /<!--QUIZ\|([^|]+)\|(\d+)\|([^|>]+?)(\|\*)?-->/g;

/* Bài nào đang dạy dạng nào (theo mốc trong bản thảo), để biết câu lạc bài rút được vào đâu. */
const dayDang = new Map();   // dạng -> Set(tên bài)
for (const b of BAI) {
  for (const m of readFileSync(b.tep, 'utf8').matchAll(MOC)) {
    if (m[4]) continue;
    if (!dayDang.has(m[1].trim())) dayDang.set(m[1].trim(), new Set());
    dayDang.get(m[1].trim()).add(b.ten);
  }
}

const daDung = new Set();

/**
 * Ưu tiên NLC và DS, để dành TLN cho bài tập tự luyện (mỗi bài cần 6 TLN, Bài 14 chỉ có 6).
 * Câu của chính bài xếp trước câu lạc bài.
 */
function chonCau(tenBai, dang, soCau, mucUuTien, moiBai) {
  const ungVien = kho.filter(q =>
    q.math_form === dang &&
    ['NLC', 'TLN', 'DS'].includes(q.question_type) &&
    String(q.correct_answer || '').trim() &&
    (q.question_type !== 'DS' || tachYDungSai(q)) &&
    !daDung.has(q.id) &&
    (moiBai || q.lesson === tenBai || !dayDang.get(dang)?.has(q.lesson)));

  const diem = (q) => {
    const i = mucUuTien.indexOf(String(q.difficulty));
    const phatTLN = q.question_type === 'TLN' ? 100000 : 0;
    const lacBai = q.lesson === tenBai ? 0 : 10000;
    return phatTLN + lacBai + (i < 0 ? 99 : i) * 1000 + (q.usage_count || 0);
  };
  /* Rải đều theo mức: mốc xin "1,2,3" thì lấy một câu mức 1, một câu mức 2, một câu mức 3
     rồi mới quay vòng — chứ không vét hết mức 1 để bài giảng toàn câu dễ. */
  const xep = ungVien.sort((a, b) => diem(a) - diem(b));
  const chon = [];
  let vong = 0;
  while (chon.length < soCau && vong < 10) {
    let them = 0;
    for (const muc of mucUuTien) {
      if (chon.length >= soCau) break;
      const q = xep.find(x => String(x.difficulty) === muc && !chon.includes(x));
      if (q) { chon.push(q); them++; }
    }
    if (!them) break;
    vong++;
  }
  for (const q of xep) { if (chon.length >= soCau) break; if (!chon.includes(q)) chon.push(q); }
  for (const q of chon) daDung.add(q.id);
  return chon;
}

function khoiQuiz(q) {
  const giai = xuongDong(q.explanation);
  const goc = { sourceQuestionId: q.id, maCauHoi: q.question_id };
  let d;
  if (q.question_type === 'NLC') {
    const opts = [q.option_a, q.option_b, q.option_c, q.option_d];
    const idx = 'ABCD'.indexOf(String(q.correct_answer).trim().toUpperCase());
    if (idx < 0 || !opts[idx]) return null;
    d = { type: 'multiple_choice', question: donDe(q.content), options: opts, answerIndex: idx };
  } else if (q.question_type === 'DS') {
    const t = tachYDungSai(q);
    if (!t) return null;
    d = { type: 'true_false_cluster', question: t.de, options: t.y };
  } else {
    d = { type: 'short_answer', question: donDe(q.content), exactAnswer: String(q.correct_answer).trim() };
  }
  if (giai) d.answer = giai;
  if (q.image_url) d.imageUrl = q.image_url;
  return '```quiz\n' + JSON.stringify({ ...d, ...goc }, null, 2) + '\n```';
}

let tongRot = 0, tongHut = 0;

for (const b of BAI) {
  let md = readFileSync(b.tep, 'utf8');
  const thieu = [];

  md = md.replace(MOC, (_, dang, so, muc, moiBai) => {
    const chon = chonCau(b.ten, dang.trim(), Number(so), muc.split(',').map(x => x.trim()), !!moiBai);
    if (chon.length < Number(so)) thieu.push(`${dang.trim()} (xin ${so}, có ${chon.length})`);
    const khoi = chon.map(khoiQuiz).filter(Boolean);
    tongRot += khoi.length; tongHut += Number(so) - khoi.length;
    return khoi.join('\n\n');
  });

  /* Ảnh chụp giả lập Casio: thay chỗ giữ bằng địa chỉ thật; chưa có ảnh thì bỏ cả dòng. */
  md = md.replace(/^(?:>\s*)?!\[[^\]]*\]\((CASIO_[A-Z0-9_]+)\)\s*$/gm, (dong, khoa) =>
    anhCasio[khoa] ? dong.replace(khoa, anhCasio[khoa]) : '>');
  const conGiuCho = (md.match(/CASIO_[A-Z0-9_]+/g) || []).length;

  writeFileSync(b.tep.replace('.md', '-day-du.md'), md);
  console.log(`${b.ten}: ${md.length} ký tự${thieu.length ? '  ⚠ hụt: ' + thieu.join(' · ') : ''}${conGiuCho ? `  ⚠ còn ${conGiuCho} chỗ giữ ảnh Casio` : ''}`);

  const { data: mod } = await sb.from('lesson_modules').select('id,content_markdown')
    .eq('lesson_id', b.lesson).eq('type', 'theory').maybeSingle();
  if (!mod) { console.log('   ✗ không thấy module lý thuyết'); continue; }
  if (!GHI) { console.log(`   (thử) sẽ ghi đè module ${mod.id}`); continue; }

  mkdirSync(SAO_LUU, { recursive: true });
  const tepLuu = `${SAO_LUU}/${mod.id}.md`;
  if (!existsSync(tepLuu)) writeFileSync(tepLuu, mod.content_markdown || '');
  const { error } = await sb.from('lesson_modules').update({ content_markdown: md }).eq('id', mod.id);
  console.log(error ? `   ✗ ${error.message}` : `   ✓ đã ghi, sao lưu ở ${tepLuu}`);
}

console.log(`\nRót được ${tongRot} câu · hụt ${tongHut}`);
