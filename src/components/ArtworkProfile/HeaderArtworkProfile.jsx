// import React from "react";

// const HeaderArtworkProfile = ({ artworkDetails }) => {
//   return (
//        <div className="flex flex-col lg:flex-row justify-between lg:items-start xs:items-center mx-6 lg:space-x-10 mb-4 ">
//        {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
//        <div className="w-full flex flex-col lg:flex-row justify-start gap-14 lg:items-start">
//          {/* Left Section: Initiative Name and Host */}
//        </div>
//        {/* Stats Section */}
//        <div className="flex flex-col lg:space-y-2 xs:space-y-4 text-yankees-blue font-montserrat-light">
//          <div className="flex justify-between w-full text-sm ">
//            <span className="whitespace-nowrap">Views:</span>
//            <span className="font-montserrat-light  ml-32">{artworkDetails.Views}</span>
//          </div>
//          <div className="flex justify-between w-full text-sm">
//            <span className="whitespace-nowrap">Appreciations:</span>
//            <span className="font-montserrat-light ml-32">{artworkDetails.Appreciations}</span>
//          </div>
//          <div className="flex justify-between w-full text-sm">
//            <span className="whitespace-nowrap">Favourited:</span>
//            <span className="font-montserrat-light ml-32 ">
//              {artworkDetails.Favourited}
//            </span>
//          </div>
//        </div>
//      </div>
//   );
// };

// export default HeaderArtworkProfile;


import React from "react";

const HeaderArtworkProfile = ({ artworkDetails }) => {
  if (!artworkDetails) {
    return null; // Don't render if no artworkDetails are provided
  }

  console.log("Inside header artwork: ",artworkDetails);

  // Use optional chaining and logical OR for safer access and fallbacks
  const views = artworkDetails.profileViews || artworkDetails.views || 0; // Check 'initialViews' from market context or 'views' from schema
  const appreciations = artworkDetails.initialLikes || artworkDetails.likes || 0; // Check 'initialLikes' from market context or 'likes' from schema
  const favorited = artworkDetails.favorited || 0; // Assuming 'favorited' key in your schema

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-start xs:items-center mx-6 lg:space-x-10 mb-4 ">
      <div className="w-full flex flex-col lg:flex-row justify-start gap-14 lg:items-start">
        {/* Left Section: Initiative Name and Host - This section was empty in your original code */}
      </div>
      {/* Stats Section */}
      <div className="flex flex-col lg:space-y-2 xs:space-y-4 text-yankees-blue font-montserrat-light">
        <div className="flex justify-between w-full text-sm ">
          <span className="whitespace-nowrap">Views:</span>
          <span className="font-montserrat-light ml-32">{views}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Appreciations:</span>
          <span className="font-montserrat-light ml-32">{appreciations}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className="whitespace-nowrap">Favourited:</span>
          <span className="font-montserrat-light ml-32 ">
            {favorited}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderArtworkProfile;
