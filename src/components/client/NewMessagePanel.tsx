import { ChevronLeft, X } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

interface NewMessagePanelProps {
  onClose: () => void;
  onBack: () => void;
}
const NewMessagePanel = ({ onClose, onBack }: NewMessagePanelProps) => {
  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: "",
    handle: "",
  }));

  return (
    // todo : real data user

    <Card className="p-0 w-[360px] h-[521px] fixed bottom-6 right-8 z-50 shadow-lg rounded-xl border overflow-hidden">
      <CardContent className="p-0 relative h-full">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
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

          <button onClick={onClose} className="flex cursor-pointer">
            <X
              strokeWidth={1}
              size={32}
              className="transition-transform duration-200 hover:scale-110"
            />
          </button>
        </div>

        {/* To: Search */}
        <div className="px-4 py-2 border-b">
          <label className="block text-sm font-medium mb-1">To:</label>
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* LIST */}
        <div className="overflow-y-auto h-[calc(100%-110px)] px-3 pb-16 space-y-2">
          <h3 className="font-semibold text-sm px-2">Suggested</h3>
          {users.map((u) => (
            <div
              key={u.id}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg px-2 py-2"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold text-sm">{u.name}</div>
                  <div className="text-xs text-gray-500 truncate max-w-[180px]">
                    {u.handle}
                  </div>
                </div>
              </div>

              <div className="w-5 h-5 border rounded-full border-gray-400" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewMessagePanel;
