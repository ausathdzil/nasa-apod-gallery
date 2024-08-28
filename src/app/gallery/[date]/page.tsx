import { getApod, getApods } from '@/lib/data';
import { Frown } from 'lucide-react';
import Image from 'next/image';

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

export async function generateMetadata({
  params,
}: {
  params: { date: string };
}) {
  const apod = await getApod(params.date);

  return {
    title: apod?.date,
    description: apod?.title,
  };
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

  return (
    <section className="space-y-8">
      <h1 className="text-xl sm:text-3xl text-blue-400 font-bold">
        {apod?.title}
      </h1>
      <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        <div className="w-[272px] sm:w-[500px] h-[300px] sm:h-[500px] relative">
          {apod.media_type === 'video' ? (
            <iframe
              className="rounded-xl w-[272px] h-[300px] sm:w-[500px] sm:h-[500px]"
              src={apod.url}
              title={apod.title}
              allowFullScreen
            />
          ) : (
            <Image
              className="rounded-xl object-cover"
              src={apod.url}
              alt={apod.title}
              priority={true}
              fill
            />
          )}
        </div>
        <article className="space-y-4 lg:text-start max-w-[500px]">
          <div>
            {apod.copyright && (
              <h1 className="text-xl font-bold">{apod.copyright}</h1>
            )}
            <p>{apod.date}</p>
          </div>
          <p className="text-start">{apod.explanation}</p>
        </article>
      </div>
    </section>
  );
}
