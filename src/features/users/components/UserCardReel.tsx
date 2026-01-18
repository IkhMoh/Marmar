import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ReelAuthor } from "@/features/reels/types";

interface AuthorReelCardProps {
  author: ReelAuthor;
}
const UserCardReel = ({ author }: AuthorReelCardProps) => {
  return (
    <div className="w-full h-fit">
      <div className="flex  items-center space-x-2">
        {" "}
        <Link href={author.username} className="flex justify-between">
          <Avatar className="w-10 h-10 bg-white ">
            <AvatarImage
              src={author.profile_image}
              alt={author.username}
              className="object-cover object-center rounded-full"
            />

            <AvatarFallback>
              {" "}
              {author.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <h2 className="font-bold text-sm ml-2 flex items-center text-white">
            {author.username}
          </h2>
        </Link>
        <button className="text-white  bg-transparent px-2.5 py-0.5 border border-white font-extrabold rounded-md cursor-pointer">
          follow
        </button>{" "}
      </div>
    </div>
  );
};

export default UserCardReel;
