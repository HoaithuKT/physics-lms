const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xnnwrymrcuaqyfxhsmer.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubndyeW1yY3VhcXlmeGhzbWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDc3NjkyMCwiZXhwIjoyMTAwMzUyOTIwfQ.vUsYrc1ZmFoAapU2vEs1Be9P-nWNQCEkliFie7zHZk0';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

async function run() {
  console.log("Listing users...");
  const { data: usersData, error: listError } = await supabase.auth.admin.listUsers();
  
  if (listError) {
      console.log("List error:", listError.message);
  } else {
      const badUsers = usersData.users.filter(u => u.email === 'admin@loplycothu.com');
      for (const u of badUsers) {
          console.log("Deleting bad user:", u.id);
          await supabase.auth.admin.deleteUser(u.id);
      }
  }

  console.log("Creating new user...");
  const email = 'admin@loplycothu.com';
  const password = 'admin123456';
  
  const { data, error } = await supabase.auth.admin.createUser({
    email, password, email_confirm: true
  });
  
  if (error) {
      console.log("Create user error:", error.message);
      // Try alternative email
      console.log("Trying alternative email admin123@gmail.com...");
      const altRes = await supabase.auth.admin.createUser({
          email: 'admin123@gmail.com', password, email_confirm: true
      });
      if (altRes.error) {
          console.log("Alternative create user error:", altRes.error.message);
      } else {
          console.log("Alt User created:", altRes.data.user.id);
          await setAdmin(altRes.data.user.id);
      }
  } else {
      console.log("User created:", data.user.id);
      await setAdmin(data.user.id);
  }
  
  async function setAdmin(id) {
       const { error: profileError } = await supabase.from('profiles').upsert({
        id: id,
        role: 'admin',
        is_active: true,
        full_name: 'Cô Thu Vật Lý'
      });
      console.log(profileError ? profileError.message : "SUCCESS_ADMIN");
  }
}
run();
