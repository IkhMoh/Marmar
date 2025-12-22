import React from "react";
import PostCard from "../client/PostCard";
import { Post } from "@/features/posts/types";

const Feed = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
