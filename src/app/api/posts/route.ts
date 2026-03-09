import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const userProfileId = searchParams.get('user') || undefined
  const cursor = searchParams.get('cursor')
  const LIMIT = 3

  const { userId } = await auth()
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const whereCondition = userProfileId
    ? { userId: userProfileId }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((f) => f.followingId),
          ],
        },
      }

  const posts = await prisma.post.findMany({
    where: whereCondition,
    include: {
      user: { select: { displayName: true, username: true, img: true } },
    },
    take: LIMIT,
    skip: (Number(cursor) - 1) * LIMIT,
    orderBy: { createdAt: 'desc' },
  })

  const totalPosts = await prisma.post.count({ where: whereCondition })
  const hasMore = Number(cursor) * LIMIT < totalPosts

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return NextResponse.json({ posts, hasMore })
}
