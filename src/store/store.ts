// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/services/tarmeezacademyApi";
import postsReducer from "./slice/postsSlice";
import videoReducer from "./slice/videoSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    video: videoReducer,

    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// أنواع التايب سكريبت
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
