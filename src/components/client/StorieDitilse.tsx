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

export function CarouselPlugin() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = React.useState(false);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };
  return (
    <div className=" h-lvh w-screen flex items-center justify-center bg-gray-600 ">
      <div className="h-[770px] w-[394px] ">
        <div className=" w-full bg-amber-400">
          <Carousel
            plugins={[plugin.current]}
            className=" bg-sky-300 rounded-xl  h-[650px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-full bg-black overflow-hidden">
                    <video
                      ref={videoRef}
                      src="/images/posts/mm.mp4"
                      loop
                      autoPlay
                      playsInline
                      muted={muted}
                      className="w-full h-full object-contain bg-black"
                    />
                    <button
                      onClick={toggleMute}
                      className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
                    >
                      {muted ? <VolumeOff size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="bg-red-300 w-full ">
          <div className="bg-red-950 h-full">hh</div>
        </div>
      </div>
    </div>
  );
}

export default CarouselPlugin;
