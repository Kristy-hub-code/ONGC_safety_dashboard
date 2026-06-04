// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   FaUserShield,
//   FaUsersCog,
//   FaBuilding,
// } from "react-icons/fa";

// const LandingPage = () => {

//   const navigate = useNavigate();

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const roles = [
//     {
//       title: "USER",
//       icon: <FaUserShield size={40} />,
//       description:
//         "Employee Safety Monitoring & Environment Reporting System",
//       path: "/login/user",
//     },
//     {
//       title: "ADMIN",
//       icon: <FaUsersCog size={40} />,
//       description:
//         "Industrial Workforce Monitoring & Alert Management System",
//       path: "/login/admin",
//     },
//     {
//       title: "ADMINISTRATION",
//       icon: <FaBuilding size={40} />,
//       description:
//         "ONGC Centralized Industrial Safety Command Center",
//       path: "/login/administration",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white">

//       {/* Navbar */}
//       <div className="sticky top-0 z-50 bg-red-700/90 border-b border-red-900 px-8 py-4 flex justify-between items-center backdrop-blur-lg">

//         <div className="flex items-center gap-4">
//           <img
//             src="/ongc-logo-01.png"
//             alt="ONGC Logo"
//             className="w-12 h-12 rounded-lg bg-white p-1"
//           />

//           <div>
//             <h1 className="text-xl font-bold">
//               ONGC
//             </h1>

//             <p className="text-[11px] text-red-100">
//               Oil & Natural Gas Corporation
//             </p>
//           </div>
//         </div>

//         <div className="hidden md:flex gap-6 text-sm">

//           <button onClick={() => scrollToSection("monitoring")}>
//             Monitoring
//           </button>

//           <button onClick={() => scrollToSection("safety")}>
//             Safety
//           </button>

//           <button onClick={() => scrollToSection("analytics")}>
//             Analytics
//           </button>

//           <button onClick={() => scrollToSection("ai")}>
//             AI Detection
//           </button>

//         </div>

//       </div>

//       {/* Hero */}
      
//       <div className="flex flex-col items-center px-6 py-16">

//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-6xl font-extrabold text-center"
//         >
//           AI POWERED
//           <span className="text-red-500">
//             {" "}INDUSTRIAL SAFETY
//           </span>
//           <br />
//           MONITORING SYSTEM
//         </motion.h1>

//         <p className="text-gray-300 text-center max-w-3xl mt-6">
//           Advanced Industrial Surveillance, Real-Time Risk Detection,
//           PPE Monitoring, Worker Safety Analytics and Emergency Alert
//           System for ONGC industrial environments.
//         </p>

//         {/* Role Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

//           {roles.map((role, index) => (

//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.04 }}
//               className="bg-white/10 border border-red-900 rounded-3xl p-6 w-[300px]"
//             >

//               <div className="text-red-500 mb-5">
//                 {role.icon}
//               </div>

//               <h2 className="text-xl font-bold mb-4">
//                 {role.title}
//               </h2>

//               <p className="text-sm text-gray-300 mb-6">
//                 {role.description}
//               </p>

//               <button
//                 onClick={() => navigate(role.path)}
//                 className="bg-red-700 hover:bg-red-800 w-full py-3 rounded-2xl"
//               >
//                 ACCESS DASHBOARD
//               </button>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//       {/* Monitoring */}
//       <section id="monitoring" className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
//           Real-Time Monitoring
//         </h2>
//       </section>

//       {/* Safety */}
//       <section id="safety" className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
//           Safety Management
//         </h2>
//       </section>

//       {/* Analytics */}
//       <section id="analytics" className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
//           Industrial Analytics
//         </h2>
//       </section>

//       {/* AI */}
//       <section id="ai" className="max-w-6xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
//           AI Detection Modules
//         </h2>
//       </section>

//     </div>
//   );
// };

// export default LandingPage;
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaUsersCog,
  FaBuilding,
  FaHardHat,
  FaClipboardList,
  FaExclamationTriangle,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();

  const portals = [
    {
      title: "EMPLOYEE PORTAL",
      icon: <FaUserShield size={40} />,
      description:
        "Access tasks, reports, shift schedules and safety information.",
      path: "/login/user",
    },
    {
      title: "ADMIN PORTAL",
      icon: <FaUsersCog size={40} />,
      description:
        "Monitor workers, review reports and manage industrial operations.",
      path: "/login/admin",
    },
    {
      title: "ADMINISTRATION",
      icon: <FaBuilding size={40} />,
      description:
        "Project planning, shift allocation and workforce management.",
      path: "/login/administration",
    },
  ];

  const modules = [
    {
      title: "Helmet Detection",
      icon: <FaHardHat />,
    },
    {
      title: "Task Management",
      icon: <FaClipboardList />,
    },
    {
      title: "Incident Reporting",
      icon: <FaExclamationTriangle />,
    },
    {
      title: "Safety Analytics",
      icon: <FaChartLine />,
    },
    {
      title: "PPE Compliance",
      icon: <FaShieldAlt />,
    },
    {
      title: "Shift Management",
      icon: <FaBuilding />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-red-700 border-b border-red-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/ongc-logo-01.png"
              alt="ONGC Logo"
              className="w-12 h-12 bg-white rounded-lg p-1"
            />

            <div>
              <h1 className="font-bold text-xl">
                ONGC AI SAFETY PLATFORM
              </h1>

              <p className="text-sm text-gray-400">
                Oil & Natural Gas Corporation
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
<div className="text-center py-16">

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      text-4xl md:text-6xl
      font-bold
      tracking-wide
      text-white
    "
  >
    ONGC AI INDUSTRIAL
    <br />
    SAFETY PLATFORM
  </motion.h1>

<motion.p
  animate={{
    backgroundPosition: [
      "0% 50%",
      "100% 50%",
      "0% 50%",
    ],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear",
  }}
  style={{
    backgroundSize: "200% 200%",
  }}
  className="
    mt-8
    text-lg md:text-xl
    max-w-4xl
    mx-auto
    text-center
    font-medium
    leading-relaxed
    bg-gradient-to-r
    from-red-500
    via-yellow-300
    to-white
    bg-clip-text
    text-transparent
  "
>
  Real-Time Workforce Monitoring, Risk Detection,
  Task Management and Industrial Safety Analytics
  for safer and smarter operations.
</motion.p>

<motion.div
  animate={{
    scaleX: [0.7, 1, 0.7],
    opacity: [0.4, 1, 0.4],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    w-40
    h-1
    bg-red-600
    mx-auto
    mt-6
    rounded-full
    shadow-[0_0_20px_rgba(220,38,38,0.8)]
  "
/>


</div>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
          LIVE INDUSTRIAL OVERVIEW
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["124", "Active Workers"],
            ["8", "Running Projects"],
            ["98%", "Safety Compliance"],
            ["2", "Open Incidents"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="bg-slate-900 border border-red-800 rounded-2xl p-6 text-center"
            >
              <h3 className="text-4xl font-bold text-red-500">
                {value}
              </h3>

              <p className="mt-2 text-gray-300">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portals */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
          ACCESS PORTALS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-900 border border-red-800 rounded-3xl p-8"
            >
              <div className="text-red-500 mb-5">
                {portal.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {portal.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {portal.description}
              </p>

              <button
                onClick={() => navigate(portal.path)}
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
              >
                LOGIN
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
          CORE MODULES
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="text-red-500 text-3xl mb-4">
                {module.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {module.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 ONGC AI Industrial Safety Platform
      </footer>
    </div>
  );
};

export default LandingPage;