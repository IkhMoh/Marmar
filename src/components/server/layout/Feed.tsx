import React from "react";
import { getPosts, Post, PostCard } from "@/features/posts";
 
const Feed = async () => {
  // Fetch real posts from our service
  const apiPosts = await getPosts();

  // Your Fake Video Post for testing
  const fakeVideoPost: Post = {
    id: 99999,
    title: "Testing Local Video",
    body: "This is a video coming from my public folder! Testing the line-clamp and expand logic here...This is a video coming from my public folder! Testing the line-clamp and expand logic here...This is a video coming from my public folder! Testing the line-clamp and expand logic here...This is a video coming from my public folder! Testing the line-clamp and expand logic here...",
    type: "video",
    image: "/images/posts/1.mp4",
    author: {
      id: 9102,
      username: "VideoTester",
      name: "Local Tester",
      profile_image:
        "https://tarmeezacademy.com/images/posts/9h8IIZCYtQM5BO4.jpg",
    },
    created_at: "Just now",
    comments_count: 5,
    comments: [],
    tags: [],
    from_api: false,
    time_ago: "Just now",
    likes: 0,
  };
  const localMedia = [
    "/images/posts/1.mp4",
    "/images/posts/2.mp4",
    "/images/posts/3.mp4",
    "/images/posts/6.mp4",
  ];

  const localPosts: Post[] = localMedia.map((media, index) => ({
    ...fakeVideoPost,
    id: fakeVideoPost.id + index,
    image: media,
  }));

  const allPosts = [...localPosts, ...apiPosts];

  return (
    <div className="flex flex-col items-center w-full gap-4">
         {allPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
     </div>
  );
};

export default Feed;
