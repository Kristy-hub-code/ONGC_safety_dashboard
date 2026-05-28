import {
  FaChartLine,
  FaBell,
  FaUsers,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const Sidebar = () => {

  return (

    <div className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-4xl font-bold text-red-500 mb-14">
        ONGC
      </h1>

      <ul className="space-y-8 text-lg">

        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
          <FaChartLine />
          Dashboard
        </li>

        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
          <FaBell />
          Alerts
        </li>

        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
          <FaUsers />
          Workers
        </li>

        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
          <FaShieldAlt />
          PPE Monitoring
        </li>

        <li className="flex items-center gap-3 hover:text-red-400 cursor-pointer">
          <FaExclamationTriangle />
          Emergency
        </li>

      </ul>

    </div>

  );
};

export default Sidebar;