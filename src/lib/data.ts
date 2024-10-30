/* eslint-disable @typescript-eslint/no-unused-vars */
type Apod = {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export async function getApod(date: string): Promise<Apod | null> {
  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${date}&thumbs=True`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getApods(): Promise<Apod[] | null> {
  const date = new Date();
  date.setDate(date.getDate() - 14);

  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${
        process.env.NEXT_PUBLIC_NASA_API_KEY
      }&start_date=${date.toISOString().split('T')[0]}&thumbs=True`
    );
    const data = await res.json();
    return data.reverse();
  } catch (error) {
    return null;
  }
}
