import { Skeleton } from '@/components/ui/skeleton';

export default function ApodDetailsSkeleton() {
  return (
    <>
      <h1 className="font-bold text-xl sm:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <Skeleton className="w-[300px] sm:w-[500px] h-[500px] rounded-xl" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] sm:w-[492px] h-[28px] rounded-xl" />
          <Skeleton className="w-[300px] sm:w-[492px] h-[24px] rounded-xl" />
        </div>
        <Skeleton className="w-[300px] sm:w-[492px] h-[300px] rounded-xl" />
      </div>
    </>
  );
}
