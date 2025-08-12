"use client";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const FormModal = ({ table, type, data, id }: { table: "it" | "staff" | "hoc" | "group" | "company" | "ticket" | "event" | "announcement" | "message"; type: "create" | "update" | "delete"; data?: any; id?: number }) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const icon = type === "create" ? <IoPersonAdd /> : type === "update" ? <FaEye /> : <MdDeleteForever />;

    const [open, setOpen] = useState(false);
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
                        <h1>Hello</h1>
                        <div className="absolute top-4 right-4 cursor-pointer">
                            <Image src="/close.png" alt="" width={14} height={14} onClick={()=> setOpen(false)}/>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default FormModal;