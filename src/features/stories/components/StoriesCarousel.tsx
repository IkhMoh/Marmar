import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import { Story } from "@/types/stories";
import { getStories } from "@/lib/stories/getStories";
import Storie from "./Storie";

export async function StoriesCarousel() {
  const data: Story[] = await getStories();
   return (
    <Carousel className="w-full h-full  flex items-center ">
      <CarouselContent className="gap-4 h-full w-full px-4">
        {data.map((story) => (
          <Storie key={story.id} data={story} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default StoriesCarousel;
