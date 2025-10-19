import { SquarePlus } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CreatePostDialog from "./CreatePostDialog";

const CreateDialog = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
          <SquarePlus size={25} />
          <p className="hidden lg:block">Create</p>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="cursor-pointer hover:bg-[#efefef] rounded-md">
        <div>
          {" "}
          <CreatePostDialog />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CreateDialog;
