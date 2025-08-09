"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Image from "next/image";

interface CompanyData {
  name: string;
  Open: number;
  Closed: number;
  img: string;
}

const data: CompanyData[] = [
  { name: "Africlan JHB", Open: 3, Closed: 6, img: "/AfriclanJHB.jpg" },
  { name: "Africlan ZM", Open: 1, Closed: 3, img: "/AfriclanZM.jpg" },
  { name: "Advance", Open: 5, Closed: 2, img: "/Advance.jpg" },
  { name: "Cancam", Open: 1, Closed: 7, img: "/Cancam.jpg" },
  { name: "Copperzone", Open: 6, Closed: 2, img: "/Copperzone.jpg" },
  { name: "Headland", Open: 0, Closed: 7, img: "/Headland.jpg" },
  { name: "Jumaras", Open: 0, Closed: 3, img: "/Jumaras.jpg" },
  { name: "Nexgistix", Open: 2, Closed: 4, img: "/Nexgistix.jpg" },
  { name: "Vectura", Open: 3, Closed: 4, img: "/Vectura.jpg" },
  { name: "Venditime", Open: 2, Closed: 6, img: "/Venditime.jpg" },
  { name: "Wavelengths", Open: 7, Closed: 12, img: "/Wavelengths.png" },
];


interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number; dataKey: string; payload: CompanyData }[];
  label?: string;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    const company = payload[0].payload;
    return (
      <div className="bg-white p-2 shadow rounded border">
        <Image src={company.img} alt={company.name} width={80} height={80} />
        <p className="text-[#AF0404]">Open: {company.Open}</p>
        <p className="text-[#414141]">Closed: {company.Closed}</p>
      </div>
    );
  }
  return null;
};

const CompaniesChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Company Tickets</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis
            dataKey="name"
            interval={0}
            height={70}
            angle={-45}
            textAnchor="end"
            fontSize={12}
            axisLine={false}
            tickLine={false}
          />
          <YAxis axisLine={false} tickLine={false}/>
          <Tooltip content={<CustomTooltip />} contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}}/>
          <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
          <Bar legendType="circle" dataKey="Closed" fill="#414141" />
          <Bar legendType="circle" dataKey="Open" fill="#AF0404" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompaniesChart;
