import Post from "./Post"
import Image from './Image'

const Comments = () => {
  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative rounded-full w-10 h-10 overflow-hidden">
          <Image path='general/avatar.png' alt='Creaiser' w={100} h={100} tr={true}/>
        </div>
        <textarea className='flex-1 bg-transparent outline-none text-lg resize-none [field-sizing:content]' placeholder='Post your reply' rows={1} />
        <button className='bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer'>Reply</button>
      </form>
      <Post/>
    </div>
  )
}

export default Comments