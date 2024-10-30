import { getApods } from '@/lib/data';
import clsx from 'clsx';
import Image from 'next/image';

export default async function HomeAPOD() {
  const apods = await getApods();

  if (!apods) {
    return null;
  }

  const filteredApods = apods
    .filter((apod) => apod.media_type === 'image')
    .slice(0, 7);

  return (
    <>
      {filteredApods.map((apod) => {
        const day = Number(apod.date.split('-')[2]);
        const isOddDay = day % 2 !== 0;

        return (
          <section key={apod.title}>
            <div className="sticky top-[68px] z-40 ">
              <div
                className={clsx(
                  'backdrop-blur-sm p-4 border-y border-black',
                  isOddDay ? 'bg-blue-50/80' : 'bg-red-50/60'
                )}
              >
                <p
                  className={clsx(
                    'text-xl font-bold',
                    isOddDay && 'text-right'
                  )}
                >
                  {new Date(apod.date).toLocaleDateString('en-us', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div
              className={clsx(
                'flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 p-4',
                isOddDay ? 'bg-blue-50 lg:flex-row-reverse' : 'bg-red-50'
              )}
            >
              <div>
                <div className="relative w-[250px] h-[250px] xl:w-[700px] xl:h-[600px]">
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
              </div>
              <article className="space-y-2 text-xl">
                <h1
                  className={clsx(
                    'text-3xl font-bold',
                    isOddDay ? 'text-blue-500' : 'text-red-500'
                  )}
                >
                  {apod.title}
                </h1>
                <p className="font-bold">{apod.copyright}</p>
                <p>{apod.explanation}</p>
              </article>
            </div>
          </section>
        );
      })}
    </>
  );
}
