"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import EmojiPicker from "emoji-picker-react";

import { Heart, MessageCircle, Smile, Volume2, VolumeOff } from "lucide-react";
import { SaveDialog } from "../server/SaveDialog";
import { SendDialog } from "./SendDialog";

import { toggleMute } from "@/store/slice/videoSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { MenuDialog } from "../server/MenuDialog";
import HoverPost from "../server/HoverPost";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const muted = useAppSelector((state) => state.video.muted);
  const dispatch = useAppDispatch();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
        setShowEmojiPicker(false);
      }
    }

    if (showEmojiPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showEmojiPicker]);

  // mute/unmute
  const handleToggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      dispatch(toggleMute());
    }
  };

  // play/pause by click
  const handleTogglePlay = () =>
    videoRef.current?.paused
      ? videoRef.current.play()
      : videoRef.current?.pause();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // observer: auto play/pause when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(v);

    // pause when tab not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        v.pause();
      } else if (!v.paused) {
        v.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  console.log(post);
  return (
    <div className="border-b rounded-lg mb-4 dark:bg-gray-800 w-[468px] h-fit pb-4">
      {/* Header */}
      <div className="flex justify-between p-0.5 pb-3">
        <HoverPost
          username={post.author.username}
          profile_image={post.author.profile_image}
          fullName={post.author.name}
        />
        <div className="flex items-center justify-start  w-full">
          <div className="text-sm">{post.time_ago}</div>
        </div>
        <MenuDialog />
      </div>

      {/* Content */}
      {post.image.length > 0 && (
        <div className="w-full relative h-fit">
          {post.type === "video" ? (
            <div
              className="relative w-full h-[600px] bg-black overflow-hidden rounded-[3px]"
              onClick={handleTogglePlay}
            >
              <video
                ref={videoRef}
                src={post.image}
                loop
                playsInline
                muted={muted}
                className="w-full h-full object-contain bg-black"
                onPause={() => setPaused(true)}
                onPlay={() => setPaused(false)}
              />

              {/* mute/unmute button */}
              <button
                onClick={handleToggleMute}
                className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                {muted ? <VolumeOff size={20} /> : <Volume2 size={20} />}
              </button>

              {/* play icon overlay */}
              {paused && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-70"
                  >
                    <path
                      d="M20 15 L45 30 L20 45 Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ) : (
            <div className="relative w-full h-[468px] bg-black overflow-hidden rounded-[3px]">
              {" "}
              <Image
                src={post.image}
                alt={post.title || "Post image"}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="max-h-[505px]">
        <div className="flex justify-between my-1 py-2">
          <div className="flex space-x-4">
            <Heart
              size={26}
              className="transition-transform duration-200 hover:scale-110"
            />
            <Link href={`/p/${post.id}`}>
              <MessageCircle
                size={26}
                className="transition-transform duration-200 hover:scale-110"
              />
            </Link>
            <SendDialog />
          </div>
          <SaveDialog />
        </div>
        <div className="text-sm font-medium">
          {post.likes ? post.likes : 390} likes
        </div>

        {/* Body text with expand/collapse */}
        <div
          className={`text-sm text-gray-900 dark:text-gray-200 ${
            expanded
              ? ""
              : "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
          }`}
        >
          {post.body}
        </div>
        <div className="w-full h-full flex items-center justify-end">
          {(post.body?.length ?? 78) > 80 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-600 text-sm font-semibold mt-1 "
            >
              {expanded ? "Hide" : "More"}
            </button>
          )}
        </div>

        <Link href={`/p/${post.id}`}>
          <div className="text-sm text-gray-700 mt-2">
            View all <span className="font-bold">{post.comments_count}</span>{" "}
            comments
          </div>
        </Link>

        <div className="text-sm text-gray-700 mt-2 flex min-h-6 h-fit relative">
          <textarea
            className="min-h-4 h-fit w-full border-none outline-none resize-none overflow-y-hidden leading-none p-0"
            placeholder="Add a comment…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <div className="flex items-center h-fit space-x-2 ">
            <div className="font-bold text-blue-700"> post</div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker((prev) => !prev)}
              >
                <Smile
                  size={16}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </button>

              {showEmojiPicker && (
                <div ref={emojiRef} className="absolute bottom-8 right-0 z-50">
                  <EmojiPicker
                    className="transition-transform duration-200"
                    onEmojiClick={(emojiData) => {
                      setComment((prev) => prev + emojiData.emoji);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
