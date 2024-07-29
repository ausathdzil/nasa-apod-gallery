import { Apod } from '@/lib/types';
import { secret, today, formattedStartDate } from '@/lib/constants';

export async function getApod(currentDate: string): Promise<Apod> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${secret}&date=${currentDate}&thumbs=True`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
}

export async function getApods(): Promise<Apod[]> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${formattedStartDate}&end_date=${today}&thumbs=True`,
    { next: { revalidate: 600 } }
  );

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
}
