import { useEffect, useState } from 'react';

import { fetchSources } from '@/firebase/firestore/getData';

export default function useSources() {
  const [sources, setSources] = useState<any>([]);

  useEffect(() => {
    fetchSources().then((data) => {
      setSources(data.sort((a: any, b: any) => a.name.localeCompare(b.name)));
    });
  }, []);

  return {
    sources,
  };
}
