import ApodItems from '@/components/ApodItems';

export default async function Gallery() {
  const date = new Date();
  const endDate = date.toISOString().split('T')[0];

  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - 17);
  const startDate = newDate.toISOString().split('T')[0];

  const formattedStartDate = newDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedEndDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="w-full space-y-8">
      <h1 className="text-center text-xl">
        {formattedStartDate} - {formattedEndDate}
      </h1>
      <ApodItems
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
