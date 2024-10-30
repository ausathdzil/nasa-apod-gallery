import { getApod } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Home() {
  const apod = await getApod();

  if (!apod) {
    return notFound();
  }

  return (
    <section className="space-y-8">
      <h1 className="font-bold text-xl sm:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        <div className="w-[272px] sm:w-[500px] h-[300px] sm:h-[500px] relative">
          {apod.media_type !== 'image' ? (
            <iframe
              className="rounded-xl w-[272px] h-[300px] sm:w-[500px] sm:h-[500px]"
              src={apod.url}
              title={apod.title}
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <Image
              className="rounded-xl object-cover"
              src={apod.url}
              alt={apod.title}
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 272px"
            />
          )}
        </div>
        <article className="space-y-4 sm:text-start max-w-[500px]">
          <div>
            <h1 className="text-2xl text-blue-400 font-bold">{apod.title}</h1>
            {apod.copyright && <h1 className="font-bold">{apod.copyright}</h1>}
            <p>{apod.date}</p>
          </div>
          <p className="text-start">{apod.explanation}</p>
        </article>
      </div>
    </section>
  );
}
