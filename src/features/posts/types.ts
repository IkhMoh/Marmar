import { Comment } from "@/types/comment";
export type RawPost = {
  id: number;
  title?: string;
  body?: string;
  type?: "image" | "video";
  image: string | { url: string } | (string | { url: string })[];
  author: {
    id: number;
    username: string;
    name?: string;
    profile_image?: string;
  };
  comments_count?: number;
  created_at?: string;
  from_api?: string;
};
export type Post = {
  id: number;
  title?: string;
  body?: string;
  type: "image" | "video";
  image: string;
  author: {
    id: number;
    username: string;
    name?: string;
    profile_image?: string;
  };
  comments_count?: number;
  comments: Comment[];
  created_at?: string;
  from_api: boolean;
  time_ago: string;
  likes: number;
};
