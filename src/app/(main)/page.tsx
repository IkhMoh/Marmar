import DynamicFeed from "@/components/server/layout/DynamicFeed";
import DynamicSuggestions from "@/components/server/layout/DynamicSuggestions";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center pl-[244px]">
      <DynamicFeed />
      <DynamicSuggestions />
    </div>
  );
}
