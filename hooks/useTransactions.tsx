import { useEffect, useState } from 'react';

import { fetchTransactions } from '@/firebase/firestore/getData';
import { Transaction } from '@/types/firestore/api.types';
import dayjs from 'dayjs';

export default function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await fetchTransactions();
    setTransactions(data.sort((a, b) => dayjs(a.date.toDate()).isBefore(b.date.toDate()) ? 1 : -1));
  };

  return {
    transactions,
    refetch: fetch,
  };
}
