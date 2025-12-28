import React from "react";
import HoverPost from "./HoverPost";
import { MenuDialog } from "@/components/client/MenuDialog";

interface PostHeaderProps {
  author: {
    id: number;
    profile_image?: string;
    username: string;
    name?: string;
    is_fake?: boolean;
    email?: string;
    email_verified_at?: number | string | null;
    remember_token?: number | string | null;
    created_at?: string;
    updated_at?: string;
  };
}
const PostHeader = ({ author }: PostHeaderProps) => {
  return (
    <div className="flex justify-between p-0.5 pb-3">
      <HoverPost
        username={author.username}
        profile_image={author.profile_image}
        fullName={author.name}
      />
      <div className="flex items-center justify-start  w-full">
        {/* <div className="text-sm">{author.time_ago}</div> */}
      </div>
      <MenuDialog />
    </div>
  );
};

export default PostHeader;
