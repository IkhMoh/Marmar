"use client";
import { usePathname } from "next/navigation";
import { MessageCircleMore } from "lucide-react";

export default function MessageButton() {
  const pathname = usePathname();

  if (pathname === "/direct") return null;

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 px-8 py-4 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer hover:opacity-90 transition">
      <MessageCircleMore size={25} />
      <span className="font-bold text-lg">Messages</span>
    </div>
  );
}
