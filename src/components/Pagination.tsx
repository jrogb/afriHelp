

const Pagination = () => {
  return (
    <div className='flex justify-between items-center mt-4 p-4'>
        <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        <div className="flex flex-row gap-2 items-center text-sm">
            <button className="px-2  rounded-sm bg-afrigray text-gray-300">1</button>
            <button className="px-2  rounded-sm text-gray-300">2</button>
            <button className="px-2  rounded-sm text-gray-300">3</button>
            ...
            <button className="px-2  rounded-sm text-gray-300">10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>

    </div>
  )
}

export default Pagination