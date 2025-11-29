"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function PostModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const { id } = React.use(params);

  const close = () => router.back();

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65  flex items-center justify-center"
      onClick={close}
    >
      <div
        className="bg-white shadow-xl max-w-7xl min-w-5xl w-fit h-[92vh] overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 bg-black/20">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-white">Media for Post {id}</p>
          </div>
        </div>

        <div className="w-[500px] border-l border-neutral-300 dark:border-neutral-700 p-4 overflow-y-auto">
          <h2 className="font-bold text-lg">Post {id}</h2>
          <p className="mt-4">Post details, comments, likes...</p>
        </div>
      </div>
    </div>
  );
}
