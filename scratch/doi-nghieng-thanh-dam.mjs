/* Bộ xuất Word không dựng chữ nghiêng *...* (in ra nguyên dấu sao), nên đổi hết thành đậm. */
import { readFileSync, writeFileSync } from 'fs';
for (const n of [14, 15, 16, 17, 18, 19, 20]) {
  const tep = `scratch/lt-ly12c3-bai${n}.md`;
  const cu = readFileSync(tep, 'utf8');
  let dem = 0;
  const moi = cu.replace(/(^|[^*])\*(?!\s|\*)([^*\n]+?)(?<!\s)\*(?!\*)/g, (_, truoc, ruot) => { dem++; return `${truoc}**${ruot}**`; });
  if (dem) writeFileSync(tep, moi);
  console.log(`bài ${n}: đổi ${dem} chỗ`);
}
