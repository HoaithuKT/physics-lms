/*
 * Thử phần THẨM ĐỊNH: máy có tự nhận ra hình nào vẽ lại được, hình nào không.
 *
 * Quan trọng nhất là ca ngược: đưa ảnh chụp thật (không phải nét vẽ) thì máy phải trả về
 * veLaiDuoc=false chứ đừng vẽ bừa - vẽ bừa là hình sai mà không ai hay.
 * Chỉ đọc, không ghi gì.
 */
import fs from 'fs';

const GOC = 'D:/claude/physics-lms/';
const env = {};
for (const l of fs.readFileSync(GOC + '.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const KHOA = env.GEMINI_API_KEY_1 || env.GEMINI_API_KEY;
const MODEL = 'gemini-3.6-flash';

const LOI_DAN = `Bạn nhìn thấy một HÌNH ẢNH cắt từ đề thi. Làm hai việc:

VIỆC 1 - THẨM ĐỊNH: hình này có vẽ lại được bằng SVG cho giống hệt không?
  VẼ LẠI ĐƯỢC: đồ thị, hệ trục, bảng số liệu, sơ đồ mạch điện, hình hình học, bảng biến
  thiên, sơ đồ khối - tức là những hình chỉ gồm đường nét, chữ và hình khối đơn giản.
  KHÔNG VẼ LẠI ĐƯỢC: ảnh chụp thật (đồ vật, thí nghiệm, người), tranh vẽ nhiều màu có
  đổ bóng, hình có kết cấu/vân phức tạp, ảnh quá mờ không đọc nổi chi tiết.

VIỆC 2 - nếu vẽ lại được thì vẽ, theo đúng các quy tắc sau:
  1. TUYỆT ĐỐI KHÔNG đổi bất kỳ con số, chữ, nhãn, đơn vị nào. Chép y nguyên. Nhìn không
     rõ chỗ nào thì coi như KHÔNG vẽ lại được, chứ đừng đoán bừa.
  2. Giữ đúng bố cục, tỉ lệ và vị trí tương đối của mọi thành phần.
  3. Nét đen (#000) trên nền trắng, trừ khi hình gốc có màu thì giữ đúng màu đó.
  4. Chữ dùng font-family="Times New Roman, serif", cỡ vừa phải so với hình.
  5. Có viewBox, KHÔNG đặt width/height cố định.
  6. KHÔNG dùng <script>, <foreignObject>, <image>, hay liên kết ra ngoài.

TRẢ VỀ ĐÚNG KHUÔN SAU, không giải thích gì thêm, không bọc trong JSON hay dấu nháy:

VELAIDUOC: co
<svg ...>...</svg>

hoặc, nếu không vẽ lại được:

VELAIDUOC: khong
LYDO: <nói ngắn gọn vì sao>`;

const thu = async (nhan, url, mongDoi) => {
  const r0 = await fetch(url);
  const buf = Buffer.from(await r0.arrayBuffer());
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KHOA}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: LOI_DAN }, { inline_data: { mime_type: r0.headers.get('content-type') || 'image/jpeg', data: buf.toString('base64') } }] }],
      generationConfig: { temperature: 0.2 },
    }),
  });
  const data = await res.json();
  const tho = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
  const svg = (tho.match(/<svg[\s\S]*<\/svg>/i) || [])[0] || '';
  const noiKhong = /VELAIDUOC\s*:\s*khong/i.test(tho);
  const lyDo = (tho.match(new RegExp('LYDO\s*:\s*([^\n]+)', 'i')) || [])[1] || '';
  const doc = { veLaiDuoc: !noiKhong && !!svg.trim(), lyDo, svg };
  const soNet = (svg.match(/<(line|polyline|path|rect|circle|ellipse|polygon|text)[\s>]/g) || []).length;
  const dung = mongDoi === null ? '?' : (!!doc.veLaiDuoc === mongDoi ? 'ĐÚNG' : 'SAI ');
  console.log(`${dung}  ${nhan}`);
  console.log(`      veLaiDuoc=${doc.veLaiDuoc}  số nét=${soNet}${doc.lyDo ? '  lý do: ' + doc.lyDo : ''}`);
  return doc;
};

const dsUrl = process.argv.slice(2);
for (const u of dsUrl) await thu(u.split('/').pop().slice(0, 34), u, null);
