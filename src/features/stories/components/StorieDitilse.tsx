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
import { Pause, Play, Volume2, VolumeOff, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleMute } from "@/store/slice/videoSlice";
import Image from "next/image";
import { Story } from "@/types/stories";
import UserCardStorie from "@/features/users/components/UserCardStorie";
import Link from "next/link";
 
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
    <div className="h-screen w-screen flex justify-between bg-neutral-900">
      {/* logo */}
      <Link
        href={"/"}
        className="flex space-x-1 items-center justify-center mt-2 ml-2 h-fit"
      >
        <div className="font-bold text-3xl font-handlee text-white">Marmar</div>
      </Link>
      {/* logo ====*/}
      <div className="w-[394px] mt-2">
        {/*  Progress bar  */}
        <div className="flex gap-1 px-2 mb-2 ">
          {user.stories?.map((_, idx) => (
            <div
              key={idx}
              className={`h-[3px] flex-1 rounded-full bg-white ${
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
                  <div className="w-full h-full relative ">
                    {!story || !story.image ? (
                      <div className="text-white">لا توجد ستوري</div>
                    ) : story.image.toLowerCase().endsWith(".mp4") ? (
                      <div className="relative w-full h-full bg-black overflow-hidden rounded-[3px]">
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

                        <section className="absolute top-3 px-4 h-fit w-full bg-transparent flex items-center justify-between">
                          <UserCardStorie
                            username={user.username}
                            profile_image={user.profile_image}
                          />
                          <section className="flex items-center space-x-2">
                            <button
                              onClick={handleToggleMute}
                              className="text-white  rounded-full"
                            >
                              {muted ? (
                                <VolumeOff size={22} fill="currentColor" />
                              ) : (
                                <Volume2 size={22} fill="currentColor" />
                              )}
                            </button>
                            <div className="flex items-center justify-center">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTogglePlay(index);
                                }}
                                className="rounded-full text-white hover:scale-105 transition"
                              >
                                {videoPaused[index] ? (
                                  <Play
                                    size={22}
                                    fill="currentColor"
                                    stroke="none"
                                  />
                                ) : (
                                  <Pause
                                    size={22}
                                    fill="currentColor"
                                    stroke="none"
                                  />
                                )}
                              </button>
                            </div>
                            {/* <MenuDialog /> */}
                          </section>
                        </section>
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
        <div className=" w-full">
          <div className="bg-red-100 h-full">{user.id}</div>
        </div>
      </div>
      {/* button back */}
      <Link href={"/"} className="mt-5 mr-5" >
        <X color="white" size={32} />
      </Link>
      {/* button back ====*/}
    </div>
  );
};

export default CarouselPlugin;
