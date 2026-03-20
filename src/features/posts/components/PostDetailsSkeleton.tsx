"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const PostDetailsSkeleton = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="shadow-xl max-w-6xl min-w-5xl w-fit h-[92vh] overflow-hidden flex bg-white">
      
      {/* LEFT SIDE (IMAGE PLACEHOLDER EMPTY) */}
      <div className="flex-1">
        <div className="flex-1 h-full flex items-center justify-center">
          {/* intentionally empty */}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[500px] flex flex-col">
        
        {/* HEADER */}
        <section className="px-2 py-3 border-b border-gray-200 flex items-center gap-2">
          <Avatar className="w-10 h-10">
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Skeleton className="h-4 w-32" />
        </section>

        {/* CONTENT SCROLL */}
        <section className="flex-1 overflow-y-auto px-3 py-4 space-y-4">
          
          {/* POST BODY */}
          <div className="flex gap-2">
            <Avatar className="w-10 h-10">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>

            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* COMMENTS */}
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <div className="space-y-2 w-full">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>
          ))}
        </section>

        {/* ACTIONS */}
        <section className="border-t border-gray-200 px-3 py-3 space-y-3">
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>

          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </section>

        {/* COMMENT INPUT */}
        <section className="border-t border-gray-200 px-3 py-3 flex items-center gap-2">
          <Skeleton className="h-8 flex-1" />
          <Skeleton className="h-8 w-16" />
        </section>

      </div>
    </div>
  </div>
  );
};

export default PostDetailsSkeleton;