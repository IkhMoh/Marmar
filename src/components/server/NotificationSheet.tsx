import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Heart } from "lucide-react";
import AccountCard from "./AccountCard";

type NotificationSheetProps = {
  onOpen?: () => void;
  onClose?: () => void;
  isCollapsed?: boolean;
};

export function NotificationSheet({
  onOpen,
  onClose,
  isCollapsed,
}: NotificationSheetProps) {
  function handleOpenChange(isOpen: boolean) {
    if (isOpen) {
      onOpen?.();
      return;
    }
    onClose?.();
  }
  return (
    <Popover onOpenChange={handleOpenChange}>
      <PopoverTrigger
        className={`flex items-center  p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
          isCollapsed ? "w-fit" : "w-full"
        }`}
      >
        {" "}
        <Heart size={25} />
        <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
          Notifications
        </p>
      </PopoverTrigger>
      <PopoverContent side="left" className="w-80 h-screen left-12">
        {" "}
        <div>
          <div className="text-2xl font-bold pl-3">Notifications</div>
        </div>
        <div className="h-full space-y-5 mx-2">
          <div className="text-md font-bold pl-3">This week</div>
          <span className=" flex flex-col items-center">
            <AccountCard />
          </span>
          <hr className="mt-2" />
          <div className="text-md font-bold pl-3">This month</div>
          <span className=" flex flex-col items-center">
            <AccountCard />
          </span>
          <hr className="mt-2" />
        </div>
      </PopoverContent>
    </Popover>
  );
}
