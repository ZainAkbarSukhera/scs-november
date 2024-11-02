import React from "react";

import p1 from '../../assets/abq_sm_1.PNG';
import p2 from '../../assets/shaker1.jpeg';
import p3 from '../../assets/khalidzahid1.png';
import p4 from '../../assets/basmah1.jpg';
import p5 from '../../assets/abq_sm_4.png';

const TopArtist=()=>{
  return (
    <div className="w-56 h-88 border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      {/* Artist */}
      <h3 className="text-sm font-montserrat-regular text-yankees-blue text-center mb-2 mt-1">
        Nun (20212)
      </h3>
      {/* Location */}
      <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">
        Shaker Kashgari</p>

      {/* Image */}
      <img 
        className="w-full h-32 object-cover" 
        src="https://via.placeholder.com/400" 
        alt="Card" />
     
        <div className="flex flex-row w-full items-start text-yankees-blue  justify-between text-left text-xs">
        <span className="mr-12">Total Sales Last 12 Months: Sofana Dahlan</span>
        <span >VS Previous Year: 175</span>
        </div>

      {/* Follow Button */}
      <button className="mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake hover:bg-red-600 transition-colors">
        Follow
      </button>
    </div>
  );
};

export default TopArtist;