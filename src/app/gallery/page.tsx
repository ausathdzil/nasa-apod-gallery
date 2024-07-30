import { getApods } from '@/lib/data';
import { ApodItem } from '../../components/ApodItem';

export default async function Gallery() {
  const date = new Date();
  const endDate = date.toISOString().split('T')[0];

  const startDate = new Date(date);
  startDate.setDate(startDate.getDate() - 17);
  const formattedStartDate = startDate.toISOString().split('T')[0];

  const data = await getApods(formattedStartDate, endDate);
  const apods = data ? [...data].reverse() : [];

  return (
    <>
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
