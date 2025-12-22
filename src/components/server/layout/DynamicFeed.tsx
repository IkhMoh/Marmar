import React from "react";
import Stories from "../../../features/stories/components/Stories";

import FeedClient from "../../client/layout/FeedClient";

const DynamicFeed = () => {
  // console.log(posts)
  return (
    <div className="h-full w-[650px] pt-3 ">
      <Stories />
      <FeedClient />
    </div>
  );
};

export default DynamicFeed;
