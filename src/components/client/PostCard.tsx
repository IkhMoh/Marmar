"use client";
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Volume2, VolumeOff } from "lucide-react";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);

  // mute/unmute
  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  // toggle play/pause by click
  const handleTogglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  // Auto play/pause when visible
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            v.play();
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(v);

    return () => {
      observer.disconnect();
    };
  }, []);
  // const author: Author = post.author ?? {
  //   id: 0,
  //   username: "Unknown",
  //   name: "",
  //   profile_image: "default.jpg",
  // };

  // let mediaSrc = "";
  // if (Array.isArray(post.image) && post.image.length > 0) {
  //   mediaSrc = post.image[0];
  // } else if (typeof post.image === "string") {
  //   mediaSrc = post.image;
  // } else {
  //   mediaSrc = "/default.jpg";
  // }

  // const finalSrc = mediaSrc.startsWith("http")
  //   ? mediaSrc
  //   : `/image/posts/${mediaSrc}`;

  return (
    <div className="border rounded-lg mb-6  dark:bg-gray-800 shadow-sm w-[468px] h-[878px]">
      {/* Header: User info */}
      <div className="flex items-center p-3">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={`public/images/avatars/profile_image`}
            alt={post.author.username}
          />
          <AvatarFallback>
            {post.author.username[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="font-semibold text-sm">{post.author.username}</p>
          <p className="text-xs text-gray-500">{post.author.name}</p>
        </div>
      </div>

      {/* Content */}
      {/* <div className="px-3 pb-3">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-sm mt-1">{post.body}</p>
      </div> */}

      {post.image.length > 0 && (
        <div className="w-full  relative h-[600px]">
          {post.type === "video" ? (
            <div
              className="relative w-full h-[600px] bg-black overflow-hidden"
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

              <button
                onClick={toggleMute}
                className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full"
              >
                {muted ? <VolumeOff size={20} /> : <Volume2 size={20} />}
              </button>

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
    </div>
  );
};

export default PostCard;
//  <div className="w-full relative h-[400px]">
//           {post.type === "video" ? (
//             <video
//               src={
//                 post.image[0].startsWith("http")
//                   ? post.image[0]
//                   : `/images/posts/${post.image[0]}`
//               }
//               controls
//               className="w-full h-full object-cover rounded-md"
//             />
//           ) : (
//             <Image
//               src={
//                 post.image[0].startsWith("http")
//                   ? post.image[0]
//                   : `/images/posts/${post.image[0]}`
//               }
//               alt={post.title || "Post image"}
//               fill
//               className="object-cover rounded-md"
//             />
//           )}
//         </div>
