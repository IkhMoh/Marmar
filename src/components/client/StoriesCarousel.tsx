import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Storie from "../server/Storie";
import { Story } from "@/types/stories";
import { getUsers } from "@/lib/Users/getUsers";
import { getStories } from "@/lib/stories/getStories";

export async function StoriesCarousel() {
  // const stories = [
  //   { id: 1, color: "bg-red-400" },
  //   { id: 2, color: "bg-blue-400" },
  //   { id: 3, color: "bg-green-400" },
  //   { id: 4, color: "bg-yellow-400" },
  //   { id: 5, color: "bg-purple-400" },
  //   { id: 231, color: "bg-red-400" },
  //   { id: 43, color: "bg-blue-400" },
  //   { id: 24, color: "bg-green-400" },
  // ];
  const data: Story[] = await getStories();
  console.log(data);
  return (
    <Carousel className="w-full h-full  flex items-center ">
      <CarouselContent className="gap-4 h-full w-full px-4">
        {data.map((story) => (
          <Storie key={story.id} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default StoriesCarousel;
{
  /* الكاروسال
      <Carousel className="w-full rounded-2xl overflow-hidden shadow-lg">
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem key={story.id}>
              <div
                className={`flex aspect-[9/16] items-center justify-center ${story.color}`}
              >
                <span className="text-white text-xl font-bold">
                  Story {story.id}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/70 hover:bg-white text-gray-800" />
        <CarouselNext className="bg-white/70 hover:bg-white text-gray-800" />
      </Carousel> */
}
