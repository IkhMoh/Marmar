import React from "react";
import Highlights from "./Highlights";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ProfileTabs from "../client/ProfileTabs";

const Profile = ({ username }: { username: string }) => {
  return (
    <div className="w-full px-24 pt-6 space-y-10">
      {/* the top */}
      <div className="h-72 w-full flex justify-between  px-12 pt-1">
        <div className="w-1/3 flex justify-center items-center pr-2">
          {" "}
          <Avatar className="w-44 h-44  ">
            <AvatarImage
              src={"/images/avatars/" + "2150697292.jpg"}
              className="object-cover object-center rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="w-2/3">
          {/* <section className="w-full max-w-xl mx-auto mt-6 p-4 rounded-2xl border shadow-sm ">
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold">eternel_audiovisuel</h2>

              <div className="flex gap-6 text-sm mt-1">
                <div>
                  <span className="font-bold">12,224</span> posts
                </div>
                <div>
                  <span className="font-bold">252K</span> followers
                </div>
                <div>
                  <span className="font-bold">37</span> following
                </div>
              </div>

              <div className="mt-3 text-sm leading-5 space-y-1">
                <p className="font-semibold">
                  ETERNEL STORE | Taqieddine bendrihem
                </p>
                <p>Vente matérielle informatique et audiovisuel</p>

                <div className="space-y-1 text-sm">
                  <p>📍 Bab Ezzouar Alger</p>
                  <p>📞 0670288883</p>
                  <p>📞 0676722551</p>
                  <p>eternel store, Bab Ezzouar 16024</p>
                </div>
              </div>
            </div>
          </section> */}
          <section className="w-full max-w-xl mx-auto mt-6 p-4 rounded-2xl border shadow-sm">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">eternel_audiovisuel</h2>
                <div className="flex  items-center gap-2 mt-2">
                  <button className="px-4 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm font-medium">
                    Following
                  </button>
                  <button className="px-4 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm font-medium">
                    Message
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm font-medium">
                    ⋯
                  </button>
                </div>
              </div>

              <div className="flex gap-6 text-sm mt-1">
                <div>
                  <span className="font-bold">12,224</span> posts
                </div>
                <div>
                  <span className="font-bold">252K</span> followers
                </div>
                <div>
                  <span className="font-bold">37</span> following
                </div>
              </div>

              <div className="mt-3 text-sm leading-5 space-y-1">
                <p className="font-semibold">
                  ETERNEL STORE | Taqieddine bendrihem
                </p>
                <p>Vente matérielle informatique et audiovisuel</p>
                <div className="space-y-1 text-sm">
                  <p>📍 Bab Ezzouar Alger</p>
                  <p>📞 0670288883</p>
                  <p>📞 0676722551</p>
                  <p>eternel store, Bab Ezzouar 16024</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="">
        <Highlights />
      </div>
      {/* ====the top==== */}
      {/* bottom */}
      <div className="">
        <ProfileTabs username={username} />
      </div>
      {/* ====bottom==== */}
    </div>
  );
};

export default Profile;
