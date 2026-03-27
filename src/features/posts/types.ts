import { Comment } from "@/types/comment";
export type RawPost = {
  id: string;
  title?: string;
  body?: string;
  media: MediaItem[];
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
type Media = {
  url: string;
  type: "image" | "video";
};

type AuthorPost = {
  id: number;
  media: Media[];
};
export type Post = {
  image: any;
  id: string;
  source: "tarmeez" | "marmer";
  username?: string;
  time_ago?: number;
  title?: string;
  body?: string;
  media?: MediaItem[];
  likes?: number;
  author: {
    id: number;
    username: string;
    name?: string;
    profile_image?: string;
    bio?: string;
    followers?: number;
    following?: number;
    all_posts?: number;
    posts?: AuthorPost[];
  };
  comments_count?: number;
  comments: Comment[];
  created_at?: string;
  tags: [];
  
};
