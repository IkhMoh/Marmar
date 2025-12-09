"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MainMessagePanel from "./MainMessagePanel";
import NewMessagePanel from "./NewMessagePanel";
import { Send } from "lucide-react";

export default function MessagesIcon() {
  const [openPanel, setOpenPanel] = useState<"main" | "new" | null>(null);

  const pathname = usePathname();

  const isDirect = pathname.startsWith("/direct");

  if (isDirect) return null;

  return (
    // todo : real data user

    <>
      <div
        onClick={() => setOpenPanel("main")}
        className="fixed bottom-8 right-9 flex items-center space-x-2 px-5 py-5 rounded-full bg-white shadow-md hover:opacity-90 transition z-40 cursor-pointer"
      >
        <Send size={25} className="cursor-pointer" />

        <span className="font-bold text-lg leading-none ml-2">Messages</span>
        <div className="flex -space-x-2 flex-row">
          <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-white z-50  " />
          <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white z-40" />
          <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white z-30" />
          <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex justify-center text-center text-white text-xs font-bold z-10">
            …
          </div>
        </div>
      </div>

      {openPanel === "main" && (
        <MainMessagePanel
          onClose={() => setOpenPanel(null)}
          onNewMessage={() => setOpenPanel("new")}
        />
      )}
      {openPanel === "new" && (
        <NewMessagePanel
          onClose={() => setOpenPanel(null)}
          onBack={() => setOpenPanel("main")}
        />
      )}
    </>
  );
}
