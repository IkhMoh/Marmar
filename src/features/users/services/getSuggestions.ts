import { User } from "../types";

export async function getSuggestions(): Promise<User[]> {
  const res = await fetch(`https://marmar-f3dy.onrender.com/suggestions`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Reel not found");
  }

  const json = await res.json();
  return Array.isArray(json) ? json : json.data || [];
}
