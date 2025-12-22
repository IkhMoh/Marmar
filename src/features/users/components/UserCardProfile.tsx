import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { MenuDialog } from "./MenuDialog";

const UserCardProfile = () => {
  const username = "ikhlef_mohamed";
  const profile_image = "ikhlef";

  return (
    <div className="w-full h-it">
      <div className="flex justify-between  px-1">
        {" "}
        <Link href={username} className="flex justify-between  px-1">
          <Avatar className="w-11 h-11  ">
            <AvatarImage
              src={"/images/avatars/" + profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <h2 className="font-bold text-sm ml-2 flex items-center">{username}</h2>
        </Link>
        <MenuDialog />
      </div>
    </div>
  );
};

export default UserCardProfile;
