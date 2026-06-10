import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-24 py-8 bg-[#f5f5f5]">
      
      {/* Left Side */}
      <h1 className="text-5xl font-bold text-teal-600">
        SkyPlan
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-10">
        <h3 className="text-xl cursor-pointer">Help</h3>
        <h3 className="text-xl cursor-pointer">My Trips</h3>

        <button className="border-2 border-black px-8 py-3 rounded-lg text-lg font-medium">
          Sign Up
        </button>

        <button className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium">
          Log In
        </button>
      </div>

    </nav>
  );
};

export default Navbar;

