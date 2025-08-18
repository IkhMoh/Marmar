type StoryItem = {
  id: number;
  image: string;
};

export type Story = {
  id: number;
  username: string;
  profile_image?: string;
  isRead?: boolean;
  stories?: StoryItem[];
  src?: string; 
};
