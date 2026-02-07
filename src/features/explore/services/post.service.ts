import { Post } from "@/features/posts/types";

export async function getImagePosts(): Promise<Post[]> {
  try {
    const res = await fetch("https://tarmeezacademy.com/api/v1/posts", {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch image posts");
    const response = await res.json();
    return response.data; // The API wraps the array in 'data'
  } catch (error) {
    console.error("Image Service Error:", error);
    return [];
  }
}