// import React  from 'react';
// import { useState } from "react";
// import PatronsGallery from './PIGallery';

// import abq1 from "../../assets/abq_1.jpg";
// import abq2 from "../../assets/abq_2.jpg";
// import abq3 from "../../assets/abq_3.jpg";
// import abq4 from "../../assets/abq_pm_2.jpg";

// const patronPrimaryMarket =  [
//   {
//     image: abq1,
//     title: 'After Marylin',
//     artist: 'Noura Al-Mutairi',
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: abq2,
//     title: 'Landscapes (XI)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: abq3,
//     title: 'Frog',
//     artist: 'Hanan Al-Ahmadi',
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
//   {
//     image: abq4,
//     title: 'Landscapes (VIII)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 15400,
//     initialViews: 25000,
//   },
// ];

// const patronSecondaryMarket = [
//   {
//     image: abq1,
//     title: 'After Marylin',
//     artist: 'Noura Al-Mutairi',
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: abq2,
//     title: 'Landscapes (XI)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: abq3,
//     title: 'Frog',
//     artist: 'Hanan Al-Ahmadi',
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
// ];

// const patronNFTMarket = [
//   {
//     image: abq1,
//     title: 'After Marylin',
//     artist: 'Noura Al-Mutairi',
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: abq2,
//     title: 'Landscapes (XI)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
// ];






// const ContentPatronsProfile = () => {
//   const [selectedProfileCategory, setSelectedProfileCategory] = useState("PRIMARY MARKET"); // Default to PORTFOLIO
//   const profileCategories = ["PRIMARY MARKET", "SECONDARY MARKET", "NFTs"];

//   // Function to render the appropriate component based on selectedProfileCategory
//   const renderProfileComponent = () => {
//     switch (selectedProfileCategory) {
//       case "PRIMARY MARKET":
//         return <PatronsGallery galleryDetails={patronPrimaryMarket} />;
//       case "SECONDARY MARKET":
//         return <PatronsGallery galleryDetails={patronSecondaryMarket} />;
//       case "NFTs":
//         return <PatronsGallery galleryDetails={patronNFTMarket} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="">
//     {/* Category Tabs */}
//     <div className="border-b border-gray-400 flex space-x-6 mb-4">
//       {profileCategories.map((category) => (
//         <button
//           key={category}
//           className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 ${
//             selectedProfileCategory === category
//               ? "border-yankees-blue text-white bg-yankees-blue border-b-4 rounded-t-md"
//               : "text-yankees-blue border-transparent"
//           }`}
//           onClick={() => setSelectedProfileCategory(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>

//     {/* Rendered Component */}
//     <div className="mt-4">{renderProfileComponent()}</div>
//   </div>
//   );
// };

// export default ContentPatronsProfile;

import React, { useState } from 'react';
import PatronsGallery from './PIGallery';

const ContentPatronsProfile = ({
  primaryMarketArtworks,
  secondaryMarketArtworks,
  nftArtworks,
}) => {
  const [selectedProfileCategory, setSelectedProfileCategory] = useState("PRIMARY MARKET");
  const profileCategories = ["PRIMARY MARKET", "SECONDARY MARKET", "NFTs"];

  // Check if all artwork categories are empty or undefined
  const hasNoArtworksInAnyCategory =
    (!primaryMarketArtworks || primaryMarketArtworks.length === 0) &&
    (!secondaryMarketArtworks || secondaryMarketArtworks.length === 0) &&
    (!nftArtworks || nftArtworks.length === 0);

  // Function to render the appropriate gallery component
  const renderGalleryComponent = () => {
    switch (selectedProfileCategory) {
      case "PRIMARY MARKET":
        return <PatronsGallery galleryDetails={primaryMarketArtworks} />;
      case "SECONDARY MARKET":
        return <PatronsGallery galleryDetails={secondaryMarketArtworks} />;
      case "NFTs":
        return <PatronsGallery galleryDetails={nftArtworks} />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* Category Tabs - These will always be visible */}
      <div className="border-b border-gray-400 flex space-x-6 mb-4">
        {profileCategories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 ${
              selectedProfileCategory === category
                ? "border-yankees-blue text-white bg-yankees-blue border-b-4 rounded-t-md"
                : "text-yankees-blue border-transparent"
            }`}
            onClick={() => setSelectedProfileCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Rendered Content Area */}
      <div className="mt-4">
        {hasNoArtworksInAnyCategory ? (
          // Display message if all categories are empty
          <div className="text-center py-8 text-gray-600">
            No artworks found for this patron.
          </div>
        ) : (
          // Otherwise, render the selected gallery component
          renderGalleryComponent()
        )}
      </div>
    </div>
  );
};

export default ContentPatronsProfile;