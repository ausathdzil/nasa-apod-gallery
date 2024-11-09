import { getApod } from '@/lib/data';
import clsx from 'clsx';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Page(props: {
  params: Promise<{ date: string }>;
}) {
  const date = (await props.params).date;
  const apod = await getApod(date);
  if (!apod) {
    notFound();
  }

  const day = Number(apod.date.split('-')[2]);
  const isOddDay = day % 2 !== 0;

  return (
    <section
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
        <p className="text-xl font-bold">
          {new Date(apod.date).toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="font-bold">{apod.copyright}</p>
        <p>{apod.explanation}</p>
      </article>
    </section>
  );
}