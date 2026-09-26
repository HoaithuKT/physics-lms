/*
 * THỬ TÍNH KHẢ THI: cho AI đọc một hình vẽ đã cắt rồi vẽ lại bằng SVG.
 *
 * Chỉ đọc, không ghi gì vào cơ sở dữ liệu. Kết quả SVG ghi ra tệp trong scratch/ để mở
 * bằng trình duyệt mà soi tận mắt, đối chiếu với ảnh gốc.
 */
import fs from 'fs';
import path from 'path';

const GOC = process.env.GOC_APP || 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const KHOA = env.GEMINI_API_KEY_1 || env.GEMINI_API_KEY;
const MODEL = process.env.MODEL || 'gemini-3.6-flash';

const URL_ANH = process.argv[2];
if (!URL_ANH) { console.error('Thiếu địa chỉ ảnh'); process.exit(1); }

const LOI_DAN = `Bạn nhìn thấy một HÌNH VẼ trong đề thi (đồ thị, sơ đồ, hình học, mạch điện...).
Hãy vẽ lại y hệt hình đó bằng SVG để in ra giấy cho sắc nét.

QUY TẮC BẮT BUỘC:
1. TUYỆT ĐỐI KHÔNG đổi bất kỳ con số, chữ, nhãn, đơn vị nào. Chép lại y nguyên những gì
   nhìn thấy. Nhìn không rõ chỗ nào thì ghi đúng cái mình đọc được, KHÔNG được đoán thêm.
2. Giữ đúng bố cục, tỉ lệ và vị trí tương đối của mọi thành phần.
3. Dùng nét đen (#000) trên nền trắng, trừ khi hình gốc có màu thì giữ đúng màu đó.
4. Chữ dùng font-family="Times New Roman, serif". Cỡ chữ vừa phải so với hình.
5. Có viewBox, không đặt width/height cố định, để phóng to thu nhỏ không vỡ.
6. KHÔNG dùng <script>, <foreignObject>, <image>, hay bất kỳ liên kết ra ngoài nào.
7. Chỉ trả về đúng mã SVG, bắt đầu bằng <svg và kết thúc bằng </svg>. Không giải thích.`;

console.log(`Ảnh: ${URL_ANH}`);
const res0 = await fetch(URL_ANH);
const buf = Buffer.from(await res0.arrayBuffer());
console.log(`Tải về ${Math.round(buf.length / 1024)} KB, kiểu ${res0.headers.get('content-type')}\n`);

const t0 = Date.now();
const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KHOA}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [
      { text: LOI_DAN },
      { inline_data: { mime_type: res0.headers.get('content-type') || 'image/jpeg', data: buf.toString('base64') } },
    ] }],
    generationConfig: { temperature: 0.2 },
  }),
});
const data = await res.json();
if (!res.ok) { console.error('LỖI ' + res.status + ': ' + JSON.stringify(data).slice(0, 400)); process.exit(1); }

const raw = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
const svg = (raw.match(/<svg[\s\S]*<\/svg>/i) || [])[0] || '';
console.log(`Máy trả về sau ${((Date.now() - t0) / 1000).toFixed(1)}s, ${raw.length} ký tự, lấy được SVG ${svg.length} ký tự.`);

if (!svg) { console.log('\nKHÔNG lấy được SVG. Đầu ra thô:\n' + raw.slice(0, 500)); process.exit(1); }

/* Soát an toàn: SVG không được chứa mã chạy hay liên kết ra ngoài */
const nguyHiem = [
  [/<script/i, '<script>'],
  [/<foreignObject/i, '<foreignObject>'],
  [/\son\w+\s*=/i, 'thuộc tính on... (onclick, onload)'],
  [/<image[\s>]/i, '<image> nhúng ảnh ngoài'],
  [/href\s*=\s*["']?\s*(?!#)/i, 'liên kết ra ngoài'],
];
const dinh = nguyHiem.filter(([re]) => re.test(svg)).map(([, ten]) => ten);
console.log(`Soát an toàn: ${dinh.length === 0 ? 'SẠCH' : 'DÍNH ' + dinh.join(', ')}`);

const soThanhPhan = {
  'đường kẻ': (svg.match(/<(line|polyline|path)[\s>]/g) || []).length,
  'hình khối': (svg.match(/<(rect|circle|ellipse|polygon)[\s>]/g) || []).length,
  'nhãn chữ': (svg.match(/<text[\s>]/g) || []).length,
};
console.log('Thành phần:', JSON.stringify(soThanhPhan));
const chu = [...svg.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map(m => m[1].trim()).filter(Boolean);
console.log(`Chữ trong hình (${chu.length}): ${chu.slice(0, 20).join(' | ')}`);

const ra = path.join(GOC, 'scratch', 'thu-ve-lai.html');
fs.writeFileSync(ra, `<!doctype html><meta charset="utf-8">
<style>body{font-family:system-ui;padding:20px}div{display:inline-block;vertical-align:top;margin:10px;border:1px solid #ccc;padding:10px}
h3{margin:0 0 8px;font-size:14px} img,svg{max-width:460px;height:auto;display:block}</style>
<div><h3>ẢNH GỐC (đã cắt)</h3><img src="${URL_ANH}"></div>
<div><h3>AI VẼ LẠI (SVG)</h3>${svg}</div>`);
console.log(`\nĐã ghi bản đối chiếu: ${ra}`);
