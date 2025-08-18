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

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-600 ">
      <div className="h-[770px] w-[394px] py-4">
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
                  <div className="p-1">
                    <div className="flex aspect-square h-full bg-red-400 items-center justify-center p-6  rounded-lg">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </div>
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
