"use client";
import React from "react";
import Image from "next/image";
import { Film, Image as Images, MessageCircle } from "lucide-react";
import { Post } from "@/features/posts/types";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  variant?: "square" | "tall" | "wide";
}

const PostExplore: React.FC<PostCardProps> = ({ post, variant = "square" }) => {
  const isVideo = post.type === "video";
  // the older code
  //
  // const src =
  //   post.image && post.image.length > 0
  //     ? post.image[0].startsWith("http")
  //       ? post.image[0]
  //       : `/images/posts/${post.image[0]}`
  //     : null;
  //
  const src =
    typeof post.image === "string" && post.image.trim() !== ""
      ? post.image.startsWith("http")
        ? post.image
        : `/images/posts/${post.image}`
      : null;

  const variantClass =
    variant === "square"
      ? "aspect-square"
      : variant === "tall"
      ? "row-span-2 aspect-[2/3]"
      : "col-span-2 aspect-[3/2]";

  if (!src) return null;

  return (
    <Link href={`/p/${post.id}`}>
      {" "}
      <div
        className={`group relative w-full h-full overflow-hidden cursor-pointer   rounded-[3px] ${variantClass}`}
      >
        {/* الـميديا */}
        {isVideo ? (
          <video
            src={src}
            className="w-full h-full object-cover m-[1px]"
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={src}
            alt={post.title || "Post image"}
            fill
            className="object-cover m-[1px]"
          />
        )}

        {/* أيقونة النوع فوق يمين */}
        <div className="absolute top-2 right-2  p-1  ">
          {isVideo ? (
            <Film size={26} stroke="white" />
          ) : (
            <Images size={26} stroke="white" />
          )}
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center 
             bg-black/0 group-hover:bg-black/50
             opacity-0 group-hover:opacity-100 
             transition-all duration-300"
        >
          <div className="flex items-center gap-2   text-lg font-semibold">
            <MessageCircle size={28} stroke="white" fill="white" />
            <span>{post.comments_count ?? 0}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostExplore;
