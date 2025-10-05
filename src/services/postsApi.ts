// services/postsApi.ts
import { api } from "./tarmeezacademyApi";
// import path from "path";
// import fs from "fs";

// --- Types ---
export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
  type?: string;
  image?: string[];
  from_api?: boolean;
}

export type NewPost = Omit<Post, "id">;

export interface RawPost {
  id: number;
  title: string;
  body: string;
  userId?: number;
  image?: string | string[] | { url: string };
  type?: string;
  from_api?: boolean;
}

// --- Helper: normalize post ---
function normalizePost(raw: RawPost): Post {
  let images: string[] = [];

  if (Array.isArray(raw.image)) {
    images = raw.image.map((img) => (typeof img === "string" ? img : img.url));
  } else if (typeof raw.image === "string") {
    images = [raw.image];
  } else if (raw.image && "url" in raw.image) {
    images = [raw.image.url];
  }

  return {
    ...raw,
    type: raw.type ?? (images.length > 0 ? "image" : "video"),
    image: images,
    from_api: !!raw.from_api,
  };
}


export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({

    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),

    createPost: builder.mutation<Post, NewPost>({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),

    getMergedPosts: builder.query<Post[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, baseQuery) {
        try {
          // Fetch local posts from the new API route
          const localResult = await fetch("/api/local-posts");
          const localData = await localResult.json();
    
          const localPosts: Post[] = (localData as RawPost[])
            .filter((post) => !post.from_api)
            .map(normalizePost);
    
          // Fetch API posts
          const apiResult = await baseQuery({ url: "posts" });
          if ("error" in apiResult) return { error: apiResult.error };
    
          const apiData = (apiResult.data as any).data || apiResult.data;
          const apiPosts: Post[] = (apiData as RawPost[]).map(normalizePost);
    
          // Merge and return
          const merged = [...localPosts, ...apiPosts];
          return { data: merged };
        } catch (err: any) {
          return { error: { status: "CUSTOM_ERROR", error: err.message } };
        }
      },
    }),
    
  }),
  overrideExisting: false,
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useGetMergedPostsQuery,
} = postsApi;
