import { Bookmark, Plus } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function SaveDialog() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <button className="">
          <Bookmark size={26} />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="w-52">
        <div className="flex justify-between px-2">
          <div>Collections</div>
          <div>
            <Plus />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
