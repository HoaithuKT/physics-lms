/**
 * Một câu trong kho (CH_1787238233884_28in) có công thức $...$ bị xuống dòng ở giữa, bộ dựng
 * Word không nhận ra nên in nguyên chữ LaTeX. Nối các dòng bên trong cặp $...$ ấy lại bằng
 * khoảng trắng. Chỉ đụng đúng câu này; sao lưu trước.
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const MA = 'CH_1787238233884_28in';
const SAO_LUU = 'backups/soan-ly12c3-20260911';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const { data: q } = await sb.from('questions').select('*').eq('question_id', MA).maybeSingle();

/* Trong mỗi cặp $...$ (không phải $$), thay xuống dòng bằng một khoảng trắng. */
const moi = q.explanation.replace(/(^|[^$])\$(?!\$)([^$]*?)\$/gs, (c, truoc, ruot) =>
  ruot.includes('\n') ? `${truoc}$${ruot.replace(/\s*\n\s*/g, ' ')}$` : c);
console.log(moi === q.explanation ? 'không có gì để sửa' : 'sẽ sửa:\n' + moi.slice(moi.indexOf('cos 60') - 5, moi.indexOf('cos 60') + 110));
if (!GHI || moi === q.explanation) process.exit(0);

mkdirSync(SAO_LUU, { recursive: true });
const tep = `${SAO_LUU}/cau-${MA}-goc.json`;
if (!existsSync(tep)) writeFileSync(tep, JSON.stringify(q, null, 1));
const { error } = await sb.from('questions').update({ explanation: moi }).eq('question_id', MA);
console.log(error ? `✗ ${error.message}` : '✓ đã sửa');
