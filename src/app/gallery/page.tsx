import { getApods } from '@/lib/data';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Collection of NASA Astronomy Picture of the Day',
};

export default async function Page() {
  const apods = await getApods();

  return (
    <section className="space-y-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apods?.map((apod) => (
          <li key={apod.date}>
            <Link
              href={`/gallery/${encodeURIComponent(apod.date)}`}
              className="group flex flex-col items-center text-center gap-4"
            >
              <div className="w-[272px] sm:w-[320px] h-[320px] relative">
                <Image
                  className="rounded-xl object-cover"
                  src={apod.media_type !== 'image' ? `${apod.thumbnail_url}` : `${apod.url}` }
                  alt={apod.title}
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 272px"
                />
              </div>
              <article className="space-y-2">
                <p>{apod.date}</p>
                <p className="transition ease-in-out delay-50 group-hover:text-blue-400 font-bold">
                  {apod.title}
                </p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
