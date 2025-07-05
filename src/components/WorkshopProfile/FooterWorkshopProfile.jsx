// import React from 'react';

// const FooterWorkshopProfile = ({workshopDetails}) => {
//   return(
//     <footer className="bg-white py-8">
//     {/* Heading */}
//     <div className="container mx-auto">
//       <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">ABOUT THE ARTIST</h2>
//       {/* Horizontal Line */}
//       <hr className="border-t border-black mb-6" />
//     </div>
  
//     <div className="flex flex-col lg:flex-row xs:items-center gap-4 p-4">
//       {/* Image Container */}
//       <div className="flex-shrink-0">
//         <img src={workshopDetails.image} alt="Artwork" className="w-60 h-60 object-cover mb-2" />
//        </div>
  
//       {/* Left Column: Text */}
//       <div className="flex-grow text-yankees-blue font-montserrat-light text-base text-justify">
//         <p>{workshopDetails.artistDescription}</p>
//       </div>
//     </div>
//   </footer>
//   );
// };

// export default FooterWorkshopProfile;

import React from 'react';

const FooterWorkshopProfile = ({ workshopDetails }) => {
  if (!workshopDetails) {
    return null;
  }

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto">
        <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">ABOUT THE ARTIST</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-black mb-6" />
      </div>

      <div className="flex flex-col lg:flex-row xs:items-center gap-4 p-4">
        {/* Image Container */}
        <div className="flex-shrink-0">
          <img
            src={workshopDetails.image} 
            alt={workshopDetails.host}
            className="w-60 h-60 object-cover mb-2" />
        </div>

        {/* Left Column: Text */}
        <div className="flex-grow text-yankees-blue font-montserrat-light text-base text-justify">
          <p>{workshopDetails.artistDescription}</p> {/* Uses artistDescription */}
        </div>
      </div>
    </footer>
  );
};

export default FooterWorkshopProfile;