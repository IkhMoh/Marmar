import { Post } from "../types";

 
export async function getPostById(id: string): Promise<Post> {
  const prefix = id[0];        
  const cleanId = id.slice(1); 

  const baseUrl =
    prefix === "M"
      ? "https://marmar-f3dy.onrender.com/posts"
      : "https://tarmeezacademy.com/api/v1/posts";
  const res = await fetch(`${baseUrl}/${cleanId}`, {
    cache: "no-store",
  });
 

  if (!res.ok) {
    throw new Error("Post not found");
  }

  const json = await res.json();
  return json.data ?? json as Post;
}
