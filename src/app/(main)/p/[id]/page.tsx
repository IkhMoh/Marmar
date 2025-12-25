import PostDetails from "@/features/posts/components/PostDetails";
import React from "react";
import { Post } from "@/features/posts/types";

// 1. Create the fetch function
async function getSinglePost(id: string) {
  const res = await fetch(`https://tarmeezacademy.com/api/v1/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Post not found");

  const response = await res.json();
  return response.data; // The API returns { data: { ...post } }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 2. Await the params to get the ID
  const { id } = await params;

  // 3. Fetch the actual post data using that ID
  const post: Post = await getSinglePost(id);

  return (
    <div className="w-screen  pl-[244px]">
      {/* 4. Pass the fetched post to your component */}
      <PostDetails post={post} />
    </div>
  );
}
