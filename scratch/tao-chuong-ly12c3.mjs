/**
 * Dựng khung CHƯƠNG 3. TỪ TRƯỜNG cho Vật lí 12 (SGK Kết nối tri thức, Bài 14–20).
 *
 * Kho đã có 670 câu gắn "Chương 3. Từ trường" nhưng app chưa có chương này, nên phải
 * dựng khung trước rồi mới rót bài giảng vào. Mỗi bài ba module theo đúng khuôn các
 * chương 1, 2 đang dùng: lý thuyết · bài tập tự luyện · tài liệu & video.
 *
 * Chương chen vào TRƯỚC "Ôn tập & Kiểm tra" (order_index 3, đẩy ôn tập xuống 4).
 *
 *   node scratch/tao-chuong-ly12c3.mjs        -> thử
 *   node scratch/tao-chuong-ly12c3.mjs ghi    -> ghi thật
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const GHI = process.argv.includes('ghi');
const KHOI = '8486e14a-17c8-4f41-80b4-ea381a2c0a25';   // VẬT LÍ 12
const TEN_CHUONG = 'CHƯƠNG 3. TỪ TRƯỜNG';
const BAI = [
  'Bài 14. Từ trường',
  'Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ',
  'Bài 16. Từ thông. Hiện tượng cảm ứng điện từ',
  'Bài 17. Máy phát điện xoay chiều',
  'Bài 18. Ứng dụng hiện tượng cảm ứng điện từ',
  'Bài 19. Điện từ trường. Mô hình sóng điện từ',
  'Bài 20. Bài tập về từ trường',
];
const MODULE = [
  { title: 'Lý thuyết & Phương pháp giải (Bài giảng tương tác)', type: 'theory', order_index: 1 },
  { title: 'Bài tập tự luyện', type: 'practice', order_index: 2 },
  { title: 'Tài liệu & Video', type: 'document', order_index: 3 },
];

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: chCu } = await sb.from('chapters').select('id,title,order_index')
  .eq('course_id', KHOI).order('order_index');
let ch = chCu.find(c => c.title === TEN_CHUONG);
console.log(ch ? `Chương đã có: ${ch.id}` : `Sẽ tạo chương "${TEN_CHUONG}"`);
for (const b of BAI) console.log(`   - ${b}`);
if (!GHI) { console.log('(thử - chưa ghi)'); process.exit(0); }

if (!ch) {
  const onTap = chCu.find(c => c.title === 'Ôn tập & Kiểm tra');
  if (onTap) await sb.from('chapters').update({ order_index: onTap.order_index + 1 }).eq('id', onTap.id);
  const { data, error } = await sb.from('chapters')
    .insert({ course_id: KHOI, title: TEN_CHUONG, order_index: 3, loai: 'bai-hoc' }).select('id').maybeSingle();
  if (error) { console.error(error.message); process.exit(1); }
  ch = data;
  console.log(`✓ tạo chương ${ch.id}`);
}

for (let i = 0; i < BAI.length; i++) {
  let { data: bai } = await sb.from('lessons').select('id').eq('chapter_id', ch.id).eq('title', BAI[i]).maybeSingle();
  if (!bai) {
    const { data, error } = await sb.from('lessons')
      .insert({ course_id: KHOI, chapter_id: ch.id, title: BAI[i], order_index: i + 1, content_jsonb: {} })
      .select('id').maybeSingle();
    if (error) { console.error(BAI[i], error.message); continue; }
    bai = data;
  }
  const { data: mods } = await sb.from('lesson_modules').select('title').eq('lesson_id', bai.id);
  const co = new Set((mods || []).map(m => m.title));
  for (const m of MODULE) {
    if (co.has(m.title)) continue;
    const { error } = await sb.from('lesson_modules').insert({ lesson_id: bai.id, ...m, content_markdown: '' });
    if (error) console.error(`   ✗ ${BAI[i]} / ${m.title}: ${error.message}`);
  }
  console.log(`✓ ${BAI[i]}  (${bai.id})`);
}
