import DashboardLayout from "../../components/common/DashboardLayout";
import { useState } from "react";
import axios from "axios";

const ShiftManagement = () => {

  const [formData, setFormData] = useState({
    employee_id: "",
    department: "",
    shift_date: "",
    shift_type: "",
    project_name: "",
    location: "",
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
        "http://localhost:5000/api/shifts/assign",
        formData
      );

      alert("Shift Assigned Successfully");

      setFormData({
        employee_id: "",
        department: "",
        shift_date: "",
        shift_type: "",
        project_name: "",
        location: "",
      });

    } catch (error) {

      console.error(error);

      alert("Assignment Failed");

    }

  };

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold text-red-500 mb-8">
        SHIFT MANAGEMENT
      </h1>

      <div className="bg-slate-900 p-8 rounded-2xl">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Employee ID */}

          <input
            type="text"
            name="employee_id"
            placeholder="Employee ID"
            value={formData.employee_id}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          />

          {/* Department */}

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          />

          {/* Shift Date */}

          <input
            type="date"
            name="shift_date"
            value={formData.shift_date}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          />

          {/* Shift Type */}

          <select
            name="shift_type"
            value={formData.shift_type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          >
            <option value="">
              Select Shift
            </option>

            <option value="Morning">
              Morning
            </option>

            <option value="Evening">
              Evening
            </option>

            <option value="Night">
              Night
            </option>

          </select>

          {/* Project Name */}

          <input
            type="text"
            name="project_name"
            placeholder="Project Name"
            value={formData.project_name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          />

          {/* Location */}

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
          >
            Assign Shift
          </button>

        </form>

      </div>

    </DashboardLayout>

  );
};

export default ShiftManagement;