import React from "react";
import { Card, CardContent } from "../ui/card";

const MoreSettingsPanel = () => {
  return (
    <Card className="p-0 w-[266px] h-fit fixed  bottom-30 left-2 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
      <CardContent className="bg-gray-100 p-0">
        <div className="w-full h-full bg-white">
          <div className="hover:bg-gray-100 text-md px-5 py-3 rounded-lg ">
            Settings
          </div>
          <div className="hover:bg-gray-100 text-md px-5 py-3 rounded-lg ">
            Settings
          </div>
          <div className="hover:bg-gray-100 text-md px-5 py-3 rounded-lg ">
            Settings
          </div>
          <div className="hover:bg-gray-100 text-md px-5 py-3 rounded-lg ">
            Settings
          </div>
          <div className="hover:bg-gray-100 text-md px-5 py-3 rounded-lg ">
            Settings
          </div>
        </div>
        <div className="mt-1.5 bg-white">
          <div className="hover:bg-gray-100 text-md px-5 py-4 rounded-lg ">
            Settings
          </div>
          <div className="hover:bg-gray-100 text-md px-5 py-4 rounded-lg ">
            Settings
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoreSettingsPanel;
