'use client';

import { useRouter } from 'next/navigation';

import login from '@/firebase/auth';

export default function Login() {
  const router = useRouter();

  const handleLoginClick = async () => {
    // TODO: Add error logic.
    const { result } = await login();

    return router.push('/admin');
  };

  return (
    <main>
      <button
        onClick={handleLoginClick}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Login
      </button>
    </main>
  );
}
