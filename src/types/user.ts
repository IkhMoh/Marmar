export type User = {
  id: number;
  username: string;
  name: string;
  profile_image: string;
};
// src/types/user.ts

export type MinimalUser = {
  username: string;
  profile_image: string;
  fullName: string;
};
