import EmptyState from "@/components/client/EmptyState";
import Reel from "@/features/reels/components/Reel";
import { getReels } from "@/features/reels/services/getReels.server";
import React from "react";

const ReelFeed = async () => {
  const apiReels = await getReels();
  if (apiReels.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory pt-4 pl-[244px]">
      {apiReels.map((reel) => (
        <section key={reel.id} className="snap-center h-screen flex items-start pt-1 justify-center overflow-hidden -mb-8">
          <Reel reel={reel} />
        </section>
      ))}
    </div>
  )
}

export default ReelFeed
