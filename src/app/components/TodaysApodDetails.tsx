'use client';

import { useCurrentApod } from '../hooks/useCurrentApod';
import ApodDetailsSkeleton from './skeletons/ApodDetailsSkeleton';
import Image from 'next/image';
import { today } from '@/lib/constants';

export default function Apods() {
  const apod = useCurrentApod(today);

  return (
    <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
      {!apod ? (
        <ApodDetailsSkeleton />
      ) : (
        <>
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
              <h1 className="text-2xl text-blue-400 font-bold">{apod.title}</h1>
              {apod.copyright && (
                <h1 className="font-bold">{apod.copyright}</h1>
              )}
              <p>{apod.date}</p>
            </div>
            <p className="text-start">{apod.explanation}</p>
          </div>
        </>
      )}
    </div>
  );
}
