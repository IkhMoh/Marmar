// import { api } from "@/lib/axios";
// import { Post, RawPost } from "@/types/post";
// import path from "path";
// import fs from "fs";

// // RawPost to Post
// function normalizePost(raw: RawPost): Post {
//   let images: string[] = [];

//   if (Array.isArray(raw.image)) {
//     images = raw.image.map((img) => (typeof img === "string" ? img : img.url));
//   } else if (typeof raw.image === "string") {
//     images = [raw.image];
//   } else if (raw.image && "url" in raw.image) {
//     images = [raw.image.url];
//   }

//   return {
//     ...raw,
//     type: raw.type ?? (images.length > 0 ? "image" : "video"),
//     image: images,
//     from_api: !!raw.from_api, 
//   };
// }

// export async function getMergedPosts(): Promise<Post[]> {
 
//   const filePath = path.join(process.cwd(), "src/data/posts.json");
//   const rawData = fs.readFileSync(filePath, "utf-8");
//   const parsedData: RawPost[] = JSON.parse(rawData); 

//   const localPosts: Post[] = parsedData
//     .filter((post) => !post.from_api)
//     .map(normalizePost);

//   // API posts
//   let apiPosts: Post[] = [];
//   try {
//     const res = await api.get("/posts");
//     const rawApiPosts: RawPost[] = res.data.data; // RawPost API
//     apiPosts = rawApiPosts.map(normalizePost);
//   } catch (error) {
//     console.error("Failed to fetch API posts:", error);
//   }

//   return [...localPosts, ...apiPosts];
// }
