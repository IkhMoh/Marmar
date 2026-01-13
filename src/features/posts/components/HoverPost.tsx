import { Suspense } from "react";
import HoverPostSkeleton from "./HoverPostSkeleton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import HoverPostContent from "./HoverPostContent";

interface MinimalUser {
  username: string;
  profile_image?: string;
  fullName?: string;
}

export default function HoverPost({
  username,
  profile_image,
  fullName,
}: MinimalUser) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={username}
          className="flex justify-between  px-1 cursor-pointer"
        >
          <Avatar className="w-11 h-11">
            <AvatarImage
              src={"/images/avatars/" + profile_image}
              alt={username}
              className="object-cover object-center rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <h2 className="font-bold">{username}</h2>
            <h4 className="text-gray-500 text-sm">{fullName}</h4>
          </div>
        </Link>
      </HoverCardTrigger>

      <HoverCardContent className="w-96 h-80 flex flex-col justify-between bg-white dark:bg-neutral-900">
        <Suspense fallback={<HoverPostSkeleton />}>
           <HoverPostContent
            username={username}
            profile_image={profile_image}
            fullName={fullName}
          />
        </Suspense>
      </HoverCardContent>
    </HoverCard>)
}
