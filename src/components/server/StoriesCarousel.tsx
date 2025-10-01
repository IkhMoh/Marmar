import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
import Storie from "./Storie";
import { Story } from "@/types/stories";
import { getStories } from "@/lib/stories/getStories";

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
// {

//       <Carousel className="w-full rounded-2xl overflow-hidden shadow-lg">
//         <CarouselContent>
//           {stories.map((story) => (
//             <CarouselItem key={story.id}>
//               <div
//                 className={`flex aspect-[9/16] items-center justify-center ${story.color}`}
//               >
//                 <span className="text-white text-xl font-bold">
//                   Story {story.id}
//                 </span>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="bg-white/70 hover:bg-white text-gray-800" />
//         <CarouselNext className="bg-white/70 hover:bg-white text-gray-800" />
//       </Carousel> */
// }
