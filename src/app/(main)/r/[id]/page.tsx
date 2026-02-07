import { PostDetails, Post } from "@/features/posts";
import { getReelById } from "@/features/posts/services/getReelById.service";

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post: Post = await getReelById(id);

  return (
    <div className="w-screen  pl-[244px]">
      <PostDetails post={post} />
    </div>
  );
}
