'use client'

const FollowButton = ({
  userId,
  isFollowed,
}: {
  userId: string
  isFollowed: boolean
}) => {
  return (
    <button
      className={`${isFollowed ? 'bg-borderGray text-textGrayLight' : 'bg-white text-black'} py-2 px-4  font-bold rounded-full cursor-pointer`}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </button>
  )
}
export default FollowButton
