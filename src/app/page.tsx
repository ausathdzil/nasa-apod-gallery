import { getApod } from '@/lib/data';
import Image from 'next/image';

export default async function Home() {
  const date = new Date();
  const today = date.toISOString().split('T')[0];

  let apod = await getApod(today);

  if (apod.code === 404) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    const yesterday = newDate.toISOString().split('T')[0];

    apod = await getApod(yesterday);
  }

  return (
    <section className="space-y-8">
      <h1 className="font-bold text-xl sm:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        <div className="w-[272px] sm:w-[500px] h-[300px] sm:h-[500px] relative">
          {apod.media_type === 'video' ? (
            <iframe
              className="rounded-xl w-[272px] h-[300px] sm:w-[500px] sm:h-[500px]"
              src={apod.url}
              title={apod.title}
              allowFullScreen
            />
          ) : (
            <Image
              className="rounded-xl object-cover"
              src={apod.url}
              alt={apod.title}
              priority={true}
              fill
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

