import { api } from "@/lib/axios";
import { Post } from "@/types/post";
import path from "path";
import fs from "fs";

export async function getMergedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "src/data/posts.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const parsedData: Post[] = JSON.parse(rawData);

  // فحص local posts وإضافة type
  const localPosts: Post[] = parsedData
    .filter((post: Post) => !post.from_api)
    .map((post) => ({
      ...post,
      type:
        post.type ?? (post.image && post.image.length > 0 ? "image" : "video"),
    }));

  let apiPosts: Post[] = [];
  try {
    const res = await api.get("/posts");
    apiPosts = res.data.data.map((post: Post) => ({
      ...post,
      type: post.image ? "image" : "video", // تحديد نوع تلقائي للـ API
    }));
  } catch (error) {
    console.error("Failed to fetch API posts:", error);
  }

  // دمج local و api posts
  const merged = [...localPosts, ...apiPosts];

  return merged;
}
