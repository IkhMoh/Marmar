import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

interface HoverPostContentProps {
  username: string;
  profile_image?: string;
  fullName?: string;
}

async function getHoverData(username: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    posts: 12224,
    followers: "252K",
    following: 37,
    images: Array.from({ length: 3 }),
  };
}

export default async function HoverPostContent({
  username,
  profile_image,
  fullName,
}: HoverPostContentProps) {
  const data = await getHoverData(username);

  return (
    <>
    <div className="flex  px-1 ">
      <Avatar className="w-16 h-16 mt-1 flex">
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
        <UserPlus
          strokeWidth={2}
          className="transition-transform duration-200 hover:scale-110"
        />
        Follow
      </Button>{" "}
    </div>
  </>
  );
}
