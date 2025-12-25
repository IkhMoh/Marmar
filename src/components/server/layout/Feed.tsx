import React from "react";
import PostCard from "@/features/posts/components/PostCard";
import { Post } from "@/features/posts/types";
async function getPosts() {
  const res = await fetch("https://tarmeezacademy.com/api/v1/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const response = await res.json();
  // The posts are nested inside the 'data' property
  return response.data;
}
const Feed = async () => {
  const posts: Post[] = await getPosts();

  // async function getPostsFromAPI1() {
  //   const res = await fetch('https://api1.com/posts', { cache: 'no-store' })
  //   return res.json()
  // }

  // async function getPostsFromAPI2() {
  //   const res = await fetch('https://api2.com/posts', { cache: 'no-store' })
  //   return res.json()
  // }
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
