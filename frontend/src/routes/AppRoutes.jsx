import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

import UserDashboard from "../pages/user/UserDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdministrationDashboard from "../pages/administration/AdministrationDashboard";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login/:role" element={<LoginPage />} />

        <Route path="/user-dashboard" element={<UserDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route
          path="/administration-dashboard"
          element={<AdministrationDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );
};

export default AppRoutes;