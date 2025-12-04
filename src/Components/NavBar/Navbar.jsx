import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { AuthContext } from "./../../Provider/AuthProvider";

const links = (
  <>
    <NavLink
      to="/"
      className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
    >
      Home
    </NavLink>

    <NavLink
      to="/allToys"
      className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
    >
      All Products
    </NavLink>

    <NavLink
      to="/about"
      className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
    >
      About
    </NavLink>

    <NavLink
      to="/contact"
      className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
    >
      Contact
    </NavLink>
  </>
);

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => navigate("/login"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-11/12 mx-auto sticky top-0 z-50 shadow-xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-3xl">
      <div className="navbar max-w-11/12 mx-auto py-3">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg animate-slide-in"
            >
              {links}
              {user && (
                <NavLink
                  to="/dashboard"
                  className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
                >
                  Dashboard
                </NavLink>
              )}
            </ul>
          </div>

          <NavLink
            className="btn btn-ghost text-2xl font-bold text-white hover:text-yellow-300"
            to="/"
          >
            Toy-Story
          </NavLink>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-white font-semibold">
            {links}
            {user && (
              <NavLink
                to="/dashboard"
                className="hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-400 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
              >
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end px-4 flex items-center gap-6">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="flex items-center gap-3 cursor-pointer"
              >
                <img
                  src={user.photoURL}
                  alt="profile"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-lg hover:scale-110 transition-all duration-300"
                />
                <FaChevronDown className="text-white" />
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-xl shadow-xl w-48 mt-3 p-2 animate-fade-in"
              >
                <li>
                  <p className="font-semibold text-gray-700 px-3 py-2">
                    {user.displayName || "User"}
                  </p>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/profile")}
                    className="hover:bg-purple-100 rounded-lg w-full text-left px-3 py-2"
                  >
                    Profile
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="hover:bg-blue-100 rounded-lg w-full text-left px-3 py-2"
                  >
                    Dashboard
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:bg-red-100 rounded-lg w-full text-left px-3 py-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-gradient-to-r from-green-400 to-teal-500 text-white hover:scale-105 transform transition-all duration-300"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
