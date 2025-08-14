"use client";

import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ItForm = dynamic(() => import("./forms/ItForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const StaffForm = dynamic(() => import("./forms/StaffForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const HocForm = dynamic(() => import("./forms/HocForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const GroupForm = dynamic(() => import("./forms/GroupForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const CompanyForm = dynamic(() => import("./forms/CompanyForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const TicketForm = dynamic(() => import("./forms/TicketForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const EventForm = dynamic(() => import("./forms/EventForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });

const MessageForm = dynamic(() => import("./forms/MessageForm"), { 
    loading: () => <div>Loading...</div>,
    ssr: false
 });



const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;

} = {
    "it": (type, data) => <ItForm type={type} data={data} />,
    "staff": (type, data) => <StaffForm type={type} data={data} />,
    "hoc": (type, data) => <HocForm type={type} data={data} />,
    "group": (type, data) => <GroupForm type={type} data={data} />,
    "company": (type, data) => <CompanyForm type={type} data={data} />,
    "ticket": (type, data) => <TicketForm type={type} data={data} />,
    "messages": (type, data) => <MessageForm type={type} data={data} />,
    "events": (type, data) => <EventForm type={type} data={data} />,
    "announcements": (type, data) => <AnnouncementForm type={type} data={data} />,
};


const FormModal = ({ table, type, data, id }: { table: "it" | "staff" | "hoc" | "group" | "company" | "ticket" | "events" | "announcements" | "messages"; type: "create" | "update" | "delete"; data?: any; id?: number }) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const icon = type === "create" ? <IoPersonAdd /> : type === "update" ? <FaEye /> : <MdDeleteForever />;

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span className="text-center font-medium">Are you sure you wish to delete this {table}?</span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
            </form>
        ) : type === "create" || type === "update" ? (
            forms[table](type, data)
        ) : (
            <span className="text-center font-medium">Invalid form type</span>
        );
    };


    return (
        <>
            <button className={`${size} flex items-center justify-center rounded-full text-white bg-afrired`}
                onClick={() => setOpen(true)}
            >
                {icon}
            </button>
            {open && (

                <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                        <Form />
                        <div className="absolute top-4 right-4 cursor-pointer">
                            <Image src="/close.png" alt="" width={14} height={14} onClick={() => setOpen(false)} />
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default FormModal;