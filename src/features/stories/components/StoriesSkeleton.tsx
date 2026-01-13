import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const StoriesSkeleton = () => {
  return (
    <Carousel className="w-full h-full flex items-center">
      <CarouselContent className="gap-1 h-full w-full">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="flex flex-col items-center">
              {/* Circle Avatar Skeleton */}
              <Skeleton className="w-[89px] h-[89px] rounded-full" />

              {/* Username Skeleton */}
              <Skeleton className="h-4 w-16 mt-2 rounded-md" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default StoriesSkeleton;
