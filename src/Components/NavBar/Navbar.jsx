import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

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
    <NavLink
      to="/registration"
      className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 rounded-lg px-3 duration-300 transform hover:scale-105"
    >
      Sign Up
    </NavLink>
  </>
);

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const navigation = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => navigation("/login"))
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg animate-slide-in"
            >
              {links}
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
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end px-4 flex items-center gap-3">
          {user ? (
            <div
              className="flex items-center gap-4 tooltip tooltip-bottom"
              data-tip={`Welcome ${user.displayName || user.email}!`}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-yellow-300 transition-all duration-300"
                />
              ) : (
                <CgProfile className="w-10 h-10 text-white hover:text-yellow-300 transition-all duration-300" />
              )}
              <button
                onClick={handleLogout}
                className="btn bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 transform transition-all duration-300"
              >
                Logout
              </button>
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
