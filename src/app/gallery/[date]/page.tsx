import { getApod } from '@/lib/data';
import Image from 'next/image';

export default async function Page({ params }: { params: { date: string } }) {
  const apod = await getApod(params.date);

  if (apod?.media_type === 'video') {
    apod.url = apod.thumbnail_url;
  }

  return (
    <div className="mx-4 xl:mx-0 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-blue-400 font-bold">{apod?.title}</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Image
            className="rounded-xl transition ease-in-out group-hover:scale-105 w-[500px] h-[300px] sm:h-[500px] object-cover"
            src={apod?.url ?? ''}
            alt={apod?.title ?? ''}
            width={500}
            height={500}
            priority={true}
          />
          <div className="grid grid-cols-1 gap-4 lg:text-start max-w-[500px]">
            <div>
              {apod?.copyright && (
                <h1 className="text-xl font-bold">{apod.copyright}</h1>
              )}
              <p>{apod?.date}</p>
            </div>
            <p className="text-start">{apod?.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
