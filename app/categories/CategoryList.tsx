'use client';

import { useFirestore } from '@/context/FirestoreContext';
import useCategories from '@/hooks/useCategories';

export default function CategoryList() {
  const { groupedCategories } = useFirestore();

  return (
    <ul>
      {groupedCategories.map((category) => (
        <li key={category.id}>
          {category.name}
          <ul className="pl-4">
            {category.children.map((childCategory: any) => (
              <li key={childCategory.id}>{childCategory.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
