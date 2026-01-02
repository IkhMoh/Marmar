"use client";
import React, { useState, useRef, useEffect } from "react";
import { Smile } from "lucide-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface EmojiSelectorProps {
  onEmojiSelect: (emoji: string) => void;
  iconSize?: number;
  pickerPlacement?: "top" | "bottom";
}

export default function EmojiSelector({
  onEmojiSelect,
  iconSize = 20,
  pickerPlacement = "top",
}: EmojiSelectorProps) {
  const [showPicker, setShowPicker] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPicker]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    onEmojiSelect(emojiData.emoji);
    // Optional: close picker after selection
    // setShowPicker(false);
  };

  return (
    <div className="relative flex items-center" ref={containerRef}>
      <button
        type="button"
        onClick={() => setShowPicker((prev) => !prev)}
        className="focus:outline-none"
      >
        <Smile
          size={iconSize}
          className="transition-transform duration-200 hover:scale-110 "
        />
      </button>

      {showPicker && (
        <div
          className={`absolute z-50 shadow-xl ${
            pickerPlacement === "top" ? "bottom-10" : "top-10"
          } right-0`}
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            previewConfig={{ showPreview: false }}
            skinTonesDisabled
            // theme={Theme.AUTO} // Adapts to dark mode automatically
          />
        </div>
      )}
    </div>
  );
}
