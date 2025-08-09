import Image from "next/image";
import Link from "next/link";
import { MdHome, MdPeople, MdEmojiPeople, MdManageAccounts, MdOutlineHomeWork, MdOutlineGroups, MdOutlineAddTask, MdEvent, MdOutlineNotificationsActive  } from "react-icons/md";
import { IoTicketOutline, IoTicket  } from "react-icons/io5";
import { GoProjectTemplate } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings, IoIosLogOut  } from "react-icons/io";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <MdHome size={20}/>,
        label: "Home",
        href: "/",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <MdManageAccounts size={20}/>,
        label: "IT Personnel",
        href: "/list/it",
        visible: ["admin", "it"],
      },
      {
        icon: <MdEmojiPeople size={20}/>,
        label: "Staff",
        href: "/list/staff",
        visible: ["admin", "it"],
      },
      {
        icon: <MdPeople size={20}/>,
        label: "HOC's",
        href: "/list/hoc",
        visible: ["admin", "it"],
      },
      {
        icon: <MdOutlineHomeWork size={20}/>,
        label: "Companies",
        href: "/list/companies",
        visible: ["admin"],
      },
      {
        icon: <MdOutlineGroups size={20}/>,
        label: "Groups",
        href: "/list/groups",
        visible: ["admin", "it"],
      },
      {
        icon: <IoTicketOutline size={20}/>,
        label: "Tickets",
        href: "/list/tickets",
        visible: ["admin", "it"],
      },
      {
        icon: <GoProjectTemplate size={20}/>,
        label: "Projects",
        href: "/list/projects",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <MdOutlineAddTask size={20}/>,
        label: "Tasks",
        href: "/list/tasks",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <IoTicket size={20}/>,
        label: "Resolved Tickets",
        href: "/list/resolved-tickets",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <MdEvent size={20}/>,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <TiMessages size={20}/>,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <MdOutlineNotificationsActive size={20}/>,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "it", "staff", "hoc"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile size={20}/>,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <IoMdSettings size={20}/>,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "it", "staff", "hoc"],
      },
      {
        icon: <IoIosLogOut size={20}/>,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "it", "staff", "hoc"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="text-sm">
      {menuItems.map(i=>(
        <div className="flex flex-col gap-2 p-4" key={i.title}>
          <span className="hidden lg:block text-[#AF0404] text-lg my-4">
            {i.title}
          </span>      
          {i.items.map(item => (
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 py-2 text-white font-light">
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))};
        </div>
      ))}
    </div>
  )
};

export default Menu;