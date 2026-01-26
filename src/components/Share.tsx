"use client"
import { shareAction } from '@/actions'
import Image from '@/components/Image'
import NextImage from 'next/image'
import { useState } from 'react'
import ImageEditor from './ImageEditor'

const Share = () => {
  const [media, setMedia] = useState<File | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  })
  
  const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files && e.target.files[0]){
      setMedia(e.target.files[0])
    }
  }
  

  const previewURL = media ? URL.createObjectURL(media) : null
  
  return (
    <form className='p-4 flex gap-4' action={formData=>shareAction(formData,settings)}>
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image path="general/avatar.png" alt="" w={100} h={100} tr={true}/>
      </div>
      {/* OTHERS */}
      <div className='flex-1 flex flex-col gap-4'>
        <input type="text" name='desc' placeholder='What is happening?!' className='bg-transparent outline-none placeholder:text-textGray text-xl'/>
        {/* MEDIA PREVIEW */}
        {
          previewURL && (
            <div className='relative rounded-xl overflow-hidden'>
              <NextImage src={previewURL} alt='media preview' width={600} height={600} className={`w-full ${
            settings.type === "original" 
              ? "h-full object-contain" 
              : settings.type === "square" 
              ? "aspect-square object-cover" 
              : "aspect-video object-cover"}`}/>
              <div className="absolute top-2 left-2 bg-black/50 text-white px-4 py-1 rounded-full font-bold text-sm cursor-pointer" onClick={()=>setIsEditing(true)}>
                Edit
              </div>
            </div>
          )
        }
        {
          isEditing && previewURL && (
            <ImageEditor 
              onClose={()=>setIsEditing(false)} 
              previewURL={previewURL}
              settings={settings}
              setSettings={setSettings}
            />
          )
        }
        <div className='flex items-center justify-between gap-4 flex-wrap'>
          <div className='flex gap-4 flex-wrap'>
            <input type="file" name="file" onChange={handleMediaChange} className='hidden' id='file'/>
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
    </form>
  )
}

export default Share                        