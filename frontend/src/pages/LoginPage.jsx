import { useNavigate, useParams } from "react-router-dom";

const LoginPage = () => {

  const { role } = useParams();

  const navigate = useNavigate();

  const handleLogin = () => {

    if(role === "user"){
      navigate("/user-dashboard");
    }

    else if(role === "admin"){
      navigate("/admin-dashboard");
    }

    else{
      navigate("/administration-dashboard");
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 w-96">

        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">
          {role.toUpperCase()} LOGIN
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full bg-slate-800 p-3 rounded-xl mb-5 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full bg-slate-800 p-3 rounded-xl mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl"
        >
          Login
        </button>

      </div>

    </div>
  );
};

export default LoginPage;