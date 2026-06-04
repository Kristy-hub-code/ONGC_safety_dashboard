import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

import UserDashboard from "../pages/user/UserDashboard";
import MyTasks from "../pages/user/MyTasks";
import SubmitReport from "../pages/user/SubmitReport";
import IncidentReport from "../pages/user/IncidentReport";

import AdminDashboard from "../pages/admin/AdminDashboard";

import AdministrationDashboard from "../pages/administration/AdministrationDashboard";

import SafetyStatus from "../pages/user/SafetyStatus";
 
import ShiftManagement from "../pages/administration/ShiftManagement";
// import ShiftManagement from "../pages/administration/ShiftManagement";
// import ShiftManagement from "../pages/administration/ShiftManagement";

import TaskReview from "../pages/admin/TaskReview";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Login */}
        <Route
          path="/login/:role"
          element={<LoginPage />}
        />

        {/* User Routes */}
        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/my-tasks"
          element={<MyTasks />}
        />

        <Route
          path="/submit-report"
          element={<SubmitReport />}
        />

        <Route
          path="/incident-report"
          element={<IncidentReport />}
        />

        {/* Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Administration Routes */}
        <Route
          path="/administration-dashboard"
          element={<AdministrationDashboard />}
        />

        <Route
  path="/safety-status"
  element={<SafetyStatus />}
/>

<Route
  path="/shift-management"
  element={<ShiftManagement />}
/>


<Route
  path="/task-review"
  element={<TaskReview />}
/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;