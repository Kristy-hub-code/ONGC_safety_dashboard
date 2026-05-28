const Navbar = () => {

  return (

    <div className="bg-red-700 border-b border-red-900 px-8 py-4 flex justify-between items-center shadow-lg">

      {/* Left Side */}

      <div className="flex items-center gap-4">

        <img
          src="/ongc-logo-01.png"
          alt="ONGC Logo"
          className="w-12 h-12 rounded-lg bg-white p-1"
        />

        <div>

          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            ONGC AI SAFETY SYSTEM
          </h1>

          <p className="text-red-100 text-xs md:text-sm">
            Oil & Natural Gas Corporation Limited
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="hidden md:flex gap-8 items-center text-lg font-medium">

        <span className="hover:text-red-200 cursor-pointer transition">
          Monitoring
        </span>

        <span className="hover:text-red-200 cursor-pointer transition">
          Safety
        </span>

        <span className="hover:text-red-200 cursor-pointer transition">
          Analytics
        </span>

        <span className="hover:text-red-200 cursor-pointer transition">
          AI Detection
        </span>

        <button className="bg-black hover:bg-gray-900 px-5 py-2 rounded-xl transition">
          Logout
        </button>

      </div>

    </div>

  );
};

export default Navbar;