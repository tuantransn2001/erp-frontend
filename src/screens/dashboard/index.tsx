import CardBarChart from "src/components/cards/cardBarChart";
// import CardLineChart from "src/components/cards/cardLineChart";

import HeaderStatus from "src/components/headers";
import CardPageVisits from "src/components/cards/cardPageVisits";
import CardSocialTraffic from "src/components/cards/cardSocialTraffic";
import AdminLayout from "src/layouts/admin";

const DashboardScreen = () => {
  return (
    <AdminLayout>
      <HeaderStatus />
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </AdminLayout>
  );
};
export default DashboardScreen;
