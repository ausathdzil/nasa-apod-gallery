import { useState, useEffect, useDebugValue } from 'react';
import { Apod } from '@/lib/types';
import { secret, today, formattedStartDate } from '@/lib/constants';

export function useApods(): Apod[] {
  const [apods, setApods] = useState<Apod[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApods() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${formattedStartDate}&end_date=${today}&thumbs=True`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const modifiedData = data.toReversed().map((apod: Apod) => {
          if (apod.media_type === 'video') {
            apod.url = apod.thumbnail_url;
          }

          return apod;
        });

        setApods(modifiedData);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchApods();
  }, []);

  useDebugValue(apods ?? 'loading..');

  if (error) {
    console.error(error);
    return [];
  }

  return apods;
}
