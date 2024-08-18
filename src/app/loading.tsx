import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="space-y-8">
      <h1 className="font-bold text-xl sm:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <div className="m-4 max-w-[768px] sm:max-w-[1024px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
        <Skeleton className="rounded-xl w-[272px] sm:w-[460px] h-[300px] sm:h-[500px]" />
        <div className="grid grid-cols-1 gap-4 sm:text-start max-w-[500px]">
          <div className="space-y-2">
            <Skeleton className="w-[272px] sm:w-[500px] h-[20px] rounded-sm" />
            <Skeleton className="w-[272px] sm:w-[500px] h-[20px] rounded-sm" />
            <Skeleton className="w-[272px] sm:w-[500px] h-[20px] rounded-sm" />
          </div>
          <Skeleton className="w-[272px] sm:w-[500px] h-[200px] rounded-sm" />
        </div>
      </div>
    </section>
  );
}
