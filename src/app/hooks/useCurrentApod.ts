import { useState, useEffect, useDebugValue } from 'react';
import { Apod } from '@/lib/types';

const secret = process.env.NEXT_PUBLIC_NASA_API_KEY;

export function useCurrentApod(date: string): Apod | undefined {
  const [apod, setApod] = useState<Apod>();

  useEffect(() => {
    async function fetchCurrentApod(apodDate: string) {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&date=${apodDate}&thumbs=True`
        );
        const data = await response.json();

        if (data.media_type === 'video') {
          data.url = data.thumbnail_url;
        }

        setApod(data);
      } catch (error: any) {
        console.error(error.message);
        throw error;
      }
    }

    fetchCurrentApod(date);
  }, [date]);

  useDebugValue(apod ?? 'loading...');

  return apod;
}
