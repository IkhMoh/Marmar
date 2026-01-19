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
import { User } from "@/features/users/types";

interface UserCardProps {
  user?: User;
}

export default function HoverPost({ user }: UserCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          href={user?.username || "ikhlef"}
          className="flex justify-between  px-1 cursor-pointer"
        >
          <Avatar className="w-11 h-11">
            <AvatarImage
              src={user?.profile_image}
              alt={user?.username}
              className="object-cover object-center rounded-full"
            />
            <AvatarFallback>
              {(user?.username?.[0] || "CD").toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <h2 className="font-bold">{user?.username}</h2>
            <h4 className="text-gray-500 text-sm">{user?.name}</h4>
          </div>
        </Link>
      </HoverCardTrigger>

      <HoverCardContent className="w-96 h-80 flex flex-col justify-between bg-white dark:bg-neutral-900">
        <Suspense fallback={<HoverPostSkeleton />}>
          <HoverPostContent user={user} />
        </Suspense>
      </HoverCardContent>
    </HoverCard>
  );
}
