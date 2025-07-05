import React from 'react';
import abq from '../../assets/abqandeel.jpeg';

const MostAttended=()=>{
  return (
    <div className="lg:w-56 lg:h-88 border border-gray-300 rounded-lg shadow-md lg:p-4 xs:p-4 flex flex-col items-center text-center">
    {/* Artist */}
    <h3 className="text-sm font-montserrat-regular text-yankees-blue text-center mb-2 mt-1">
     Exploring Colour
    </h3>
    {/* Location */}
    <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">
    Abdullah Qandeel </p>

    {/* Image */}
    <img 
      className="w-full h-32 object-cover" 
      src={abq}
      alt="Card" />
   
      <div className="flex flex-row w-full items-start text-yankees-blue  justify-between text-left text-xs">
      <span className="mr-12 xs:mr-4">No. of Attendees: 1000</span>
      <span >Locations: Riyadh, Jeddah and Khobar</span>
      </div>

    {/* Follow Button */}
    <button className="lg:mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake hover:bg-red-600 transition-colors xs:mt-2">
      Follow
    </button>
  </div>
  );
};

export default MostAttended;