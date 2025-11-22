"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3x3, Film, SquareUserRound } from "lucide-react";

export default function ProfileTabs({ username }: { username: string }) {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === `/${username}${path}`;

  return (
    <div className="h-fit w-full px-4 flex justify-evenly ">
      <Link href={`/${username}`}>
        <Grid3x3 size={28} strokeWidth={isActive("") ? 2 : 1.5} />
      </Link>
      <Link href={`/${username}/reels`}>
        <Film size={28} strokeWidth={isActive("/reels") ? 2 : 1.5} />
      </Link>
      <Link href={`/${username}/tagged`}>
        <SquareUserRound size={28} strokeWidth={isActive("/tagged") ? 2 : 1.5} />
      </Link>
    </div>
  );
}
