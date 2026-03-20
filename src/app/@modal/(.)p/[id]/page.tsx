import PostDetailsSkeleton from "@/features/posts/components/PostDetailsSkeleton";
import PostModalFeed from "@/features/posts/components/PostModalFeed";

import React, { Suspense } from "react";

export default async function PostModal({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<PostDetailsSkeleton />}>
        <PostModalFeed params={{ id }} />
      </Suspense>
    </div>
  );
}
