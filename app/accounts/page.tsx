import PageHeading from '@/components/PageHeading';

import AccountsList from './AccountList';
import Link from 'next/link';

export default function Accounts() {
  return (
    <>
      <PageHeading>Accounts</PageHeading>

      <Link href="/accounts/create" className="text-blue-500 underline mb-2 inline-block">Create account</Link>

      <AccountsList />
    </>
  );
}
