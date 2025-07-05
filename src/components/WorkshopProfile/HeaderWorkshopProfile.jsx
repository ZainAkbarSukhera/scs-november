// import React from "react";

// const HeaderWorkshopProfile = ({ workshopDetails }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between lg:items-start xs:items-center mx-6 lg:space-x-10 mb-4 xs:mt-8 ">
//     {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
//     <div className="w-full flex flex-col lg:flex-row lg:justify-start xs:justify-center gap-14 lg:items-start">
//       {/* Left Section: Initiative Name and Host */}
//     </div>
//     {/* Stats Section */}
//     <div className="flex flex-col lg:space-y-2 xs:space-y-4 text-yankees-blue font-montserrat-light">
//       <div className="flex justify-between w-full text-sm ">
//         <span className="whitespace-nowrap">Page Views:</span>
//         <span className="font-montserrat-light  ml-32">{workshopDetails.pageViews}</span>
//       </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className="whitespace-nowrap">Registered Participants:</span>
//         <span className="font-montserrat-light ml-32">{workshopDetails.registeredParticipants}</span>
//        </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className="whitespace-nowrap">Days Remaining:</span>
//         <span className="font-montserrat-light ml-32 ">
//           {workshopDetails.daysRemaining}
//         </span>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default HeaderWorkshopProfile;

import React from "react";

const HeaderWorkshopProfile = ({ workshopDetails }) => {
  if (!workshopDetails) {
    return null;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-start xs:items-center mx-6 lg:space-x-10 mb-4 xs:mt-8 ">
      <div className="w-full flex flex-col lg:flex-row lg:justify-start xs:justify-center gap-14 lg:items-start">
        {/* Left Section: Initiative Name and Host - This section was empty in your original code */}
      </div>
      {/* Stats Section */}
      <div className="flex flex-col lg:space-y-2 xs:space-y-4 text-yankees-blue font-montserrat-light">
        <div className="flex justify-between w-full text-sm ">
          <span className="whitespace-nowrap">Page Views:</span>
          <span className="font-montserrat-light ml-32">{workshopDetails.pageViews}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Registered Participants:</span>
          <span className="font-montserrat-light ml-32">{workshopDetails.registeredParticipants}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Days Remaining:</span>
          <span className="font-montserrat-light ml-32 ">
            {workshopDetails.daysRemaining}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderWorkshopProfile;
