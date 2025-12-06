"use client";

import React from "react";
import { useRouter } from "next/navigation";
import UserCardProfile from "@/components/server/UserCardProfile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { SendDialog } from "@/components/server/SendDialog";
import { SaveDialog } from "@/components/server/SaveDialog";
import Link from "next/link";
 
export default function PostModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const { id } = React.use(params);

  const close = () => router.back();
  const username = "ikhlef_mohamed";
  const profile_image = "ikhlef";
  const post = {
    id: 12,
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center"
      onClick={close}
    >
      <div
        className="bg-white shadow-xl max-w-7xl min-w-5xl w-fit h-[92vh] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Media */}
        <div className="flex-1 bg-black/20">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white">Media for Post {id}</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-[500px] flex flex-col">
          {/* Top Header User */}
          <section className="px-2 py-3 rounded-b-md border-b border-gray-200">
            <UserCardProfile />
          </section>

          {/* POST CONTENT SCROLL */}
          <section className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            {/* Example description */}
            <div className="flex gap-2">
              <Avatar className="w-10 h-10  ">
                <AvatarImage
                  src={"/images/avatars/" + profile_image}
                  alt={username}
                  className="object-cover object-center rounded-full"
                />

                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm">
                  <h1 className="font-semibold mr-1">{username}</h1>
                  Tamron for sony 70-180mm f/2.8 en excellent état Prix :
                  148.000DA Prix : 14,8 millions 0670288883 viber /whatsapp
                  0796753939 Whatsapp 0559404515 Instagram📸 :
                  Eternel_audiovisuel Facebook 🌍: Matériel photographique
                  Algeria Localisation Gps : Eternel store 👌محلنا يوفر احسن
                  اسعار للكاميرات 📸 بضمان شهر بعد الشراء باب الزوار الجزائر
                  العاصمة و التوصيل متوفر الى 58 ولاية 1d
                </div>
              </div>
            </div>
          </section>

          {/* ACTION FOOTER (EMPTY FOR YOU) */}
          <section className="border-t border-gray-200 px-3 py-3">
            {/* place your heart, comment, send, save icons here */}
            <div className="flex justify-between my-1 py-2">
              <div className="flex space-x-4">
                <Heart size={26} />
                <Link href={`/p/${post.id}`}>
                  <MessageCircle size={26} />
                </Link>
                <SendDialog />
              </div>
              <SaveDialog />
            </div>

            {/* likes / views */}
            <p className="text-sm font-semibold mt-2">3 likes</p>
            <p className="text-[11px] text-gray-500 mt-1">4 hours ago</p>
          </section>

          {/* COMMENT INPUT */}
          <section className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 outline-none text-sm"
            />
            <button className="text-blue-500 text-sm font-semibold">
              Post
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
