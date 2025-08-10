import React from "react";
import UserCard from "./UserCard";

const DynamicSuggestionsPanel = () => {
  return (
    <div className="w-[383px] h-[805px]  hidden lg:block">
      <div className="pl-16 h-full w-full mt-9">
        <div className="">
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default DynamicSuggestionsPanel;
