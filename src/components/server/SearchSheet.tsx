import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

type SheetDemoProps = {
  onOpen?: () => void;
  onClose?: () => void;
  isCollapsed?: boolean;
};

export function SheetDemo({ onOpen, onClose, isCollapsed }: SheetDemoProps) {
  function handleOpenChange(isOpen: boolean) {
    if (isOpen) {
      onOpen?.();
      return;
    }
    onClose?.();
  }
  return (
    <Sheet onOpenChange={handleOpenChange} >
      <SheetTrigger className=" z-40 flex w-fit py-3 px-3  hover:bg-[#efefef] rounded-md cursor-pointer ">
        <Search size={25} />
        <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
          Search
        </p>
      </SheetTrigger>
      <SheetContent side="left" className="!left-20">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold pl-3">Search</SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="" />
          </div>
        </div>
        <div className="h-full">
          <hr className="mt-2" />
          <h1 className="pt-6 pl-4 font-bold">Resent</h1>
          <div className="h-full w-full  flex justify-center pt-20">
            <h1>No recent searches.</h1>
          </div>
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
