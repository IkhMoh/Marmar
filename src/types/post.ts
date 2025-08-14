import type { Author } from "./author";

export type Post = {
  id?: number;
  title?: string;
  body?: string;
  author?: Author;
  images?: string[];
  created_at?: string;
  comments_count?: number;
  from_api?: boolean;
};
