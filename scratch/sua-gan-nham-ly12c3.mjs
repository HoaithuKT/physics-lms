/**
 * Năm câu gắn nhầm bài/dạng trong kho chương 3 Vật lí 12, lộ ra khi soi phủ dạng:
 *
 *   - 2 câu về "độ không tuyệt đối" và "thang Celsius" bị gắn topic Chương 3, dạng "Truyền
 *     tải với công suất tiêu thụ không đổi", không có bài → thật ra là Bài 3 chương 1.
 *   - 2 câu Bài 14 gắn dạng "Tính lực từ F và cảm ứng từ B" (dạng của Bài 15) nhưng nội dung
 *     là tính chất từ trường / đặc điểm cảm ứng từ của dòng thẳng → dạng nhận biết của Bài 14.
 *   - 1 câu Bài 18 về bếp từ gắn dạng "Xác định chiều dòng điện cảm ứng" (dạng của Bài 16)
 *     → dạng giải thích hiện tượng thực tế của Bài 18.
 *
 * Sao lưu bản ghi gốc rồi mới sửa. Thử trước, thêm `ghi` mới ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/soan-ly12c3-20260911';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const SUA = [
  { question_id: 'CH_1787939701508_9fq6', topic: 'Chương 1. Vật lí nhiệt', lesson: 'Bài 3. Nhiệt độ. Thang nhiệt độ - Nhiệt kế', math_form: 'Quy đổi thang nhiệt độ' },
  { question_id: 'CH_1787939701508_8nel', topic: 'Chương 1. Vật lí nhiệt', lesson: 'Bài 3. Nhiệt độ. Thang nhiệt độ - Nhiệt kế', math_form: 'Quy đổi thang nhiệt độ' },
  { question_id: 'CH_1787230559933_zgj6', math_form: 'Nhận biết tương tác từ và tính chất từ trường' },
  { question_id: 'CH_1787230559933_6yeq', math_form: 'Nhận biết tương tác từ và tính chất từ trường' },
  { question_id: 'CH_1787364206571_yqy5', math_form: 'Giải thích hiện tượng thực tế Foucault, guitar điện' },
];

const { data: goc } = await sb.from('questions').select('*').in('question_id', SUA.map(s => s.question_id));
mkdirSync(SAO_LUU, { recursive: true });
const tep = `${SAO_LUU}/cau-gan-nham-goc.json`;
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(goc, null, 1));

for (const s of SUA) {
  const q = goc.find(x => x.question_id === s.question_id);
  const { question_id, ...doi } = s;
  console.log(`${question_id}: ${q.lesson || 'null'} / ${q.math_form}\n   → ${doi.lesson || q.lesson} / ${doi.math_form}`);
  if (!GHI) continue;
  const { error } = await sb.from('questions').update(doi).eq('question_id', question_id);
  console.log(error ? `   ✗ ${error.message}` : '   ✓');
}
if (!GHI) console.log('(thử - chưa ghi)');
