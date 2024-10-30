import Marquee from '@/components/ui/marquee';
import { getApods } from '@/lib/data';
import Image from 'next/image';

export async function APODMarquee() {
  const apods = await getApods();

  if (!apods) {
    return null;
  }

  const filteredApods = apods.filter((apod) => apod.media_type === 'image');

  return (
    <Marquee className="[--duration:40s]">
      {filteredApods.map((apod) => (
        <div key={apod.title} className="relative w-[480px] h-[480px]">
          <Image
            className="object-cover rounded-lg"
            src={apod.url}
            alt={apod.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
          />
        </div>
      ))}
    </Marquee>
  );
}
