import { Reel } from "../types";

 
export async function getReels(): Promise<Reel[]> {
  const res = await fetch(`https://marmar-f3dy.onrender.com/reels`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Reel not found");
  }

  const json = await res.json();
  return json.data;
}
