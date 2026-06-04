import { useState } from "react";
import DashboardLayout from "../../components/common/DashboardLayout";

const IncidentReport = () => {

  const [description, setDescription] = useState("");

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold text-red-500 mb-8">
        INCIDENT REPORTING
      </h1>

      <div className="bg-slate-900 border border-red-900 rounded-2xl p-8">

        <select
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        >

          <option>Gas Leak</option>

          <option>Equipment Failure</option>

          <option>Near Miss</option>

          <option>Fire Hazard</option>

          <option>PPE Violation</option>

        </select>

        <select
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
        >

          <option>Low</option>

          <option>Medium</option>

          <option>High</option>

          <option>Critical</option>

        </select>

        <textarea
          rows="6"
          placeholder="Incident Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full p-3 rounded-lg bg-slate-800"
        />

        <button
          className="mt-6 bg-red-600 px-6 py-3 rounded-lg"
        >
          Report Incident
        </button>

      </div>

    </DashboardLayout>

  );
};

export default IncidentReport;