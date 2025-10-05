"use client";
import React from "react";
import { useGetMergedPostsQuery } from "@/services/postsApi";
import Feed from "./Feed";

const FeedClient = () => {
  const { data: posts = [], isLoading, isError } = useGetMergedPostsQuery();

  if (isLoading) return <p className="text-gray-400">Loading...</p>;
  if (isError) return <p className="text-red-500">Failed to load posts</p>;
  console.log(posts);
  return <Feed posts={posts} />;
};

export default FeedClient;
