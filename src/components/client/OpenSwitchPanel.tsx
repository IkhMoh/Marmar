import { ChevronLeft, Sun } from "lucide-react";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";

interface OpenSwitchPanelProps {
  onBack: () => void;
}
const OpenSwitchPanel = ({ onBack }: OpenSwitchPanelProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Card className="p-0 w-[266px] h-fit fixed  bottom-30 left-2 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
      <CardContent className="bg-gray-100 p-0">
        <div className="w-full h-full bg-white pt-2 p-2">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex">
              <ChevronLeft
                strokeWidth={2}
                size={27}
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>
            <p className="font-bold">Switch appearance</p>
            <Sun />
          </div>

          <div className="w-full h-1 py-2"></div>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="hover:bg-gray-100 px-5 py-5 rounded-lg flex items-center justify-between cursor-pointer"
          >
            <p>Dark mode</p>

            {/* Toggle switch */}
            <div
              className={`w-8 h-5 rounded-full flex items-center p-1 transition-colors duration-300 ${
                darkMode ? "bg-black" : "bg-gray-500"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-3" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpenSwitchPanel;
{
  /* <div className="flex justify-between items-center px-4 py-3 border-b">
  <div className="flex items-center ">
    <button onClick={onBack} className="flex">
      <ChevronLeft
        strokeWidth={2}
        size={27}
        className="transition-transform duration-200 hover:scale-110"
      />
    </button>
    <h2 className="font-bold text-md">New message</h2>
  </div>
</div>; */
}
