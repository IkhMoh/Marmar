// services/storiesApi.ts
import { api } from "./tarmeezacademyApi";

// Type for a Story
export interface Story {
  id: number;
  title: string;
  userId?: number;
  imageUrl?: string;
}

// API slice for stories
export const storiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStories: builder.query<Story[], void>({
      query: () => "stories",
    }),
  }),
});

export const { useGetStoriesQuery } = storiesApi;
