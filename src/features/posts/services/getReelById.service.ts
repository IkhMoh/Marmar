import { Post } from "../types";

 
export async function getReelById(id: string): Promise<Post> {
  const res = await fetch(`/reels/${id}`, {
    cache: "no-store", //
  });

  if (!res.ok) {
    throw new Error("Post not found");
  }

  const json = await res.json();
  return json.data as Post;
}
