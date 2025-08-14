import fs from "fs";
import path from "path";
import { api } from "@/lib/axios";
import type { Post } from "@/types/post";

export async function getMergedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "src/data/posts.json");
  const rawData = fs.readFileSync(filePath, "utf-8");
  const parsedData: Post[] = JSON.parse(rawData);
  const localPosts: Post[] = parsedData.filter((post) => !post.from_api);

  try {
    const res = await api.get<Post[]>("/posts");
    const apiPosts = res.data;
    return [...localPosts, ...apiPosts];
  } catch {
    return localPosts;
  }
}
