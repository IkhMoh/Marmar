export type ReelMedia = {
  url: string;
  type: "video" | "image";
};

export type ReelAuthor = {
  id: number;
  username: string;
  name: string;
  profile_image: string;
};

export type ReelCommentAuthor = {
  id: number;
  username: string;
  name: string;
};

export type ReelComment = {
  id: number;
  body: string;
  author: ReelCommentAuthor;
};

export type Reel = {
  id: number;
  title: string;
  body: string;
  media: ReelMedia[];
  tags: string[];
  author: ReelAuthor;
  created_at: string; 
  likes_count: number;
  comments_count: number;
  comments: ReelComment[];
};
