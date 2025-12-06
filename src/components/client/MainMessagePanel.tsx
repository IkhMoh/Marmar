"use client";
import { Expand, SquarePen, X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";

interface MainMessagePanelProps {
  onClose: () => void;
  onNewMessage: () => void;
}
const MainMessagePanel = ({ onNewMessage, onClose }: MainMessagePanelProps) => {
  const users = Array.from({ length: 10 }, (_, i) => ({ id: i + 1 }));

  return (
    // todo : real data user
    <div>
      (
      <Card className="p-0 w-[360px] h-[521px] fixed bottom-6 right-8 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
        <CardContent className="p-0 relative h-full">
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-md">Messages</h2>
              <span
                className="inline-flex items-center justify-center  bg-red-500  text-white text-xs font-bold rounded-full px-2 h-5 min-w-[1.25rem]
"
              >
                6
              </span>
            </div>
            {/* icons */}
            <div className="flex items-center space-x-1.5">
              <Link href="/direct" className="flex">
                <Expand
                  strokeWidth={1}
                  size={24}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </Link>

              <button onClick={onClose} className="flex cursor-pointer">
                <X
                  strokeWidth={1}
                  size={32}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </button>
            </div>
          </div>

          {/* LIST */}
          <div className="overflow-y-auto h-full w-full px-3  space-y-2">
            {users.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-2"
              >
                {/*_avatar + name + subtext */}
                <div className="flex items-center gap-3">
                  {/* Avatar فارغ */}
                  <div className="w-12 h-12 rounded-full bg-gray-200" />

                  <div>
                    <div className="font-semibold text-sm">
                      {/* هنا تحط اسم المستخدم */}
                    </div>
                    <div className="text-xs text-gray-500 truncate max-w-[180px]">
                      {/* هنا تحط آخر رسالة */}
                    </div>
                  </div>
                </div>

                {/* time */}
                <div className="text-xs text-gray-500">{/* هنا الوقت */}</div>
              </div>
            ))}
          </div>

          {/* Floating Create Button */}
          <button
            className="absolute bottom-3 right-3 rounded-full p-3.5 shadow-2xl shadow-black bg-white transition-transform duration-200 hover:bg-neutral-100"
            onClick={onNewMessage}
          >
            <SquarePen strokeWidth={2} size={25} />
          </button>
        </CardContent>
      </Card>
      )
    </div>
  );
};

export default MainMessagePanel;
