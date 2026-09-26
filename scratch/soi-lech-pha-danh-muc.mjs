/* Vì sao danh mục Lý gắn nhầm tên bài? Soi theo MỐC TẠO: nếu cả cụm lệch sinh ra trong
   cùng một khoảnh khắc thì thủ phạm là một lượt quét, không phải lỗi rải rác. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const { data: dm } = await sb.from('question_categories').select('*').order('created_at');
console.log(`${dm.length} danh mục\n`);

/* Gom theo phút tạo: một lượt quét đẻ ra cả cụm trong vài giây */
const cum = {};
for (const c of dm || []) {
  const k = String(c.created_at || '').slice(0, 16);
  (cum[k] ??= []).push(c);
}
console.log('── Theo phút tạo ──');
for (const [k, ds] of Object.entries(cum).sort()) {
  const bai = [...new Set(ds.map(c => c.lesson || '(trống)'))];
  const chuong = [...new Set(ds.map(c => c.topic || '(trống)'))];
  console.log(`${k}  ${String(ds.length).padStart(3)} dạng · ${bai.length} bài · ${chuong.length} chương`);
  if (ds.length >= 5) {
    console.log(`      bài  : ${bai.map(b => String(b).slice(0, 46)).join(' | ')}`);
    console.log(`      chương: ${chuong.map(b => String(b).slice(0, 40)).join(' | ')}`);
  }
}

/* Tên chương viết mấy kiểu? */
console.log('\n── Tên chương, gom theo chữ thường bỏ dấu cách ──');
const gonChuong = {};
for (const c of dm || []) {
  const t = String(c.topic || '(trống)');
  const k = t.toLowerCase().replace(/\s+/g, ' ').trim();
  (gonChuong[k] ??= new Set()).add(t);
}
for (const [k, v] of Object.entries(gonChuong))
  if (v.size > 1) console.log(`   ⚠ viết ${v.size} kiểu: ${[...v].join('   ||   ')}`);
  else console.log(`     ${[...v][0]}`);

/* Bài nào chứa dạng của chương khác? Dò bằng từ khoá đặc trưng của từng chương. */
const DAU_HIEU = {
  'hạt nhân': /phóng xạ|hạt nhân|bán rã|ion hoá|ion hóa|năng lượng liên kết|đồng vị/i,
  'từ trường': /từ trường|cảm ứng từ|từ thông|máy phát điện|truyền tải|máy biến áp|sóng điện từ|lực từ/i,
  'khí lí tưởng': /khí lí tưởng|khí lý tưởng|boyle|charles|đẳng áp|đẳng nhiệt|đẳng tích|phương trình trạng thái/i,
  'vật lí nhiệt': /nhiệt dung|nhiệt nóng chảy|nhiệt hoá hơi|nhiệt hóa hơi|nội năng|chuyển thể|thang nhiệt độ|nhiệt kế/i,
};
console.log('\n── Dạng nằm nhầm chương ──');
let lech = 0;
for (const c of dm || []) {
  const dang = String(c.math_form || '');
  const chuong = String(c.topic || '').toLowerCase();
  for (const [ten, re] of Object.entries(DAU_HIEU)) {
    if (!re.test(dang)) continue;
    if (chuong.includes(ten)) continue;
    lech++;
    console.log(`   ✗ dạng thuộc "${ten}" · đang nằm ở: ${c.topic} / ${c.lesson}`);
    console.log(`        ${dang.slice(0, 88)}`);
    break;
  }
}
console.log(`\n   Tổng lệch chương: ${lech}/${dm.length}`);
