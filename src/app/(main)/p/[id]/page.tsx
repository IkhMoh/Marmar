import PostDetailsSkeleton from "@/features/posts/components/PostDetailsSkeleton";
import PostPageFeed from "@/features/posts/components/PostPageFeed";
import { Suspense } from "react";

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="w-screen  pl-[244px]">
      <Suspense fallback={<PostDetailsSkeleton />}>
        <PostPageFeed params={{ id }} />
      </Suspense>
    </div>
  );
}
