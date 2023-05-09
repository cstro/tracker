'use client';

import useSources from '@/hooks/useSources';

export default function SourcesList() {
  const { sources } = useSources();

  return (
    <>
      <ul>
        {sources.map((source: any) => (
          <li key={source.id}>{source.name}</li>
        ))}
      </ul>
    </>
  );
}
