import APODMarquee from '@/components/home/apod-marquee';
import HomeAPOD from '@/components/home/home-apod';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <APODMarquee />
      <HomeAPOD />
    </>
  );
}
