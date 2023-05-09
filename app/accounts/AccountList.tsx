'use client';

import useAccounts from '@/hooks/useAccounts';
import { toCurrency } from '@/utils/currency';

export default function AccountsList() {
  const { accounts } = useAccounts();

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
