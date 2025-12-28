"use server";

import { revalidatePath } from "next/cache";

export async function submitComment(
  postId: number,
  comment: string,
  token: string
) {
  if (!token) {
    return { error: "No token found. Please log in again." };
  }

  try {
    const response = await fetch(
      `https://tarmeezacademy.com/api/v1/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          body: comment,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || "Failed to post comment" };
    }

    revalidatePath("/"); // Refreshes the Boss component data
    return { success: true };
  } catch {
    return { error: "Server connection failed" };
  }
}
