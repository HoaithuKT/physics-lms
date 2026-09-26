import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const env = {};
for (const l of fs.readFileSync('D:/claude/physics-lms/.env.local', 'utf8').split('\n')) {
  const m = l.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim();
}
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const che = (k) => k.length > 12 ? k.slice(0,8) + '…' + k.slice(-4) : '(quá ngắn)';

console.log('=== .env.local (khoá cấu hình sẵn) ===');
['GEMINI_API_KEY','GEMINI_API_KEY_1','GEMINI_API_KEY_2','GEMINI_API_KEY_3','GEMINI_API_KEY_4'].forEach(k => {
  if (env[k]) console.log('  ' + k + ' = ' + che(env[k]));
});
console.log('  NEXT_PUBLIC_ADMIN_EMAIL =', env.NEXT_PUBLIC_ADMIN_EMAIL);
console.log('  NEXT_PUBLIC_SUPABASE_URL =', env.NEXT_PUBLIC_SUPABASE_URL);
console.log('  NEXT_PUBLIC_SUPABASE_ANON_KEY =', che(env.NEXT_PUBLIC_SUPABASE_ANON_KEY||''));
console.log('  SUPABASE_SERVICE_ROLE_KEY =', che(env.SUPABASE_SERVICE_ROLE_KEY||''));

console.log('\n=== Bảng ai_keys (khoá thêm tay qua giao diện) ===');
const { data: aiKeys, error } = await sb.from('ai_keys').select('*');
if (error) console.log('  Lỗi:', error.message);
else if (!aiKeys?.length) console.log('  (trống - chưa ai thêm khoá nào qua giao diện)');
else aiKeys.forEach(k => console.log('  ' + che(k.api_key) + '  thêm lúc ' + k.created_at));

console.log('\n=== Bảng ai_key_blocks (khoá đang bị treo do lỗi hạn mức) ===');
const { data: blocks, error: e2 } = await sb.from('ai_key_blocks').select('*');
if (e2) console.log('  Lỗi:', e2.message, '(có thể bảng chưa được tạo)');
else if (!blocks?.length) console.log('  (trống - không có khoá nào đang bị treo)');
else blocks.forEach(b => console.log('  ' + che(b.api_key||'') + ' / model ' + (b.model||'?') + '  lý do: ' + (b.reason||'')));
