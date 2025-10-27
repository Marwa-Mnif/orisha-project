import { LocationDetails } from '../hooks/useLocationDetails';
import type { Character, CharactersResponse } from '../types/character';
import { Filters } from '../types/filters';
import { buildQueryWithSearchParams } from '../utils';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export async function fetchAllCharacters(
  {
    page,
    name,
    filters,
  }: {
    page?: number;
    name?: string;
    filters?: Filters;
  }
): Promise<CharactersResponse> {
  const params: Record<string, string | number | undefined> = {
    page: page ?? 1,
    name: name ?? undefined,
    status: filters?.status,
    species: filters?.species,
    gender: filters?.gender,
  };

  const url = `${API_BASE_URL}/character${buildQueryWithSearchParams(params)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const returnedText = await response.text().catch(() => response.statusText);
      throw new Error(`API error ${response.status}: ${returnedText}`);
    }
    return (await response.json()) as CharactersResponse;
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === 'AbortError') throw err;
    if (err instanceof Error) throw new Error(`Network or parsing error: ${err.message}`);
    throw new Error('Unknown error while fetching characters');
  }
}

export async function fetchCharacterById(id: number): Promise<Character> {
 const url = `${API_BASE_URL}/character/${id}`;
try {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return (await res.json()) as Character;
} catch (err: unknown) {
  if (err instanceof DOMException && err.name === 'AbortError') throw err;
  if (err instanceof Error) throw new Error(`Network or parsing error: ${err.message}`);
  throw new Error('Unknown error while fetching character');
}
}

export async function fetchLocationById(id: number): Promise<LocationDetails> {
 const url = `${API_BASE_URL}/location/${id}`;
try {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return (await res.json()) as LocationDetails;
} catch (err: unknown) {
  if (err instanceof DOMException && err.name === 'AbortError') throw err;
  if (err instanceof Error) throw new Error(`Network or parsing error: ${err.message}`);
  throw new Error('Unknown error while fetching character');
}
}