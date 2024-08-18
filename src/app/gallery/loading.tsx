import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="space-y-8">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 9 }).map((_, index) => (
          <li
            key={index}
            className="group flex flex-col items-center text-center gap-4"
          >
            <Skeleton className="rounded-xl w-[272px] sm:w-[320px] h-[320px] object-cover shadow-xl" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-[272px] sm:w-[320px] h-[20px] rounded-sm" />
              <Skeleton className="w-[272px] sm:w-[320px] h-[20px] rounded-sm" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
