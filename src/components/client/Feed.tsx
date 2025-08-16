"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Post } from "@/types/post";
import { useHydratePosts } from "@/store/hydrate";
import PostCard from "../server/PostCard";

const Feed = ({ initialPosts }: { initialPosts: Post[] }) => {
  useHydratePosts(initialPosts);

  const posts = useSelector((state: RootState) => state.posts.items);
console.log(posts)
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
