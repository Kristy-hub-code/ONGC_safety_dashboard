const MonitoringSystem = () => {

  const items = [
    "Live Tracking",
    "Live Alerts",
    "Notifications",
    "Analytics",
    "Activity Logs",
  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mb-10">

      <h1 className="text-3xl font-bold text-red-500 mb-8">
        REAL-TIME MONITORING SYSTEM
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 p-5 rounded-2xl text-center hover:bg-red-700 transition"
          >
            {item}
          </div>

        ))}

      </div>

    </div>

  );
};

export default MonitoringSystem;