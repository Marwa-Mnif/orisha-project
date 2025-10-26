import { useEffect, useState } from 'react';
import type { Character } from '../types/character';
import { fetchAllCharacters } from '../services/rickApi';

export function useCharacters(page: number) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetchAllCharacters({ page })
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading, error, totalPages };
}
