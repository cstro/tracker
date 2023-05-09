import Link from 'next/link';

import PageHeading from '@/components/PageHeading';

import CategoryList from './CategoryList';

export default function Categories() {
  return (
    <>
      <PageHeading>Categories</PageHeading>

      <Link className="text-blue-500 underline mb-2" href="/categories/create">
        Create new category
      </Link>

      <CategoryList />
    </>
  );
}
