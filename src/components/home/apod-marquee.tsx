import Marquee from '@/components/ui/marquee';
import { getApods } from '@/lib/data';
import Image from 'next/image';

export default async function APODMarquee() {
  const apods = await getApods();

  const filteredApods = apods?.filter((apod) => apod.media_type === 'image');
  const firstRow = filteredApods?.slice(0, 3);
  const secondRow = filteredApods?.slice(3, 6);

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <Marquee className="[--duration:40s]">
        {firstRow?.map((apod) => (
          <div key={apod.title} className="relative w-[240px] h-[240px]">
            <Image
              className="object-cover rounded-lg"
              src={apod.url}
              alt={apod.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority
            />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:40s]">
        {secondRow?.map((apod) => (
          <div key={apod.title} className="relative w-[240px] h-[240px]">
            <Image
              className="object-cover rounded-lg"
              src={apod.url}
              alt={apod.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
