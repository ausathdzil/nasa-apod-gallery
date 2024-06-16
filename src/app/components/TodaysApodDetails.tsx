import { getApods } from '@/lib/getApods';
import Image from 'next/image';

export default async function TodaysApodDetails() {
  const apods = await getApods();
  const apod = apods ? apods[apods.length - 1] : null;

  if (apod?.media_type === 'video') {
    apod.url = apod.thumbnail_url;
  }

  return (
    <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
      <Image
        className="rounded-xl transition ease-in-out group-hover:scale-105 w-[500px] h-[300px] sm:h-[500px] object-cover"
        src={apod?.url ?? ''}
        alt={apod?.title ?? ''}
        width={500}
        height={500}
        priority={true}
      />
      <div className="grid grid-cols-1 gap-4 sm:text-start max-w-[500px]">
        <div>
          <h1 className="text-2xl text-blue-400 font-bold">{apod?.title}</h1>
          {apod?.copyright && <h1 className="font-bold">{apod.copyright}</h1>}
          <p>{apod?.date}</p>
        </div>
        <p className="text-start">{apod?.explanation}</p>
      </div>
    </div>
  );
}
