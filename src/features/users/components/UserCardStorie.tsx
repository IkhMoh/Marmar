import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface User {
  username: string;
  profile_image?: string;
}
const UserCardStorie = ({ username, profile_image }: User) => {
  return (
    <div className="w-full h-fit">
      <div className="flex  items-center">
        {" "}
        <Link href={username} className="flex justify-between">
          <Avatar className="w-10 h-10 bg-white ">
            <AvatarImage
              src={"/images/avatars/" + profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="font-bold text-sm ml-2 flex items-center text-white">
            {username}
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default UserCardStorie;
