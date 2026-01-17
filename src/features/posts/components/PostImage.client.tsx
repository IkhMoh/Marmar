"use client";

import Image from "next/image";

interface PostImageProps {
  src: string;
  alt: string;
}

export default function PostImage({ src, alt }: PostImageProps) {
  if (!src || typeof src !== "string") {
    return null; 
  }
  return (
    <div className="relative w-full h-[468px] bg-black overflow-hidden rounded-[3px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full"
        priority={false}
      />
    </div>
  );
}