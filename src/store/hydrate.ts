"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { fetchPosts } from "./slice/postsSlice";
import { Post } from "@/types/post";

export function useHydratePosts(initialPosts: Post[]) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (initialPosts && initialPosts.length > 0) {
      dispatch(fetchPosts(initialPosts));
    }
  }, [initialPosts, dispatch]);
}
