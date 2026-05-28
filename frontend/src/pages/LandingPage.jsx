import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaUserShield,
  FaUsersCog,
  FaBuilding,
} from "react-icons/fa";

const LandingPage = () => {

  const navigate = useNavigate();

  const roles = [
    {
      title: "USER",
      icon: <FaUserShield size={40} />,
      description:
        "Employee Safety Monitoring & Environment Reporting System",
      path: "/login/user",
    },

    {
      title: "ADMIN",
      icon: <FaUsersCog size={40} />,
      description:
        "Industrial Workforce Monitoring & Alert Management System",
      path: "/login/admin",
    },

    {
      title: "ADMINISTRATION",
      icon: <FaBuilding size={40} />,
      description:
        "ONGC Centralized Industrial Safety Command Center",
      path: "/login/administration",
    },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute w-[400px] h-[400px] bg-red-700/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Navbar */}

      <div className="w-full bg-red-700/90 border-b border-red-900 px-8 py-4 flex justify-between items-center backdrop-blur-lg">

        {/* Left */}

        <div className="flex items-center gap-4">

          <img
            src="/ongc-logo-01.png"
            alt="ONGC Logo"
            className="w-12 h-12 rounded-lg bg-white p-1"
          />

          <div>

            <h1 className="text-xl font-bold tracking-wide">
              ONGC
            </h1>

            <p className="text-red-100 text-[11px]">
              Oil & Natural Gas Corporation
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="hidden md:flex gap-6 text-sm font-medium">

          <span className="hover:text-red-200 cursor-pointer transition">
            Monitoring
          </span>

          <span className="hover:text-red-200 cursor-pointer transition">
            Safety
          </span>

          <span className="hover:text-red-200 cursor-pointer transition">
            Analytics
          </span>

          <span className="hover:text-red-200 cursor-pointer transition">
            AI Detection
          </span>

        </div>

      </div>

      {/* Hero Section */}

      <div className="flex flex-col items-center justify-center px-6 py-16">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-center leading-tight"
        >

          AI POWERED
          <span className="text-red-500">
            {" "}INDUSTRIAL SAFETY
          </span>

          <br />

          MONITORING SYSTEM

        </motion.h1>

        <p className="text-gray-300 text-base md:text-lg mt-6 text-center max-w-3xl leading-relaxed">

          Advanced Industrial Surveillance, Real-Time Risk Detection,
          PPE Monitoring, Worker Safety Analytics & Emergency Alert
          System for ONGC Oil Refinery and Industrial Environments.

        </p>

        {/* Role Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {roles.map((role, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              className="bg-white/10 border border-red-900 backdrop-blur-xl rounded-3xl p-6 w-[300px] shadow-2xl"
            >

              <div className="text-red-500 mb-5">
                {role.icon}
              </div>

              <h2 className="text-xl font-bold mb-4">
                {role.title}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {role.description}
              </p>

              <button
                onClick={() => navigate(role.path)}
                className="bg-red-700 hover:bg-red-800 transition duration-300 w-full py-3 rounded-2xl font-semibold text-sm"
              >
                ACCESS DASHBOARD
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default LandingPage;