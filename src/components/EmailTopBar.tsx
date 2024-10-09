import React from "react";
import { useAuth } from "@/context/authContext"; // Import useAuth to get user details


const EmailNavBar: React.FC = () => {
  const { user } = useAuth();
  const userInitial = user?.email?.charAt(0).toUpperCase() || "?";

  const handleCompose = () => {
    console.log('test')
  }
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search mail"
          className="border rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-8 px-10">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
          onClick={handleCompose}
        >
          Compose Email
        </button>

        <div className="relative group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold text-lg cursor-pointer">
            {userInitial}
          </div>

          <div className="absolute top-12 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
            {user?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailNavBar;
