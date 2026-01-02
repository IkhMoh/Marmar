import ChatSidebar from "@/components/server/layout/ChatSidebar";
import { ChevronDown, SquarePen } from "lucide-react";
import React from "react";

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full pl-[72px] flex flex-row ">
      <div className="h-screen w-[565px]">
        <div className="h-screen overflow-y-hidden pt-8">
          <div className="w-full py-1 flex justify-between  px-6 ">
            <div className="text-xl font-extrabold flex ">
              <span>ikhlef_mohamed_lamin </span>
              <ChevronDown size={18} className="mt-1.5 ml-1 text-neutral-500" />
            </div>
            <SquarePen />
          </div>
          <ChatSidebar />
        </div>
      </div>
      {children}
    </div>
  );
}
