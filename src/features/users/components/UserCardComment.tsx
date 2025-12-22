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
        <div className="flex h-fit w-fit px-1 space-x-3">
          <Link href={username}>
            <Avatar className="w-11 h-11">
              <AvatarImage
                src={"/images/avatars/" + profile_image}
                alt={username}
                className="object-cover object-center rounded-full"
              />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>

          <div>
            <div className="h-fit">
              <Link href={username}>
                <span className="font-semibold text-sm ">{username} </span>
              </Link>

              <span className="text-sm">Maybe bro playing some games</span>
            </div>
            <div className="w-fit h-fit space-x-3">
              {/* todo: real data */}
              <button className="text-gray-500 text-xs">2d</button>
              <button className="text-gray-500 font-bold text-xs">
                290 likes
              </button>
              <button className="text-gray-500 font-bold text-xs">
                Reply{" "}
              </button>
            </div>
          </div>
        </div>
        <Heart
          size={12}
          className="transition-transform duration-200 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default UserCardComment;
