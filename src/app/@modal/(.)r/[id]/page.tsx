import { PostDetailsModel, Post } from "@/features/posts";
import { getReelById } from "@/features/posts/services/getReelById.service";

import React from "react";

export default async function PostModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post: Post = await getReelById(id);

  return (
    <div>
      <PostDetailsModel post={post} />
    </div>
  );
}
