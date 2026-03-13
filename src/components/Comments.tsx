'use client'

import Post from './Post'
import Image from './Image'
import { Post as PostType } from '@/generated/client'
import { useUser } from '@clerk/nextjs'
import { useActionState } from 'react'
import { addComment } from '@/action'
import { error } from 'console'
type CommentWithDetails = PostType & {
  user: {
    displayName: string | null
    username: string
    img: string | null
  }
  _count: { likes: number; rePosts: number; comments: number }
  likes: { id: number }[]
  rePosts: { id: number }[]
  saves: { id: number }[]
}

const Comments = ({
  comments,
  postId,
  username,
}: {
  comments: CommentWithDetails[]
  postId: number
  username: string
}) => {
  const { isLoaded, isSignedIn, user } = useUser()

  const [state, formAction, isPending] = useActionState(addComment, {
    success: false,
    error: false,
  })

  return (
    <div className="">
      {user && (
        <form
          action={formAction}
          className="flex items-center justify-between gap-4 p-4"
        >
          <div className="relative rounded-full w-10 h-10 overflow-hidden">
            <Image
              path={user?.imageUrl}
              alt="avatar"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <input type="number" name="postId" hidden readOnly value={postId} />
          <input
            type="string"
            name="username"
            hidden
            readOnly
            value={username}
          />
          <textarea
            name="desc"
            className="flex-1 bg-transparent outline-none text-lg resize-none [field-sizing:content]"
            placeholder="Post your reply"
            rows={1}
          />
          <button
            disabled={isPending}
            className="bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-200"
          >
            {isPending ? 'Replying' : 'Reply'}
          </button>
        </form>
      )}
      {state.error && (
        <span className="text-red-300 p-4">Something went wrong!</span>
      )}
      {comments.map((comment) => (
        <div className="" key={comment.id}>
          <Post post={comment} type="comment" />
        </div>
      ))}
    </div>
  )
}

export default Comments
