"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3x3, Film, SquareUserRound } from "lucide-react";

interface ProfileTabsProps {
  username: string;
}
export default function ProfileTabs({ username }: ProfileTabsProps) {
  const pathname = usePathname();
   const isActive = (path: string) => {
    if (path === "") {
      return pathname === `/${username}` || pathname === `/${username}/`;
    }

    return pathname === `/${username}/${path}`;
  };

  return (
    <div className="h-fit w-full flex justify-center space-x-56">
      <Link
        href={`/${username}`}
        className={
          isActive("")
            ? "border-b-2 border-black dark:border-white pb-2 px-5"
            : ""
        }
      >
        <Grid3x3 size={26} strokeWidth={isActive("") ? 2 : 1.5} />
      </Link>

      <Link
        href={`/${username}/reels`}
        className={
          isActive("/reels")
            ? "border-b-2 border-black dark:border-white pb-2 px-5"
            : ""
        }
      >
        <Film size={26} strokeWidth={isActive("/reels") ? 2 : 1.5} />
      </Link>

      <Link
        href={`/${username}/tagged`}
        className={
          isActive("/tagged")
            ? "border-b-2 border-black dark:border-white pb-2 px-5"
            : ""
        }
      >
        <SquareUserRound
          size={26}
          strokeWidth={isActive("/tagged") ? 2 : 1.5}
        />
      </Link>
    </div>
  );
}
