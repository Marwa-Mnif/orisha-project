import { useEffect, useState } from "react";
import { fetchEpisodesByIds } from "../services/rickApi";

export function useEpisodes(episodeUrls: string[]) {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loadingEpisodes, setLoadingEpisodes] = useState(true);
  const [errorEpisodes, setErrorEpisodes] = useState<string | null>(null);

  useEffect(() => {
    if (!episodeUrls.length) return;
    const ids = episodeUrls.map(url => url.split('/').pop()).join(',');
    setLoadingEpisodes(true);
        fetchEpisodesByIds(ids)
          .then(data => setEpisodes(Array.isArray(data) ? data : [data]))
          .catch(err => setErrorEpisodes(err.message))
          .finally(() => setLoadingEpisodes(false));
  }, [episodeUrls]);

  return { episodes, loadingEpisodes, errorEpisodes };
}
