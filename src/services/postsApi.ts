import { api } from "./api";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export type NewPost = Omit<Post, "id">;

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
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
