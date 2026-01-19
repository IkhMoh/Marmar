export type Media = {
  url: string;
  type?: "image" | "video";
};

export type Post = { id: number; media: Media[] };

type AuthorPost = {
  id: number;
  media: Media[];
};
export type User = {
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

export type MinimalUser = {
  username?: string;
  profile_image?: string;
  name?: string;
};
