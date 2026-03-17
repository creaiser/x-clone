'use client'

import { followUser } from '@/action'
import { useOptimistic, useState } from 'react'

const FollowButton = ({
  userId,
  isFollowed,
}: {
  userId: string
  isFollowed: boolean
}) => {
  const [state, setState] = useState(isFollowed)

  const followAction = async () => {
    switchOptimisticFollow('')
    await followUser(userId)
    setState((prev) => !prev)
  }

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    state,
    (prev) => !prev,
  )

  return (
    <form action={followAction}>
      <button
        className={`${optimisticFollow ? 'bg-borderGray text-textGrayLight' : 'bg-white text-black'} py-2 px-4  font-bold rounded-full cursor-pointer`}
      >
        {optimisticFollow ? 'Unfollow' : 'Follow'}
      </button>
    </form>
  )
}
export default FollowButton
