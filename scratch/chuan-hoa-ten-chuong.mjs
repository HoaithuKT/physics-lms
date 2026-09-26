/**
 * Chuẩn hoá cách viết tên chương còn sót.
 *
 * Sáu câu và một dòng danh mục còn đeo "CHƯƠNG 1. VẬT LÍ NHIỆT" viết hoa - tên lấy thô
 * từ bảng `chapters`, khác cách viết mà cả kho đang dùng. Đọc nội dung sáu câu ấy thì
 * đúng là Vật lí nhiệt thật (bức xạ nhiệt, truyền nhiệt, nhiệt kế, thang nhiệt độ), nên
 * chỉ sai cách viết chứ không sai chương. Giữ nguyên Bài, chỉ nắn tên chương.
 *
 * Hai cách viết cùng một chương thì mọi bộ lọc đều hụt: lọc theo "Chương 1. Vật lí nhiệt"
 * sẽ không thấy sáu câu này.
 *
 * Chạy `node scratch/chuan-hoa-ten-chuong.mjs ghi` mới thật sự ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const GHI = process.argv[2] === 'ghi';
const KHO = 'backups/chuan-hoa-ten-chuong-ly-20260909';

const SAI = 'CHƯƠNG 1. VẬT LÍ NHIỆT';
const DUNG = 'Chương 1. Vật lí nhiệt';

const { data: dmSai } = await sb.from('question_categories').select('*').eq('topic', SAI);
const qSai = [];
for (let t = 0; ; t++) {
  const { data } = await sb.from('questions').select('id,content,math_form,lesson')
    .eq('topic', SAI).range(t * 1000, t * 1000 + 999);
  if (!data?.length) break;
  qSai.push(...data);
  if (data.length < 1000) break;
}
console.log(`Danh mục còn tên hoa: ${dmSai.length} · câu còn tên hoa: ${qSai.length}`);
console.log(`   "${SAI}"  ->  "${DUNG}"`);

if (!GHI) { console.log('\n(chưa ghi - chạy lại với tham số "ghi")'); process.exit(0); }

mkdirSync(KHO, { recursive: true });
writeFileSync(`${KHO}/truoc-khi-chuan-hoa.json`, JSON.stringify({ danhMuc: dmSai, cau: qSai }, null, 1));

let a = 0, b = 0;
for (const c of dmSai) {
  const { error } = await sb.from('question_categories').update({ topic: DUNG }).eq('id', c.id);
  if (error) console.log(`   ✗ danh mục ${c.id}: ${error.message}`); else a++;
}
for (const x of qSai) {
  const { error } = await sb.from('questions').update({ topic: DUNG }).eq('id', x.id);
  if (error) console.log(`   ✗ câu ${x.id}: ${error.message}`); else b++;
}
console.log(`\nĐÃ NẮN ${a} dòng danh mục · ${b} câu. Bản gốc: ${KHO}/`);
