import DashboardLayout from "../../components/common/DashboardLayout";

const UserDashboard = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold text-red-500">
        USER SAFETY DASHBOARD
      </h1>

      <div className="mt-6 bg-slate-900 p-6 rounded-2xl">

        <h2 className="text-2xl font-semibold text-white">
          Welcome {user?.full_name}
        </h2>

        <p className="text-gray-400 mt-2">
          Employee ID: {user?.employee_id}
        </p>

        <p className="text-gray-400">
          Department: {user?.department}
        </p>

      </div>

    </DashboardLayout>

  );
};

export default UserDashboard;