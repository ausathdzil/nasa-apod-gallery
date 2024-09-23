import { Apod } from '@/lib/types';

export async function getApod(date: string): Promise<Apod> {
  try {
    let res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}&thumbs=True`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    let data = await res.json();

    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export async function getApods(
  startDate: string,
  endDate: string
): Promise<Apod[]> {
  try {
    let res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=True`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    let data = await res.json();

    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
