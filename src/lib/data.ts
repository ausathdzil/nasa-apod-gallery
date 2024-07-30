import { Apod } from '@/lib/types';

export async function getApod(currentDate: string): Promise<Apod> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${currentDate}&thumbs=True`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
}

export async function getApods(
  startDate: string,
  endDate: string
): Promise<Apod[]> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}&thumbs=True`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
}
