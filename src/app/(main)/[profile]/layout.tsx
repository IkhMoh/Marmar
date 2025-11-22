import React from "react";
import Profile from "@/components/server/Profile";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <Profile username="jj" />
      <div className="px-24">{children}</div>
    </div>
  );
}
