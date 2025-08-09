

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-afriredlight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Email Archives</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">10-08-2025</span>
                </div>
                <p className="text-sm text-gray-200 mt-2">Email archive run for all branches.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-afrigraylight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Email Archives</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">10-08-2025</span>
                </div>
                <p className="text-sm text-gray-200 mt-2">Email archive run for all branches.</p>
            </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            <div className="bg-afriredlight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Email Archives</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">10-08-2025</span>
                </div>
                <p className="text-sm text-gray-200 mt-2">Email archive run for all branches.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements