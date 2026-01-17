import { MediaItem, Post } from "../types";
/* ========= Tarmeez ========= */
export function normalizeTarmeezPost(post: Post): Post {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    created_at: post.created_at,
    media: post.image
      ? [
          {
            url: post.image,
            type: "image",
          },
        ]
      : [], 

    author: {
      id: post.id,
      username: post.author?.username ?? "unknown",
      name: post.author?.name ?? post.author?.username ?? "Unknown User",
      profile_image:
        typeof post.author?.profile_image === "string"
          ? post.author.profile_image
          : "https://ui-avatars.com/api/?name=User",
    },
    comments: post.comments ?? [],
    comments_count: post.comments?.length ?? 0,
    tags: post.tags ?? [],
  };
}

/* ========= Marmer ========= */
export function normalizeMarmerPost(post: Post): Post {
  return {
    id: post.id,
    title: post.title,
    body: post.body,
    created_at: post.created_at,

    media: Array.isArray(post.media)
      ? post.media.map((m: MediaItem) =>
          typeof m === "string" ? { url: m, type: "image" } : m
        )
      : [],

    author: {
      id: post.id,
      username: post.author?.username ?? "unknown",
      name: post.author?.name ?? "Unknown User",
      profile_image:
        post.author?.profile_image ?? "https://ui-avatars.com/api/?name=User",
    },
    comments: post.comments ?? [],
    comments_count: post.comments?.length ?? 0,
    tags: post.tags ?? [],
  };
}
