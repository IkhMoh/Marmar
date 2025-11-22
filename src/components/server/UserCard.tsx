import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { MinimalUser } from "@/types/user";
import Link from "next/link";

const UserCard: React.FC<MinimalUser> = ({
  username,
  profile_image,
  fullName,
}) => {
  return (
    <div className="w-[319px] h-[44px] ">
      <div className="flex justify-between  px-1">
        <Link href={username} className="flex justify-between  px-1">
          <Avatar className="w-11 h-11  ">
            <AvatarImage
              src={"/images/avatars/" + profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="  w-full px-3 -space-y-1">
            <h2 className="font-semibold">{fullName}</h2>
            <h4 className="text-gray-500">{username}</h4>
          </div>
        </Link>

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
