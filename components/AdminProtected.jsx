'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function AdminProtected({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function check() {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (!user) { setAuthorized(false); setLoading(false); return; }

      const { data: usr } = await supabase.from('users').select('is_admin').eq('email', user.email).single();
      setAuthorized(usr?.is_admin === true);
      setLoading(false);
    }
    check();
  }, []);

  if (loading) return <p>Checking...</p>;
  if (!authorized) return <p>Access denied. Admins only.</p>;
  return <>{children}</>;
}
