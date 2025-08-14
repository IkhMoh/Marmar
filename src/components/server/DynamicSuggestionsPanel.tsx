import React from "react";
import UserCard from "./UserCard";
import { Button } from "../ui/button";

const DynamicSuggestionsPanel = () => {
  return (
    <div className="w-[383px] h-screen  hidden lg:block">
      <div className="pl-16 h-full w-full pt-9">
        <div className="">
          <UserCard />
        </div>
        <div className="pt-3 h-full w-full">
          <div className="flex justify-between w-full px-1">
            <p className="text-gray-500 font-bold flex items-center text-sm">
              Suggested for you{" "}
            </p>
            <div className="">
              <Button variant="link">See All</Button>
            </div>
          </div>
          <div className="pt-2 h-full w-full space-y-3 px-1">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSuggestionsPanel;
