import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

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
        <HoverCardContent className="w-80">
          <div className="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="text-muted-foreground text-xs">
                Joined December 2021
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverPost;
