import { PostDetailsModel, getPostById, Post } from "@/features/posts";

import React from "react";

export default async function PostModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div>
      <PostDetailsModel post={post} />
    </div>
  );
}
