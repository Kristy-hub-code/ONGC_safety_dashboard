import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaBell,
  FaUsers,
  FaShieldAlt,
  FaExclamationTriangle,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-4xl font-bold text-red-500 mb-14">
        ONGC
      </h1>

      <ul className="space-y-6 text-lg">

        <Link to="/user-dashboard">
          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <FaChartLine />
            Dashboard
          </li>
        </Link>

        <Link to="/my-tasks">
          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <FaClipboardList />
            My Tasks
          </li>
        </Link>

        <Link to="/submit-report">
          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <FaBell />
            Submit Report
          </li>
        </Link>

        <Link to="/incident-report">
          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <FaExclamationTriangle />
            Incident Report
          </li>
        </Link>

        <Link to="/safety-status">
          <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
            <FaShieldAlt />
            Safety Status
          </li>
        </Link>

        <li className="flex items-center gap-3 text-gray-500 cursor-not-allowed">
          <FaUsers />
          Workers
        </li>

        <li className="flex items-center gap-3 text-gray-500 cursor-not-allowed">
          <FaShieldAlt />
          PPE Monitoring
        </li>

        <li
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 cursor-pointer pt-8"
        >
          <FaSignOutAlt />
          Logout
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;
