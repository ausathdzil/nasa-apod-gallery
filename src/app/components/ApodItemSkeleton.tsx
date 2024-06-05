import { Skeleton } from '@/components/ui/skeleton';

export default function ApodItemSkeleton() {
  return (
    <>
      <div className="flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
      <div className="group flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
      <div className="group flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
      <div className="group flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
      <div className="group flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
      <div className="group flex flex-col gap-4 w-[300px]">
        <Skeleton className="w-[300px] h-[300px] rounded-xl" />
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
          <Skeleton className="w-[300px] h-[20px] rounded-xl" />
        </div>
      </div>
    </>
  );
}
