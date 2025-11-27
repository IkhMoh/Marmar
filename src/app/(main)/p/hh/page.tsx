import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";

const page = () => {
  const isCollapsed = false;
  return (
    <div className="bg-red-300 w-40 h-screen flex justify-center items-center">
      <Popover>
        <PopoverTrigger className=" flex w-fit py-3 px-3  hover:bg-[#efefef] rounded-md cursor-pointer ">
          <Search size={25} />
          <p className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}>
            Search
          </p>
        </PopoverTrigger>
        <PopoverContent
          side="left"
          className="w-80 h-screen bg-amber-500 left-12"
        >
          <div className="text-2xl font-bold pl-3">Search</div>
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
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default page;
