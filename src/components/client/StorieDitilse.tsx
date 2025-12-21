"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Volume2, VolumeOff } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMute } from "@/store/slice/videoSlice";
import Image from "next/image";
import { Story } from "@/types/stories";

interface StoriesProps {
  user: Story;
}

export const CarouselPlugin: React.FC<StoriesProps> = ({ user }) => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const [videoPaused, setVideoPaused] = useState<{ [key: number]: boolean }>(
    {}
  );

  const muted = useAppSelector((state) => state.video.muted);
  const dispatch = useAppDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const plugin = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true }) // 4 ثواني
  );
  // mute/unmute
  const handleToggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newMuted = !muted;

    videoRefs.current.forEach((video) => {
      if (video) video.muted = newMuted;
    });

    dispatch(toggleMute());
  };

  // play/pause by click
  const handleTogglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setVideoPaused((prev) => ({ ...prev, [index]: false }));
      } else {
        video.pause();
        setVideoPaused((prev) => ({ ...prev, [index]: true }));
      }
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    videoRefs.current.forEach((v) => {
      if (!v) return;

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
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-[394px] mt-2">
        {/*  Progress bar  */}
        <div className="flex gap-1 px-2 mb-2">
          {user.stories?.map((_, idx) => (
            <div
              key={idx}
              className={`h-[3px] flex-1 rounded-full ${
                idx === currentIndex ? "" : ""
              }`}
            ></div>
          ))}
        </div>
        <div className="w-full bg-amber-400">
          <Carousel
            plugins={[plugin.current]}
            className="bg-sky-600 rounded-xl h-[630px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  setCurrentIndex(api.selectedScrollSnap());
                });
              }
            }}
          >
            <CarouselContent>
              {user.stories?.map((story, index) => (
                <CarouselItem key={index}>
                  <div className="w-full h-full relative">
                    {!story || !story.image ? (
                      <div className="text-white">لا توجد ستوري</div>
                    ) : story.image.toLowerCase().endsWith(".mp4") ? (
                      <div
                        className="relative w-full h-full bg-black overflow-hidden rounded-[3px]"
                        // onClick={handleTogglePlay}
                        onClick={() => handleTogglePlay(index)}
                      >
                        <video
                          ref={(el) => {
                            if (el) videoRefs.current[index] = el;
                          }}
                          src={`/images/posts/${story.image}`}
                          loop
                          playsInline
                          muted={muted}
                          className="w-full h-full object-contain bg-black"
                          onPause={() =>
                            setVideoPaused((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          onPlay={() =>
                            setVideoPaused((prev) => ({
                              ...prev,
                              [index]: false,
                            }))
                          }
                        />

                        {/* mute/unmute */}
                        <button
                          onClick={handleToggleMute}
                          className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-full"
                        >
                          {muted ? (
                            <VolumeOff size={20} />
                          ) : (
                            <Volume2 size={20} />
                          )}
                        </button>

                        {/* play overlay */}
                        {videoPaused[index] && (
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
                      <div className="relative w-full h-full bg-black overflow-hidden rounded-[3px]">
                        <Image
                          src={`/images/posts/${story.image}`}
                          alt={story.title || "Post image"}
                          fill
                          className="object-cover w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="bg-red-300 w-full">
          <div className="bg-red-100 h-full">{user.id}</div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPlugin;
