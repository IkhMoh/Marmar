import React from "react";
import { Button } from "../../ui/button";
import { getSuggestions } from "@/features/users/services/getSuggestions";
import AccountCard from "../../../features/users/components/AccountCard";
import UserCard from "@/features/users/components/UserCard";
import { User } from "@/features/users/types";
const DynamicSuggestions = async () => {
  const users: User[] = await getSuggestions();
  
  console.log(users);
  return (
    <div className="w-[383px] h-screen  hidden lg:block">
      <div className="pl-16 h-full w-full pt-9">
        <div className="">
          <AccountCard />
        </div>
        <div className="pt-3 h-full w-full">
          <div className="flex justify-between w-full px-1">
            <p className="text-gray-500 font-bold flex items-center text-sm">
              Suggested for you{" "}
            </p>
            <div className="">
              <Button variant="link">See All</Button>
            </div>
          </div>
          <div className="pt-2 h-full w-full space-y-3 px-1">
            {users?.map((user: User) => (
              <UserCard
                key={user.id}
                username={user.username}
                profile_image={user.profile_image}
                fullName={user.fullName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicSuggestions;
