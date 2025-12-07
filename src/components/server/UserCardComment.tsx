import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Heart } from "lucide-react";

const UserCardComment = () => {
  const username = "ikhlef_mohamed";
  const profile_image = "ikhlef";

  return (
    <div className="w-full h-it">
      <div className="flex justify-between items-center w-full px-1">
        {" "}
        <Link href={username} className="flex h-fit w-fit px-1">
          <Avatar className="w-11 h-11  ">
            <AvatarImage
              src={"/images/avatars/" + profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="h-fit">
              <span className="font-semibold text-sm ">{username} </span>
              <span className="text-sm">
              🥰🥰
              </span>
            </div>
            <div className="w-fit h-fit space-x-3">
                {/* todo: real data */}
              <button className="text-gray-500 text-xs">
                2d
              </button>
              <button className="text-gray-500 font-bold text-xs">
                290 likes
              </button>
              <button className="text-gray-500 font-bold text-xs">
                Reply{" "}
              </button>
            </div>
          </div>
        </Link>
        <Heart
          size={12}
          className="transition-transform duration-200 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default UserCardComment;
