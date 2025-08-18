import React from "react";
import Stories from "./Stories";

import Feed from "../client/Feed";
import { getMergedPosts } from "@/lib/posts/getMergedPosts";
import { Post } from "@/types/post";

const DynamicFeed = async () => {
  const posts: Post[] = await getMergedPosts();

  return (
    <div className="h-full ml-[248px] max-w-[650px] w-full  pt-3 ">
      <Stories />
      <Feed initialPosts={posts} />
    </div>
  );
};

export default DynamicFeed;
