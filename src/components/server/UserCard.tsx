import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const UserCard = () => {
  return (
    <div className="w-[319px] h-[44px] ">
      <div className="flex justify-between  px-1">
        <Avatar className="w-11 h-11  ">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="  w-full px-3 -space-y-1">
          <h2 className="font-semibold">ikhlef_mohamed_lamine</h2>
          <h4 className="text-gray-500">ikhlef_mohamed</h4>
        </div>
        <div className="flex items-center">
          <Button variant="link" className="text-blue-600 hover:text-blue-800">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
