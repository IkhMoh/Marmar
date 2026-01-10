
import { Skeleton } from "@/components/ui/skeleton";

export function PostsSkeleton() {
  return (
    <div className="flex flex-col items-center w-full gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-lg mb-4 w-[468px] h-fit pb-4 animate-pulse">
          {/* Header */}
          <div className="flex items-center space-x-3 px-2 py-3">
            <Skeleton className="h-10 w-10 rounded-full" color="red" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>

           <div className="w-full">
            <Skeleton className="w-full h-[468px] rounded-md" />
          </div>

           <div className="px-2 mt-3 space-y-3">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>

             <Skeleton className="h-4 w-24" />

             <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

             <Skeleton className="h-3 w-40" />

             <Skeleton className="h-10 w-full rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
