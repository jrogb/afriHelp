"use client";
import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  { name: 'Group A', value: 92, fill: '#AF0404' },
  { name: 'Group B', value: 8 , fill: '#414141' },
];

const PerformanceChart = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Performance</h1>
            <Image  src="/moreDark.png" alt="" width={16} height={16} />
        </div>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-3xl font-bold'>9.2</h1>
            <p className='text-xs text-gray-300'>out of 10 </p>
        </div>
    </div>
  )
}

export default PerformanceChart