import React from "react";
const page = () => {
  return (
    <div className="grid grid-cols-3 gap-1 pb-7">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-full h-72 bg-neutral-200 dark:bg-neutral-700"
        />
      ))}
    </div>
  );
};

export default page;
