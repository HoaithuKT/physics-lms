/**
 * Ba dòng danh mục rỗng còn sót sau khi sửa câu gắn nhầm (sua-gan-nham-ly12c3.mjs):
 *   - Bài 14 / "Tính lực từ F và cảm ứng từ B"        (dạng của Bài 15, Bài 14 không còn câu nào)
 *   - Bài 18 / "Xác định chiều dòng điện cảm ứng"      (dạng của Bài 16, Bài 18 không còn câu nào)
 *   - (không bài) / "Truyền tải với công suất tiêu thụ không đổi"  (Bài 18 đã có dòng riêng)
 * Để lại thì bộ soi phủ dạng cứ báo ✗ mãi cho ba dạng không có câu. Xoá sau khi sao lưu.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/soan-ly12c3-20260911';
const ID = ['b0a03714-4ea4-4c13-b8e5-a333f6f25740', '4a680df8-71cb-42a9-8998-ec98a08941b1', 'c1ce526e-21c6-46dc-b9bc-cfdfc69d6e33'];

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data: dm } = await sb.from('question_categories').select('*').in('id', ID);
for (const c of dm) {
  let q = sb.from('questions').select('id', { count: 'exact', head: true })
    .eq('grade', c.grade).eq('topic', c.topic).eq('math_form', c.math_form);
  q = c.lesson === null ? q.is('lesson', null) : q.eq('lesson', c.lesson);
  const { count } = await q;
  console.log(`${c.lesson || '(không bài)'} / ${c.math_form}: ${count} câu`);
  if (count > 0) { console.log('   ✗ còn câu, không xoá'); process.exit(1); }
}
if (!GHI) { console.log('(thử - chưa xoá)'); process.exit(0); }
mkdirSync(SAO_LUU, { recursive: true });
const tep = `${SAO_LUU}/danh-muc-rong-goc.json`;
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(dm, null, 1));
const { error } = await sb.from('question_categories').delete().in('id', ID);
console.log(error ? `✗ ${error.message}` : `✓ đã xoá ${dm.length} dòng, sao lưu ở ${tep}`);
