import { useState, useEffect, useDebugValue } from 'react';
import { Apod } from '@/lib/types';
import { secret } from '@/lib/constants';

export function useCurrentApod(date: string): Apod | undefined {
  const [apod, setApod] = useState<Apod>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCurrentApod(apodDate: string) {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&date=${apodDate}&thumbs=True`
        );
        const data = await response.json();

        if (response.status === 404) {
          const previousDate = new Date(apodDate);
          previousDate.setDate(previousDate.getDate() - 1);
          return fetchCurrentApod(previousDate.toISOString().split('T')[0]);
        }

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        if (data.media_type === 'video' && data.thumbnail_url) {
          data.url = data.thumbnail_url;
        }

        setApod(data);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      }
    }

    fetchCurrentApod(date);
  }, [date]);

  useDebugValue(apod ?? 'loading...');

  if (error) {
    console.error(error);
    return undefined;
  }

  return apod;
}
