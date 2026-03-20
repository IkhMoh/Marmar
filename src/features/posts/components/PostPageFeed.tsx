import React from 'react'
import PostDetails from './PostDetails';
import { getPostById } from '../services/getPostById.server';
import { Post } from '../types';

const PostPageFeed = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div>
      <PostDetails post={post} />
    </div>
  )
}

export default PostPageFeed
