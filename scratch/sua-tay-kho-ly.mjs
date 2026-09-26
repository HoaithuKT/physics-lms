/**
 * Sửa tay 17 câu còn lại của kho Lý (đọc từng câu, 11/9/2026):
 *   - 10 TLN đáp án không tô được vào phiếu 4 ô: đổi cách hỏi / làm tròn để đáp án là số ≤ 4 ô
 *   - 4 NLC có hai phương án giống hệt: sửa phương án nhiễu (và một đáp án tính sai 2,21 → 2,12)
 *   - 1 DS thiếu ý d): thêm ý d), đáp án SSĐ → SSĐĐ
 *   - 2 câu thiếu một dấu $: chèn lại
 * Sao lưu bản gốc ở backups/don-kho-ly-20260911/sua-tay-goc.json. Thử trước, `ghi` mới ghi.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/don-kho-ly-20260911';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Mỗi mục: mã câu → hàm nhận bản ghi, trả về các cột cần đổi (hoặc null nếu không khớp kì vọng). */
const thay = (t, cu, moi) => { if (!t.includes(cu)) throw new Error(`không thấy "${cu.slice(0, 40)}"`); return t.replace(cu, moi); };
const SUA = {
  /* ---- TLN ---- */
  CH_1787070824852_xls5: q => ({
    content: thay(q.content, '(làm tròn đến $2$ chữ số thập phân)', '(làm tròn đến hàng đơn vị)'),
    correct_answer: '327',
    explanation: q.explanation + '\nLàm tròn đến hàng đơn vị: $c_{\\text{kl}} \\approx 327$ J/kg $\\cdot$ K.',
  }),
  CH_1787154025960_vr4z: q => ({
    content: thay(q.content, 'là bao nhiêu gam?', 'là $X \\cdot 10^{-24}$ g. Tìm $X$ (làm tròn đến hai chữ số thập phân).'),
    correct_answer: '3,32',
    explanation: q.explanation + '\nVậy $X = 3{,}32$.',
  }),
  CH_1787154025960_qju1: () => ({ correct_answer: '1,5' }),
  CH_1787154025960_6daw: q => ({
    content: thay(q.content, 'là bao nhiêu?', 'là $X \\cdot 10^{22}$ phân tử. Tìm $X$ (làm tròn đến hai chữ số thập phân).'),
    correct_answer: '3,34',
    explanation: q.explanation + '\nVậy $X = 3{,}34$.',
  }),
  CH_1787155499882_iyf2: q => ({
    content: thay(q.content, 'tăng hay giảm bao nhiêu Pa?', 'giảm bao nhiêu kPa?'),
    correct_answer: '400',
    explanation: thay(q.explanation, '$= 400000$ Pa.', '$= 400$ kPa.'),
  }),
  CH_1787451505837_cjwu: q => ({
    content: thay(q.content, 'bằng bao nhiêu?', 'bằng $X \\cdot 10^5$. Tìm $X$ (làm tròn đến hai chữ số thập phân).'),
    correct_answer: '8,82',
    explanation: q.explanation + '\nVậy $X = 8{,}82$.',
  }),
  CH_1787276715808_vinh: q => ({
    content: thay(q.content, 'trong ống dây.', 'trong ống dây theo đơn vị V (làm tròn đến hàng đơn vị).'),
    correct_answer: '222',
    explanation: q.explanation + '\nLàm tròn: $e_c \\approx 222$ V.',
  }),
  CH_1787055802832_zpa0: q => ({
    content: thay(q.content, '(tính ra đơn vị kJ)', '(tính ra đơn vị kJ, làm tròn đến hàng đơn vị)'),
    correct_answer: '476',
    explanation: q.explanation + '\nLàm tròn đến hàng đơn vị: $Q \\approx 476$ kJ.',
  }),
  CH_1787154025960_k7nz: q => ({
    content: thay(q.content, 'là bao nhiêu?', 'là $X \\cdot 10^{24}$ phân tử. Tìm $X$ (làm tròn đến một chữ số thập phân).'),
    correct_answer: '1,2',
    explanation: q.explanation + '\nVậy $X \\approx 1{,}2$.',
  }),
  CH_1787384951279_vepk: q => ({
    content: thay(q.content, 'theo đơn vị N.', 'theo đơn vị mN (làm tròn đến hai chữ số thập phân).'),
    correct_answer: '1,15',
    explanation: q.explanation + '\nĐổi đơn vị: $F = 1{,}152 \\cdot 10^{-3}$ N $\\approx 1{,}15$ mN.',
  }),
  /* ---- NLC hai phương án giống nhau ---- */
  CH_1787191330545_rlc9: () => ({ option_c: '$600$ K.' }),
  CH_1787385363221_yyns: () => ({ option_b: '$100\\sqrt{2}$ V.', option_d: '$50\\sqrt{2}$ V.' }),
  CH_1787191062146_cs2z: () => ({ option_d: '$2p_1, 3T_1$.' }),
  CH_1787549492341_bhfn: q => ({
    option_a: '$A + B = 2,12$.',
    option_c: '$A + B = 1,41$.',
    explanation: thay(q.explanation, '(gần với đáp án A: $A + B = 2,21$)', '(đáp án A)'),
  }),
  /* ---- DS thiếu ý d ---- */
  CH_1787191330545_3g1n: q => ({
    option_d: 'Khối lượng riêng của khí sau khi đun là $1$ g/lít.',
    correct_answer: 'SSĐĐ',
    explanation: q.explanation + '\nd) Khối lượng riêng sau khi đun $\\rho_2 = \\dfrac{m}{V_2} = \\dfrac{10}{10} = 1$ g/lít $\\Rightarrow$ Đúng.',
  }),
  /* ---- thiếu dấu $ ---- */
  CH_1787130555318_ceix: q => ({ content: thay(q.content, '$2,3\\cdot 10^6\\ \\text{J/kg}.', '$2,3\\cdot 10^6\\ \\text{J/kg}$.') }),
  CH_1787135757516_p7ka: q => ({ explanation: thay(q.explanation, '\n\\%\\Delta l =', '\n$\\%\\Delta l =') }),
};

const { data: goc } = await sb.from('questions').select('*').in('question_id', Object.keys(SUA));
mkdirSync(SAO_LUU, { recursive: true });
const tep = `${SAO_LUU}/sua-tay-goc.json`;
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(goc, null, 1));

let ok = 0;
for (const [ma, f] of Object.entries(SUA)) {
  const q = goc.find(x => x.question_id === ma);
  if (!q) { console.log(`✗ ${ma}: không thấy`); continue; }
  let moi;
  try { moi = f(q); } catch (e) { console.log(`✗ ${ma}: ${e.message}`); continue; }
  console.log(`${ma}: ${Object.entries(moi).map(([k, v]) => `${k}=${JSON.stringify(String(v).slice(-60))}`).join(' · ')}`);
  if (!GHI) continue;
  const { error } = await sb.from('questions').update(moi).eq('id', q.id);
  if (error) console.log(`   ✗ ${error.message}`); else ok++;
}
console.log(GHI ? `\n✓ đã sửa ${ok}/${Object.keys(SUA).length} · sao lưu ở ${tep}` : '\n(thử - chưa ghi)');
