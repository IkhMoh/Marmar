import { X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

interface CommentPanelProps {
  onClose: () => void;
}

const CommentPanel = ({ onClose }: CommentPanelProps) => {
  return (
    <Card className="w-[360px] h-[521px] absolute bottom-25 right-5 z-50 shadow-2xl rounded-xl border bg-white overflow-hidden transition-transform duration-200 hover:scale-[1.01]">
      <CardContent className="p-0 relative h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-3 border-b bg-gray-50">
          <h2 className="font-bold text-lg text-gray-800">New Message</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X strokeWidth={1.5} size={20} className="text-gray-600" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentPanel;
