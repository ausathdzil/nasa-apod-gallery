import { getApod } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function Home() {
  const apod = await getApod();

  if (!apod) {
    notFound();
  }

  return (
    <section className="flex items-start justify-between gap-8 p-4">
      <div>
        <div className="relative w-[700px] h-[600px]">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
            src={apod.url}
            alt={apod.title}
            fill
          />
        </div>
      </div>
      <article className="space-y-2 text-xl">
        <h1 className="text-3xl text-red-500 font-bold">{apod.title}</h1>
        <p>{apod.copyright}</p>
        <p>
          {new Date(apod.date).toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p>{apod.explanation}</p>
      </article>
    </section>
  );
}

