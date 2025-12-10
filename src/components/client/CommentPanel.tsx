import { X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import UserCardComment from "@/components/server/UserCardComment";

interface CommentPanelProps {
  onClose: () => void;
}

const CommentPanel = ({ onClose }: CommentPanelProps) => {
  return (
    <Card className="w-[343px] max-h-[450px] h-fit p-0 absolute bottom-25 right-7 z-50 shadow-2xl rounded-xl border overflow-hidden">
  <CardContent className="px-2 py-2 relative h-full flex flex-col min-h-0">

    {/* HEADER */}
    <div className="flex items-center py-2 relative">
      <button
        onClick={onClose}
        className="absolute left-5 flex items-center justify-center w-8 h-8 rounded-full transition-colors"
      >
        <X strokeWidth={1.5} size={22} />
      </button>
      <h2 className="w-full text-center font-bold text-lg">Comments</h2>
    </div>

    {/* comments (scroll area) */}
    <section className="flex-1 overflow-y-auto px-4 py-2 space-y-2 min-h-0">
      <UserCardComment />
      <UserCardComment />
      <UserCardComment />
      <UserCardComment />
      <UserCardComment />
      <UserCardComment />
      <UserCardComment />
    </section>

    {/* input (fixed bottom) */}
    <section className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 outline-none text-sm"
      />
      <button className="text-blue-500 text-sm font-semibold">Post</button>
    </section>

  </CardContent>
</Card>

  );
};

export default CommentPanel;
