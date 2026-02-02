import Link from "next/link";
import Image from './Image'

const Recommendations = () => (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4 ">
        <h1 className="text-xl fond-bold text-textGrayLight">Who to follow</h1>
        {/* USER CARD */}
        <div className="flex items-center justify-between">
            {/* Image and user info */}
            <div className="flex items-center gap-2">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="creaiser" w={100} h={100} tr={true} />
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Creaiser</h1>
                    <span className="text-textGray text-sm">@creaiser</span>
                </div>
            </div>
             {/* BUTTON */}
            <Link href="/" className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</Link>
        </div>
        <div className="flex items-center justify-between">
            {/* Image and user info */}
            <div className="flex items-center gap-2">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="creaiser" w={100} h={100} tr={true} />
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Creaiser</h1>
                    <span className="text-textGray text-sm">@creaiser</span>
                </div>
            </div>
             {/* BUTTON */}
            <Link href="/" className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</Link>
        </div>
        <div className="flex items-center justify-between">
            {/* Image and user info */}
            <div className="flex items-center gap-2">
                <div className="relative rounded-full overflow-hidden w-10 h-10">
                    <Image path="general/avatar.png" alt="creaiser" w={100} h={100} tr={true} />
                </div>
                <div className="">
                    <h1 className="text-md font-bold">Creaiser</h1>
                    <span className="text-textGray text-sm">@creaiser</span>
                </div>
            </div>
             {/* BUTTON */}
            <Link href="/" className="py-1 px-4 rounded-full font-semibold bg-white text-black">Follow</Link>
        </div>
        <Link href="/" className="text-iconBlue">Show more</Link>
    </div>
)

export default Recommendations;