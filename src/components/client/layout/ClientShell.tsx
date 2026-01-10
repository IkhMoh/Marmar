"use client";

import SideBar from "./SideBar";
import MessagesIcon from "./MessagesIcon";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row-reverse w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="flex-1 overflow-y-auto">{children}</div>
      <MessagesIcon />
    </div>
  );
}
