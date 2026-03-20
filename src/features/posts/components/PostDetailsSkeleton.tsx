import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const PostDetailsSkeleton = () => {
  return (
    <div className="w-[500px] h-[92vh] flex flex-col bg-white border">

      {/* Header (User) */}
      <section className="px-3 py-3 border-b">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-32 h-4" />
        </div>
      </section>

      {/* Body (Post + Comments) */}
      <section className="flex-1 overflow-y-auto px-3 py-4 space-y-4">

        {/* Post Content */}
        <div className="flex gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-full h-3" />
            <Skeleton className="w-5/6 h-3" />
          </div>
        </div>

        {/* Comments */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="w-20 h-3" />
              <Skeleton className="w-full h-3" />
            </div>
          </div>
        ))}
      </section>

      {/* Actions */}
      <section className="border-t px-3 py-3 space-y-3">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <Skeleton className="w-6 h-6 rounded-md" />
            <Skeleton className="w-6 h-6 rounded-md" />
            <Skeleton className="w-6 h-6 rounded-md" />
          </div>
          <Skeleton className="w-6 h-6 rounded-md" />
        </div>

        <Skeleton className="w-24 h-3" />
        <Skeleton className="w-20 h-2" />
      </section>

      {/* Comment Input */}
      <section className="border-t px-3 py-3">
        <div className="flex gap-2 items-center">
          <Skeleton className="flex-1 h-8" />
          <Skeleton className="w-12 h-8" />
        </div>
      </section>
    </div>
  )
}

export default PostDetailsSkeleton
