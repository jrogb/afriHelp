import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css"

const StaffPage = () => {
  return (
    <div className='p-4 flex  flex-1 gap-4 flex-col xl:flex-row'>
      {/* Staff Page Left Content */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-2xl font-semibold mb-4">Events</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Staff Page Right Content */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>


  )
}

export default StaffPage