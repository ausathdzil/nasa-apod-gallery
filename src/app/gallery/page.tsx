import { getApods } from '@/lib/data';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Collection of NASA Astronomy Picture of the Day',
}

export default async function Page() {
  const date = new Date();
  const endDate = date.toISOString().split('T')[0];

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 17);
  const startDate = newDate.toISOString().split('T')[0];

  const data = await getApods(startDate, endDate);
  const apods = [...data].reverse();

  return (
    <section className="space-y-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apods.map((apod) => {
          if (apod.media_type === 'video' && apod.thumbnail_url !== '') {
            apod.url = apod.thumbnail_url ?? '';
          }

          return (
            <li
              key={apod.date}
              className="group flex flex-col items-center text-center gap-4"
            >
              <Link
                href={`/gallery/${encodeURIComponent(apod.date)}`}
                className="w-[272px] sm:w-[320px] h-[320px] relative"
              >
                <Image
                  className="rounded-xl transition ease-in-out group-hover:scale-105 object-cover shadow-xl"
                  src={apod.url}
                  alt={apod.title}
                  priority={true}
                  fill
                />
              </Link>
              <div className="flex flex-col gap-2">
                <p>{apod.date}</p>
                <p className="transition ease-in-out delay-50 group-hover:text-blue-400 font-bold">
                  {apod.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
