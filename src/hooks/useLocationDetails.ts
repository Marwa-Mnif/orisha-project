import { useEffect, useState } from 'react';
import { fetchLocationById } from '../services/rickApi';
import { LocationDetails } from '../types/location';


export function useLocationDetails(id:number | undefined) {
  const [locationData, setLocationData] = useState<LocationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
     setLoading(true);
        fetchLocationById(Number(id))
          .then((data) => {
            setLocationData(data);
          })
          .catch((err) => setError(err.message))
          .finally(() => setLoading(false));
  }, [id]);

  return { locationData, loading, error };
}
