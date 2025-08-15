"use client";

import React from "react";
import Image from "next/image";
import { Post } from "@/types/post";
import type { Author } from "@/types/author";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // const author: Author = post.author ?? {
  //   id: 0,
  //   username: "Unknown",
  //   name: "",
  //   profile_image: "default.jpg",
  // };

  // تحديد مصدر الوسائط
  let mediaSrc = "";
  if (Array.isArray(post.image) && post.image.length > 0) {
    mediaSrc = post.image[0];
  } else if (typeof post.image === "string") {
    mediaSrc = post.image;
  } else {
    mediaSrc = "/default.jpg";
  }

  const finalSrc = mediaSrc.startsWith("http")
    ? mediaSrc
    : `/image/posts/${mediaSrc}`;

  return (
    <div className="border rounded-lg mb-6 bg-white dark:bg-gray-800 shadow-sm">
      {/* Header: User info */}
      {/* <div className="flex items-center p-3">
        <Avatar className="w-10 h-10">
          <AvatarImage
            src={`public/images/avatars/profile_image}`}
            alt={author.username}
          />
          <AvatarFallback>{author.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="font-semibold text-sm">{author.username}</p>
          <p className="text-xs text-gray-500">{author.name}</p>
        </div>
      </div> */}

      {/* Content: Text */}
      <div className="px-3 pb-3">
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-sm mt-1">{post.body}</p>
      </div>
      
      {/* Media: صورة أو فيديو */}
      {post.image && post.image.length > 0 && (
        <div className="w-full relative h-[400px]">
          {post.type === "video" ? (
            <video className="w-full h-full object-cover rounded-md" controls>
              <source
                src={
                  post.image[0] && post.image[0].startsWith("http")
                    ? post.image[0] // رابط خارجي
                    : `/images/posts/${post.image[0] ?? "default.mp4"}`
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={
                post.image[0] && post.image[0].startsWith("http")
                  ? post.image[0] // رابط خارجي
                  : `/images/posts/${post.image[0] ?? "default.jpg"}`
              }
              alt={post.title || "Post image"}
              fill
              className="object-cover rounded-md"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
