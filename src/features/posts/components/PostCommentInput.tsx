"use client";

import React, { useState, useTransition } from "react";
import { submitComment } from "../actions";
import EmojiSelector from "@/components/client/EmojiSelector";

export default function PostCommentInput({ postId }: { postId: number }) {
  const [comment, setComment] = useState("");
  const [isPending, startTransition] = useTransition();

  const handlePost = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in! Please login to your account.");
      return;
    }

    if (!comment.trim()) return;

    startTransition(async () => {
      const result = await submitComment(postId, comment, token);

      if (result.success) {
        setComment("");
      } else {
        alert(result.error);
      }
    });
  };
  const addEmoji = (emoji: string) => {
    setComment((prev) => prev + emoji);
  };
  return (
    <div className="text-sm text-gray-700 mt-2 flex min-h-6 h-fit relative  pt-2  px-3 py-2">
      <textarea
        className="min-h-4 h-fit w-full border-none outline-none resize-none overflow-y-hidden leading-none p-0 bg-transparent dark:text-white"
        placeholder={isPending ? "Posting..." : "Add a comment..."}
        value={comment}
        disabled={isPending}
        onChange={(e) => setComment(e.target.value)}
      />

      <div className="flex items-center h-fit space-x-3">
        {/* Post Button - Fixed function name here */}
        <button
          onClick={handlePost}
          disabled={!comment.trim() || isPending}
          className={`font-bold text-blue-500 hover:text-blue-700 transition-colors ${
            (!comment.trim() || isPending) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {isPending ? "..." : "Post"}
        </button>

        <EmojiSelector onEmojiSelect={addEmoji} iconSize={20} />
      </div>
    </div>
  );
}
