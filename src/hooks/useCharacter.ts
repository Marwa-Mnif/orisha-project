import { useEffect, useState } from 'react';
import type { CharactersResponse } from '../types/character';
import { fetchAllCharacters } from '../services/rickApi';

export function useCharacters(search: string, page: number) {
  const [data, setData] = useState<CharactersResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchAllCharacters({ name: search, page })
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [search, page]);

  return { data, loading, error };
}
