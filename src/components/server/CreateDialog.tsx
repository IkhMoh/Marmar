import { SquarePlus } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CreatePostDialog from "./CreatePostDialog";

type CreateDialogProps = {
  isCollapsed?: boolean;
};

const CreateDialog = ({ isCollapsed }: CreateDialogProps) => {
  return (
    <HoverCard
      openDelay={0}
      closeDelay={0}
    >
      <HoverCardTrigger asChild>
        <div
              className={`flex items-center  p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? "w-fit" : "w-full"
              }`}
            >          <SquarePlus size={25} />
          <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
            Create
          </p>
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
