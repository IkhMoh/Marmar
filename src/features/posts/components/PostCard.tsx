"use client";
import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Post } from "@/features/posts/types";
import { SendDialog } from "@/components/client/SendDialog";
import { SaveDialog } from "@/components/server/SaveDialog";
import PostHeader from "./PostHeader";
import PostVideo from "./PostVideo.client";
import PostImage from "./PostImage.client";
import PostContent from "./PostContent.client";
import PostCommentInput from "./PostCommentInput";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
   return (
    <div className=" rounded-lg mb-4  w-[468px] h-fit pb-4">
      {/* Header */}
      <PostHeader author={post.author} />

      {/* Inside PostCard.tsx */}
      <div className="w-full relative h-fit">
        {post?.media?.map((item, index) =>
          item.type === "video" ? (
            <PostVideo key={index} src={item.url} />
          ) : (
            <PostImage
              key={index}
              src={item.url}
              alt={post.title || "Post content"}
            />
          )
        )}
      </div>

      {/* Actions */}
      <div className="max-h-[505px]">
        <div className="flex justify-between my-1 py-2">
          <div className="flex space-x-4">
            <Heart
              size={26}
              className="transition-transform duration-200 hover:scale-110"
            />
            <Link href={`/p/${post.id}`}>
              <MessageCircle
                size={26}
                className="transition-transform duration-200 hover:scale-110"
              />
            </Link>
            <SendDialog />
          </div>
          <SaveDialog />
        </div>
        <div className="text-sm font-medium">
          {post.likes ? post.likes : 390} likes
        </div>

        <PostContent body={post.body} />

        <Link href={`/p/${post.id}`}>
          <div className="text-sm text-slate-500 dark:text-gray-400 mt-2">
            View all <span className="font-bold">{post.comments_count}</span>{" "}
            comments
          </div>
        </Link>

        <PostCommentInput postId={post.id} />
      </div>
    </div>
  );
};

export default PostCard;
