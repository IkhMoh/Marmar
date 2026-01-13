import DynamicFeed from "@/components/server/layout/DynamicFeed";
import DynamicSuggestions from "@/components/server/layout/DynamicSuggestions";
import DynamicSuggestionsSkeleton from "@/features/users/components/DynamicSuggestionsSkeleton";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="h-full w-full flex justify-center pl-[244px]">
      <DynamicFeed />
      <Suspense fallback={<DynamicSuggestionsSkeleton />}>
        <DynamicSuggestions />
      </Suspense>
    </div>
  );
}
