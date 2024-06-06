import { useState, useEffect, useDebugValue } from 'react';
import { Apod } from '@/lib/types';
import { secret, today, formattedStartDate } from '@/lib/constants';

export function useApods(): Apod[] {
  const [apods, setApods] = useState<Apod[]>([]);

  useEffect(() => {
    async function fetchApods() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${formattedStartDate}&end_date=${today}&thumbs=True`,
          {
            next: {
              revalidate: 3600,
            },
          }
        );
        const data = await response.json();

        const modifiedData = data.toReversed().map((apod: Apod) => {
          if (apod.media_type === 'video') {
            apod.url = apod.thumbnail_url;
          }

          return apod;
        });

        setApods(modifiedData);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    fetchApods();
  }, []);

  useDebugValue(apods ?? 'loading..');

  return apods;
}
