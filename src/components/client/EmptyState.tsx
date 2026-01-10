"use client";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <p className="text-gray-500 mb-3">Failed to load posts</p>

      <button
        onClick={() => window.location.reload()}
        className="underline cursor-pointer"
      >
        Retry
      </button>
    </div>
  );
};

export default EmptyState;
