'use client';

import { useApods } from '../hooks/useApods';
import Image from 'next/image';

export default function Apods() {
  const apods = useApods();

  return (
    <ul className="max-w-[1024px] flex flex-wrap justify-center items-start gap-8">
      {apods
        .toReversed()
        .map((apod: { date: string; url: string; title: string }) => (
          <li
            key={apod.date}
            className="group flex flex-col text-center gap-4 w-[300px]"
          >
            <Image
              className="rounded-xl transition ease-in-out group-hover:scale-105 w-[300px] h-[300px] object-cover"
              src={apod.url}
              alt={apod.title}
              width={300}
              height={300}
              priority={true}
            />
            <div className="flex flex-col gap-2">
              <p>{apod.date}</p>
              <p className="transition ease-in-out delay-50 group-hover:text-blue-500 font-bold">
                {apod.title}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
}
