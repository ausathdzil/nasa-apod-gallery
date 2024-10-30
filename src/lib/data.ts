type Apod = {
  title: string;
  date: string;
  url: string;
  hdurl: string;
  media_type: string;
  explanation: string;
  copyright?: string;
  service_version: string;
  thumbnail_url: string;
};

export async function getApod(date?: string): Promise<Apod | null> {
  const currentDate = date ? date : new Date().toISOString().split('T')[0];

  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&date=${currentDate}&thumbs=True`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    return null;
  }
}

export async function getApods(): Promise<Apod[] | null> {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 14);

  try {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${
        process.env.NEXT_PUBLIC_NASA_API_KEY
      }&start_date=${startDate.toISOString().split('T')[0]}&thumbs=True`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();

    return data.reverse();
  } catch (error) {
    return null;
  }
}
