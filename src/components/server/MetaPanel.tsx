import React from "react";
import { Card, CardContent } from "../ui/card";
import { BrainCircuit, MessageSquare, Hash, Circle } from "lucide-react";

const MetaPanel = () => {
  return (
    <Card className="p-0 w-[266px] h-fit fixed  bottom-18 left-2 z-50 shadow-lg rounded-xl border overflow-hidden">
      <CardContent className="bg-gray-100 p-0">
        <div className="w-full h-full pt-2 p-2 text-md font-medium">
          {/* Meta AI */}
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <Circle size={24} strokeWidth={3} />
            <p>Meta AI</p>
          </div>

          {/* AI Studio */}
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <BrainCircuit size={24} />
            <p>AI Studio</p>
          </div>

          {/* WhatsApp */}
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <MessageSquare size={24} />
            <p>WhatsApp</p>
          </div>

          {/* Threads */}
          <div className="hover:bg-gray-100 px-5 py-3 rounded-lg flex items-center space-x-2">
            <Hash size={24} />
            <p>Threads</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetaPanel;
// Meta Al
// Al Studio
// WhatsApp
// Threads
