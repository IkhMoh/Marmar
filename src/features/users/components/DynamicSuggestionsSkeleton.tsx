import { Skeleton } from "@/components/ui/skeleton";

export default function DynamicSuggestionsSkeleton() {
  return (
    <div className="w-[383px] h-screen hidden lg:block">
      <div className="pl-16 h-full w-full pt-9">
        <div className="w-[319px] h-[44px]">
          <div className="flex justify-between px-1 items-center">
            <Skeleton className="w-11 h-11 rounded-full shrink-0 aspect-square" />

            <div className="w-full px-3 space-y-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-28" />
            </div>

            <Skeleton className="h-4 w-14 rounded-md" />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-between w-full px-1 items-center">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>

        <div className="pt-4 space-y-3 px-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-[319px] h-[44px]">
              <div className="flex justify-between items-center px-1">
                <Skeleton className="w-9 h-9 rounded-full shrink-0 aspect-square" />

                <div className="w-full px-3 space-y-1">
                  <Skeleton className="h-4 w-36" />
                  <Skeleton className="h-3 w-24" />
                </div>

                <Skeleton className="h-4 w-14 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
