import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-300 flex justify-center items-center p-6">
      <div className="backdrop-blur-xl bg-white/30 shadow-xl rounded-3xl p-10 w-full max-w-lg border border-white/50 animate-fadeIn">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/KrVrGQq/default-avatar.png"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl animate-pop"
          />

          <h2 className="text-3xl font-bold mt-4 text-gray-800 drop-shadow-md">
            {user?.displayName || "User"}
          </h2>

          <p className="text-lg text-gray-700 mt-1">{user?.email}</p>
        </div>

        {/* Information Box */}
        <div className="mt-8 space-y-4">
          <div className="bg-white/40 p-4 rounded-xl shadow-md border border-white/50">
            <h3 className="text-xl font-semibold text-gray-800">
              Account Information
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Username:</span>{" "}
              {user?.displayName || "Not set"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            Edit Profile
          </button>

          <button className="px-5 py-3 bg-white/40 backdrop-blur-lg text-gray-800 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            Change Photo
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out;
          }

          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-pop {
            animation: pop 0.6s ease-out;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
