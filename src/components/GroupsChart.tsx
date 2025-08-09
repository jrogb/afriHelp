"use client"
import Image from "next/image";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Accounts',
        Open: 4,
        Closed: 24,
    },
    {
        name: 'Opperations',
        Open: 3,
        Closed: 13,
    },
    {
        name: 'Stores',
        Open: 2,
        Closed: 9,
    },
    {
        name: 'Workshops',
        Open: 2,
        Closed: 3,
    },
    {
        name: 'Administration',
        Open: 18,
        Closed: 48,
    },
    {
        name: 'Other',
        Open: 23,
        Closed: 38,
    },
];

const GroupsChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full relative">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-semibold">Group Tickets</h1>
                <Image src="/moreDark.png" width={20} height={20} alt="" />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false}/>
                    <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}}/>
                    <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}/>
                    <Bar legendType="circle" dataKey="Closed" fill="#414141" />
                    <Bar legendType="circle" dataKey="Open" fill="#AF0404" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GroupsChart;