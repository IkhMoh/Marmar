import PostExplore from "@/features/posts/components/PostExplore";
import { ExploreSection } from "../utils/layout-engine";

export default function ExploreGrid({ sections }: { sections: ExploreSection[] }) {
  if (sections.length === 0) {
    return <div className="text-center py-20 text-gray-500">No posts found.</div>;
  }

  return (
    <div className="flex flex-col gap-0.5 ">
      {sections.map((section, idx) => (
        <div key={idx} className="grid grid-cols-3 gap-0.5 ">
          {/* Case 1: Tall Video on the Right */}
          {section.type === 'right-tall' && (
            <>
              <div className="col-span-2 grid grid-cols-2 gap-0.5 ">
                {section.squarePosts.map(p => <PostExplore key={p.id} post={p} />)}
              </div>
              <div className="col-span-1">
                <PostExplore post={section.tallPost!} variant="tall" />
              </div>
            </>
          )}

          {/* Case 2: Tall Video on the Left */}
          {section.type === 'left-tall' && (
            <>
              <div className="col-span-1">
                <PostExplore post={section.tallPost!} variant="tall" />
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-0.5 ">
                {section.squarePosts.map(p => <PostExplore key={p.id} post={p} />)}
              </div>
            </>
          )}

          {/* Case 3: Fallback / Standard 3-column row */}
          {section.type === 'standard' && (
            section.squarePosts.map(p => <PostExplore key={p.id} post={p} />)
          )}
        </div>
      ))}
    </div>
  );
}