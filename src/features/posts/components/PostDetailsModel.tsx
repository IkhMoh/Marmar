"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { SendDialog } from "@/components/client/SendDialog";
import { SaveDialog } from "@/components/server/SaveDialog";
import UserCardComment from "@/features/users/components/UserCardComment";
import UserCardProfile from "@/features/users/components/UserCardProfile";
import { Post } from "../types";
import Image from "next/image";
import PostCommentInput from "./PostCommentInput";

const PostDetailsModel = ({ post }: { post: Post }) => {
  const router = useRouter();
  const close = () => router.back();
  console.log(post);

  return (
    <div
      className="fixed inset-0 z-50  flex items-center justify-center"
      onClick={close}
    >
      <div
        className=" shadow-xl max-w-6xl min-w-5xl w-fit h-[92vh] overflow-hidden flex bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 ">
          <div className="flex-1 h-full flex items-center justify-center">
            {typeof post.image === "string" && post.image.trim() !== "" ? (
              <Image
                src={post.image}
                alt={`Media for Post ${post.id}`}
                width={1000}
                height={800}
                className="object-cover w-full h-full"
              />
            ) : (
              <p>Post ID: {post.id}</p>
            )}
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-[500px] flex flex-col">
          {/* Top Header User */}
          <section className="px-2 py-3 rounded-b-md border-b border-gray-200">
            <UserCardProfile
              username={post.author.username}
              profile_image={post.author.profile_image}
            />
          </section>

          {/* POST CONTENT SCROLL */}
          <section className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
            <div className="flex gap-2">
              <Avatar className="w-10 h-10  ">
                <AvatarImage
                  src={"/images/avatars/" + post.author.profile_image}
                  alt={post.author.username}
                  className="object-cover object-center rounded-full"
                />

                <AvatarFallback>{post.author.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm">
                  <h1 className="font-semibold mr-1">{post.author.username}</h1>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <UserCardComment key={comment.id} comment={comment} />
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </section>

          <section className="border-t border-gray-200 px-3 py-3">
            <div className="flex justify-between my-1 py-2">
              <div className="flex space-x-4">
                <Heart
                  size={26}
                  className="transition-transform duration-200 hover:scale-110"
                />
                <MessageCircle
                  size={26}
                  className="transition-transform duration-200 hover:scale-110"
                />
                <SendDialog />
              </div>
              <SaveDialog />
            </div>

            {/* likes and views */}
            <p className="text-sm font-semibold mt-2">
              {" "}
              {post.likes || "244"} likes
            </p>
            <p className="text-[11px] text-gray-500 mt-1">
              {" "}
              {post.time_ago || "23 day age"}
            </p>
          </section>

          {/* COMMENT INPUT */}
          {/* <section className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 outline-none text-sm"
            />
            <button className="text-blue-500 text-sm font-semibold">
              Post
            </button>
          </section> */}
          <PostCommentInput postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailsModel;
