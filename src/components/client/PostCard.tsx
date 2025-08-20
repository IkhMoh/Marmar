"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Volume2, VolumeOff } from "lucide-react";
import { MenuDialog } from "../server/MenuDialog";
import { SaveDialog } from "../server/SaveDialog";

import { toggleMute } from "@/store/slice/videoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const muted = useAppSelector((state) => state.video.muted);
  const dispatch = useAppDispatch();

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

  return (
    <div className="border-b rounded-lg mb-4 dark:bg-gray-800 w-[468px] h-[878px]">
      {/* Header */}
      <div className="flex justify-between p-0.5 pb-3">
        <div className="flex items-center ">
          <Avatar className="w-9 h-9">
            <AvatarImage
              src={`public/images/avatars/profile_image`}
              alt={post.author.username}
            />
            <AvatarFallback>
              {post.author.username[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-bold text-sm">{post.author.username}</p>
          </div>
          <div className="ml-3 text-sm">{post.time_ago}</div>
        </div>
        <MenuDialog />
      </div>

      {/* Content */}
      {post.image.length > 0 && (
        <div className="w-full relative h-[600px]">
          {post.type === "video" ? (
            <div
              className="relative w-full h-[600px] bg-black overflow-hidden rounded-[3px]"
              onClick={handleTogglePlay}
            >
              <video
                ref={videoRef}
                src={
                  post.image[0].startsWith("http")
                    ? post.image[0]
                    : `/images/posts/${post.image[0]}`
                }
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
            <Image
              src={
                post.image[0].startsWith("http")
                  ? post.image[0]
                  : `/images/posts/${post.image[0]}`
              }
              alt={post.title || "Post image"}
              fill
              className="object-cover rounded-md"
            />
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between pt-2">
        <div className="flex space-x-4">
          <Heart size={26} />
          <MessageCircle size={26} />
          <Send size={26} />
        </div>
        <SaveDialog />
      </div>
    </div>
  );
};

export default PostCard;
