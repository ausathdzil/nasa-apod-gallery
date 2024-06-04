import { useState, useEffect, useDebugValue } from 'react';

const secret = process.env.NEXT_PUBLIC_NASA_API_KEY;
const date = new Date();
const today = date.toISOString().split('T')[0];

export function useApods() {
  const [apods, setApods] = useState([]);

  useEffect(() => {
    async function fetchAPOD() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=2024-05-18&end_date=${today}&thumbs=True`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        const modifiedData = data
          .slice(0, 15)
          .map(
            (apod: {
              media_type: string;
              url: string;
              thumbnail_url: string;
            }) => {
              if (apod.media_type === 'video') {
                apod.url = apod.thumbnail_url;
              }

              return apod;
            }
          );

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
