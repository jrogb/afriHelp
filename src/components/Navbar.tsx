import Image from "next/image";
import { TiMessages } from "react-icons/ti";
import { MdOutlineNotificationsActive } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Search bar */}
        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2 shadow-md w-[40%]">
            <Image src="/search.png" alt="Search" width={14} height={14} className="m-2"/>
            <input type="text" placeholder="Search..." className="outline-none"/>
        </div>
        {/* Icons and User */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-skylight rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <TiMessages size={20} />
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-afrired text-white rounded-full text-xs">6</div>
            </div>
            <div className="bg-skylight rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <MdOutlineNotificationsActive size={20}/>
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-afrired text-white rounded-full text-xs">1</div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Johan Grobbelaar</span>
                <span className="text-[10px] text-gray-500 text-right">Admin</span>
            </div>
            <Image src="/avatar.png" alt="UserImage" width={36} height={36} className="rounded-full"/>
        </div>
    </div>
  );
};

export default Navbar;