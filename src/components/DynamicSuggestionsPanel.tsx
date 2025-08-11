import React from "react";
import UserCard from "./UserCard";
import { Button } from "./ui/button";

const DynamicSuggestionsPanel = () => {
  return (
    <div className="w-[383px] h-screen  hidden lg:block">
      <div className="pl-16 h-full w-full pt-9">
        <div className="bg-red-500">
          <UserCard />
        </div>
        <div className="pt-3 h-full w-full bg-green-300">
          <div className="flex justify-end w-full bg-amber-200">
            <p>Suggested for you </p>{" "}
            <div className="flex items-center">
              <Button
                variant="ghost"
                className="text-blue-600 hover:text-blue-800"
              >
                Follow
              </Button>
            </div>
          </div>
          <div className="pt-4 h-full w-full space-y-3">
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
