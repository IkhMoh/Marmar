import { Post } from "@/features/posts/types";

export type SectionType = 'left-tall' | 'right-tall' | 'standard';

export interface ExploreSection {
  type: SectionType;
  tallPost: Post | null;
  squarePosts: Post[];
}

export function buildExploreSections(posts: Post[] = [], reels: Post[] = []): ExploreSection[] {
  const sections: ExploreSection[] = [];
  let pIdx = 0; // Post Index
  let rIdx = 0; // Reel Index

  while (pIdx < posts.length) {
    const isEvenSection = sections.length % 2 === 0;
    const currentReel = reels[rIdx];

    // Instagram Rule: 1 Tall Video + 4 Square Images = 1 Complex Section
    if (currentReel && (pIdx + 4) <= posts.length) {
      sections.push({
        type: isEvenSection ? 'right-tall' : 'left-tall',
        tallPost: currentReel,
        squarePosts: posts.slice(pIdx, pIdx + 4)
      });
      pIdx += 4;
      rIdx += 1;
    } 
    // Fallback Rule: If no reels left, create a standard 3-column row
    else {
      const chunk = posts.slice(pIdx, pIdx + 3);
      if (chunk.length > 0) {
        sections.push({
          type: 'standard',
          tallPost: null,
          squarePosts: chunk
        });
      }
      pIdx += 3;
    }
  }
  return sections;
}