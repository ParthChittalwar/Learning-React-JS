import React from "react";
import Navbar from "./Navbar";
import Sec1Center from "./Sec1Center";
import Sec1BottomNav from "./Sec1BottomNav";
const Section1 = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <Sec1Center />
      <Sec1BottomNav /> 
    </div>
  );
};

export default Section1;