import React from "react";
import { Button } from "../../ui/button";
import { getUsers } from "@/lib/Users/getUsers";
import AccountCard from "../../../features/users/components/AccountCard";
import { MinimalUser } from "@/types/user";
import UserCard from "@/features/users/components/UserCard";
const DynamicSuggestions = async () => {
  const users: MinimalUser[] = await getUsers();

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
            {users.map((user: MinimalUser, index: number) => (
              <UserCard
                key={index}
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
