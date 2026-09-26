/**
 * Tạo/cập nhật bài "Cuối chương 3" trong Ôn tập & Kiểm tra của Vật lí 12, đặt BẢNG CÔNG THỨC vào đó.
 *
 * Năm đề ôn tập do scratch/de-ontap-ly12c3.mjs dựng; bảng này đứng đầu bài (order_index 0).
 *
 *   node scratch/ghi-cuoi-chuong-ly12c3.mjs         -> thử
 *   node scratch/ghi-cuoi-chuong-ly12c3.mjs ghi     -> ghi thật
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';

const GHI = process.argv.includes('ghi');
const SAO_LUU = 'backups/soan-ly12c3-20260911';
const TEN_BAI = 'Cuối chương 3';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const md = readFileSync('scratch/congthuc-ly12c3.md', 'utf8');

const soDong = md.split('\n').filter(l => /^- \*\*.+\|.+\|/.test(l)).length;
console.log(`Bảng công thức: ${md.length} ký tự · ${soDong} dòng đúng khuôn`);

const { data: kh } = await sb.from('courses').select('id,title').eq('id', '8486e14a-17c8-4f41-80b4-ea381a2c0a25');
const khoi = (kh || []).find(k => /12/.test(k.title));
const { data: chOn } = await sb.from('chapters').select('id')
  .eq('course_id', khoi.id).eq('loai', 'on-tap').maybeSingle();
if (!chOn) { console.error('Khối 12 chưa có chuyên đề ôn tập'); process.exit(1); }

let { data: bai } = await sb.from('lessons').select('id')
  .eq('chapter_id', chOn.id).eq('title', TEN_BAI).maybeSingle();

if (!GHI) {
  console.log(bai ? `(thử) bài "${TEN_BAI}" đã có (${bai.id})` : `(thử) sẽ tạo bài "${TEN_BAI}"`);
  process.exit(0);
}

if (!bai) {
  const { data: het } = await sb.from('lessons').select('order_index')
    .eq('chapter_id', chOn.id).order('order_index', { ascending: false }).limit(1);
  const { data: moi, error } = await sb.from('lessons')
    .insert({ course_id: khoi.id, chapter_id: chOn.id, title: TEN_BAI, content_jsonb: {}, order_index: (het?.[0]?.order_index || 0) + 1 })
    .select('id').maybeSingle();
  if (error) { console.error(error.message); process.exit(1); }
  bai = moi;
  console.log(`✓ đã tạo bài "${TEN_BAI}" (${bai.id})`);
}

const { data: cu } = await sb.from('lesson_modules').select('id,content_markdown')
  .eq('lesson_id', bai.id).eq('type', 'theory').maybeSingle();
mkdirSync(SAO_LUU, { recursive: true });
if (cu) {
  const tep = `${SAO_LUU}/congthuc-${cu.id}.md`;
  if (!existsSync(tep)) writeFileSync(tep, cu.content_markdown || '');
  const { error } = await sb.from('lesson_modules').update({ content_markdown: md }).eq('id', cu.id);
  console.log(error ? `✗ ${error.message}` : `✓ cập nhật bảng công thức`);
} else {
  const { error } = await sb.from('lesson_modules').insert({
    lesson_id: bai.id, title: 'Tổng hợp công thức cả chương', type: 'theory',
    content_markdown: md, order_index: 0,
  });
  console.log(error ? `✗ ${error.message}` : `✓ tạo module bảng công thức`);
}
