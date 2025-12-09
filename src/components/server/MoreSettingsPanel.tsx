import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  AlertTriangle,
  Bolt,
  Bookmark,
  Sun,
  History,
  LogOut,
  Users,
} from "lucide-react";

const MoreSettingsPanel = () => {
  return (
    <Card className="p-0 w-[266px] h-fit fixed  bottom-30 left-2 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
      <CardContent className="bg-gray-100 p-0">
        <div className="w-full h-full bg-white pt-2 p-2">
          <div className="hover:bg-gray-100 text-sm  px-5 py-3 rounded-lg flex space-x-2">
            <Bolt size={20} />
            <p>Settings</p>
          </div>
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <History size={20} />
            <p>Your activity</p>
          </div>

          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <Bookmark size={20} />
            <p>Saved</p>
          </div>

          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <Sun size={20} />
            <p>Switch appearance</p>
          </div>

          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <AlertTriangle size={20} />
            <p>Report a problem</p>
          </div>
        </div>
        <div className="mt-1.5 bg-white p-2">
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <Users size={20} />

            <p>Switch accounts</p>
          </div>
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <LogOut size={20} />

            <p>Log out</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoreSettingsPanel;
