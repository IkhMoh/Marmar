"use client";

import { useContext } from "react";
import { ThemeContext } from "@/components/client/ThemeProvider";
import { ChevronLeft, Sun } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const OpenSwitchPanel = ({ onBack }: { onBack: () => void }) => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <Card className="p-0 w-[266px] dark:bg-neutral-800 h-fit fixed bottom-30 left-2 z-50 shadow-lg rounded-xl border  overflow-hidden">
      <CardContent className="p-0">
        <div className="w-full h-full  pt-2 p-2">
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
            onClick={toggleTheme}
            className="px-5 py-5 rounded-lg flex items-center justify-between cursor-pointer
              
             hover:bg-gray-200 dark:hover:bg-neutral-600
             transition-colors duration-300"
          >
            <p className="text-gray-900 dark:text-gray-100 font-medium">
              Dark mode
            </p>

            {/* Toggle switch */}
            <div
              className={`w-8 h-5 rounded-full flex items-center p-1 transition-colors duration-300 ${
                isDark ? "bg-gray-600" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                  isDark ? "translate-x-3" : "translate-x-0"
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
