import React from "react";
import Image from "next/image";
import { Story } from "@/types/stories";
import Link from "next/link";

type StorieProps = {
  data: Story;
};

const Storie = ({ data }: StorieProps) => {
  const { profile_image, username, isRead, stories } = data;

  const hasStoryBorder = stories && stories.length > 0 && !isRead;

  return (
    <Link href={`/stories/${data.username}`}>
      <div className="flex flex-col items-center">
        <div
          className={`w-[89px] h-[89px] rounded-full cursor-pointer p-[3px] ${
            hasStoryBorder
              ? "border-4 border-orange-500"
              : "border border-gray-300"
          }`}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image
              src={`/images/avatars/${profile_image}`}
              height={96}
              width={96}
              alt={`profile image of ${username}`}
              className="object-cover h-full w-full rounded-full"
            />
          </div>
        </div>
        <h1 className="text-center text-sm mt-1">{username}</h1>
      </div>
    </Link>
  );
};

export default Storie;
