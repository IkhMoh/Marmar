 import { Skeleton } from "@/components/ui/skeleton";

export default function HoverPostSkeleton() {
  return (
    < >
      <div className="flex items-center gap-3">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>

      <div className="flex justify-around">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-16" />
      </div>

      <div className="grid grid-cols-3 gap-1 ">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-24 bg-neutral-300 dark:bg-neutral-700"
          />
        ))}
      </div>

      <Skeleton className="h-10 w-full rounded-md" />
    </>
  );
}
