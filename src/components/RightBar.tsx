import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
    return (
        <div className="fixed lg:max-w-[288px] xl:max-w-[383px] top-0 gap-4 h-screen flex flex-col pt-2 pb-8  pl-4 md:pl-8 border-l-[1px] border-borderGray">
            <Search/>
            <PopularTags/>
            <Recommendations/>
            <div className="text-textGray text-sm flex gap-x-4 flex-wrap pb-4">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Cookie Policy</Link>
                <Link href="/">Accessibility</Link>
                <Link href="/">Ads info</Link>
                <span>© 2026 L Corp.</span>
            </div>
        </div>
    )
}

export default RightBar;