"use client";
import { Heart, MessageCircle, Music, Volume2, VolumeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SendDialog } from "../../../components/client/SendDialog";
import { SaveDialog } from "../../../components/server/SaveDialog";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { MenuDialog } from "../../../components/client/MenuDialog";
import CommentPanel from "../../comments/components/CommentPanel";
import UserCardReel from "@/features/users/components/UserCardReel";
import PostContent from "@/features/posts/components/PostContent.client";
import { Reel } from "../types";
interface ReelCardProps {
  reel: Reel;
}
export default function ReelCard({ reel }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [openCommentPanel, setOpenCommentPanel] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpenCommentPanel(false);
      }
    }

    if (openCommentPanel) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCommentPanel]);

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
 
  return (
    <div className=" flex  w-fit h-[710px]">
      <div className="relative w-[386px] h-[710px] bg-black shadow-2xl  ">
        <video
          onClick={handleTogglePlay}
          ref={videoRef}
          src={reel.media[0].url}
          loop
          playsInline
          muted={muted}
          className="h-full w-full"
          onPause={() => setPaused(true)}
          onPlay={() => setPaused(false)}
        />
        <button
          onClick={toggleMute}
          className="absolute top-4 right-2 bg-black/50 text-white p-2 rounded-full"
        >
          {muted ? <VolumeOff size={18} /> : <Volume2 size={18} />}
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
        <section className="absolute bottom-3 p-5 space-y-2 h-fit max-h-11/12  w-full bg-transparent">
          <UserCardReel author={reel.author} />
          <section className="text-white text-sm">
            <PostContent body={reel.body} className="text-white font-medium" />
          </section>
          <button className="text-white  flex items-center space-x-2 pl-2 py-1.5 pr-20 bg-white/20 backdrop-blur-md rounded-2xl">
            <Music size={16} />
            <p className="text-xs">{reel.author.username}</p>
            <p className="text-xs">Original audio</p>
          </button>
        </section>
      </div>
      <div className="w-20  h-full">
        <div className="w-full  h-full  flex  justify-end items-center">
          {" "}
          <div className="w-full  h-full flex flex-col items-center justify-end space-y-6 pb-2 ">
            <div className=" flex flex-col space-y-6">
              <div className=" flex flex-col items-center space-y-6">
                {" "}
                <div className="flex flex-col items-center space-y1">
                  <Heart size={25} />
                  <p className="text-xs">{reel.likes_count}</p>
                </div>
                <Link
                  href="#"
                  className="cursor-pointer flex flex-col items-center space-y1"
                  onClick={() => setOpenCommentPanel(true)}
                >
                  <MessageCircle size={25} />
                  <p className="text-xs">{reel.comments_count}</p>
                </Link>
                <SendDialog />
                <SaveDialog />
                <MenuDialog />
              </div>

              <Avatar className="w-7 h-7 rounded-md bg-red-700">
                <AvatarImage
                  src={reel.author.profile_image}
                // alt={post.author.username}
                />
                <AvatarFallback>
                  {reel.author.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
      {openCommentPanel && (
        <div ref={panelRef}>
          <CommentPanel onClose={() => setOpenCommentPanel(false)} />
        </div>
      )}
    </div>
  );
}
