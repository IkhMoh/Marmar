import React from "react";
import { Post } from "@/types/post";
import PostCard from "../client/PostCard";

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
