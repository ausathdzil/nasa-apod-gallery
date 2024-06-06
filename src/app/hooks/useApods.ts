import { useState, useEffect, useDebugValue } from 'react';
import { Apod } from '@/lib/types';

const secret = process.env.NEXT_PUBLIC_NASA_API_KEY;

const date = new Date();
const endDate = date.toISOString().split('T')[0];

const startDate = new Date(date);
startDate.setDate(startDate.getDate() - 15);
const formattedStartDate = startDate.toISOString().split('T')[0];

export function useApods(): Apod[] {
  const [apods, setApods] = useState<Apod[]>([]);

  useEffect(() => {
    async function fetchApods() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${formattedStartDate}&end_date=${endDate}&thumbs=True`,
          {
            next: {
              revalidate: 3600,
            },
          }
        );
        const data = await response.json();

        const modifiedData = data
          .toReversed()
          .map((apod: Apod) => {
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
