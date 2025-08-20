import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send, Volume2, VolumeOff } from "lucide-react";
import { MenuDialog } from "./MenuDialog";
import { SaveDialog } from "./SaveDialog";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState<boolean>(() => {
    const saved = localStorage.getItem("videoMuted");
    return saved ? saved === "false" : false; // default: muted
  });
  const [paused, setPaused] = useState(false);

  // mute/unmute
  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      const newValue = !muted;
      videoRef.current.muted = newValue;
      setMuted(newValue);
      localStorage.setItem("videoMuted", String(newValue));
    }
  };
  // useEffect(() => {
  //   const savedMuted = localStorage.getItem("videoMuted");
  //   const isMuted = savedMuted ? savedMuted === "true" : true; // default muted
  //   setMuted(isMuted);
  //   if (videoRef.current) {
  //     videoRef.current.muted = isMuted;
  //   }
  // }, []);

  // Auto play/pause when visible
  const handleTogglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

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
    <div className="border-b rounded-lg mb-4 dark:bg-gray-800 w-[468px] h-[878px]">
      {/* Header: User info */}
      <div className="flex justify-between p-0.5 pb-3">
        <div className="flex items-center ">
          <Avatar className="w-9 h-9">
            <AvatarImage
              src={`public/images/avatars/profile_image`}
              alt={post.author.username}
              className=""
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
      {/* <div className="px-3 pb-3">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-sm mt-1">{post.body}</p>
      </div> */}

      {post.image.length > 0 && (
        <div className="w-full  relative h-[600px] ">
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
      <div className="flex justify-between pt-2">
        <div className="flex space-x-4">
          <Heart size={26} />
          <MessageCircle size={26} />
          <Send size={26} />
        </div>
        <div>
          <SaveDialog />
        </div>
      </div>
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
