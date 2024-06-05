import { useState, useEffect, useDebugValue } from 'react';

const secret = process.env.NEXT_PUBLIC_NASA_API_KEY;
const date = new Date();
const today = date.toISOString().split('T')[0];

export type Apod = {
  date: string;
  url: string;
  title: string;
  media_type: string;
  thumbnail_url: string;
  explanation: string;
  copyright?: string;
};

export function useApods(): Apod[] {
  const [apods, setApods] = useState<Apod[]>([]);

  useEffect(() => {
    async function fetchAPOD() {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=2024-05-18&end_date=${today}&thumbs=True`,
          {
            next: {
              revalidate: 3600,
            },
          }
        );
        const data = await response.json();

        const modifiedData = data
          .toReversed()
          .slice(0, 15)
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

    fetchAPOD();
  }, []);

  useDebugValue(apods ?? 'loading..');

  return apods;
}
