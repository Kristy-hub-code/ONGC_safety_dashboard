import { useState } from "react";
import axios from "axios";
import DashboardLayout from "../../components/common/DashboardLayout";

const SubmitReport = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({
    task_id: "",
    report_text: "",
    completion_percent: "",
    remarks: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/reports",
        {
          employee_id: user.employee_id,
          ...formData,
        }
      );

      alert("Report Submitted Successfully");

      setFormData({
        task_id: "",
        report_text: "",
        completion_percent: "",
        remarks: "",
      });

    } catch (error) {

      console.error(error);

      alert("Report Submission Failed");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold text-red-500 mb-8">
        SUBMIT REPORT
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-red-900 rounded-2xl p-8"
      >

        <input
          type="number"
          name="task_id"
          placeholder="Task ID"
          value={formData.task_id}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white"
        />

        <textarea
          rows="5"
          name="report_text"
          placeholder="Work Report"
          value={formData.report_text}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white"
        />

        <input
          type="number"
          name="completion_percent"
          placeholder="Completion Percentage"
          value={formData.completion_percent}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white"
        />

        <textarea
          rows="4"
          name="remarks"
          placeholder="Additional Remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-slate-800 text-white"
        />

        <button
          type="submit"
          className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg"
        >
          Submit Report
        </button>

      </form>

    </DashboardLayout>

  );
};

export default SubmitReport;