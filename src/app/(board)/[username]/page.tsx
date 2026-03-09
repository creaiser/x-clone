import Link from 'next/link'
import Image from '@/components/Image'
import Feed from '@/components/Feed'
import { notFound } from 'next/navigation'
import { prisma } from '@/prisma'
import { auth } from '@clerk/nextjs/server'
import FollowButton from '@/components/FollowButton'

const UserPage = async ({ params }: { params: { username: string } }) => {
  const { userId } = await auth()
  const user = await prisma.user.findUnique({
    where: { username: params.username },
    include: {
      _count: { select: { followers: true, followings: true } },
      followings: userId ? { where: { followerId: userId } } : undefined,
    },
  })
  if (!user) return notFound()
  return (
    <div>
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/65">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">{user.displayName}</h1>
      </div>
      {/* INFO  */}
      <div className="">
        {/* COVER & AVATAR */}
        <div className="relative w-full ">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image
              path={user.cover || 'general/noCover.png'}
              alt="cover"
              w={600}
              h={200}
              tr={true}
            />
          </div>
          {/* AVATAR */}
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black absolute left-4 -translate-y-1/2">
            <Image
              path={user.cover || 'general/noAvotar.png'}
              alt="cover"
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="flex items-center w-9 h-9 justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="more" w={20} h={20} tr={true} />
          </div>
          <div className="flex items-center w-9 h-9 justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              path="icons/explore.svg"
              alt="explore"
              w={20}
              h={20}
              tr={true}
            />
          </div>
          <div className="flex items-center w-9 h-9 justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              path="icons/message.svg"
              alt="message"
              w={20}
              h={20}
              tr={true}
            />
          </div>
          {userId && (
            <FollowButton
              userId={user.id}
              isFollowed={!!user.followings.length}
            />
          )}
        </div>
        {/* USER DETAILS  */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE  */}
          <div className="">
            <h1 className="text-xl font-bold">{user.displayName}</h1>
            <span className="text-textGray text-sm">{user.username}</span>
          </div>
          {user.bio && <p>{user.bio}</p>}
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            {user.location && (
              <div className="flex items-center gap-2">
                <Image
                  path="icons/userLocation.svg"
                  alt="userLocation"
                  w={20}
                  h={20}
                  tr={true}
                />
                <span>{user.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Image path="icons/date.svg" alt="date" w={20} h={20} tr={true} />
              <span>
                Joined{' '}
                {new Date(user.createdAt.toString()).toLocaleDateString(
                  'en-US',
                  { month: 'long', year: 'numeric' },
                )}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 cursor-pointer max-h-[18px] border-b-1 border-b-white/0 hover:border-b-white/100">
              <span className="font-bold">{user._count.followers}</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer max-h-[18px] border-b-1 border-b-white/0 hover:border-b-white/100">
              <span className="font-bold">{user._count.followings}</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
          </div>
        </div>
      </div>
      <Feed userProfileId={user.id} />
    </div>
  )
}

export default UserPage
