import React from "react";
import HoverPost from "./HoverPost";
import { MenuDialog } from "@/components/client/MenuDialog";
import { User } from "@/features/users/types";

interface PostHeaderProps {
  author: User;
}
const PostHeader = ({ author }: PostHeaderProps) => {
  return (
    <div className="flex justify-between p-0.5 pb-3">
      <HoverPost user={author} />
      <div className="flex items-center justify-start  w-full">
        {/* <div className="text-sm">{author.time_ago}</div> */}
      </div>
      <MenuDialog />
    </div>
  );
};

export default PostHeader;
