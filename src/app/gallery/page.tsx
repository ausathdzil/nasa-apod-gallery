import { getApods } from '@/lib/data';
import { ApodItem } from '../components/ApodItem';

export default async function Gallery() {
  const data = await getApods();
  const apods = data ? [...data].reverse() : [];

  return (
    <>
      <h1 className="font-bold text-3xl">APODs</h1>
      <ul className="max-w-[1024px] flex flex-wrap justify-center items-start gap-8">
        {apods.map((apod) => (
          <ApodItem
            key={apod.date}
            apod={apod}
          />
        ))}
      </ul>
    </>
  );
}
