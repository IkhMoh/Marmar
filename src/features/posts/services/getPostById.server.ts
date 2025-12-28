import { Post } from "../types";

 
export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`https://tarmeezacademy.com/api/v1/posts/${id}`, {
    cache: "no-store", //
  });

  if (!res.ok) {
    throw new Error("Post not found");
  }

  const json = await res.json();
  return json.data as Post;
}
