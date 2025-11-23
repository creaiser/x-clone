"use client"
import Image from '@/components/Image'
import { useState } from 'react'
const Share = () => {
  const [media, setMedia] = useState<File | null>(null)

  const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
      setMedia(e.target.files[0])
    }
  }
  
  return (
    <div className='p-4 flex gap-4'>
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
      </div>
      {/* OTHERS */}
      <div className='flex-1 flex flex-col gap-4'>
        <input type="text" placeholder='What is happening?!' className='bg-transparent outline-none placeholder:text-textGray text-xl'/>
        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <div className='flex gap-4 flex-wrap'>
            <input type="file" onChange={handleMediaChange} className='hidden' id='file'/>
            <label htmlFor="file">
              <Image path='icons/image.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
            </label>
            <Image path='icons/gif.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
            <Image path='icons/poll.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
            <Image path='icons/emoji.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
            <Image path='icons/schedule.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
            <Image path='icons/location.svg' alt='' w={20} h={20} tr={true} className='cursor-pointer'/>
          </div>
          <button className='bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Share                        