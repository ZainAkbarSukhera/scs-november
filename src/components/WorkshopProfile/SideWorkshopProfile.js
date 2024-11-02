import React from "react";
import { MdHexagon } from "react-icons/md";

const SideWorkshopProfile = ({workshopDetails}) => {
  return (
    <div className="mb-8">
    <div className="flex flex-col items-start">
      <div className="border-b-2 border-black mb-2 pb-1 w-full">
        <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
          {workshopDetails.workshopName}
        </h1>
      </div>
      <p className="text-base font-montserrat-light text-red-500 mb-4 mt-2">Hosted by:{workshopDetails.host}</p>
    </div>
  
    {/* Image */}
    <img 
      src={workshopDetails.mainImage} 
      alt={workshopDetails.workshopName} 
      className="w-full h-auto mb-8" />
  
    {/* Text content */}
    <div className="flex flex-col text-justify">
      {/* Dates */}
      <span className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
        Dates
      </span>
      <div className="text-xs font-montserrat-light text-yankees-blue space-y-4">
     
      <span className=" ml-2 text-xs font-montserrat-light text-yankees-blue">
          {workshopDetails.dates}
        </span>
      </div>
  
      {/* Duration */}
      <div className="mt-4">
        <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
          Duration
        </h2>
        
        <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
          {workshopDetails.duration}
        </span>
      </div>
  
      {/* Location */}
      <div className="mt-4">
        <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
          Location
        </h2>
        
        <span className=" ml-2 text-xs font-montserrat-light text-yankees-blue">
          {workshopDetails.location}
        </span>
      </div>
  
      {/* Price */}
      <div className="mt-4">
        <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
          Price
        </h2>
      
        <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
          {workshopDetails.price}
        </span>
      </div>
  
      <button className="bg-madder-lake hover:bg-red-700 text-white mt-4 px-6 py-1 rounded-full self-start">
        Apply
      </button>
    </div>
  </div>
  );
};

export default SideWorkshopProfile;

