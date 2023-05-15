'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/Button';
import {
  CreateAccountPayload,
  createAccount,
} from '@/firebase/firestore/addData';
import { useFirestore } from '@/context/FirestoreContext';

export default function CreateAccountForm() {
  const { refetchAccounts } = useFirestore();
  const [name, setName] = useState('');
  const [provider, setProvider] = useState('');
  const [balance, setBalance] = useState('');

  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleProviderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvider(e.target.value);
  };

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBalance(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: CreateAccountPayload = {
      name,
      provider,
      balance: Number(balance)
    };

    await createAccount(data);
    await refetchAccounts();

    router.push('/accounts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="text-sm mb-2 block" htmlFor="name">
          Account Name
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1"
          id="name"
          type="text"
          name="name"
          placeholder="Current account"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-sm mb-2 block" htmlFor="provider">
          Account Provider
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1"
          id="provider"
          type="text"
          name="provider"
          placeholder="Monzo"
          value={provider}
          onChange={handleProviderChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="text-sm mb-2 block" htmlFor="provider">
          Balance
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1"
          id="provider"
          type="number"
          name="provider"
          placeholder="123.45"
          value={balance}
          onChange={handleBalanceChange}
          required
        />
      </div>


      <Button type="submit">Create Account</Button>
    </form>
  );
}
