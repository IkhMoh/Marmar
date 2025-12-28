import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle } from "lucide-react";
import { SendDialog } from "@/components/client/SendDialog";
import { SaveDialog } from "@/components/server/SaveDialog";
import UserCardComment from "@/features/users/components/UserCardComment";
import UserCardProfile from "@/features/users/components/UserCardProfile";
import { Post } from "../types";
import Image from "next/image";
import PostCommentInput from "./PostCommentInput";

const PostDetails = ({ post }: { post: Post }) => {
  return (
    <div>
      <div className="w-full px-32 bg-white">
        <div className="flex h-[600px] mt-8 border-black/20 border">
          {/* todo : leal data */}
          {/* left Panel */}
          <section className="w-2/3 rounded-xl flex items-center justify-center">
            <div className="flex-1 h-full flex items-center justify-center">
              {typeof post.image === "string" && post.image.trim() !== "" ? (
                <Image
                  src={post.image}
                  alt={`Media for Post ${post.id}`}
                  width={1000}
                  height={800}
                  className=" object-cover w-full h-full"
                />
              ) : (
                <p>{post.id}</p>
              )}
            </div>
          </section>
          {/* Right Panel */}
          <section className="w-1/3 flex flex-col">
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
                    alt={post.title}
                    className="object-cover object-center rounded-full"
                  />

                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm">
                    <h1 className="font-semibold mr-1">
                      {post.author.username}
                    </h1>
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

            <section className="border-t border-gray-200 px-3 ">
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
                {post.likes || "244"} likes
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
