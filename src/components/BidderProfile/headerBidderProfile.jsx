// import React from "react";

// const HeaderBidderProfile = ({ bidderDetails }) => {
//   return (
//          <div className="flex flex-col lg:flex-row justify-between lg:items-start mx-6 lg:space-x-10 mb-4 xs:mt-4 xs:p-4">
//        {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
//        <div className="w-full flex flex-col lg:flex-row justify-start gap-14 lg:items-start xs:items-center">
//          {/* Left Section: Initiative Name and Host */}
//        </div>
//        {/* Stats Section */}
//        <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light">
//          <div className="flex justify-between w-full text-sm ">
//            <span className="whitespace-nowrap">Page Views:</span>
//            <span className="font-montserrat-light  ml-32">{bidderDetails.pageViews}</span>
//          </div>
//          <div className="flex justify-between w-full text-sm">
//            <span className="whitespace-nowrap">Bids Submitted:</span>
//            <span className="font-montserrat-light ml-32">{bidderDetails.bidsSubmitted}</span>
//          </div>
//          <div className="flex justify-between w-full text-sm">
//            <span className="whitespace-nowrap">Days Remaining:</span>
//            <span className="font-montserrat-light ml-32 ">
//              {bidderDetails.daysRemaining}
//            </span>
//          </div>
//        </div>
//      </div>
//   );
// };

// export default HeaderBidderProfile;

import React from "react";

const HeaderBidderProfile = ({ bidderDetails }) => {
  if (!bidderDetails) {
    return null; // Don't render if no details are provided
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-start mx-6 lg:space-x-10 mb-4 xs:mt-4 xs:p-4">
      <div className="w-full flex flex-col lg:flex-row justify-start gap-14 lg:items-start xs:items-center">
        {/* Left Section: Initiative Name and Host - This section was empty in your original code */}
      </div>
      {/* Stats Section */}
      <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light">
        <div className="flex justify-between w-full text-sm ">
          <span className="whitespace-nowrap">Page Views:</span>
          {/* Access pageViews directly (from formattedDetails in BiddersProfileComponent) */}
          <span className="font-montserrat-light ml-32">{bidderDetails.pageViews}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Bids Submitted:</span>
          {/* Access bidsSubmitted directly */}
          <span className="font-montserrat-light ml-32">{bidderDetails.bidsSubmitted}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Days Remaining:</span>
          {/* Access daysRemaining directly */}
          <span className="font-montserrat-light ml-32 ">
            {bidderDetails.daysRemaining}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBidderProfile;
