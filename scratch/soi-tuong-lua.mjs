// Gọi thẳng PostgREST bằng chính khoá anon của trình duyệt, để xem tầng biên
// trả về đúng cái gì khi tên dạng có chứa ${{...}} (trình duyệt chỉ thấy "Failed to fetch"
// vì trang chặn không kèm cờ CORS).
import fs from 'fs';

const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const URL_SB = env.NEXT_PUBLIC_SUPABASE_URL;
const KHOA = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const thu = async (nhan, giaTri) => {
  const u = new URL(URL_SB + '/rest/v1/questions');
  u.searchParams.set('select', 'question_id');
  u.searchParams.set('math_form', 'eq.' + giaTri);
  u.searchParams.set('limit', '1');
  try {
    const res = await fetch(u, { headers: { apikey: KHOA, Authorization: 'Bearer ' + KHOA } });
    const body = (await res.text()).slice(0, 160).replace(/\s+/g, ' ');
    console.log(`  ${res.status}  ${nhan}`);
    console.log(`        ${body}`);
  } catch (e) {
    console.log(`  LỖI MẠNG  ${nhan}: ${e.message}`);
  }
};

const DAI = 'Vận dụng công thức định luật I Nhiệt động lực học (${{\\Delta U = A + Q}}$)';

console.log('=== TÁCH DẦN ĐỂ TÌM KÝ TỰ BỊ CHẶN ===');
await thu('tên bình thường', 'Xác định chiều dòng điện cảm ứng');
await thu('có dấu phẩy + ngoặc', 'Cấu tạo hạt nhân (proton, neutron, nucleon), kí hiệu hạt nhân');
await thu('TÊN THẬT có ${{...}}', DAI);
await thu('chỉ ${{ }}', 'abc ${{x}} def');
await thu('chỉ ${ }', 'abc ${x} def');
await thu('chỉ {{ }}', 'abc {{x}} def');
await thu('chỉ dấu $ và \\', 'abc $\\Delta U$ def');
await thu('chỉ dấu \\', 'abc \\Delta def');
