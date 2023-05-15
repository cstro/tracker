import { useEffect, useState } from 'react';

import { fetchAccounts } from '@/firebase/firestore/getData';
import { Account } from '@/types/firestore/api.types';

export default function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetch = async () => {
    const data = await fetchAccounts()
    setAccounts(data.sort((a, b) => a.name.localeCompare(b.name)));
  }

  useEffect(() => {
    fetch();
  }, []);

  return {
    accounts,
    refetch: fetch,
  };
}
