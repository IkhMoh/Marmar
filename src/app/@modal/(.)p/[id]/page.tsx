import { PostDetailsModel, getPostById, Post } from "@/features/posts";
import PostDetailsSkeleton from "@/features/posts/components/PostDetailsSkeleton";

import React, { Suspense } from "react";

export default async function PostModal({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div>
      <Suspense fallback={<PostDetailsSkeleton />}>

        <PostDetailsModel post={post} />
      </Suspense>
    </div>
  );
}
