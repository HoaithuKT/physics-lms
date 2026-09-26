// Đo xem một ô (dạng × loại × mức) trả về bao nhiêu byte - tìm ô nặng gây đứt tải.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local','utf8').split('\n')) { const m=l.match(/^([A-Z0-9_]+)=(.*)$/); if(m) env[m[1]]=m[2].trim(); }
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const ra=[]; for(let p=0;;p++){ const {data}=await sb.from('questions')
  .select('math_form, question_type, difficulty, content, explanation, option_a, option_b, option_c, option_d')
  .range(p*1000,(p+1)*1000-1); if(!data?.length)break; ra.push(...data); if(data.length<1000)break; }

const o = new Map();
for (const q of ra) {
  const k = `${q.math_form}|${q.question_type}|${q.difficulty}`;
  const nang = JSON.stringify(q).length;
  const e = o.get(k) || { n: 0, byte: 0 };
  e.n++; e.byte += nang; o.set(k, e);
}
const tong = ra.reduce((s,q)=>s+JSON.stringify(q).length,0);
console.log(`${ra.length} câu · tổng ${(tong/1024/1024).toFixed(1)} MB nếu tải hết`);
console.log('\n5 ô NẶNG NHẤT (đây là thứ trang chọn câu tải về một lượt):');
[...o.entries()].sort((a,b)=>b[1].byte-a[1].byte).slice(0,5).forEach(([k,e]) => {
  const [f,t,d] = k.split('|');
  console.log(`  ${(e.byte/1024/1024).toFixed(2)} MB · ${e.n} câu · ${t} mức ${d} · ${f.slice(0,44)}`);
});
const nangNhat = Math.max(...[...o.values()].map(e=>e.byte));
console.log(`\nÔ nặng nhất: ${(nangNhat/1024/1024).toFixed(2)} MB`);
