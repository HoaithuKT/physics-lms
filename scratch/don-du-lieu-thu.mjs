// Dọn mọi thứ tôi tạo ra khi chạy thử Đợt 1A, kể cả trả lại usage_count.
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

// 1) Trả lại usage_count cho các câu đã bị cộng khi thử chốt đề
const { data: bd } = await sb.from('bo_de_thi').select('id, ten, da_chot, cau_hoi');
for (const b of bd || []) {
  if (!b.da_chot) continue;
  const ids = (b.cau_hoi || []).map(q => q.id).filter(Boolean);
  const { data: q } = await sb.from('questions').select('id, question_id, usage_count').in('id', ids);
  for (const x of q || []) {
    const moi = Math.max(0, (Number(x.usage_count) || 0) - 1);
    await sb.from('questions').update({ usage_count: moi }).eq('id', x.id);
    console.log(`  trả lại ${x.question_id}: ${x.usage_count} -> ${moi}`);
  }
}

// 2) Xoá bộ đề, ma trận mẫu và bản nháp thử
for (const [bang, dk] of [['bo_de_thi', null], ['ma_tran_mau', null], ['ban_nhap_soan', 'ra_de']]) {
  let q = sb.from(bang).delete();
  q = dk ? q.eq('loai', dk) : q.not('id', 'is', null);
  const { data, error } = await q.select('id');
  console.log(`${bang}: ` + (error ? 'lỗi ' + error.message : `đã xoá ${data?.length || 0} dòng`));
}
