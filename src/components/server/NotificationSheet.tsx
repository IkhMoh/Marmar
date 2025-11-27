import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Heart } from "lucide-react";
import { Button } from "../ui/button";
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
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger className="flex w-fit py-3 px-3  hover:bg-[#efefef] rounded-md cursor-pointer">
        <Heart size={25} />
        <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
          Notifications
        </p>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold pl-3">
            Notifications
          </SheetTitle>
        </SheetHeader>

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
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>{" "}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
