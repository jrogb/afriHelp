import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import { MdFilterAlt, MdOutlineSortByAlpha, MdDeleteForever } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { groupsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Group = {
    id: number;
    name: string;
    staff: string[];
}

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Staff",
        accessor: "staff",
        className: "hidden lg:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },

]

const GroupListPage = () => {

    const renderRow = (item: Group) =>
    (
        <tr key={item.id} className="border-b border-gray-200 even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition-colors">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">
                        {item.name}
                    </h3>
                </div>
            </td>
            <td className="hidden md:table-cell text-xs">
                {item.staff.join(",")}
            </td>
            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/it/${item.id}`}>
                        {role === "admin" && (
                            <FormModal table="group" type="update" data={item} />
                        )}
                    </Link>
                    {role === "admin" && (
                        <FormModal table="group" type="delete" id={item.id} />
                    )}
                </div>
            </td>
        </tr>

    )


    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0 justify-between'>
            {/* Top section */}
            <div className="flex items-center justify-between">
                <h1 className="hidden text-lg font-semibold md:block">Groups</h1>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        {role === "admin" && (
                            <FormModal table="group" type="create" />
                        )}
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-afrired text-white">
                            <MdOutlineSortByAlpha width={8} height={8} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-afrired text-white">
                            <MdFilterAlt width={8} height={8} />
                        </button>
                    </div>
                </div>
            </div>
            {/* List */}
            <Table columns={columns} renderRow={renderRow} data={groupsData} />
            {/* Pagination */}
            <Pagination />
        </div>
    )
}

export default GroupListPage;