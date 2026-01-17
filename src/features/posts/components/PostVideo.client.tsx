"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeOff } from "lucide-react"; // Assuming lucide-react for icons
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMute } from "@/store/slice/videoSlice";
// Adjust path to your hooks

interface PostVideoProps {
  src: string;
}

export default function PostVideo({ src }: PostVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const muted = useAppSelector((state) => state.video.muted);
  const dispatch = useAppDispatch();

  // Handle Mute/Unmute
  const handleToggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      dispatch(toggleMute());
    }
  };

  // Handle Play/Pause
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Auto play/pause when visible
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

    // Pause when tab is switched
    const handleVisibilityChange = () => {
      if (document.hidden) {
        v.pause();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (!src || typeof src !== "string") {
    return null; 
  }
  return (
    <div
      className="relative w-full h-[600px] bg-black overflow-hidden rounded-[3px] cursor-pointer"
      onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        muted={muted}
        className="w-full h-full object-contain bg-black"
        onPause={() => setPaused(true)}
        onPlay={() => setPaused(false)}
      />

      <button
        onClick={handleToggleMute}
        className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full z-10"
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
  );
}
