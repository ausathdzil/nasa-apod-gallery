import { getApods } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Page() {
  const apods = await getApods();

  return (
    <section className="w-full flex flex-col items-center gap-8 p-8">
      <h1 className="text-3xl text-blue-500 font-semibold">
        Discover the Cosmos
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          {apods?.map((apod) => (
            <Link
              className="relative w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"
              href={`/discover/${apod.date}`}
              key={apod.date}
            >
              {apod.media_type === 'video' ? (
                <iframe
                  className="object-cover rounded-xl"
                  src={apod.url}
                  title={apod.title}
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <Image
                  className="object-cover rounded-xl"
                  src={apod.url ? apod.url : '/placeholder.jpg'}
                  alt={apod.title}
                  fill
                />
              )}
            </Link>
          ))}
        </Suspense>
      </div>
    </section>
  );
}
