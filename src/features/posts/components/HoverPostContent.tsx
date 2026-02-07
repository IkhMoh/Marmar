import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@/features/users/types";
import { UserPlus } from "lucide-react";
import Image from "next/image";

interface UserCardProps {
  user?: User;
}

export default function HoverPostContent({ user }: UserCardProps) {
  return (
    <>
      <div className="flex  px-1 ">
        <Avatar className="w-16 h-16 mt-1 flex">
          <AvatarImage
            src={user?.profile_image}
            alt={user?.username}
            className="object-cover object-center rounded-full"
          />

          <AvatarFallback>
            {(user?.username?.[0] || "CD").toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-3 w-full">
          <div className="w-full ">
            <h2 className="font-bold text-lg -mt-1">{user?.username}</h2>
            <h4 className="text-gray-600 text-md -mt-1">{user?.name}</h4>
          </div>
          <h2 className="bg-neutral-200 text-md px-2 py-0.5 rounded-2xl w-fit text-center">
            <span className="font-bold text-lg">@ </span>
            {user?.username}
          </h2>
        </div>
      </div>
      <div className="flex justify-around  text-sm">
        <div className="text-center">
          <p className="font-bold">{user?.all_posts || 112}</p> posts
        </div>
        <div className="text-center">
          <p className="font-bold">{user?.followers || 244}</p> followers
        </div>
        <div className="text-center">
          <p className="font-bold">{user?.following || 44}</p> following
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 ">
        {user?.posts?.length && user.posts[0]?.media?.length
          ? user.posts[0].media.map((item, i) => (
              <Image
                key={i}
                src={item.url}
                width={12}
                height={12}
                alt="posts images"
                className="w-full h-24 object-cover"
              />
            ))
          : Array.from({ length: 3 }).map((_, i) => (
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
          <UserPlus
            strokeWidth={2}
            className="transition-transform duration-200 hover:scale-110"
          />
          Follow
        </Button>
      </div>
    </>
  );
}
