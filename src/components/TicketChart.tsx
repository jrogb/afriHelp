"use client";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { IoTicketOutline } from "react-icons/io5";

const data = [
  {
    name: 'Total',
    count: 47,
    fill: 'white',
  },
  {
    name: 'Open',
    count: 12,
    fill: "#AF0404",
  },
  {
    name: 'Closed',
    count: 35,
    fill: "#414141",
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


const TicketChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-semibold'>Tickets</h1>
        <Image src="/moreDark.png" alt="MoreButton" width={20} height={20} className='cursor-pointer' />
      </div>
      {/* Chart */}
      <div className='w-full h-[75%] relative'>
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <IoTicketOutline size={80} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      {/* Legend */}
      <div className="flex justify-center gap-16">
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-afrired rounded-full' />
          <h1 className='font-bold text-xs text-gray-500'>1,234</h1>
          <h2>Open</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-afrigray rounded-full' />
          <h1 className='font-bold text-xs text-gray-500'>1,234</h1>
          <h2>Closed</h2>
        </div>
      </div>
    </div>
  )
}

export default TicketChart;