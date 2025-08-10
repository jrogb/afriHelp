import Image from "next/image"

const TableSearch = () => {
    return (
        <div className="w-full md:w-auto items-center bg-white rounded-full px-4 py-2 shadow-md w-[40%] flex">
            <Image src="/search.png" alt="Search" width={14} height={14} className="m-2" />
            <input type="text" placeholder="Search..." className="outline-none" />
        </div>
    )
}

export default TableSearch