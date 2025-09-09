import React from "react";
import { getMergedPosts } from "@/lib/posts/getMergedPosts";
import { Post } from "@/types/post";
import PostExplore from "@/components/client/PostExplore";

// helper لتقسيم المصفوفة إلى chunks من 5 عناصر
function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const Page = async () => {
  const posts: Post[] = await getMergedPosts();
  const groups = chunkArray(posts, 5);

  return (
    <div className="h-full w-full flex justify-center mt-6">
      {" "}
      <div className="flex flex-col justify-center mx-[63.5px] px-5">
        {groups.map((group, gi) => {
          const tallPost = group.find((p) => p.type === "video");

          if (!tallPost) {
            return (
              <div
                key={gi}
                className="grid grid-cols-3 "
                style={{ gridAutoRows: "319px" }}
              >
                {group.map((p, idx) => (
                  <div key={idx} className="w-[319px] h-[319px]">
                    <PostExplore post={p} variant="square" />
                  </div>
                ))}
              </div>
            );
          }

          // إذا فيه فيديو → نحطه في العمود الطويل
          return (
            <div
              key={gi}
              className="grid grid-cols-3 "
              style={{ gridAutoRows: "319px" }}
            >
              {gi % 2 === 0 ? (
                <>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[0]} variant="square" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[1]} variant="square" />
                  </div>
                  <div className="col-span-1 row-span-2 w-[319px] h-[638px]">
                    <PostExplore post={tallPost} variant="tall" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[3]} variant="square" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[4]} variant="square" />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-1 row-span-2 w-[319px] h-[638px]">
                    <PostExplore post={tallPost} variant="tall" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[1]} variant="square" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[2]} variant="square" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[3]} variant="square" />
                  </div>
                  <div className="w-[319px] h-[319px]">
                    <PostExplore post={group[4]} variant="square" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
