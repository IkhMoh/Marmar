import StorieDitilse from "@/components/client/StorieDitilse";
import { getStories } from "@/lib/stories/getStories";
import React from "react";
import { Story } from "@/types/stories";
const page = async () => {
  const stories: Story[] = await getStories();
  console.log(stories);
  return (
    <div className="flex max-h-lvh bg-gray-600 overflow-y-hidden">
      {/* <StorieDitilse stories={stories} /> */}
      {stories.map((user) => (
        <div key={user.id}>
          <StorieDitilse user={user} />
        </div>
      ))}
    </div>
  );
};

export default page;
