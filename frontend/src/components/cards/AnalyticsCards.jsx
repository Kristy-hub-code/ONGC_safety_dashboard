const AnalyticsCards = () => {

  const cards = [
    {
      title: "Temperature",
      value: "48°C",
      color: "text-red-500",
    },

    {
      title: "Gas Leakage",
      value: "Detected",
      color: "text-yellow-400",
    },

    {
      title: "Workers Active",
      value: "124",
      color: "text-green-400",
    },

    {
      title: "Critical Alerts",
      value: "12",
      color: "text-red-600",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl"
        >

          <h2 className="text-gray-400 mb-4">
            {card.title}
          </h2>

          <h1 className={`text-4xl font-bold ${card.color}`}>
            {card.value}
          </h1>

        </div>

      ))}

    </div>

  );
};

export default AnalyticsCards;