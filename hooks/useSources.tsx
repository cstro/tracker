import { useEffect, useState } from 'react';

import { fetchSources } from '@/firebase/firestore/getData';
import { Source } from '@/types/firestore/api.types';

export default function useSources() {
  const [sources, setSources] = useState<Source[]>([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const data = await fetchSources();
    setSources(data.sort((a, b) => a.name.localeCompare(b.name)));
  };

  return {
    sources,
    refetch: fetch,
  };
}
