"use client";

import { useState } from "react";
import {
  Phone,
  Video,
  Image as ImageIcon,
  Mic,
  Send,
  Sticker,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EmojiSelector from "../EmojiSelector";
// Import your new shared component

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    { fromMe: false, text: "Hello", date: new Date() },
    { fromMe: true, text: "Hi there!", date: new Date() },
    { fromMe: false, text: "Do you have a PC for sale?", date: new Date() },
    { fromMe: true, text: "Yes, available.", date: new Date() },
    { fromMe: false, text: "How much is it?", date: new Date() },
    { fromMe: true, text: "45 million.", date: new Date() },
    { fromMe: false, text: "Where can you deliver it?", date: new Date() },
    { fromMe: true, text: "In Algiers.", date: new Date() },
    { fromMe: false, text: "Alright, thank you!", date: new Date() },
    { fromMe: true, text: "You're welcome.", date: new Date() },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { fromMe: true, text: input, date: new Date() }]);
    setInput("");
  };

  // Logic to handle emoji selection from the new component
  const addEmoji = (emoji: string) => {
    setInput((prev) => prev + emoji);
  };

  const formatDate = (d: Date) =>
    d.toLocaleString("en-US", {
      dateStyle: "short",
      timeStyle: "short",
    });

  return (
    <div className="flex flex-col h-screen w-full bg-white dark:bg-zinc-950">
      {/* ======== HEADER ======== */}
      <div className="p-3 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/images/avatars/pcthink.jpg" />
            <AvatarFallback>
              PC
              {/* {reel.author.username[0].toUpperCase()} */}
            </AvatarFallback>
          </Avatar>
          <span className="font-bold">PC THINK PRO</span>
        </div>

        <div className="flex gap-4">
          <Video
            className="cursor-pointer text-gray-600 hover:text-blue-600"
            size={22}
          />
          <Phone
            className="cursor-pointer text-gray-600 hover:text-blue-600"
            size={22}
          />
        </div>
      </div>

      {/* ======== CHAT MESSAGES SCROLLABLE ======== */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <div className="flex flex-col items-center border-b pb-6">
          <Image
            src="/images/avatars/pcthink.jpg"
            width={120}
            height={120}
            alt="profile"
            className="rounded-full object-cover"
          />
          <h2 className="font-bold text-xl mt-2">PC THINK PRO</h2>
          <button className="text-sm mt-1 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg dark:bg-zinc-800">
            View profile
          </button>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className="flex flex-col">
            <div
              className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
                  msg.fromMe
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-900 dark:bg-zinc-800 dark:text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
            <div className="text-center text-xs text-gray-400 mt-1">
              {formatDate(msg.date)}
            </div>
          </div>
        ))}
      </div>

      {/* ======== INPUT BAR ======== */}
      <div className="p-3 border-t flex items-center gap-2 relative">
        {/* REUSABLE COMPONENT USED HERE */}
        <EmojiSelector onEmojiSelect={addEmoji} iconSize={24} />

        <input
          type="text"
          placeholder="Message..."
          className="flex-1 border rounded-full px-4 py-2 outline-none dark:bg-zinc-900 dark:border-zinc-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        {!input ? (
          <div className="flex gap-3 text-gray-500">
            <Mic className="cursor-pointer hover:text-blue-600" size={22} />
            <ImageIcon
              className="cursor-pointer hover:text-blue-600"
              size={22}
            />
            <Sticker className="cursor-pointer hover:text-blue-600" size={22} />
          </div>
        ) : (
          <Send
            onClick={sendMessage}
            className="cursor-pointer text-blue-600 hover:scale-110 transition-transform"
            size={24}
          />
        )}
      </div>
    </div>
  );
}
