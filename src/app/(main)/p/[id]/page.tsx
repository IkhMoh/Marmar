import { PostDetails, getPostById, Post } from "@/features/posts";

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div className="w-screen  pl-[244px]">
      <PostDetails post={post} />
    </div>
  );
}
