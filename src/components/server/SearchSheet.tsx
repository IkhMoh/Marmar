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

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer ">
        <Search size={25} />
        <p className="hidden lg:block">Search</p>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-md font-bold pl-3">Search</SheetTitle>
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
