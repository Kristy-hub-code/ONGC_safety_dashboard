const AlertEngine = () => {

  const alerts = [
    "AI Analysis",
    "Rule Engine",
    "Risk Evaluation",
    "Threat Assessment",
    "Severity Detection",
  ];

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">

      <h1 className="text-3xl font-bold text-red-500 mb-8">
        ALERT ANALYSIS ENGINE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

        {alerts.map((alert, index) => (

          <div
            key={index}
            className="bg-red-900/40 border border-red-700 p-5 rounded-2xl text-center"
          >
            {alert}
          </div>

        ))}

      </div>

    </div>

  );
};

export default AlertEngine;