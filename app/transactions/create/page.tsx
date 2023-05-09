import PageHeading from '@/components/PageHeading';

import CreateTransactionForm from './CreateTransactionForm';

export default function CreateTransaction() {
  return (
    <main>
      <div className="mb-6">
        <PageHeading>Create Transaction</PageHeading>
      </div>

      <CreateTransactionForm />
    </main>
  );
}
