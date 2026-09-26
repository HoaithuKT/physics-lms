/* Đợt hai của sửa tay: 4 TLN đáp án còn 5 ô, và 1 lời giải có \nu_e bị đứt thành xuống dòng + u_e. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/don-kho-ly-20260911';
const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) { const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const thay = (t, cu, moi) => { if (!t.includes(cu)) throw new Error(`không thấy "${cu.slice(0, 40)}"`); return t.split(cu).join(moi); };
const SUA = {
  CH_1787113305526_igwt: q => ({
    content: thay(q.content, '(theo đơn vị kJ)', '(theo đơn vị kJ, làm tròn đến một chữ số thập phân)'),
    correct_answer: '44,8',
    explanation: q.explanation + '\nLàm tròn: $Q \\approx 44{,}8$ kJ.',
  }),
  CH_1787135757516_2gh3: q => ({
    content: thay(q.content, 'Tính thể tích theo lít', 'Tính thể tích theo lít (làm tròn đến một chữ số thập phân)'),
    correct_answer: '11,8',
    explanation: q.explanation + '\nLàm tròn: $V_2 \\approx 11{,}8$ lít.',
  }),
  CH_1787155499882_y9wd: q => ({
    content: thay(q.content, 'dưới áp suất $150$ atm', 'dưới áp suất $100$ atm'),
    correct_answer: '143',
    explanation: thay(q.explanation, '\\frac{150}{1} = 214,5', '\\frac{100}{1} = 143'),
  }),
  CH_1787191330545_yig7: q => ({
    content: thay(q.content, 'bằng bao nhiêu kg/mol?', 'bằng bao nhiêu g/mol (làm tròn đến hàng đơn vị)?'),
    correct_answer: '29',
    explanation: q.explanation + '\nĐổi đơn vị: $M \\approx 0{,}029$ kg/mol $= 29$ g/mol.',
  }),
  CH_1787545134974_ukzl: q => ({ explanation: thay(q.explanation, '$+ \nu_e$', '$+ \\nu_e$') }),
};
const { data: goc } = await sb.from('questions').select('*').in('question_id', Object.keys(SUA));
mkdirSync(SAO_LUU, { recursive: true });
const tep = `${SAO_LUU}/sua-tay-goc-2.json`;
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(goc, null, 1));
let ok = 0;
for (const [ma, f] of Object.entries(SUA)) {
  const q = goc.find(x => x.question_id === ma);
  let moi; try { moi = f(q); } catch (e) { console.log(`✗ ${ma}: ${e.message}`); continue; }
  console.log(`${ma}: ${Object.entries(moi).map(([k, v]) => `${k}=${JSON.stringify(String(v).slice(-70))}`).join(' · ')}`);
  if (!GHI) continue;
  const { error } = await sb.from('questions').update(moi).eq('id', q.id);
  if (error) console.log(`   ✗ ${error.message}`); else ok++;
}
console.log(GHI ? `\n✓ đã sửa ${ok}/${Object.keys(SUA).length}` : '\n(thử - chưa ghi)');
