import { Apod } from '@/lib/types';

export async function getApod(date: string): Promise<Apod | null> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}&thumbs=True`,
      { next: { revalidate: 600 } }
    );

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getApods(
  startDate: string,
  endDate: string
): Promise<Apod[] | null> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=True`,
      { next: { revalidate: 600 } }
    );

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
