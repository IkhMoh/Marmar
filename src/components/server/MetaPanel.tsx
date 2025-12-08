import React from "react";
import { Card, CardContent } from "../ui/card";
import { Expand, X } from "lucide-react";
import Link from "next/link";

interface MetaPanelProps {
  onClose: () => void;
}
const MetaPanel = ({ onClose }: MetaPanelProps) => {
  return (
    <div>
      <Card className="p-0 w-[360px] fit fixed bottom-12 left-8 z-50 shadow-lg rounded-xl border bg-white overflow-hidden">
        <CardContent className="p-0 relative h-full">
          {/* HEADER */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <button onClick={onClose} className="flex cursor-pointer">
              <X
                strokeWidth={1}
                size={32}
                className="transition-transform duration-200 hover:scale-110"
              />
            </button>
          </div>
          <div className="bg-red-500">
            <div>vfdsf</div>
            <div>vsdafff</div>
            <div>vfdfsd</div>
            <div>vfdfsd</div>
            <div>vfdfsd</div>
            <div>vfdfsd</div>
            <div>vfdfsd</div>
          </div>
          {/* LIST */}
        </CardContent>
      </Card>
    </div>
  );
};

export default MetaPanel;
