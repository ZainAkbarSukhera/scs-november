// import React from 'react';
// import {FaLocationArrow } from 'react-icons/fa';

// import icon1 from '../../assets/artworkBought.png';
// import icon2 from '../../assets/artworkResold.png';
// import icon3 from '../../assets/artistSupportedIcon.png';
// import icon4 from '../../assets/financial contribution.png';


// const PatronCard = ({ images, logo, title, location, stats }) => {
//   // return (
//   //   <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4">
//   //     {/* Images */}
//   //     <div className="grid grid-cols-3 gap-1 mb-4">
//   //       {images.map((src, index) => (
//   //         <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded" />
//   //       ))}
//   //     </div>

//   //     {/* Logo */}
//   //     <div className="flex justify-center mb-4">
//   //       <img src={logo} alt="logo" className="h-16" />
//   //     </div>

//   //     {/* Title */}
//   //     <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-medium">{title}</h2>

//   //     {/* Location */}
//   //     <div className="flex justify-center items-center mb-4">
//   //       <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2" />
//   //       <p className="text-madder-lake text-center font-montserrat-light">{location}</p>
//   //     </div>

//   //     {/* Stats */}
//   //     <div className="grid grid-cols-2 gap-4 text-start text-palatinate-purple">
//   //       <div className="flex flex-col items-center">
          
//   //         <div className="flex items-center">
//   //           <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2" />
//   //           <p className="text-xs text-left font-montserrat-light">No. of Artworks Bought:</p>
//   //         </div>
//   //         <p className="font-bold text-xl justify-start">{stats.artworksBought}</p>
//   //       </div>
//   //       <div className="flex flex-col items-center">
          
//   //         <div className="flex items-center">
//   //           <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2" />
//   //           <p className="text-xs text-left font-montserrat-light">No. of Artworks Resold:</p>
//   //         </div>
//   //         <p className="font-bold text-xl">{stats.artworksResold}</p>
//   //       </div>
//   //       <div className="flex flex-col items-center">
          
//   //         <div className="flex items-center">
//   //           <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2" />
//   //           <p className="text-xs text-left font-montserrat-light">No. of Artists Supported:</p>
//   //         </div>
//   //         <p className="font-bold text-xl">{stats.artistsSupported}</p>
//   //       </div>
//   //       <div className="flex flex-col items-center">
         
//   //         <div className="flex items-center">
//   //           <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2" />
//   //           <p className="text-xs text-left font-montserrat-light">Total Financial Contribution:</p>
//   //         </div>
//   //         <p className="font-bold text-xl">{stats.financialContribution}</p>
//   //       </div>
//   //     </div>
//   //   </div>
    
//   // );

//   return  (
//     <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100 xs:mr-2 xs:ml-2 xs:p-2">
//     {/* Images */}
//     <div className="grid grid-cols-3 gap-1 mb-4 xs:gap-0.5 xs:mb-2">
//       {images.map((src, index) => (
//         <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded xs:h-16" />
//       ))}
//     </div>
  
//     {/* Logo */}
//     <div className="flex justify-center mb-4 xs:mb-2">
//       <img src={logo} alt="logo" className="h-16 xs:h-12" />
//     </div>
  
//     {/* Title */}
//     <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-regular xs:text-lg xs:mb-2">{title}</h2>
  
//     {/* Location */}
//     <div className="flex justify-center items-center mb-4 xs:mb-2">
//       <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2 xs:text-xs" />
//       <p className="text-madder-lake text-center font-montserrat-light xs:text-xs">{location}</p>
//     </div>
  
//     {/* Stats */}
//     <div className="grid grid-cols-2 gap-4 text-palatinate-purple text-start ml-2 xs:gap-2 xs:ml-1">
//       <div className="flex flex-col">
//         <div className="flex items-center">
//           <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
//           <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artworks Bought:</p>
//         </div>
//         <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artworksBought}</p>
//       </div>
//       <div className="flex flex-col">
//         <div className="flex items-center">
//           <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
//           <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artworks Resold:</p>
//         </div>
//         <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artworksResold}</p>
//       </div>
//       <div className="flex flex-col">
//         <div className="flex items-center">
//           <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
//           <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artists Supported:</p>
//         </div>
//         <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artistsSupported}</p>
//       </div>
//       <div className="flex flex-col">
//         <div className="flex items-center">
//           <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
//           <p className="text-xs font-montserrat-light xs:text-[10px]">Total Financial Contribution:</p>
//         </div>
//         <p className="font-montserrat-regular text-base ml-6 xs:ml-4 xs:text-sm">{stats.financialContribution}</p>
//       </div>
//     </div>
//   </div>
//   );

// };

// export default PatronCard;

import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // <--- Import useNavigate

import icon1 from '../../assets/artworkBought.png';
import icon2 from '../../assets/artworkResold.png';
import icon3 from '../../assets/artistSupportedIcon.png';
import icon4 from '../../assets/financial contribution.png';

const PatronCard = ({ images, logo, title, location, stats, _id }) => {
  const navigate = useNavigate(); // <--- Initialize useNavigate

  // console.log("Patron id ohooooooo: ",_id);

  const handleCardClick = () => {
    if (_id) { // Ensure _id exists before navigating
      navigate(`/patron-profile/${_id}`); // Use backticks for template literal
    } else {
      console.warn("Patron ID is missing, cannot navigate to profile.");
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100 xs:mr-2 xs:ml-2 xs:p-2 cursor-pointer" // <--- Added cursor-pointer
      onClick={handleCardClick} // <--- Attach the click handler to the entire card
    >
      {/* Images */}
      <div className="grid grid-cols-3 gap-1 mb-4 xs:gap-0.5 xs:mb-2">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded xs:h-16" />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4 xs:mb-2">
        <img src={logo} alt="logo" className="h-16 xs:h-12" />
      </div>

      {/* Title */}
      <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-regular xs:text-lg xs:mb-2">{title}</h2>

      {/* Location */}
      <div className="flex justify-center items-center mb-4 xs:mb-2">
        <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2 xs:text-xs" />
        <p className="text-madder-lake text-center font-montserrat-light xs:text-xs">{location}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-palatinate-purple text-start ml-2 xs:gap-2 xs:ml-1">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
            <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artworks Bought:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artworksBought}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
            <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artworks Resold:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artworksResold}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
            <p className="text-xs font-montserrat-light xs:text-[10px]">No. of Artists Supported:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10 xs:ml-6 xs:text-sm">{stats.artistsSupported}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2 xs:w-6 xs:h-6 xs:mr-1" />
            <p className="text-xs font-montserrat-light xs:text-[10px]">Total Financial Contribution:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10 xs:ml-4 xs:text-sm">{stats.financialContribution}</p>
        </div>
      </div>
    </div>
  );
};

export default PatronCard;