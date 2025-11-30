import DynamicFeed from "@/components/server/DynamicFeed";
import DynamicSuggestionsPanel from "@/components/server/DynamicSuggestionsPanel";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center ml-[24px]">
      <DynamicFeed />
      <DynamicSuggestionsPanel />
    </div>
  );
}
