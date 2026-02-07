import PostExplore from "@/features/posts/components/PostExplore";
import { ExploreSection as SectionData } from "../utils/layout-engine";

export default function ExploreSection({ section }: { section: SectionData }) {
  if (section.type === 'standard') {
    return (
      <div className="grid grid-cols-3 gap-1 md:gap-7 mb-1 md:mb-7">
        {section.squarePosts.map(p => <PostExplore key={p.id} post={p} />)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-7 mb-1 md:mb-7">
      {section.type === 'left-tall' && (
        <div className="row-span-2 col-span-1 h-full">
          <PostExplore post={section.tallPost!} variant="tall" />
        </div>
      )}

      {section.squarePosts.slice(0, 2).map(p => (
        <div key={p.id} className="aspect-square">
          <PostExplore post={p} />
        </div>
      ))}

      {section.type === 'right-tall' && (
        <div className="row-span-2 col-span-1 h-full">
          <PostExplore post={section.tallPost!} variant="tall" />
        </div>
      )}

      {section.squarePosts.slice(2, 4).map(p => (
        <div key={p.id} className="aspect-square">
          <PostExplore post={p} />
        </div>
      ))}
    </div>
  );
}