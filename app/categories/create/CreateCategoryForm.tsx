'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Button from '@/components/Button';
import { useFirestore } from '@/context/FirestoreContext';
import {
  CreateCategoryPayload,
  createCategory,
} from '@/firebase/firestore/addData';

export default function CreateCategoryForm() {
  const [name, setName] = useState('');
  const [parent, setParent] = useState('');
  const { parentCategories, refetchCategories } = useFirestore();

  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleParentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: CreateCategoryPayload = {
      name,
    };

    if (parent) {
      data.parentId = parent;
    }

    await createCategory(data);
    await refetchCategories();

    router.push('/categories');
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

      <div className="mb-4">
        <label className="text-sm mb-2 block" htmlFor="parent">
          Parent
        </label>
        <select
          className="border border-gray-300 rounded-md px-2 py-1"
          id="parent"
          name="parent"
          onChange={handleParentChange}
        >
          <option value="">None</option>
          {parentCategories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">Create Category</Button>
    </form>
  );
}
