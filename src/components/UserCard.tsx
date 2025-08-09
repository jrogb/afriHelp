import Image from 'next/image'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-afrigray even:bg-afrired p-4 flex-1 min-w-[130px]">
      <div className='flex justify-between items-center'>
        <span className='text-[10px] px-2 py-2 rounded-full bg-white text-green-600'>14/04/1990</span>
        <Image src="/more.png" alt="MoreButton" width={20} height={20}/>
      </div>
      <h1 className="text-2xl font-semibold my-4 text-white">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-white">{type}</h2>
    </div>
  )
}

export default UserCard