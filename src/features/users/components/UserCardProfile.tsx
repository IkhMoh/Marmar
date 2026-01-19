import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { MenuDialog } from "@/components/client/MenuDialog";

interface User  {
  username:string;
  profile_image?:string;
}
const UserCardProfile = ({ username, profile_image }:User) => {
  return (
    <div className="w-full h-it">
      <div className="flex justify-between  px-1">
        {" "}
        <Link href={username} className="flex justify-between  px-1">
          <Avatar className="w-11 h-11  ">
            <AvatarImage
              src={profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          </Avatar>

          <h2 className="font-bold text-sm ml-2 flex items-center">
            {username}
          </h2>
        </Link>
        <MenuDialog />
      </div>
    </div>
  );
};

export default UserCardProfile;
