import { useState, useEffect } from 'react';
import { Apod } from '@/lib/types';
import { secret, today, formattedStartDate } from '@/lib/constants';

export function useApods(): Apod[] {
  const [apods, setApods] = useState<Apod[]>([]);

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

        setApods(data);
      } catch (error: any) {
        console.error(error.message);
      }
    }

    fetchApods();
  }, []);

  return apods;
}
