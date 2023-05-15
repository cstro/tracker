'use client';

import { useFirestore } from '@/context/FirestoreContext';
import { toCurrency } from '@/utils/currency';

export default function AccountsList() {
  const { accounts } = useFirestore();

  return (
    <>
      <ul>
        {accounts.map((account: any) => (
          <li key={account.id}>
            {account.provider} {account.name}: {toCurrency(account.balance)}
          </li>
        ))}
      </ul>
    </>
  );
}
