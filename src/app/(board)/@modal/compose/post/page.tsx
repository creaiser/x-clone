"use client"
import Image from '@/components/Image'
import { useRouter } from 'next/navigation'
const PostModal = () => {

  const router = useRouter()
  const closeModal = ()=>{
    router.back()
  }


  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-20 bg-[#3a434b9c] flex justify-center">
      <div className="py-4 px-6 rounded-xl bg-black w-[600px] h-max  mt-12">

        {/* TOP  */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={()=>closeModal()}>X</div>
          <div className="text-iconBlue font-bold cursor-pointer">Drafts</div>
        </div>

        {/* CENTER  */}
        <div className="py-8 flex gap-4">
          <div className="relative rounded-full w-10 h-10 overflow-hidden">
            <Image path='general/avatar.png' alt='Creaiser' w={100} h={100} tr={true}/>
          </div>
          <textarea className='flex-1 bg-transparent outline-none text-lg resize-none [field-sizing:content]' placeholder='What is happening?!' rows={1} />
        </div>

        {/* BOTTOM  */}
        <div className='flex items-center justify-between gap-4 flex-wrap border-t-1 border-borderGray pt-2'>
          <div className='flex gap-4 flex-wrap'>
            <input type="file" name="file" className='hidden' id='file'/>
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

export default PostModal