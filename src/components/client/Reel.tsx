"use client";
import { Volume2, VolumeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Reel() {
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

  return (
    <div
      className="relative w-fit h-[730px] bg-black overflow-hidden"
      onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        src="/images/posts/mm.mp4"
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
      {/* 
      todo
      */}
      <div className="w-20 bg-red-400">ff</div>
    </div>
  );
}
