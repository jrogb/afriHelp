import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import { MdFilterAlt, MdOutlineSortByAlpha, MdDeleteForever } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { role, eventsData } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Events = {
  id: number;
  subject: string;
  group: string;
  staff_member: string;
  description: string;
  status: string;
  attachments: {
    id: number;
    name: string;
    url: string;
  }[];
  createdAt: string;
  updatedAt: string;
  messages: {
    id: number;
    content: string;
    sender: string;
    createdAt: string;
  }[];
  company: string;
  assigned_to: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Subject",
    accessor: "subject",
    className: "hidden md:table-cell",
  },
  {
    header: "Group",
    accessor: "group",
    className: "hidden md:table-cell",
  },
  {
    header: "Company",
    accessor: "company",
    className: "hidden md:table-cell",
  },
  {
    header: "Description",
    accessor: "description",
    className: "hidden lg:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden lg:table-cell",
  },
  {
    header: "Updated At",
    accessor: "updatedAt",
    className: "hidden lg:table-cell",
  },
  {
    header: "Assigned To",
    accessor: "assigned_to",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },

]

const EventsListPage = () => {

  const renderRow = (item: Event) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition-colors">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.staff_member}</h3>
          <p className="text-xs text-gray-400">{item.createdAt}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-xs">{item.subject}</td>
      <td className="hidden md:table-cell text-xs">{item.group}</td>
      <td className="hidden md:table-cell text-xs">{item.company}</td>
      <td className="hidden md:table-cell text-xs">{item.description}</td>
      <td className="hidden md:table-cell text-xs">{item.status}</td>
      <td className="hidden md:table-cell text-xs">{item.updatedAt}</td>
      <td className="hidden md:table-cell text-xs">{item.assigned_to}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/it/${item.id}`}>
            {role === "admin" && (
              <FormModal table="ticket" type="update" data={item} />
            )}
          </Link>
          {role === "admin" && (
            <FormModal table="ticket" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>

  )


  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* Top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            {role === "admin" && (
              <FormModal table="ticket" type="create" />
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
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default EventsListPage;