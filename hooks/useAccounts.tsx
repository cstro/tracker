import { useEffect, useState } from 'react';

import { fetchAccounts } from '@/firebase/firestore/getData';

export default function useAccounts() {
  const [accounts, setAccounts] = useState<any>([]);

  useEffect(() => {
    fetchAccounts().then((data) => {
      setAccounts(data.sort((a: any, b: any) => a.name.localeCompare(b.name)));
    });
  }, []);

  return {
    accounts,
  };
}
