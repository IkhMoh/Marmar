"use client";
import { useEffect, useRef, useState } from "react";
import {
  AlignJustify,
  Compass,
  Film,
  House,
  Instagram,
  MessageCircleMore,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import CreateDialog from "../server/CreateDialog";
import { SheetDemo } from "../server/SearchSheet";
import { NotificationSheet } from "../server/NotificationSheet";
import { usePathname } from "next/navigation";
import MoreSettingsPanel from "../server/MoreSettingsPanel";
import MetaPanel from "../server/MetaPanel";
import OpenSwitchPanel from "./OpenSwitchPanel";

const SideBar = () => {
  const [openPanel, setOpenPanel] = useState<
    "Meta" | "Settings" | "Switch" | null
  >(null);

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpenPanel(null);
      }
    }

    if (
      openPanel === "Meta" ||
      openPanel === "Settings" ||
      openPanel === "Switch"
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openPanel]);

  const pathname = usePathname();

  const [isCollapsed, setIsCollapsed] = useState(false);
  function closeSearchPanel() {
    setIsCollapsed(false);
  }

  function openSearchPanel() {
    setIsCollapsed(true);
  }

  useEffect(() => {
    const directRegex = /^\/direct(\/|$)/;
    const isDirect = directRegex.test(pathname);
    setIsCollapsed(isDirect);
  }, [pathname]);
  return (
    <div
      className={`z-50 fixed left-0 top-0 bottom-0 h-full transition-all duration-300 
      ${isCollapsed ? "w-[72px]" : "w-[244px]"} 
       border-r border-gray-400`}
    >
      <div
        className={`flex  md:flex-col w-full h-full  transition-all duration-500 ease-in-out px-3${
          isCollapsed ? "" : ""
        }`}
      >
        {/* logo */}
        <Link href={"/"} className="">
          {/* Brand Name */}
          <div
            className={`
      font-bold text-3xl px-3 pt-9 font-handlee 
      ${isCollapsed ? "hidden" : "hidden xl:block"}
    `}
          >
            Marmar
          </div>

          {/* Icon When Collapsed */}
          <div
            className={`flex justify-center w-full pt-9  hover:bg-[#efefef] rounded-md cursor-pointer
       ${isCollapsed ? "block" : "xl:hidden lg:block hidden"}
    `}
          >
            <Instagram />
          </div>
        </Link>

        {/* logo == */}

        <div className="flex  items-center h-[573px] md:justify-normal md:flex-col space-y-2 w-full font-medium pt-9">
          <Link href={"/"} className="w-full">
            <div
              className={`flex items-center  p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              }`}
            >
              {" "}
              <House size={25} className="" />
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}
              >
                Home
              </p>
            </div>
          </Link>

          <SheetDemo
            isCollapsed={isCollapsed}
            onOpen={openSearchPanel}
            onClose={closeSearchPanel}
          />

          <Link href={"/explore"} className="w-full">
            {" "}
            <div
              className={` flex p-3 hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              } `}
            >
              <Compass size={25} />
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}
              >
                Explore
              </p>
            </div>
          </Link>
          <Link href={"/reels"} className="w-full">
            <div
              className={`flex p-3  hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              }`}
            >
              {" "}
              <Film size={25} />
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}
              >
                Reels
              </p>
            </div>
          </Link>

          <Link href={"/direct"} className="w-full">
            <div
              className={`flex items-center  p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              }`}
            >
              {" "}
              <div className="relative">
                <MessageCircleMore size={25} />
                <Badge className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-1 py-0">
                  9+
                </Badge>
              </div>
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} pl-4`}
              >
                Messages
              </p>
            </div>
          </Link>

          <NotificationSheet
            isCollapsed={isCollapsed}
            onOpen={openSearchPanel}
            onClose={closeSearchPanel}
          />
          <CreateDialog isCollapsed={isCollapsed} />
          <Link href={"/profile"} className="w-full">
            <div
              className={`flex p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              }`}
            >
              <User size={25} />
              <p
                className={`${
                  isCollapsed ? "hidden" : "hidden lg:block"
                } pl-4 w-full`}
              >
                Profile
              </p>
            </div>
          </Link>
        </div>
        {/* settings */}
        <div className="md:space-y-2 w-full  font-medium">
          <div className="md:block hidden ">
            <button
              className={`flex p-3   hover:bg-[#efefef] rounded-md cursor-pointer w-full ${
                isCollapsed ? " justify-center" : ""
              }`}
              onClick={() => setOpenPanel("Settings")}
            >
              {" "}
              <AlignJustify
                size={25}
                strokeWidth={openPanel === "Settings" ? 3 : 2}
              />
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} ${
                  openPanel === "Settings" ? "font-extrabold" : ""
                } pl-4`}
              >
                More
              </p>
            </button>
          </div>{" "}
          <div className="hidden lg:block w-full">
            <div
              className={`flex items-center  p-3   hover:bg-[#efefef] rounded-md cursor-pointer ${
                isCollapsed ? " justify-center" : ""
              }`}
              onClick={() => setOpenPanel("Meta")}
            >
              {" "}
              <svg
                width="25"
                height="25"
                viewBox="0 0 2024 1345"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M218.661 886.555C218.661 963.781 235.633 1023.15 257.793 1059.02C286.846 1106.01 330.202 1125.94 374.374 1125.94C431.368 1125.94 483.469 1111.79 583.968 972.823C664.455 861.43 759.321 705.124 823.133 607.072L931.191 440.983C1006.27 325.662 1093.13 197.445 1192.81 110.584C1274.11 39.657 1361.87 0.228271 1450.21 0.228271C1598.44 0.228271 1739.7 86.1261 1847.76 247.249C1966.04 423.714 2023.48 645.982 2023.48 875.364C2023.48 1011.73 1996.58 1111.93 1950.85 1191.09C1906.68 1267.65 1820.56 1344.13 1675.66 1344.13V1125.87C1799.73 1125.87 1830.63 1011.88 1830.63 881.441C1830.63 695.564 1787.28 489.231 1691.82 341.819C1624.08 237.244 1536.26 173.358 1439.61 173.358C1335.11 173.358 1251.07 252.141 1156.57 392.661C1106.32 467.293 1054.74 558.305 996.855 660.952L933.118 773.902C805.049 1000.99 772.587 1052.64 708.627 1138.02C596.419 1287.44 500.59 1344.13 374.448 1344.13C224.812 1344.13 130.169 1279.36 71.5453 1181.68C23.5937 1102.15 0.0996094 997.725 0.0996094 878.699L218.661 886.555Z"
                  fill="black"
                />
                <path
                  d="M172.414 262.739C272.616 108.286 417.212 0.302399 583.079 0.302399C679.13 0.302399 774.589 28.7622 874.272 110.139C983.367 199.15 1099.58 345.673 1244.62 587.283L1296.65 673.996C1422.19 883.145 1493.57 990.684 1535.37 1041.45C1589.1 1106.6 1626.75 1126.02 1675.66 1126.02C1799.73 1126.02 1830.64 1012.03 1830.64 881.589L2023.41 875.512C2023.41 1011.88 1996.5 1112.08 1950.77 1191.24C1906.6 1267.8 1820.48 1344.28 1675.59 1344.28C1585.54 1344.28 1505.72 1324.72 1417.53 1241.49C1349.71 1177.6 1270.41 1064.13 1209.41 962.077L1027.98 658.951C936.972 506.796 853.446 393.402 805.049 342.041C753.021 286.826 686.245 220.124 579.521 220.124C493.179 220.124 419.88 280.675 358.514 373.391L172.414 262.739Z"
                  fill="black"
                />
                <path
                  d="M579.521 219.976C493.178 219.976 419.88 280.527 358.514 373.243C271.726 504.202 218.661 699.195 218.661 886.555C218.661 963.781 235.633 1023.15 257.793 1059.02L71.4711 1181.75C23.5937 1102.15 0.0996094 997.725 0.0996094 878.699C0.0996094 662.361 59.4647 436.832 172.414 262.665C272.616 108.212 417.212 0.228271 583.078 0.228271L579.521 219.976Z"
                  fill="#141414"
                />
              </svg>
              <p
                className={`${isCollapsed ? "hidden" : "hidden lg:block"} ${
                  openPanel === "Meta" ? "font-extrabold" : ""
                } pl-4`}
              >
                Also from Meta
              </p>
            </div>
          </div>
        </div>

        {openPanel === "Settings" && (
          <div ref={panelRef}>
            {" "}
            <MoreSettingsPanel onSwitchPanel={() => setOpenPanel("Switch")} />
          </div>
        )}
        {openPanel === "Meta" && (
          <div ref={panelRef}>
            <MetaPanel />
          </div>
        )}
        {openPanel === "Switch" && (
          <div ref={panelRef}>
            <OpenSwitchPanel onBack={() => setOpenPanel("Settings")} />
          </div>
        )}
        {/* settings ==*/}
      </div>
    </div>
  );
};

export default SideBar;
