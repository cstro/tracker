import { useEffect, useState } from 'react';

import { fetchCategories } from '@/firebase/firestore/getData';

export default function useCategories() {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories(
        data.sort((a: any, b: any) => a.name.localeCompare(b.name))
      );
    });
  }, []);

  const parentCategories = categories.filter(
    (category: any) => !category.parentId
  );

  const childCategories = categories.filter(
    (category: any) => category.parentId
  );

  const groupedCategories = parentCategories.map((parentCategory: any) => {
    const children = childCategories.filter(
      (childCategory: any) => childCategory.parentId === parentCategory.id
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
  };
}
