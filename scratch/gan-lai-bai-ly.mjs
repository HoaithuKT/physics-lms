/**
 * Gán lại bài/dạng cho 75 câu chương 1 (đọc tay, thầy duyệt 11/9/2026) và xoá 4 bản trùng:
 *   A. 47 câu lô nhiệt kế 28/8 → Bài 3, bốn dạng
 *   B. 28 câu đẩy từ bài học 18/8 chưa có bài → Bài 1–6
 *   C. 4 bản trùng đang được dùng → xoá (chạy lại bộ rót chương 3 sau)
 *   rồi xoá danh mục "(không bài)" đã rỗng.
 * Sao lưu trước ở backups/don-kho-ly-20260911/. Thử trước, `ghi` mới ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/don-kho-ly-20260911';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const TOPIC = 'Chương 1. Vật lí nhiệt';
const BAI = {
  1: 'Bài 1. Cấu trúc của chất. Sự chuyển thể',
  2: 'Bài 2. Nội năng. Định luật I của nhiệt động lực học',
  3: 'Bài 3. Nhiệt độ. Thang nhiệt độ - Nhiệt kế',
  4: 'Bài 4. Nhiệt dung riêng',
  5: 'Bài 5. Nhiệt nóng chảy riêng',
  6: 'Bài 6. Nhiệt hoá hơi riêng',
};
const LO = 'CH_17879397015';   // đuôi mã của lô nhiệt kế: 08_xxxx / 09_xxxx / 10_xxxx

/* Mã đuôi → [bài, dạng]. Lô nhiệt kế ghi đuôi 4 kí tự; lô 18/8 ghi đuôi sau CH_1787069619016_. */
const GAN = {
  /* A — Quy đổi thang nhiệt độ */
  ...Object.fromEntries(['i7bi', 'gcf1', '50el', 'ynta', 'rjzj', 'u7v1', 'hghf', 'b0h1', 'p7lp', 'x173', '5sz3', 'a5pb', 'ekiz', 'raad', 'ckm5', 'h6vg', 'rc1h'].map(k => [k, [3, 'Quy đổi thang nhiệt độ']])),
  /* A — Nguyên lý hoạt động của nhiệt kế */
  ...Object.fromEntries(['cpzx', 'rd9s', '2btp', 'gbn4', 'y4ho', 'o078', 'kvk9', 'qh0w', 'plg9', '1qr3', 'w1gg', '481z', 'me8u', 'zou9', '2fya', 'twl0', 'dold', 'pg9b', 'mtma', 'kijb', 'fuf0', 'p93f', '9kfz'].map(k => [k, [3, 'Nguyên lý hoạt động của nhiệt kế']])),
  /* A — Tính độ chênh lệch nhiệt độ */
  ...Object.fromEntries(['o6fw', 'aqef', 'd2qv'].map(k => [k, [3, 'Tính độ chênh lệch nhiệt độ']])),
  /* A — Tự suy luận */
  ...Object.fromEntries(['dan5', 'tgdk', '0lpd', 'q5n2'].map(k => [k, [3, 'Tự suy luận']])),
  /* B */
  ixah: [1, 'Lý thuyết về mô hình động học phân tử'], wrl7: [1, 'Lý thuyết về mô hình động học phân tử'],
  ct11: [1, 'Phân biệt các thể và hiện tượng thực tế'],
  ipd4: [1, 'Phân tích đồ thị và sơ đồ chuyển thể'], z4z7: [1, 'Phân tích đồ thị và sơ đồ chuyển thể'],
  fkjm: [2, 'Vận dụng công thức định luật I Nhiệt động lực học ($\\Delta U = A + Q$)'],
  lkdp: [2, 'Vận dụng công thức định luật I Nhiệt động lực học ($\\Delta U = A + Q$)'],
  '5e9c': [2, 'Vận dụng công thức định luật I Nhiệt động lực học ($\\Delta U = A + Q$)'],
  '5k3a': [2, 'Vận dụng công thức định luật I Nhiệt động lực học ($\\Delta U = A + Q$)'],
  pf1q: [2, 'Tự suy luận'], jk32: [2, 'Tự suy luận'],
  lne5: [3, 'Quy đổi thang nhiệt độ'], cob7: [3, 'Quy đổi thang nhiệt độ'], '1l8q': [3, 'Quy đổi thang nhiệt độ'],
  tfe1: [3, 'Tính độ chênh lệch nhiệt độ'],
  uzpb: [3, 'Tự suy luận'], lkts: [3, 'Tự suy luận'],
  btur: [4, 'Tính toán cơ bản về nhiệt lượng'], '7kf6': [4, 'Tính toán cơ bản về nhiệt lượng'],
  r17j: [4, 'Tự suy luận'],
  zbiv: [5, 'Tính nhiệt lượng nóng chảy'], '182n': [5, 'Tính nhiệt lượng nóng chảy'],
  hdkd: [5, 'Bài toán biến đổi nhiệt đa giai đoạn'], bz05: [5, 'Bài toán biến đổi nhiệt đa giai đoạn'],
  '9jws': [5, 'Bài toán thực nghiệm'],
  '3oid': [6, 'Tính nhiệt lượng hoá hơi'], d9un: [6, 'Tính nhiệt lượng hoá hơi'],
  swhg: [6, 'Bài toán kết hợp đun nóng và hoá hơi'],
};
const XOA_TRUNG = ['CH_1787451505837_wiwz', 'CH_1787450713397_77mg', 'CH_1787450713397_ulq8', 'CH_1787318243676_bzur'];

const lay = async (b, c = '*') => { let r = [], f = 0; while (true) { const { data } = await sb.from(b).select(c).range(f, f + 999); r.push(...(data || [])); if (!data || data.length < 1000) break; f += 1000; } return r; };
const kho = await lay('questions');
const dm = await lay('question_categories');

/* Tìm câu theo đuôi mã: đuôi phải duy nhất trong hai lô liên quan. */
const ungVien = kho.filter(q => q.question_id.startsWith(LO) || q.question_id.startsWith('CH_1787069619016_'));
const doi = [];
for (const [duoi, [bai, dang]] of Object.entries(GAN)) {
  const cau = ungVien.filter(q => q.question_id.endsWith('_' + duoi));
  if (cau.length !== 1) { console.log(`✗ đuôi ${duoi}: tìm thấy ${cau.length} câu`); continue; }
  const q = cau[0];
  doi.push({ id: q.id, ma: q.question_id, cu: `${q.topic.slice(0, 9)}/${String(q.lesson).slice(0, 7)}/${q.math_form.slice(0, 25)}`, moi: { topic: TOPIC, lesson: BAI[bai], math_form: dang } });
}
console.log(`Gán lại: ${doi.length}/75 câu`);
const dem = {};
for (const d of doi) { const k = `${d.moi.lesson.slice(0, 6)} / ${d.moi.math_form.slice(0, 40)}`; dem[k] = (dem[k] || 0) + 1; }
for (const [k, v] of Object.entries(dem).sort()) console.log(`   ${String(v).padStart(3)}  ${k}`);

/* Danh mục đích phải có sẵn; thiếu thì thêm. */
const khoa = (c) => `${c.grade}|${c.subject}|${c.topic}|${c.lesson}|${c.math_form}`;
const coDM = new Set(dm.map(khoa));
const themDM = [];
for (const d of doi) { const k = `12|Vật lí|${TOPIC}|${d.moi.lesson}|${d.moi.math_form}`; if (!coDM.has(k) && !themDM.some(t => khoa(t) === k)) themDM.push({ grade: '12', subject: 'Vật lí', topic: TOPIC, lesson: d.moi.lesson, math_form: d.moi.math_form }); }
console.log(`Danh mục cần thêm: ${themDM.length}`, themDM.map(t => `${t.lesson.slice(0, 6)}/${t.math_form}`).join(' · '));

/* Bản trùng */
const xoaCau = kho.filter(q => XOA_TRUNG.includes(q.question_id));
console.log(`Xoá bản trùng: ${xoaCau.length}/4`);

/* Danh mục "(không bài)" sẽ rỗng sau khi gán */
const idDoi = new Set(doi.map(d => d.id));
const conLai = kho.filter(q => !idDoi.has(q.id) && !XOA_TRUNG.includes(q.question_id));
const khoaCon = new Set(conLai.map(khoa));
const dmRongKhongBai = dm.filter(c => !String(c.lesson || '').trim() && !khoaCon.has(khoa(c)));
console.log(`Danh mục "(không bài)" rỗng sau khi gán: ${dmRongKhongBai.length}/${dm.filter(c => !String(c.lesson || '').trim()).length}`);

if (!GHI) { console.log('(thử - chưa ghi)'); process.exit(0); }

mkdirSync(SAO_LUU, { recursive: true });
const saoLuu = (ten, rows) => { const tep = `${SAO_LUU}/${ten}.json`; if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(rows, null, 1)); };
saoLuu('gan-lai-bai-truoc', kho.filter(q => idDoi.has(q.id)));
saoLuu('gan-lai-bai-xoa-trung', xoaCau);
saoLuu('gan-lai-bai-dm-khong-bai', dmRongKhongBai);

for (const t of themDM) { const { error } = await sb.from('question_categories').insert(t); console.log(error ? `✗ thêm DM: ${error.message}` : `✓ thêm DM ${t.lesson.slice(0, 6)}/${t.math_form}`); }
let ok = 0;
for (const d of doi) { const { error } = await sb.from('questions').update(d.moi).eq('id', d.id); if (error) console.log('✗', d.ma, error.message); else ok++; }
console.log(`✓ gán lại ${ok} câu`);
for (const q of xoaCau) { const { error } = await sb.from('questions').delete().eq('id', q.id); console.log(error ? `✗ xoá ${q.question_id}: ${error.message}` : `✓ xoá ${q.question_id}`); }
for (const c of dmRongKhongBai) { const { error } = await sb.from('question_categories').delete().eq('id', c.id); if (error) console.log('✗ xoá DM', c.id, error.message); }
console.log(`✓ xoá ${dmRongKhongBai.length} danh mục rỗng · sao lưu ở ${SAO_LUU}/`);
