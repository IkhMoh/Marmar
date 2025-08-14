import { api } from "@/lib/axios";
import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  const res = await api.get("/posts");
  return res.data.data; 
}
