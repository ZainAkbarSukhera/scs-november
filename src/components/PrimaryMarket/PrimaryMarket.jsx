// import React from "react";
// import MarketCardMain from "../ArtMarketCard/MarketCardMain";
// import MarketCategory from "../MarketTopSellers/MarketCategories";
// import SnapShot from "../Snapshot/SnapShot";

// import im1 from "../../assets/After Marylin.png";
// import im2 from "../../assets/Frog.png";
// import im3 from "../../assets/Landscapes-13.png";
// import im4 from "../../assets/Landscapes-11.png";
// import im5 from "../../assets/abq_pm_4.png";
// import im6 from "../../assets/fawaz2.jpg";
// import im7 from "../../assets/abq_pm_6.PNG";
// import im8 from "../../assets/abq_pm_2.jpg";
// import im9 from "../../assets/ahmadaljunaid3.jpeg";
// import im10 from "../../assets/hattan5.jpg";
// import im11 from "../../assets/shady3.png";
// import im12 from "../../assets/khaled1.jpg";
// import im13 from "../../assets/hadel1.png";
// import im14 from "../../assets/abq_pm_1.PNG";
// import im15 from "../../assets/sofana6.png";

// const artworks =  [
//   {
//     image: im1,
//     title: "After Marylin",
//     artist: "Noura Al-Mutairi",
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: im4,
//     title: "Landscapes (XI)",
//     artist: "Ahmed Al-Turki",
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: im2,
//     title: "Frog",
//     artist: "Hanan Al-Ahmadi",
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
//   {
//     image: im3,
//     title: "Landscapes (VIII)",
//     artist: "Ahmed Al-Turki",
//     initialLikes: 15400,
//     initialViews: 25000,
//   },
//   {
//     image: im5,
//     title: "Untitled (2011)",
//     artist: "Abdullah Qandeel",
//     initialLikes: 18700,
//     initialViews: 21000,
//   },
//   {
//     image: im6,
//     title: "Kaleidoscope (2024)",
//     artist: "Fawaz Alotaibi",
//     initialLikes: 10400,
//     initialViews: 15000,
//   },
//   {
//     image: im7,
//     title: "Apples & Oranges (2022)",
//     artist: "Abdullah Qandeel",
//     initialLikes: 195000,
//     initialViews: 37000,
//   },
//   {
//     image: im8,
//     title: "Electrostatic Tree (2020)",
//     artist: "Abdulah Qandeel",
//     initialLikes: 18700,
//     initialViews: 21000,
//   },
//   {
//     image: im9,
//     title: "B&W (2022)",
//     artist: "Ahmad Aljunaid",
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: im10,
//     title: "Pyramids IX (2024)",
//     artist: "Hattan Rayes",
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: im11,
//     title: "Paris (2024)",
//     artist: "Shady Sirajuddin",
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
//   {
//     image: im12,
//     title: "Contemplate (2023)",
//     artist: "Khalid Aharbi",
//     initialLikes: 18700,
//     initialViews: 21000,
//   },
//   {
//     image: im13,
//     title: "SEVA (2024)",
//     artist: "Hadel Alsaleh",
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: im14,
//     title: "Key to Serenity (2019)",
//     artist: "Abdullah Qandeel",
//     initialLikes: 18700,
//     initialViews: 21000,
//   },
//   {
//     image: im15,
//     title: "Eurostar (2024)",
//     artist: "Sofana Dahlan",
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
// ];

// const PrimaryMarket = () => {
//   return (
//     <div>
//     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
//       {artworks.map((art, index) => (
//         <MarketCardMain key={index} {...art} />
//       ))}
//     </div>
  
//     <div className="bg-gray-200 mt-16 xs:mt-12 sm:mt-16 lg:mt-32 ">
//       <MarketCategory />
//     </div>
  
//     <div className="bg-white py-6 xs:py-4">
//       <SnapShot />
//     </div>
//   </div>
//   );
// };

// export default PrimaryMarket;

import React from "react";
import MarketCardMain from "../ArtMarketCard/MarketCardMain";
import MarketCategory from "../MarketTopSellers/MarketCategories";
import SnapShot from "../Snapshot/SnapShot";

const PrimaryMarket = ({ artworks, cardView }) => { // Accept artworks and cardView as props
  // Determine the grid/list class based on cardView prop
  const cardContainerClass = cardView === 'grid'
    ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-8"
    : "flex flex-col gap-4 mb-8"; // A basic flex column for list view

  return (
    <div>
      <div className={cardContainerClass}>
        {artworks.map((art) => (
          // Pass cardView down to MarketCardMain if it needs to adapt its layout
          <MarketCardMain key={art.id} {...art} cardView={cardView} />
        ))}
      </div>

      {/* Conditionally render these sections if they are not always needed */}
      {/* Or if they are static content, they remain as is */}
      <div className="bg-gray-200 mt-16 xs:mt-12 sm:mt-16 lg:mt-32 ">
        <MarketCategory />
      </div>

      <div className="bg-white py-6 xs:py-4">
        <SnapShot />
      </div>
    </div>
  );
};

export default PrimaryMarket;