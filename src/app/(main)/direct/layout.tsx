import React from "react";

export default function DirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full pl-[72px] flex flex-row">
      <div className="h-full w-[400px] bg-red-200">fr</div>
      {children}
    </div>
  );
}
