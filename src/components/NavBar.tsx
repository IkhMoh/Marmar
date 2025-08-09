import { House } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex min-h-screen w-[220px] border-r-2 border-gray-600 ">
      <div className="flex flex-col justify-between my-8">
        {" "}
        {/* logo */}
        <div className="font-bold text-2xl mx-7 mt-3 ">Marmar</div>
        {/* logo == */}
        <div className="space-y-6 ">
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
        </div>
        {/* settings */}
        <div className="space-y-5">
          {" "}
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
          <div className="flex font-bold space-x-2 px-6">
            <House />
            <p>Home</p>
          </div>
        </div>
        {/* settings ==*/}
      </div>
    </div>
  );
};

export default NavBar;
