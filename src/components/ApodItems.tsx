import Link from 'next/link';
import Image from 'next/image';
import { getApods } from '@/lib/data';

export default async function ApodItems({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const data = await getApods(startDate, endDate);
  const apods = data ? [...data].reverse() : [];

  return (
    <ul className="w-full flex flex-wrap justify-center items-start gap-8">
      {apods.map((apod) => {
        if (apod.media_type === 'video') {
          apod.url = apod.thumbnail_url;
        }

        return (
          <li
            key={apod.date}
            className="group flex flex-col text-center gap-4 w-[320px]"
          >
            <Link href={`/gallery/${encodeURIComponent(apod.date)}`}>
              <Image
                className="rounded-xl transition ease-in-out group-hover:scale-105 w-[320px] h-[320px] object-cover shadow-xl"
                src={apod.url ? apod.url : apod.thumbnail_url}
                alt={apod.title}
                width={320}
                height={320}
                priority={true}
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
  );
}
