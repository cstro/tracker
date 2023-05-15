import Link from 'next/link';

import PageHeading from '@/components/PageHeading';

import SourcesList from './SourcesList';

export default function Sources() {
  return (
    <>
      <PageHeading>Sources</PageHeading>

      <Link
        className="text-blue-500 inline-block underline mb-4"
        href="/sources/create"
      >
        Create Source
      </Link>

      <SourcesList />
    </>
  );
}
