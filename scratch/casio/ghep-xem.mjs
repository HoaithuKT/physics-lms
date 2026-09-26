import sharp from 'sharp';
const LCD = { left: 34, top: 186, width: 270, height: 88 };
const ten = ['pA', 'pB', 'pC', 'pD'];
const anh = [];
for (const t of ten) anh.push(await sharp(`scratch/casio/${t}.png`).extract(LCD).resize({ width: 810, kernel: 'nearest' }).png().toBuffer());
const h = 264;
await sharp({ create: { width: 810, height: h * 4 + 30, channels: 3, background: '#fff' } })
  .composite(anh.map((input, i) => ({ input, top: i * (h + 10), left: 0 }))).png().toFile('scratch/casio/xem-4.png');
console.log('ok');
