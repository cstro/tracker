'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { useAuthContext } from '@/context/AuthContext';

function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [user]);

  return <h1>Only logged in users can view this page</h1>;
}

export default Admin;
