import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Comment } from "@/types/comment";

const UserCardComment = ({ comment }: { comment: Comment }) => {
  if (!comment || !comment.author) {
    return null; 
  }
   return (
    <div className="w-full h-it">
      <div className="flex justify-between items-center w-full px-1">
        {" "}
        <div className="flex h-fit w-fit px-1 space-x-3">
          <Link href={comment.author.username}>
            <Avatar className="w-11 h-11">
              <AvatarImage
                src={"/images/avatars/" + comment.author.profile_image}
                alt={comment.author.username}
                className="object-cover object-center rounded-full"
              />

              <AvatarFallback>{comment.author.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          </Link>

          <div>
            <div className="h-fit">
              <Link href={comment.author.username}>
                <span className="font-semibold text-sm ">
                  {comment.author.username}{" "}
                </span>
              </Link>

              <span className="text-sm">{comment.body}</span>
            </div>
            <div className="w-fit h-fit space-x-3">
              {/* todo: real data */}
              <button className="text-gray-500 text-xs">2d</button>
              <button className="text-gray-500 font-bold text-xs">
                2 likes
              </button>
              <button className="text-gray-500 font-bold text-xs">Reply</button>
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
