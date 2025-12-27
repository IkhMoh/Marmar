export type Author = {
  id: number;
  profile_image: string;
  is_fake: boolean;
  username: string;
  name: string;
  email: string | null;
  email_verified_at: string | null;
  remember_token: string | null;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  body: string; // This matches your JSON "body"
  author: Author; // This maps to the nested author object
};

// Use this for your list of comments
 