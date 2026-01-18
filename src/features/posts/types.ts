import { Comment } from "@/types/comment";
export type RawPost = {
  id: number;
  title?: string;
  body?: string;
  media: MediaItem[];
  image?: string;
  author: {
    id: number;
    username: string;
    name?: string;
    profile_image?: string;
  };
  comments_count?: number;
  created_at?: string;
};
export type MediaItem = {
  url: string;
  type: "image" | "video";
};
export type Post = {
  id: number;
  title?: string;
  body?: string;
  image?: string;
  media: MediaItem[];
  likes:number;
  author: {
    id: number;
    username: string;
    name?: string;
    profile_image?: string;
  };
  comments_count?: number;
  comments: Comment[];
  created_at?: string;
  tags: [];
};
