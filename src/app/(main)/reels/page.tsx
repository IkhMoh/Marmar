import Reel from "@/components/client/layout/Reel";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory pt-4 pl-[244px]">
      {/* {reels.map((item) => (
        <section key={item.id} className="h-screen snap-start">
          <Reel data={item} />
        </section>
      ))} */}

      {/* Example: multiple reels */}
      <section className="snap-center  h-screen flex items-start pt-1 justify-center overflow-hidden  -mb-8">
        <Reel />
      </section>
      <section className="snap-center  h-screen flex items-start pt-1 justify-center overflow-hidden  -mb-8">
        <Reel />
      </section>
      <section className="snap-center  h-screen flex items-start pt-1 justify-center overflow-hidden  -mb-8">
        <Reel />
      </section>
      <section className="snap-center  h-screen flex items-start pt-1 justify-center overflow-hidden  -mb-8">
        <Reel />
      </section>
    </div>
  );
};

export default Page;
