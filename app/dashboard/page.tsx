import Link from 'next/link';

import { Heading } from '@/components/Heading';

export default function Dashboard() {
  return (
    <main>
      <Heading size="h1" className="mb-8">
        £23,500.12
      </Heading>

      <Link href="/transaction/create">New transaction</Link>

      <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
        <section>
          <Heading size="h4" className="text-gray-900">
            Recent Transactions
          </Heading>
        </section>

        <section>
          <Heading size="h4" className="text-gray-900">
            May 2023
          </Heading>
        </section>

        <section>
          <Heading size="h4" className="text-gray-900">
            Accounts
          </Heading>
        </section>
      </div>
    </main>
  );
}
