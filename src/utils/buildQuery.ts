
export function buildQueryWithSearchParams(params: Record<string, string | number | undefined>) {
  const entries = Object.entries(params);
  const filtered = entries.filter(([_, value]) => value !== undefined && value !== null && String(value).length > 0);
  const queryString = filtered
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
}