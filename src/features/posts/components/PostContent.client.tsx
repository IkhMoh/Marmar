"use client";

import React, { useState } from "react";

interface PostContentProps {
  body?: string;
}

export default function PostContent({ body }: PostContentProps) {
  const [expanded, setExpanded] = useState(false);

  // Define a character limit for showing the "More" button
  const characterLimit = 80;
  const isLongText = (body?.length ?? 0) > characterLimit;

  if (!body) return null;

  return (
    <div className="flex flex-col w-full py-2">
      {/* Body text with line-clamping logic */}
      <div
        className={`text-sm text-gray-900 dark:text-gray-200 transition-all duration-200 ${
          expanded
            ? ""
            : "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
        }`}
      >
        {body}
      </div>

      {/* Action button: Only visible if text exceeds the limit */}
      {isLongText && (
        <div className="w-full flex items-center justify-end">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-500 hover:text-blue-700 text-sm font-semibold mt-1 transition-colors"
          >
            {expanded ? "Show less" : "More"}
          </button>
        </div>
      )}
    </div>
  );
}
