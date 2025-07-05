import React from "react";

import p1 from '../../assets/abq_sm_1.PNG';
import p2 from '../../assets/shaker1.jpeg';
import p3 from '../../assets/khalidzahid1.png';
import p4 from '../../assets/basmah1.jpg';
import p5 from '../../assets/abq_sm_4.png';
import abq_sm_4 from '../../assets/abq_sm_4.png';

const topSale=()=>{
  return (
    <div className="lg:w-56 lg:h-88 border border-gray-300 rounded-lg shadow-md lg:p-4  xs:p-4 flex flex-col items-center text-center">
    {/* Artist*/}
    <h3 className="text-sm font-montserrat-regular text-yankees-blue text-center mb-2 mt-1">
      Kingdom of Love (2012)
    </h3>
    {/* Location */}
    <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">
      Abdullah Qandeel</p>

    {/* Image */}
    <img 
      className="w-full h-32 object-cover" 
      src={abq_sm_4}
      alt="Card" />
   
      <div className="flex flex-row w-full items-start text-yankees-blue justify-between text-left text-xs">
      <span className="mr-12">Top Buyer: Sofana Dahlan</span>
      <span >Price: SAR 150,000</span>
      </div>

    {/* Follow Button */}
    <button className="lg:mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake hover:bg-red-600 transition-colors xs:mt-2">
      Follow
    </button>
  </div>
  );
};

export default topSale;