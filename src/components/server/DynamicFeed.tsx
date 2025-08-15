import React from "react";
import Stories from "./Stories";
import { getMergedPosts } from "@/lib/posts/getMergedPosts";
import { Post } from "@/types/post";
import Feed from "../client/Feed";

const DynamicFeed = async () => {
  const posts: Post[] = await getMergedPosts();

  return (
    <div className="h-full ml-[248px] max-w-[650px] w-full   ">
      <Stories />
      <Feed initialPosts={posts} />
    </div>
  );
};

export default DynamicFeed;
