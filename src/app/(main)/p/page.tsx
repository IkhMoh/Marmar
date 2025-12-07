import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="h-screen w-screen bg-neutral-700 flex justify-center items-center pl-[244px] ">
      <div className="h-fit w-fit  px-6 py-3 flex flex-col justify-center items-center space-y-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Profile isn&apos;t available</h1>
          <p className="font-medium ">
            The link may be broken, or the profile may have been removed.
          </p>
        </div>
        <Button color="blue">See more in Instagram</Button>
      </div>
    </div>
  );
};

export default page;
