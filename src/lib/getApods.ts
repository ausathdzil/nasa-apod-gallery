import { Apod } from '@/lib/types';
import { secret, today, formattedStartDate } from '@/lib/constants';

export async function getApods(): Promise<Apod[]> {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${secret}&start_date=${formattedStartDate}&end_date=${today}&thumbs=True`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
}
