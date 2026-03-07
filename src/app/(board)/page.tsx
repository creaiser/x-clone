import Link from 'next/link'
import Feed from '@/components/Feed'
import Share from '@/components/Share'

const Homepage = () => {


  return (
    <div className='relative w-[600px] h-[600px] '>
      <div className='px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray'>
        <Link className='pb-3 flex items-center border-b-4 border-iconBlue' href="/">For you</Link>
        <Link className='pb-3 flex items-center' href="/">Following</Link>
        <Link className='hidden pb-3 md:flex items-center' href="/">React Js</Link>
        <Link className='hidden pb-3 md:flex items-center' href="/">Monad</Link>
        <Link className='hidden pb-3 md:flex items-center' href="/">Konspekteri</Link>
      </div>
      <Share/>
      <Feed/>
    </div>
  )
}

export default Homepage