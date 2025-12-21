import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/post";

interface PostsState {
  items: Post[];
}

const initialState: PostsState = {
  items: [], 
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      state.items = action.payload;
    },
    // addPost: (state, action: PayloadAction<Post>) => {
    //   state.items.unshift(action.payload);
    // },
  },
});

export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
