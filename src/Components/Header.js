import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 z-50 bg-gradient-to-b from-black">
      
      {/* Logo */}
      <img
        className="w-36 cursor-pointer"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />

      {/* Right side */}
      {user && (
        <div className="flex items-center gap-4">
          
          {/* Username */}
          <span className="text-white font-medium hidden md:block">
            {user.name}
          </span>

          {/* Profile Icon */}
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg"
            alt="profile"
          />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 text-white rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;