import DynamicFeed from "@/components/DynamicFeed";
import DynamicSuggestionsPanel from "@/components/DynamicSuggestionsPanel";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center ">
      <DynamicFeed />
      <DynamicSuggestionsPanel />
    </div>
  );
}
