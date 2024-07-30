import { Skeleton } from '@/components/ui/skeleton';

export default function CurrentApodSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Skeleton className="w-[300px] sm:w-[500px] lg:w-[1008px] h-[36px] rounded-xl" />
      <div className="flex flex-col lg:flex-row gap-4">
        <Skeleton className="w-[300px] sm:w-[500px] h-[500px] rounded-xl" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-[300px] sm:w-[492px] h-[24px] rounded-xl" />
            <Skeleton className="w-[300px] sm:w-[492px] h-[24px] rounded-xl" />
          </div>
          <Skeleton className="w-[300px] sm:w-[492px] h-[300px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
