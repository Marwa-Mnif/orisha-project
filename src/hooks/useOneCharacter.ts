import { useEffect, useState } from 'react';
import type { Character } from '../types/character';
import { fetchCharacterById } from '../services/rickApi';

export function useOneCharacter(id: number | undefined) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetchCharacterById(id)
      .then(setCharacter)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { character, loading, error };
}
