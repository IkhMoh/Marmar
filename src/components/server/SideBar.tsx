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
import CreateDialog from "./CreateDialog";
import {  SheetDemo } from "./SearchSheet";
import { NotificationSheet } from "./NotificationSheet";

const SideBar = () => {
  return (
    <div className=" fixed left-0 bottom-0 h-full lg:px-3 lg:pt-2 lg:pb-5 md:min-h-screen lg:w-[73px] xl:w-[248px] md:border-r-1 md:border-gray-400 ">
      <div className="flex justify-around md:flex-col  w-full h-full">
        {/* logo */}
        <Link href={"/"}>
          <div className="font-bold text-3xl md:mx-6.5 md:pt-8 font-handlee hidden xl:block">
            Marmar
          </div>
          <div className="font-bold text-3xl lg:mx-6.5 lg:mt-5 font-handlee xl:hidden lg:block hidden">
            <Instagram />
          </div>
        </Link>
        {/* todoui md=lg .. lg=xl */}
        {/* logo == */}
        <div className="flex justify-evenly h-[573px] md:justify-normal md:flex-col space-y-2 w-full font-medium md:mt-10">
          <Link href={"/"} className="">
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <House size={25} />
              <p className="hidden lg:block">Home</p>
            </div>
          </Link>

          <SheetDemo />

          <Link href={"/explore"}>
            {" "}
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <Compass size={25} />
              <p className="hidden lg:block">Explore</p>
            </div>
          </Link>
          <Link href={"/reels"}>
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <Film size={25} />
              <p className="hidden lg:block">Reels</p>
            </div>
          </Link>

          <Link href={"/direct"}>
            <div className="flex items-center space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <div className="relative">
                <MessageCircleMore size={25} />
                <Badge className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-1 py-0">
                  9+
                </Badge>
              </div>

              <p className="hidden lg:block">Messages</p>
            </div>
          </Link>
          {/* <div className=" md:block hidden">
             <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              
             </div>
          </div> */}
          <NotificationSheet />
          <CreateDialog />
          <Link href={"/profile"}>
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <User size={25} />
              <p className="hidden lg:block">Profile</p>
            </div>
          </Link>
        </div>
        {/* settings */}
        <div className="md:space-y-2   font-medium   ">
          <Link href={"/#"} className="md:block hidden">
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer">
              <AlignJustify size={25} />
              <p className="hidden lg:block">Home</p>
            </div>
          </Link>{" "}
          <Link href={"/#"} className="hidden lg:block">
            <div className="flex lg:space-x-4 py-3 px-3 mx-3 hover:bg-[#efefef] rounded-md cursor-pointer ">
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

              <p className="">Home</p>
            </div>
          </Link>
        </div>
        {/* settings ==*/}
      </div>
    </div>
  );
};

export default SideBar;
