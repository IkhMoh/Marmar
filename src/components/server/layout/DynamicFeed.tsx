import React, { Suspense } from "react";
import Stories from "../../../features/stories/components/Stories";
import Feed from "./Feed";
import { PostsSkeleton } from "@/features/posts/components/PostsSkeleton";

const DynamicFeed = () => {
  return (
    <div className="h-full w-[650px] pt-3 ">
      <Stories />
      <Suspense fallback={<PostsSkeleton />}>
        <Feed />
      </Suspense>
    </div>
  );
};

export default DynamicFeed;
