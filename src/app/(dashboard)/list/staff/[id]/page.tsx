import Image from "next/image";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import Announcements from "@/components/Announcements";
import Link from "next/link";
import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive, MdEvent } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import PerformanceChart from "@/components/PerformanceChart";

const SingleStaffPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* Left side */}
        <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* User card */}
                <div className="flex flex-row bg-afrigray py-4 px-4 rounded-md flex-1">
                    <div className="w-1/3 p-2">
                        <Image alt="" src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" width={144} height={144} className=" w-36 h-36 rounded-full object-cover"  />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-2">
                        <h2 className="text-white font-semibold text-xl">Staff 1</h2>
                        <p className="text-xs text-gray-400 font-light">Some descriptive text should go here to indicate the users role and position within the group</p>
                        <div className="flex items-center justify-between gap-2 flex-wrap font-light">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 text-sm text-gray-300">
                                <LiaBirthdayCakeSolid className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                                <span>April 10</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 text-sm text-gray-300">
                                <FaPhoneVolume className="text-afrired w-[15px] h-[15px]" width={14} height={14}/>
                                <span>+27 76 531 8120</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 text-sm text-gray-300">
                                <IoIosMail className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                                <span>johan@africlan.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Small cards */}
                <div className="flex-1 flex gap-4 justify-between flex-wrap">
                    <div className="bg-white p-4 rounded-md w-full flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <IoIosMail className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md w-full flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <IoIosMail className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md w-full flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <IoIosMail className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md w-full flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <IoIosMail className="text-afrired w-[20px] h-[20px]" width={14} height={14}/>
                        <div className="">
                            <h1 className="text-xl font-semibold">90%</h1>
                            <span className="text-sm text-gray-400">Attendance</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* BOTTOM */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1>Schedule</h1>
                <BigCalendar />
            </div>
        </div>
        {/* Right side */}
        <div className="w-full xl:w-1/3 gap-4 flex flex-col">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Create a new</h1>
                <div className="mt-4 flex gap-4 text-xs flex-wrap">
                    <Link className=" p-3 rounded-md bg-afrired text-white text-center flex flex-row items-center gap-2 w-[45%]" href="/"><IoTicketOutline size={20} />Ticket</Link>
                    <Link className=" p-3 rounded-md bg-afrired text-white text-center flex flex-row items-center gap-2 w-[45%]" href="/"><MdEvent size={20} />Event</Link>
                    <Link className=" p-3 rounded-md bg-afrired text-white text-center flex flex-row items-center gap-2 w-[45%]" href="/"><TiMessages size={20} />Message</Link>
                    <Link className=" p-3 rounded-md bg-afrired text-white text-center flex flex-row items-center gap-2 w-[45%]" href="/"><MdOutlineNotificationsActive size={20} />Announcement</Link>
                </div>
            </div>
            <PerformanceChart />
            <Announcements />
        </div>
    </div>
  )
}

export default SingleStaffPage