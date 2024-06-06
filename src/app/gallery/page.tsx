'use client';

import { useApods } from '../hooks/useApods';
import { ApodItem } from '../components/ApodItem';
import ApodItemSkeleton from '../components/ApodItemSkeleton';

export default function Gallery() {
  const apods = useApods();

  return (
    <>
      <h1 className="font-bold text-3xl">APODs</h1>
      <ul className="max-w-[1024px] flex flex-wrap justify-center items-start gap-8">
        {!apods || apods.length === 0 ? (
          <ApodItemSkeleton />
        ) : (
          apods.map((apod) => (
            <ApodItem
              key={apod.date}
              apod={apod}
            />
          ))
        )}
      </ul>
    </>
  );
}
