/* Cắt màn hình LCD của giả lập rồi tải lên kho ảnh bài giảng (app Lý), ghi địa chỉ để rót. */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, writeFileSync } from 'fs';
import sharp from 'sharp';

const env = {};
for (const l of readFileSync('.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

/* Vùng màn hình LCD trên cửa sổ giả lập 338x714. */
const LCD = { left: 34, top: 186, width: 270, height: 88 };

const ANH = [
  ['pA', 'CASIO_SIN60_RAD', 'casio-ly12c3-01-sin60-radian', 'sin 60 ở chế độ Radian ra số âm'],
  ['pB', 'CASIO_SIN60_DEG', 'casio-ly12c3-02-sin60-do',     'sin 60 ở chế độ Độ'],
  ['pC', 'CASIO_COS_DEG',   'casio-ly12c3-03-cos-do',       'giá trị tức thời tính ở chế độ Độ (sai)'],
  ['pD', 'CASIO_COS_RAD',   'casio-ly12c3-04-cos-radian',   'giá trị tức thời tính ở chế độ Radian (đúng)'],
];

const ra = {};
for (const [tep, khoa, ten, moTa] of ANH) {
  const png = await sharp(`scratch/casio/${tep}.png`)
    .extract(LCD).resize({ width: 810, kernel: 'nearest' }).png().toBuffer();
  const duongDan = `editor_images/${ten}.png`;
  const { error } = await sb.storage.from('lesson_images')
    .upload(duongDan, png, { contentType: 'image/png', upsert: true });
  if (error) { console.log(`✗ ${ten}: ${error.message}`); continue; }
  const { data } = sb.storage.from('lesson_images').getPublicUrl(duongDan);
  ra[khoa] = data.publicUrl;
  console.log(`✓ ${ten}  (${Math.round(png.length / 1024)} KB)  ${moTa}`);
}
writeFileSync('scratch/casio/dia-chi-anh-ly.json', JSON.stringify(ra, null, 2));
