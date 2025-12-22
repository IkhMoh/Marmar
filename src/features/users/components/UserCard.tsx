import React from "react";
import { MinimalUser } from "@/types/user";
import HoverPost from "@/features/posts/components/HoverPost";
import { Button } from "@/components/ui/button";

const UserCard: React.FC<MinimalUser> = ({
  username,
  profile_image,
  fullName,
}) => {
  return (
    <div className="w-[319px] h-[44px] ">
      <div className="flex justify-between  px-1">
        <HoverPost
          username={username}
          profile_image={profile_image}
          fullName={fullName}
        />

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
