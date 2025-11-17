import Reel from "@/components/client/Reel";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory pt-4">
      {/* {reels.map((item) => (
        <section key={item.id} className="h-screen snap-start">
          <Reel data={item} />
        </section>
      ))} */}

      {/* Example: multiple reels */}
      <section className="snap-center  h-screen flex items-center justify-center overflow-hidden -mt-[3vh]  ">
        <Reel />
      </section>
      <section className="snap-center  h-screen flex items-center justify-center overflow-hidden -mt-[3vh]  ">
        <Reel />
      </section>
      <section className="snap-center  h-screen flex items-center justify-center overflow-hidden -mt-[3vh]  ">
        <Reel />
      </section>
    </div>
  );
};

export default Page;
