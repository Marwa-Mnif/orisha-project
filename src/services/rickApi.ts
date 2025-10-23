import type { CharactersResponse } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

function buildQueryWithSearchParams(params: Record<string, string | number | undefined>) {
  const entries = Object.entries(params);
  const filtered = entries.filter(([_, value]) => value !== undefined && value !== null && String(value).length > 0);
  const queryString = filtered
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
}


export async function fetchAllCharacters(
  {
    page,
    name,
    filters,
  }: {
    page?: number;
    name?: string;
    filters?: { status?: string; species?: string; gender?: string };
  }
): Promise<CharactersResponse> {
  const params: Record<string, string | number | undefined> = {
    page: page ?? 1,
    name: name ?? undefined,
    status: filters?.status,
    species: filters?.species,
    gender: filters?.gender,
  };

  const url = `${BASE_URL}/character${buildQueryWithSearchParams(params)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const text = await response.text().catch(() => response.statusText);
      throw new Error(`API error ${response.status}: ${text}`);
    }
    return (await response.json()) as CharactersResponse;
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === 'AbortError') throw err;
    if (err instanceof Error) throw new Error(`Network or parsing error: ${err.message}`);
    throw new Error('Unknown error while fetching characters');
  }
}

