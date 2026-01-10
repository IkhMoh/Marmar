import { Post } from "../types";


export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://tarmeezacademy.com/api/v1/posts", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data;
  } catch {
    return [];
  }
}