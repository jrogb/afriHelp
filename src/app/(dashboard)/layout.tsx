import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex">
      { /* Left Sidebar */ }
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-sky">
        <Link href="/" className="flex items-center justify-center gap-2 p-2 lg:justify-start mt-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32}/>
          <span className="hidden lg:block text-white">AfriHelp</span>  
        </Link>
        <Menu />
      </div>
      { /* Main Content */ }
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-skylight overflow-hidden">
        <Navbar/>
        {children}
      </div>
    </div>
  );
};