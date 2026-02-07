import { getImagePosts } from "@/features/explore/services/post.service";
import { getReelsPosts } from "@/features/explore/services/reel.service";
import { buildExploreSections } from "@/features/explore/utils/layout-engine";
import ExploreGrid from "@/features/explore/components/ExploreGrid";

export default async function ExplorePage() {
  // Parallel fetching for speed
  const [imagePosts, videoPosts] = await Promise.all([
    getImagePosts(),
    getReelsPosts()
  ]);

  const sections = buildExploreSections(imagePosts, videoPosts);

  return (
    <div className="h-full w-full flex justify-center mt-6 pl-[244px]">
      {/* Container matches Instagram's desktop width */}
      <main className="max-w-[975px] mx-auto px-0 md:px-5 pt-4 md:pt-8">
        <ExploreGrid sections={sections} />
      </main>
    </div>
  );
}