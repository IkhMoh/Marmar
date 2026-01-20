
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function ReelsSkeleton() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory pt-4 pl-[244px]">
      <section className="snap-center h-screen flex items-start pt-1 justify-center overflow-hidden-mb-8">
        <div className=" flex w-fit h-[710px] justify-between space-x-20">
           <div className="flex flex-col justify-end p-5 space-y-3 flex-1">

            <div className="flex items-center space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" color="red" />
              <Skeleton className="h-4 w-28 rounded" color="red" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-3 w-full rounded" color="red" />
              <Skeleton className="h-3 w-3/4 rounded" color="red" />
            </div>

            <Skeleton className="h-8 w-52 rounded-2xl" color="red" />
          </div>

          {/* Right actions */}
          <div className="w-20 flex flex-col items-center justify-end space-y-6 pb-2">
            <div className="flex flex-col items-center space-y-1">
              <Skeleton className="h-8 w-8 rounded-full" color="red" />
              <Skeleton className="h-3 w-6 rounded" color="red" />
            </div>

            <div className="flex flex-col items-center space-y-1">
              <Skeleton className="h-8 w-8 rounded-full" color="red" />
              <Skeleton className="h-3 w-6 rounded" color="red" />
            </div>

            <Skeleton className="h-8 w-8 rounded-full" color="red" />
            <Skeleton className="h-8 w-8 rounded-full" color="red" />
            <Skeleton className="h-8 w-8 rounded-full" color="red" />

            <Avatar className="w-8 h-8 rounded-md">
              <AvatarFallback>
                <Skeleton className="h-full w-full rounded-md" color="red" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
    </div >
  );
}
