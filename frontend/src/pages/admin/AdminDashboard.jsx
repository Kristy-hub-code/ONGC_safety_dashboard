import DashboardLayout from "../../components/common/DashboardLayout";
import { Link } from "react-router-dom";

const AdminDashboard = () => {

  return (

    <DashboardLayout>

      <h1 className="text-5xl font-bold mb-10 text-red-500">
        ADMIN MONITORING DASHBOARD
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link to="/task-review">
          <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 hover:border-red-500 transition">

            <h2 className="text-2xl font-bold text-white">
              Task Review
            </h2>

            <p className="text-gray-400 mt-2">
              Approve or reject completed tasks submitted by employees.
            </p>

          </div>
        </Link>

        <Link to="/reports-review">
          <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 hover:border-red-500 transition">

            <h2 className="text-2xl font-bold text-white">
              Reports
            </h2>

            <p className="text-gray-400 mt-2">
              View daily reports submitted by workers.
            </p>

          </div>
        </Link>

        <Link to="/worker-monitoring">
          <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 hover:border-red-500 transition">

            <h2 className="text-2xl font-bold text-white">
              Worker Monitoring
            </h2>

            <p className="text-gray-400 mt-2">
              Monitor worker activity and safety status.
            </p>

          </div>
        </Link>

        <Link to="/safety-alerts">
          <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 hover:border-red-500 transition">

            <h2 className="text-2xl font-bold text-white">
              Safety Alerts
            </h2>

            <p className="text-gray-400 mt-2">
              Review incidents and emergency notifications.
            </p>

          </div>
        </Link>

        <Link to="/assigned-tasks">
          <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 hover:border-red-500 transition">

            <h2 className="text-2xl font-bold text-white">
              Assigned Tasks
            </h2>

            <p className="text-gray-400 mt-2">
              View all tasks assigned to employees.
            </p>

          </div>
        </Link>

      </div>

    </DashboardLayout>

  );

};

export default AdminDashboard;