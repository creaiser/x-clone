'use client'
import { useInfiniteQuery } from '@tanstack/react-query'
import InfiniteScroll from 'react-infinite-scroll-component'
import Post from './Post'

const fetchPosts = async (pageParam: number, userProfileId?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?cursor=${pageParam}&user=${userProfileId ?? ''}`,
  )
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

const InfiniteFeed = ({ userProfileId }: { userProfileId?: string }) => {
  const { data, error, status, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['posts', userProfileId],
    queryFn: ({ pageParam = 2 }) =>
      fetchPosts(pageParam as number, userProfileId),
    initialPageParam: 2,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 2 : undefined,
  })

  if (error) return <p>Something went wrong!</p>
  if (status === 'pending') return <p>Loading...</p>

  const allPosts = data?.pages?.flatMap((page) => page.posts) || []

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h1>Posts are loading...</h1>}
      endMessage={<h1>All posts loaded!</h1>}
    >
      {allPosts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteFeed
