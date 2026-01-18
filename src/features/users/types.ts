export type Media = {
  url: string;
  type: "image" | "video";
};

export type Post = {
  media: Media[];
};

export type User = {
  id: number;
  username: string;
  profile_image: string;
  fullName: string;
  bio: string;
  followers: number;
  following: number;
  followersInfo: string[];
  posts: Post[];
};

export type MinimalUser = {
  username: string;
  profile_image: string;
  fullName: string;
};
