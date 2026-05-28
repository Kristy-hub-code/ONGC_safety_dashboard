import DashboardLayout from "../../components/common/DashboardLayout";

import AnalyticsCards from "../../components/cards/AnalyticsCards";
import MonitoringSystem from "../../components/cards/MonitoringSystem";
import AlertEngine from "../../components/cards/AlertEngine";

const AdministrationDashboard = () => {

  return (

    <DashboardLayout>

      <h1 className="text-5xl font-bold mb-10 text-red-500">
        ADMINISTRATION CONTROL CENTER
      </h1>

      <AnalyticsCards />

      <MonitoringSystem />

      <AlertEngine />

    </DashboardLayout>

  );
};

export default AdministrationDashboard;