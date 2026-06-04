import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const LoginPage = () => {

  const navigate = useNavigate();
  const { role } = useParams();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);

useEffect(() => {
  const savedId = localStorage.getItem(
    "rememberEmployeeId"
  );

  if (savedId) {
    setEmployeeId(savedId);
    setRememberMe(true);
  }
}, []);

  const handleLogin = async () => {
  try {

    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        employee_id: employeeId,
        password: password,
      }
    );

    console.log(response.data);

    const user = response.data.user;

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    if (user.role === "user") {
      navigate("/user-dashboard");
    }

    if (user.role === "admin") {
      navigate("/admin-dashboard");
    }

    if (user.role === "administration") {
      navigate("/administration-dashboard");
    }

  } catch (error) {

    console.log(error);

    alert("Invalid Employee ID or Password");

  }
};

  return (

    <div className="min-h-screen bg-black flex justify-center items-center">

      <div className="bg-slate-900 p-8 rounded-3xl w-[450px] border border-red-800">

        <div className="text-center mb-8">

          <img
            src="/ongc-logo-01.png"
            alt="ONGC"
            className="w-16 mx-auto mb-4"
          />

          <h1 className="text-3xl font-bold text-red-500">
            ONGC LOGIN
          </h1>

          <p className="text-gray-400 mt-2">
            {role?.toUpperCase()} PORTAL
          </p>

        </div>

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) =>
            setEmployeeId(e.target.value)
          }
          className="w-full p-3 rounded-xl mb-4 bg-slate-800 text-white"
        />

        <input
          
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-3 rounded-xl mb-6 bg-slate-800 text-white"
        />
        <div className="flex justify-between items-center mb-6">

  <label className="flex items-center gap-2 text-sm text-gray-300">

    <input
      type="checkbox"
      checked={rememberMe}
      onChange={() =>
        setRememberMe(!rememberMe)
      }
    />

    Remember Me

  </label>

  <label className="flex items-center gap-2 text-sm text-gray-300">

    <input
      type="checkbox"
      checked={showPassword}
      onChange={() =>
        setShowPassword(!showPassword)
      }
    />

    Show Password

  </label>

</div>

        <button
          onClick={handleLogin}
          className="w-full bg-red-700 hover:bg-red-800 py-3 rounded-xl"
        >
          LOGIN
        </button>

      </div>

    </div>

  );
};

export default LoginPage;