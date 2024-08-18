import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="mx-4 xl:mx-0 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start">
      <div className="flex flex-col items-center gap-8">
        <Skeleton className="w-[272px] sm:w-full h-[36px]" />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Skeleton className="rounded-xl w-[272px] sm:w-[460px] h-[300px] sm:h-[500px]" />
          <div className="grid grid-cols-1 gap-4 lg:text-start max-w-[500px]">
            <div className='space-y-2'>
              <Skeleton className="w-[272px] sm:w-[500px] h-[28px] rounded-sm" />
              <Skeleton className="w-[272px] sm:w-[500px] h-[24px] rounded-sm" />
            </div>
            <Skeleton className="w-[272px] sm:w-[500px] h-[200px] rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
