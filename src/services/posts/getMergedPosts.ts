import { api } from "@/lib/axios";
import { Post } from "@/types/post";
import path from "path";
import fs from "fs";

export async function getMergedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "src/data/posts.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const parsedData: Post[] = JSON.parse(rawData);
  const localPosts: Post[] = parsedData.filter((post: Post) => !post.from_api);

  let apiPosts: Post[] = [];
  try {
    const res = await api.get("/posts");
    apiPosts = res.data.data;
  } catch (error) {
    console.error("Failed to fetch API posts:", error);
  }

  const merged = [...localPosts, ...apiPosts];

  return merged;
}
