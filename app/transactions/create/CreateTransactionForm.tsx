'use client';

import dayjs from 'dayjs';
import { Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import { DateValueType } from 'react-tailwindcss-datepicker/dist/types';

import Autocomplete from '@/components/Autocomplete';
import Button from '@/components/Button';
import {
  createAccount,
  createSource,
  createTransaction,
} from '@/firebase/firestore/addData';
import useAccounts from '@/hooks/useAccounts';
import useCategories from '@/hooks/useCategories';
import useSources from '@/hooks/useSources';

export default function CreateTransactionForm() {
  const router = useRouter();

  const { groupedCategories } = useCategories();
  const { sources } = useSources();
  const { accounts } = useAccounts();

  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState<string>('');
  const [date, setDate] = useState<DateValueType>({
    startDate: dayjs().format('YYYY-MM-DD'),
    endDate: dayjs().format('YYYY-MM-DD'),
  });
  const [type, setType] = useState<'income' | 'expense'>('expense');

  const handleSourceChange = (value: string) => {
    setSource(value);
  };

  const handleAccountChange = (value: string) => {
    setAccount(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date?.startDate) {
      return;
    }

    let sourceId = sources.find((s) => s.name === source)?.id;
    let accountId = accounts.find((a) => a.name === account)?.id;

    if (!sourceId) {
      const newSource = await createSource({ name: source });
      sourceId = newSource.id;
    }

    if (!accountId) {
      const newAccount = await createAccount({ name: account });
      accountId = newAccount.id;
    }

    await createTransaction({
      amount: Number(amount),
      type,
      date: Timestamp.fromDate(new Date(date.startDate)),
      categoryId: category,
      sourceId,
      accountId,
    });

    router.push('/dashboard');
  };

  return (
    <div className="max-w-xs">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Income or Expense</label>
            <label className="flex flex-row items-center space-x-2">
              <input
                type="radio"
                onChange={() => setType('expense')}
                checked={type === 'expense'}
              />
              <span>Expense</span>
            </label>
            <label className="flex flex-row items-center space-x-2">
              <input
                type="radio"
                onChange={() => setType('income')}
                checked={type === 'income'}
              />
              <span>Income</span>
            </label>
          </div>
        </div>

        <div className="flex flex-row text-4xl mb-4">
          <div className="bg-gray-200 text-gray-500 px-4 py-2 rounded-tl-md rounded-bl-md">
            £
          </div>
          <input
            type="number"
            name="amount"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-tr-md rounded-br-md"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {groupedCategories.map((category: any) => (
                <optgroup key={category.id} label={category.name}>
                  {category.children.map((child: any) => (
                    <option key={child.id} value={child.id}>
                      {child.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Account</label>
            <Autocomplete
              value={account}
              onChange={handleAccountChange}
              options={accounts.map((account) => account.name)}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Source</label>
            <Autocomplete
              value={source}
              onChange={handleSourceChange}
              options={sources.map((source) => source.name)}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-sm font-bold mb-1">Date</label>
            <Datepicker
              asSingle
              value={date}
              onChange={(value) => setDate(value)}
            />
          </div>
        </div>

        <Button type="submit">Create Transaction</Button>
      </form>
    </div>
  );
}
