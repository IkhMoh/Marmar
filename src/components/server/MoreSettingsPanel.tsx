import React from "react";
import { Card, CardContent } from "../ui/card";
import { Expand, X } from "lucide-react";
import Link from "next/link";

interface MoreSettingsPanelProps {
  onClose: () => void;
}
const MoreSettingsPanel = ({ onClose }: MoreSettingsPanelProps) => {
  return (
    <div>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default MoreSettingsPanel;
