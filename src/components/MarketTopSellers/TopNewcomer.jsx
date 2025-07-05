import React from "react";

import p1 from '../../assets/abq_sm_1.PNG';
import p2 from '../../assets/shaker1.jpeg';
import p3 from '../../assets/khalidzahid1.png';
import p4 from '../../assets/basmah1.jpg';
import p5 from '../../assets/abq_sm_4.png';
import khalid1 from '../../assets/khalidzahid1.png';

const topNewcomer=()=>{
  return (
    <div className="lg:w-56 lg:h-88 border border-gray-300 rounded-lg shadow-md lg:p-4 xs:p-4 flex flex-col items-center text-center">
    {/* Artist */}
    <h3 className="text-sm font-montserrat-regular text-yankees-blue text-center mb-2 mt-1">
       Khalid Zahid
     </h3>
     {/* Location */}
     <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">
       Jeddah, Saudi Arabia</p>

       <img 
       className="w-full h-32 object-cover" 
       src={khalid1}
       alt="Card" />
    
       <div className="flex flex-row w-full items-start text-yankees-blue  justify-between text-left text-xs">
       <span className="mr-12 xs:mr-4">Total Sales Last 12 Months: SAR 50,500</span>
       <span >VS Previous Year: +95%</span>
       </div>

     {/* Follow Button */}
     <button className="lg:mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake hover:bg-red-600 transition-colors xs:mt-2">
       Follow
     </button>
   </div>
  );
};

export default topNewcomer;

// flex flex-row items-start  space-x-10 text-xs font-montserrat-light