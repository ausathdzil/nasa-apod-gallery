import { Skeleton } from '@/components/ui/skeleton';

export default function ApodDetailsSkeleton() {
  return (
    <>
      <Skeleton className="w-[500px] h-[500px] rounded-xl" />
      <div className="grid grid-cols-1 gap-4 sm:text-start">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[492px] h-[28px] rounded-xl" />
          <Skeleton className="w-[492px] h-[24px] rounded-xl" />
        </div>
        <Skeleton className="w-[492px] h-[200px] rounded-xl" />
      </div>
    </>
  );
}
