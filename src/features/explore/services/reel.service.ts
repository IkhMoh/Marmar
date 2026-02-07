import { Post } from "@/features/posts/types";
import { Reel } from "@/features/reels/types";

export async function getReelsPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://marmar-f3dy.onrender.com/reels", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch reels");

    const json = await res.json();
    
    // The fix: Access json.data because the API returns { "data": [...] }
    const rawReels = json.data || [];

    return rawReels.map((reel: Reel) => ({
      id: reel.id,
      title: reel.title,
      image: reel.author?.profile_image || "", // Use profile as fallback thumbnail
      comments_count: reel.comments_count || 0,
      // Mapping the specific nested structure: media[0].url
      media: [
        {
          type: "video",
          url: reel.media?.[0]?.url || ""
        }
      ],
      author: reel.author
    }));
  } catch (error) {
    console.error("Reels Service Error:", error);
    return [];
  }
}