import { Heart, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";

const NavBar = () => {
  return (
    <div className="md:hidden block  fixed left-0 right-0 top-0 bg-red-500 h-[60px] w-full ">
     
    </div>
  );
};

export default NavBar;
//  <div className="flex justify-between px-5 h-[60px] w-full items-center">
//         {/* logo */}
//         <Link href={"/"} className="">
//           <div className="font-bold text-3xl font-handlee hidden sm:block">
//             Marmar
//           </div>
//           <div className="font-bold text-3xl  font-handlee  sm:hidden block">
//             <Instagram />
//           </div>
//         </Link>
//         {/* logo== */}
//         {/* search bar and heart */}
//         <div className="flex space-x-6 items-center">
//           <div>
//             <Input type="text" placeholder="Search" className="w-[268px]" />
//           </div>
//           <Link href={"/#"} className="">
//             <div className="flex cursor-pointer">
//               <Heart size={25} />
//             </div>
//           </Link>
//         </div>
//       </div>