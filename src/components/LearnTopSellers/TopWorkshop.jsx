import React from "react";
import abqandeel from '../../assets/abqandeel.jpeg'
const TopWorkshop=()=>{
  return (
    <div className="lg:w-56 lg:h-88 border border-gray-300 rounded-lg shadow-md lg:p-4 xs:p-4 xs: flex flex-col items-center text-center">
    {/* Artist*/}
    <h3 className="text-sm font-montserrat-regular text-yankees-blue text-center mb-2 mt-1">
    Abstract Expressionism 
    </h3>
    {/* Location */}
    <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">
      Abdullah Qandeel</p>

    {/* Image */}
    <img 
      className="w-full h-32 object-cover" 
      src={abqandeel}
      alt="Card" />
   
      <div className="flex flex-row w-full items-start text-yankees-blue justify-between text-left text-xs">
      <span className="mr-12">No. of Registered Participants: 250</span>
      <span >Upcoming Workshop: January 15-17, 2025</span>
      </div>

    {/* Follow Button */}
    <button className="lg:mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake hover:bg-red-600 transition-colors xs:mt-2">
      Register
    </button>
  </div>
  );
};

export default TopWorkshop;