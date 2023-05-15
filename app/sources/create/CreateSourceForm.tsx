'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/Button';
import { useFirestore } from '@/context/FirestoreContext';
import {
  CreateSourcePayload,
  createSource,
} from '@/firebase/firestore/addData';

export default function CreateCategoryForm() {
  const [name, setName] = useState('');
  const { refetchSources } = useFirestore();

  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: CreateSourcePayload = {
      name,
    };

    await createSource(data);
    await refetchSources();

    router.push('/sources');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="text-sm mb-2 block" htmlFor="name">
          Category Name
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>

      <Button type="submit">Create Source</Button>
    </form>
  );
}
