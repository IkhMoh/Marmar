import PostDetailsModel from "@/features/posts/components/PostDetailsModel";
import { Post } from "@/features/posts/types";
import React from "react";

async function getSinglePost(id: string) {
  const res = await fetch(`https://tarmeezacademy.com/api/v1/posts/${id}`);

  if (!res.ok) throw new Error("Post not found");

  const response = await res.json();
  return response.data; 
}
export default async function PostModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post: Post = await getSinglePost(id);

  return (
    <div>
      <PostDetailsModel post={post} />
    </div>
  );
}
