"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";

export function MenuDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center  cursor-pointer">
          <Ellipsis
            className="transition-transform duration-200 hover:scale-110"
            size={22}
          />
        </button>
      </DialogTrigger>

      <DialogContent className="p-0 rounded-2xl w-96">
        <DialogTitle className="hidden">Menu</DialogTitle>
        <div className="flex flex-col divide-y text-center">
          <button className="py-3 font-semibold text-red-500 hover:text-red-300">
            Report
          </button>
          <button className="py-3 font-semibold text-red-500 hover:text-red-300">
            Unfollow
          </button>
          <button className="py-3 ">Add to favorites</button>
          <button className="py-3 hover:text-gray-500">Go to post</button>
          <button className="py-3 hover:text-gray-500">Share to...</button>
          <button className="py-3 hover:text-gray-500">Copy link</button>
          <button className="py-3 hover:text-gray-500">Embed</button>
          <button className="py-3 hover:text-gray-500">
            About this account
          </button>
          <button className="py-3 hover:text-gray-500">Cancel</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
