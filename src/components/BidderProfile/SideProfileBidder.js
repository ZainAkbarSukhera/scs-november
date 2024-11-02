// import React from "react";
// import { MdHexagon } from "react-icons/md";


// const sideProfileBidder =({imageUrl,initiativeName,keyDates,eligibilityCriteria}) => {
//   return (
//     <div className="flex flex-col flex-grow mb-8 text-justify ">
//     <img 
//       src={imageUrl} 
//       alt={initiativeName} 
//       className="w-full h-auto rounded-md shadow-md col-span-1"
//     />
    
//     <div className="flex flex-col flex-grow lg:col-span-2 mt-2 ">
//   <span className="text-sm font-montserrat-light mb-4">Key Dates</span>
//   <div className="text-xs space-y-2">
//     {keyDates.map((date, index) => (
//       <div key={index} className="flex items-start">
//         <MdHexagon className="text-red-600 mr-2 flex-shrink-0" />
//         <span className="whitespace-nowrap font-montserrat-light">{date.label}: {date.value}</span>
//       </div>
//     ))}
//   </div>


//   <div className="mt-4">
//     <h2 className="text-sm font-montserrat-light mb-4">Eligibility Criteria</h2>
//     <ul className="text-xs space-y-2">
//       {eligibilityCriteria.map((criteria, index) => (
//         <li key={index} className="flex items-center">
//           <MdHexagon className="text-red-600 mr-2 mb-6 flex-shrink-0" />
//           <span className="font-montserrat-light">{criteria}</span>
//         </li>
//       ))}
//     </ul>
//     <button className="bg-red-500 text-white mt-4 px-6 py-1 rounded-full">Apply</button>
//   </div>
// </div>

//   </div>
//   );
// };

// export default sideProfileBidder;

import React from "react";
import { MdHexagon } from "react-icons/md";

const SideProfileBidder = ({bidderDetails}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-start">
        <div className="border-b-2 border-black mb-2 pb-1 w-full">
          <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
            {bidderDetails.initiativeName}
          </h1>
        </div>
        <p className="text-2xl font-montserrat-regular text-red-500 mb-2">{bidderDetails.host}</p>
      </div>
  
      {/* Image */}
      <img 
        src={bidderDetails.imageUrl} 
        alt={bidderDetails.initiativeName} 
        className="w-full h-auto rounded-md shadow-md mb-8" 
      />
  
      {/* Text content */}
      <div className="flex flex-col text-justify">
        {/* Key Dates */}
        <span className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
          Key Dates
        </span>
        <div className="text-xs font-montserrat-light text-yankees-blue space-y-4">
          {bidderDetails.keyDates.map((date, index) => (
            <div key={index} className="flex items-start">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0" />
              <span className="font-montserrat-light whitespace-nowrap">
                {date.label}: {date.value}
              </span>
            </div>
          ))}
        </div>
  
        {/* Eligibility*/}
        <div className="mt-4">
          <h2 className="ml-2 text-yankees-blue font-montserrat-regular text-sm mb-4">
            Eligibility Criteria
          </h2>
          <ul className="text-xs font-montserrat-light text-yankees-blue space-y-4">
            {bidderDetails.eligibilityCriteria.map((criteria, index) => (
              <li key={index} className="flex items-start">
                <MdHexagon className="text-red-600 mr-2 flex-shrink-0" />
                <span className="font-montserrat-light ">
                  {criteria}
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-madder-lake hover:bg-red-700 text-white mt-4 px-6 py-1 rounded-full self-start">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideProfileBidder;

