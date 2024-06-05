'use client';

import { useApods } from '../hooks/useApods';
import { ApodItem } from '../components/ApodItem';

export default function Gallery() {
  const apods = useApods();

  return (
    <main className="flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-3xl">APODs</h1>
      <ul className="max-w-[1024px] flex flex-wrap justify-center items-start gap-8">
        {!apods || apods.length === 0 ? (
          <div className="flex justify-center items-center">Loading...</div>
        ) : (
          apods.map((apod) => (
            <ApodItem
              key={apod.date}
              apod={apod}
            />
          ))
        )}
      </ul>
    </main>
  );
}
