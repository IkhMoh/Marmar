import React, { Suspense } from "react";
import StoriesCarousel from "./StoriesCarousel";
import StoriesSkeleton from "./StoriesSkeleton";

const Stories = () => {
  return (
    <div className="h-[124px] mb-6 w-full">
      <Suspense fallback={<StoriesSkeleton/>}>
        <StoriesCarousel />
      </Suspense>
    </div>
  );
};

export default Stories;
