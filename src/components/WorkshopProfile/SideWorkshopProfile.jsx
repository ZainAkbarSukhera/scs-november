// import React from "react";
// import { MdHexagon } from "react-icons/md";

// const SideWorkshopProfile = ({workshopDetails}) => {
//   return (
//     <div className="lg:mb-8">
//     <div className="flex flex-col lg:items-start xs:items-center">
//       <div className="border-b-2 border-black mb-2 pb-1 w-full">
//         <h1 className="lg:text-3xl xs:text-3xl font-montserrat-bold text-yankees-blue lg:whitespace-nowrap xs:text-center">
//           {workshopDetails.workshopName}
//         </h1>
//       </div>
//       <p className="text-base font-montserrat-light text-red-500 mb-4 mt-2">Hosted by:{workshopDetails.host}</p>
//     </div>
  
//     {/* Image */}
//     <img 
//       src={workshopDetails.mainImage} 
//       alt={workshopDetails.workshopName} 
//       className="w-full h-auto mb-8" />
  
//     {/* Text content */}
//     <div className="flex flex-col text-justify ">
//       {/* Dates */}
//       <span className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
//         Dates
//       </span>
//       <div className="text-xs font-montserrat-light text-yankees-blue space-y-4">
     
//       <span className=" ml-2 text-xs font-montserrat-light text-yankees-blue">
//           {workshopDetails.dates}
//         </span>
//       </div>
  
//       {/* Duration */}
//       <div className="mt-4">
//         <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
//           Duration
//         </h2>
        
//         <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
//           {workshopDetails.duration}
//         </span>
//       </div>
  
//       {/* Location */}
//       <div className="mt-4">
//         <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
//           Location
//         </h2>
        
//         <span className=" ml-2 text-xs font-montserrat-light text-yankees-blue">
//           {workshopDetails.location}
//         </span>
//       </div>
  
//       {/* Price */}
//       <div className="mt-4">
//         <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
//           Price
//         </h2>
      
//         <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
//           {workshopDetails.price}
//         </span>
//       </div>
  
//       <button className="bg-madder-lake hover:bg-red-700 text-white lg:mt-4 xs:mt-8 lg:px-6 lg:py-1 xs:w-48 xs:py-1 xs:ml-28 lg:ml-2 xs:mb-4 rounded-full self-start">
//         Apply
//       </button>
//     </div>
//   </div>
//   );
// };

// export default SideWorkshopProfile;

import React from "react";
import { MdHexagon } from "react-icons/md";

const SideWorkshopProfile = ({ workshopDetails }) => {
  if (!workshopDetails) {
    return null;
  }

  return (
    <div className="lg:mb-8">
      <div className="flex flex-col lg:items-start xs:items-center">
        <div className="border-b-2 border-black mb-2 pb-1 w-full">
          <h1 className="lg:text-3xl xs:text-3xl font-montserrat-bold text-yankees-blue lg:whitespace-nowrap xs:text-center">
            {workshopDetails.workshopName} {/* Uses workshopName */}
          </h1>
        </div>
        <p className="text-base font-montserrat-light text-red-500 mb-4 mt-2">Hosted by:{workshopDetails.host}</p>
      </div>

      <img
        src={workshopDetails.mainImage}
        alt={workshopDetails.workshopName}
        className="w-full h-auto mb-8" />

      <div className="flex flex-col text-justify ">
        {/* Dates */}
        <span className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
          Dates
        </span>
        <div className="text-xs font-montserrat-light text-yankees-blue space-y-4">
          <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
            {workshopDetails.dateDetails} {/* Uses dates */}
          </span>
        </div>

        {/* Duration */}
        <div className="mt-4">
          <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
            Duration
          </h2>
          <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
            {workshopDetails.durationDetails} {/* Uses duration */}
          </span>
        </div>

        {/* Location */}
        <div className="mt-4">
          <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
            Location
          </h2>
          <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
            {workshopDetails.locationDetails} {/* Uses location */}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
            Price
          </h2>
          <span className="ml-2 text-xs font-montserrat-light text-yankees-blue">
            {workshopDetails.priceDetails} {/* Uses price */}
          </span>
        </div>

        <button className="bg-madder-lake hover:bg-red-700 text-white lg:mt-4 xs:mt-8 lg:px-6 lg:py-1 xs:w-48 xs:py-1 xs:ml-28 lg:ml-2 xs:mb-4 rounded-full self-start">
          Apply
        </button>
      </div>
    </div>
  );
};

export default SideWorkshopProfile;

