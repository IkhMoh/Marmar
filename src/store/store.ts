// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/store/postSlice";
import videoReducer from "./slice/videoSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer,
      video: videoReducer,
    },
  });
};
// todo:clean

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
