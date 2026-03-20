import { PostDetailsModel, getPostById, Post } from "@/features/posts";
import React from "react";

const PostModalFeed = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <PostDetailsModel post={post} />
  )
}

export default PostModalFeed
