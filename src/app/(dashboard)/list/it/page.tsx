import TableSearch from "@/components/TableSearch";
import { MdFilterAlt, MdOutlineSortByAlpha } from "react-icons/md";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import FormModal from "@/components/FormModal";
import { User, Group, Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";

type UserList = User & { groups: Group[]; company: { name: string } | null };


const columns = [
  { header: "User Info", accessor: "firstName" },
  { header: "Email", accessor: "email", className: "hidden md:table-cell" },
  { header: "Role", accessor: "role", className: "hidden md:table-cell" },
  { header: "Groups", accessor: "groups", className: "hidden md:table-cell" },
  { header: "Company", accessor: "company", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "action" },
];

const renderRow = (item: UserList) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-gray-50 odd:bg-white hover:bg-gray-100 transition-colors">
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-row gap-2 items-center justify-center">
        <h3 className="font-semibold text-sm">{item.firstName}</h3>
        <h3 className="font-light text-sm">{item.lastName}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell text-xs">{item.email}</td>
    <td className="hidden md:table-cell text-xs">{item.role}</td>
    <td className="hidden md:table-cell text-xs">{item.groups.map(g => g.name).join(", ")}</td>
    <td className="hidden md:table-cell text-xs">{item.company?.name}</td>
    <td className="hidden md:table-cell text-xs">{item.phone}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/it/${item.id}`}>
        <FormModal table="it" type="update" data={item} />
        </Link>
        <FormModal table="it" type="delete" id={item.id} />
      </div>
    </td>
  </tr>
);

const ItListPage = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  // Build the combined Prisma where query
  const query: Prisma.UserWhereInput = {
    role: "IT Staff", // filter by role
  };

  if (queryParams.groupId) {
    query.groups = {
      some: {
        id: queryParams.groupId,
      },
    };
  }

  // Fetch data and count in a transaction
  const [data, count] = await prisma.$transaction([
    prisma.user.findMany({
      where: query,
      include: {
        groups: true,
        company: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.user.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden text-lg font-semibold md:block">IT Personnel</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FormModal table="it" type="create" />
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
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default ItListPage;
