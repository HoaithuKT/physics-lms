import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
for (const t of ['ma_tran_mau', 'bo_de_thi', 'ban_nhap_soan']) {
  const { error } = await sb.from(t).select('id').limit(1);
  console.log(`${t}: ` + (error ? 'LỖI - ' + error.message : 'OK'));
}
