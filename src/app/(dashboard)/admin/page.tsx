import UserCard from "@/components/UserCard";
import TicketChart from "@/components/TicketChart";
import CompaniesChart from "@/components/CompaniesChart";
import GroupsChart from "@/components/GroupsChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Admin Page Left Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="staff" />
          <UserCard type="it" />
          <UserCard type="hoc" />
          <UserCard type="admin" />
        </div>
        {/* Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Open tickets chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <TicketChart />
          </div>
          {/* Tickets by Company */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <CompaniesChart />            
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <GroupsChart />
        </div>
      </div>
      {/* Admin Page Right Content */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;