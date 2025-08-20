// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice/postsSlice";
import videoReducer from "./slice/videoSlice"
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    video: videoReducer, 

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
