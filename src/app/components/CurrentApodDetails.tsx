'use client';

import { useCurrentApod } from '@/app/hooks/useCurrentApod';
import { datePageProps } from '@/lib/types';
import CurrentApodSkeleton from '@/app/components/skeletons/CurrentApodSkeleton';
import Image from 'next/image';

export default function Page({ params }: datePageProps) {
  const apod = useCurrentApod(params.date);

  return (
    <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start">
      {!apod ? (
        <CurrentApodSkeleton />
      ) : (
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-blue-400 font-bold">{apod.title}</h1>
          <div className="flex flex-row gap-8 items-start">
            <Image
              className="rounded-xl transition ease-in-out group-hover:scale-105 w-[500px] h-[500px] object-cover"
              src={apod.url}
              alt={apod.title}
              width={500}
              height={500}
              priority={true}
            />
            <div className="grid grid-cols-1 gap-4 sm:text-start max-w-[500px]">
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
      )}
    </div>
  );
}
