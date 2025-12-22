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
    const base = `/${username}`;
    if (path === "") return pathname === base || pathname === `${base}/`;
    return pathname === `${base}${path}`;
  };

  return (
    <div className="h-fit w-full flex justify-center space-x-56">
      <Link
        href={`/${username}`}
        className={`pb-2 px-5 h-10 flex items-center justify-center border-b-2 ${
          isActive("") ? "border-black dark:border-white" : "border-transparent"
        }`}
      >
        <Grid3x3 size={26} strokeWidth={isActive("") ? 2 : 1.5} />
      </Link>

      <Link
        href={`/${username}/reels`}
        className={`pb-2 px-5 h-10 flex items-center justify-center border-b-2 ${
          isActive("/reels")
            ? "border-black dark:border-white"
            : "border-transparent"
        }`}
      >
        <Film size={26} strokeWidth={isActive("/reels") ? 2 : 1.5} />
      </Link>

      <Link
        href={`/${username}/tagged`}
        className={`pb-2 px-5 h-10 flex items-center justify-center border-b-2 ${
          isActive("/tagged")
            ? "border-black dark:border-white"
            : "border-transparent"
        }`}
      >
        <SquareUserRound
          size={26}
          strokeWidth={isActive("/tagged") ? 2 : 1.5}
        />
      </Link>
    </div>
  );
}
