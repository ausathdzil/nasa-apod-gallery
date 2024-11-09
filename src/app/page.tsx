import APODMarquee from '@/components/home/apod-marquee';
import HomeAPOD from '@/components/home/home-apod';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="py-8">Loading...</div>}>
        <APODMarquee />
        <HomeAPOD />
      </Suspense>
    </>
  );
}
