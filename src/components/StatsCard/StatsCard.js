import React from 'react';
import {FaLocationArrow } from 'react-icons/fa';

import icon1 from '../../assets/artworkBought.png';
import icon2 from '../../assets/artworkResold.png';
import icon3 from '../../assets/artistSupportedIcon.png';
import icon4 from '../../assets/financial contribution.png';


const PatronCard = ({ images, logo, title, location, stats }) => {
  // return (
  //   <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4">
  //     {/* Images */}
  //     <div className="grid grid-cols-3 gap-1 mb-4">
  //       {images.map((src, index) => (
  //         <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded" />
  //       ))}
  //     </div>

  //     {/* Logo */}
  //     <div className="flex justify-center mb-4">
  //       <img src={logo} alt="logo" className="h-16" />
  //     </div>

  //     {/* Title */}
  //     <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-medium">{title}</h2>

  //     {/* Location */}
  //     <div className="flex justify-center items-center mb-4">
  //       <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2" />
  //       <p className="text-madder-lake text-center font-montserrat-light">{location}</p>
  //     </div>

  //     {/* Stats */}
  //     <div className="grid grid-cols-2 gap-4 text-start text-palatinate-purple">
  //       <div className="flex flex-col items-center">
          
  //         <div className="flex items-center">
  //           <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2" />
  //           <p className="text-xs text-left font-montserrat-light">No. of Artworks Bought:</p>
  //         </div>
  //         <p className="font-bold text-xl justify-start">{stats.artworksBought}</p>
  //       </div>
  //       <div className="flex flex-col items-center">
          
  //         <div className="flex items-center">
  //           <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2" />
  //           <p className="text-xs text-left font-montserrat-light">No. of Artworks Resold:</p>
  //         </div>
  //         <p className="font-bold text-xl">{stats.artworksResold}</p>
  //       </div>
  //       <div className="flex flex-col items-center">
          
  //         <div className="flex items-center">
  //           <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2" />
  //           <p className="text-xs text-left font-montserrat-light">No. of Artists Supported:</p>
  //         </div>
  //         <p className="font-bold text-xl">{stats.artistsSupported}</p>
  //       </div>
  //       <div className="flex flex-col items-center">
         
  //         <div className="flex items-center">
  //           <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2" />
  //           <p className="text-xs text-left font-montserrat-light">Total Financial Contribution:</p>
  //         </div>
  //         <p className="font-bold text-xl">{stats.financialContribution}</p>
  //       </div>
  //     </div>
  //   </div>
    
  // );

  return  (
    <div className="bg-white shadow-md rounded-lg p-4 w-full mr-4 ml-4 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100">
      {/* Images */}
      <div className="grid grid-cols-3 gap-1 mb-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`artwork-${index}`} className="h-20 w-full object-cover rounded " />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="logo" className="h-16" />
      </div>

      {/* Title */}
      <h2 className="text-xl text-yankees-blue font-bold text-center font-montserrat-regular">{title}</h2>

      {/* Location */}
      <div className="flex justify-center items-center mb-4">
        <FaLocationArrow className="text-madder-lake text-sm mt-1 mr-2" />
        <p className="text-madder-lake text-center font-montserrat-light">{location}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-palatinate-purple text-start ml-2">
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon1} alt="Icon 1" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs font-montserrat-light">No. of Artworks Bought:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10 ">{stats.artworksBought}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon2} alt="Icon 2" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs font-montserrat-light">No. of Artworks Resold:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10">{stats.artworksResold}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon3} alt="Icon 3" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs font-montserrat-light">No. of Artists Supported:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-10">{stats.artistsSupported}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <img src={icon4} alt="Icon 4" className="w-8 h-8 object-scale-down mr-2" />
            <p className="text-xs font-montserrat-light">Total Financial Contribution:</p>
          </div>
          <p className="font-montserrat-regular text-base ml-6">{stats.financialContribution}</p>
        </div>
      </div>
    </div>
  );

};

export default PatronCard;