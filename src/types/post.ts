import type { Author } from "./author";

// src/types/post.ts
export type Post = {
  id: number;
  title: string;
  body: string;
  author: Author;
  image?: string[];

  comments_count?: number;
  comments?: Comment[];
  from_api?: boolean;
  type?: "image" | "video";
};
