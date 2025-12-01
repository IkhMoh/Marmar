import React from "react";
import Profile from "@/components/server/Profile";

interface LayoutProps {
  children: React.ReactNode;
  params: { profile: string };
}

export default function ProfileLayout({ children, params }: LayoutProps) {
  const { profile } = params;

  return (
    <div className="min-h-screen w-full pl-[244px]">
      <Profile username={profile} />
      <div className="px-24">{children}</div>
    </div>
  );
}
