import { Post } from "../types";


export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://tarmeezacademy.com/api/v1/posts", {
    cache: "no-store", // Best for social media feeds to get latest data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts from server");
  }

  const response = await res.json();
  
  return response.data;
}