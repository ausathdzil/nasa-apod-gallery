import { getApod, getApods } from '@/lib/data';
import { Apod } from '@/lib/types';
import Image from 'next/image';
import { Frown } from 'lucide-react';

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  const date = new Date();
  const endDate = date.toISOString().split('T')[0];

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 17);
  const startDate = newDate.toISOString().split('T')[0];

  const apods = await getApods(startDate, endDate);

  return apods.reverse().map((apod) => ({
    date: apod.date,
  }));
}

export default async function Page({ params }: { params: { date: string } }) {
  const apod = await getApod(params.date);

  if (apod.code === 400) {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <Frown size={64} />
        <h1 className="text-2xl font-bold">No APOD for this date</h1>
        <p>{apod.msg}</p>
      </div>
    );
  }

  if (apod.media_type === 'video' && apod.thumbnail_url !== '') {
    apod.url = apod.thumbnail_url ?? '';
  }

  return (
    <div className="mx-4 xl:mx-0 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-blue-400 font-bold">{apod?.title}</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Image
            className="rounded-xl transition ease-in-out group-hover:scale-105 w-[500px] h-[300px] sm:h-[500px] object-cover"
            src={apod.url}
            alt={apod.title}
            width={500}
            height={500}
            priority={true}
          />
          <div className="grid grid-cols-1 gap-4 lg:text-start max-w-[500px]">
            <div>
              {apod.copyright && (
                <h1 className="text-xl font-bold">{apod.copyright}</h1>
              )}
              <p>{apod.date}</p>
            </div>
            <p className="text-start">{apod.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
