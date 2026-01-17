import { normalizeMarmerPost, normalizeTarmeezPost } from "../components/postAdapters";
import { Post } from "../types";

const TARMEZ_API = "https://tarmeezacademy.com/api/v1/posts";
const MARMER_API = "https://marmar-f3dy.onrender.com/posts";

export async function getPosts(): Promise<Post[]> {
  const [tarmeezData, marmerData] = await Promise.allSettled([
    safeFetch(TARMEZ_API),
    safeFetch(MARMER_API),
  ]);

  const tarmeezPosts: Post[] =
    tarmeezData.status === "fulfilled" && tarmeezData.value?.data
      ? tarmeezData.value.data.map(normalizeTarmeezPost)
      : [];

  const marmerPosts: Post[] =
    marmerData.status === "fulfilled" && marmerData.value?.data
      ? marmerData.value.data.map(normalizeMarmerPost)
      : [];

  return [...marmerPosts, ...tarmeezPosts];
}

/* ===== helper ===== */
async function safeFetch(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
