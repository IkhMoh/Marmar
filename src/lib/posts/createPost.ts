import { api } from "@/lib/axios";
import { Post } from "@/types/post";

export async function createPost(post: Partial<Post>) {
  const res = await api.post("/posts", post);
  return res.data;
}
