import React from "react";

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full pl-[72px]">
      <div className="flex flex-row h-full w-full">
        {children}
        <div>hello world</div>
      </div>
    </div>
  );
}
