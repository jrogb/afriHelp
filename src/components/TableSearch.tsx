"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react";


const TableSearch = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const value = (e.currentTarget[0] as HTMLInputElement).value;

        const params = new URLSearchParams(window.location.search)
        params.set("search", value)
        router.push(`${window.location.pathname}?${params}`)
    };

    return (
        <form onSubmit={handleSubmit} className="w-full md:w-auto items-center bg-white rounded-full px-4 py-2 shadow-md w-[40%] flex">
            <Image src="/search.png" alt="Search" width={14} height={14} className="m-2" />
            <input type="text" placeholder="Search..." className="outline-none" />
        </form>
    );
};

export default TableSearch;