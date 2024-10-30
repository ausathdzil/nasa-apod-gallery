import { APODMarquee } from '@/components/home/apod-marquee';
import HomeAPOD from '@/components/home/home-apod';
import { getApod } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function Home() {
  const apod = await getApod();

  if (!apod) {
    notFound();
  }

  return (
    <>
      <section className="bg-blue-50 py-8">
        <APODMarquee />
      </section>
      <HomeAPOD />
    </>
  );
}

