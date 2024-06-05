'use client';

import { useApods } from '../hooks/useApods';
import Image from 'next/image';
import ApodDetailsSkeleton from './ApodDetailsSkeleton';

export default function Apods() {
  const apods = useApods();

  return (
    <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
      {!apods || apods.length === 0 ? (
        <ApodDetailsSkeleton />
      ) : (
        <>
          <Image
            className="rounded-xl transition ease-in-out group-hover:scale-105 w-[500px] h-[500px] object-cover"
            src={apods[0].url}
            alt={apods[0].title}
            width={500}
            height={500}
            priority={true}
          />
          <div className="grid grid-cols-1 gap-4 sm:text-start max-w-[500px]">
            <div>
              <h1 className="text-xl text-blue-400 font-bold">
                {apods[0].title}
              </h1>
              {apods[0].copyright && <p>apods[0].copyright</p>}
              <p>{apods[0].date}</p>
            </div>
            <p className="text-start">{apods[0].explanation}</p>
          </div>
        </>
      )}
    </div>
  );
}
