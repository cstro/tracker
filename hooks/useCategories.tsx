import { useEffect, useState } from 'react';

import { fetchCategories } from '@/firebase/firestore/getData';
import { Category } from '@/types/firestore/api.types';

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await fetchCategories();
    setCategories(data.sort((a, b) => a.name.localeCompare(b.name)));
  };

  const parentCategories = categories.filter((category) => !category.parentId);

  const childCategories = categories.filter((category) => category.parentId);

  const groupedCategories = parentCategories.map((parentCategory) => {
    const children = childCategories.filter(
      (childCategory) => childCategory.parentId === parentCategory.id
    );

    return {
      ...parentCategory,
      children,
    };
  });

  return {
    categories,
    groupedCategories,
    parentCategories,
    childCategories,
    refetch: fetch,
  };
}
