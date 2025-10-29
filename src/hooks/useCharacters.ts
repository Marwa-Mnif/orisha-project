import { useEffect, useState } from 'react';
import type { Character } from '../types/character';
import { fetchAllCharacters } from '../services/rickApi';
import { Filters } from '../types/filters';

export function useCharacters(page: number, name:string, filters:Filters) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetchAllCharacters({ page,name, filters })
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, filters, name]);

  return { characters, loading, error, totalPages };
}
