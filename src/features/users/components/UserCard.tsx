import React from "react";
import HoverPost from "@/features/posts/components/HoverPost";
import { Button } from "@/components/ui/button";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="w-[319px] h-[44px] ">
      <div className="flex justify-between  px-1">
        <HoverPost user={user} />

        <div className="flex items-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-800">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
