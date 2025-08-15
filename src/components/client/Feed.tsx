"use client";
import { fetchPosts } from "@/store/slice/postsSlice";
import { Post } from "@/types/post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store"; // تأكد من تعريف RootState في الستورد
import PostCard from "../server/PostCard";

interface FeedProps {
  initialPosts: Post[];
}

export default function Feed({ initialPosts }: FeedProps) {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts.items);

  useEffect(() => {
    dispatch(fetchPosts(initialPosts));
  }, [initialPosts, dispatch]);
  console.log(posts);
  return (
    <div>
      {posts.map((post, key) => (
        <PostCard key={key} post={post} />
      ))}
    </div>
  );
}
