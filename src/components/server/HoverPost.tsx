import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserPlus } from "lucide-react";

interface MinimalUser {
  username: string;
  profile_image?: string;
  fullName?: string;
}

const HoverPost = ({ fullName, username, profile_image }: MinimalUser) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href={username} className="flex justify-between  px-1">
            <Avatar className="w-11 h-11  ">
              <AvatarImage
                src={"/images/avatars/" + profile_image}
                alt={username}
                className="object-cover object-center rounded-full"
              />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="ml-1 min-w-36 ">
              <div className="w-full -space-y-0.5">
                <h2 className="font-bold text-md">{username}</h2>
                <h4 className="text-gray-500 text-sm">{fullName}</h4>
              </div>
            </div>
          </Link>
        </HoverCardTrigger>

        <HoverCardContent className="w-96 h-80 flex flex-col justify-between">
          <div className="flex  px-1 ">
            <Avatar className=" w-16 h-16 mt-1 flex">
              <AvatarImage
                src={"/images/avatars/" + profile_image}
                alt={username}
                className="object-cover object-center rounded-full"
              />

              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-3 w-full">
              <div className="w-full ">
                <h2 className="font-bold text-lg -mt-1">{username}</h2>
                <h4 className="text-gray-600 text-md -mt-1">{fullName}</h4>
              </div>
              <h2 className="bg-neutral-200 text-md px-2 py-0.5 rounded-2xl w-fit text-center">
                <span className="font-bold text-lg">@ </span>
                {username}
              </h2>
            </div>
          </div>
          <div className="flex justify-around  text-sm">
            <div className="text-center">
              <p className="font-bold">12,224</p> posts
            </div>
            <div className="text-center">
              <p className="font-bold">252K</p> followers
            </div>
            <div className="text-center">
              <p className="font-bold">37</p> following
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1 ">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-24 bg-neutral-300 dark:bg-neutral-700"
              />
            ))}
          </div>
          <div>
            <Button
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold w-full h-fit"
            >
              <UserPlus strokeWidth={2} />
              Follow
            </Button>{" "}
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverPost;
