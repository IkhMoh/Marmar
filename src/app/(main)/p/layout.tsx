import React from "react";

interface Layout {
  children: React.ReactNode;
}
export default function Layout({ children }: Layout) {
  return (
    <div className="h-screen w-screen bg-blue-400">
      <div className="">{children}</div>
    </div>
  );
}
