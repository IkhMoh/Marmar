import { Post } from "@/types/post"

// lib/normalizePost.ts
export function normalizePost(post: Post) {
    const images = Array.isArray(post.image)
      ? post.image
      : post.image
      ? [post.image]
      : []
  
    const isVideo =
      post.type === 'video' ||
      images[0]?.endsWith('.mp4') ||
      images[0]?.endsWith('.webm')
  
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      image: images,
      type: isVideo ? 'video' : 'image',
      author: post.author,
      comments_count: post.comments_count ?? 0,
      time_ago: post.time_ago ?? post.created_at,
    }
  }
  