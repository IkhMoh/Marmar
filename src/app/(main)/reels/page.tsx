import ReelFeed from "@/features/reels/components/ReelFeed";
import { ReelsSkeleton } from "@/features/reels/components/ReelSkeleton";
import { Suspense } from "react";

const Page = () => {

  return (
    <>
      <Suspense fallback={<ReelsSkeleton />}>
        <ReelFeed />
      </Suspense>
    </>
  );
};

export default Page;
