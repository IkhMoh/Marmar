"use client";
import { Expand, SquarePen, X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import ChatUserItemPanel from "../server/ChatUserItemPanel";

interface MainMessagePanelProps {
  onClose: () => void;
  onNewMessage: () => void;
}
const directUsers = [
  {
    username: "PC_THINK_PRO",
    fullName: "Think Pro Apple Store",
    profile_image: "pcthink.jpg",
    href: "/direct/t/pcthinkpro",
    lastMessageTime: "10m",
    lastMessageText: "Bonjour, où est ma commande ?",
    isRead: false,
  },
  {
    username: "vav_store",
    fullName: "Vav Tech Store",
    profile_image: "vav.jpg",
    href: "/direct/t/vavstore",
    lastMessageTime: "45m",
    lastMessageText: "Everything ready, call me when you come.",
    isRead: true,
  },
  {
    username: "apple_zone",
    fullName: "Apple Zone DZ",
    profile_image: "applez.jpg",
    href: "/direct/t/applezone",
    lastMessageTime: "1h",
    lastMessageText: "Garantie 1 an, pas de problème.",
    isRead: false,
  },
  {
    username: "fix_it",
    fullName: "Fix It Repair",
    profile_image: "fixit.png",
    href: "/direct/t/fixit",
    lastMessageTime: "2h",
    lastMessageText: "Screen replaced, ready.",
    isRead: true,
  },
  {
    username: "koffee_shop",
    fullName: "Koffee Shop",
    profile_image: "coffee.jpg",
    href: "/direct/t/koffeeshop",
    lastMessageTime: "3h",
    lastMessageText: "Promo du jour disponible.",
    isRead: false,
  },
  {
    username: "tech_house",
    fullName: "Tech House DZ",
    profile_image: "techhouse.png",
    href: "/direct/t/techhouse",
    lastMessageTime: "5h",
    lastMessageText: "Contact me when you're free.",
    isRead: true,
  },
  {
    username: "buy_sell",
    fullName: "Buy & Sell Market",
    profile_image: "buysell.png",
    href: "/direct/t/buysell",
    lastMessageTime: "7h",
    lastMessageText: "Nouveau produit disponible.",
    isRead: false,
  },
  {
    username: "mobile_shop",
    fullName: "Mobile Shop DZ",
    profile_image: "mobilestore.jpg",
    href: "/direct/t/mobileshop",
    lastMessageTime: "10h",
    lastMessageText: "Your case is here, bro.",
    isRead: false,
  },
  {
    username: "pro_laptop",
    fullName: "Pro Laptop Store",
    profile_image: "laptop.jpg",
    href: "/direct/t/prolaptop",
    lastMessageTime: "1d",
    lastMessageText: "Shipping today.",
    isRead: true,
  },
  {
    username: "dz_pc",
    fullName: "DZ PC Parts",
    profile_image: "dzpc.jpg",
    href: "/direct/t/dzpc",
    lastMessageTime: "2d",
    lastMessageText: "85.000, best price.",
    isRead: false,
  },
  {
    username: "gaming_world",
    fullName: "Gaming World",
    profile_image: "gaming.jpg",
    href: "/direct/t/gamingworld",
    lastMessageTime: "3d",
    lastMessageText: "New stock just arrived.",
    isRead: true,
  },
  {
    username: "tech_dz",
    fullName: "Tech DZ Market",
    profile_image: "techdz.png",
    href: "/direct/t/techdz",
    lastMessageTime: "4d",
    lastMessageText: "Ces articles sont top.",
    isRead: false,
  },
  {
    username: "phone_repair",
    fullName: "Phone Repair DZ",
    profile_image: "phonerepair.jpg",
    href: "/direct/t/phonerepair",
    lastMessageTime: "5d",
    lastMessageText: "Battery replaced.",
    isRead: true,
  },
  {
    username: "devices_dz",
    fullName: "Devices DZ",
    profile_image: "devices.jpg",
    href: "/direct/t/devicesdz",
    lastMessageTime: "1w",
    lastMessageText: "Black Friday sale, encore dispo.",
    isRead: false,
  },
  {
    username: "mac_parts",
    fullName: "Mac Parts DZ",
    profile_image: "macparts.jpg",
    href: "/direct/t/macparts",
    lastMessageTime: "1y",
    lastMessageText: "Je te ramène demain.",
    isRead: false,
  },
];
const MainMessagePanel = ({ onNewMessage, onClose }: MainMessagePanelProps) => {
  return (
    // todo : real data user
    <div>
      (
      <Card className="p-0 w-[360px] h-[521px] fixed bottom-6 right-8 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
        <CardContent className="p-0 relative h-full">
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-md">Messages</h2>
              <span
                className="inline-flex items-center justify-center  bg-red-500  text-white text-xs font-bold rounded-full px-2 h-5 min-w-[1.25rem]
"
              >
                6
              </span>
            </div>
            {/* icons */}
            <div className="flex items-center space-x-1.5">
              <Link href="/direct" className="flex">
                <Expand
                  strokeWidth={1}
                  size={24}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </Link>

              <button onClick={onClose} className="flex cursor-pointer">
                <X
                  strokeWidth={1}
                  size={32}
                  className="transition-transform duration-200 hover:scale-110"
                />
              </button>
            </div>
          </div>

          {/* LIST */}
          <div className="overflow-y-auto h-full w-full  space-y-2">
            {directUsers.map((item) => (
              <ChatUserItemPanel key={item.username} {...item} />
            ))}
          </div>

          {/* Floating Create Button */}
          <button
            className="absolute bottom-3 right-3 rounded-full p-3.5 shadow-2xl shadow-black bg-white transition-transform duration-200 hover:bg-neutral-100"
            onClick={onNewMessage}
          >
            <SquarePen strokeWidth={2} size={25} />
          </button>
        </CardContent>
      </Card>
      )
    </div>
  );
};

export default MainMessagePanel;
