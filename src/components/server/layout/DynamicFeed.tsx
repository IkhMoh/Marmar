import React from "react";
import Stories from "../../../features/stories/components/Stories";
import Feed from "./Feed";


const DynamicFeed = () => {
  return (
    <div className="h-full w-[650px] pt-3 ">
      <Stories />
      <Feed />
    </div>
  );
};

export default DynamicFeed;
