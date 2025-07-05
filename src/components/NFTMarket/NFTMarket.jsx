// import React from "react";
// import MarketCardMain from "../ArtMarketCard/MarketCardMain";
// import SnapShot from "../Snapshot/SnapShot";
// import MarketCategory from "../MarketTopSellers/MarketCategories";

// import im1 from "../../assets/After Marylin.png";
// import im2 from "../../assets/Frog.png";
// import im3 from "../../assets/Landscapes-13.png";
// import im4 from "../../assets/Landscapes-11.png";
// import im5 from "../../assets/abq_pm_4.png";

// const artworks3 =  [
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
// ];

// const NFTMarket = () => {
//   return (
//     <div>
//   {/* Artwork Grid */}
//   <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mb-8">
//     {artworks3.map((art, index) => (
//       <MarketCardMain key={index} {...art} />
//     ))}
//   </div>

//   {/* Market Category Section */}
//   <div className="bg-gray-200  xs:mt-12 ">
//     <MarketCategory />
//   </div>

//   {/* Footer Section */}
//   <footer className="bg-white py-8 px-4 xs:px-2">
//     <SnapShot />
//   </footer>
// </div>
//   );
// };

// export default NFTMarket;

import React from "react";
import MarketCardMain from "../ArtMarketCard/MarketCardMain";
import SnapShot from "../Snapshot/SnapShot";
import MarketCategory from "../MarketTopSellers/MarketCategories";

const NFTMarket = ({ artworks, cardView }) => { // Accept artworks and cardView as props
  // Determine the grid/list class based on cardView prop

  console.log("NFT Market ka ye scene hai bro: ",artworks);
  const cardContainerClass = cardView === 'grid'
    ? "grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mb-8"
    : "flex flex-col gap-4 mb-8"; // A basic flex column for list view

  return (
    <div>
      <div className={cardContainerClass}>
        {artworks.map((art) => (
          // Use _id for key as it's now consistently available from the formatted data
          // Pass cardView down to MarketCardMain if it needs to adapt its layout
          <MarketCardMain key={art._id} {...art} cardView={cardView} />
        ))}
      </div>

      {/* Market Category Section */}
      <div className="bg-gray-200 xs:mt-12 ">
        <MarketCategory />
      </div>

      {/* Footer Section (assuming SnapShot acts as a footer in this context) */}
      <footer className="bg-white py-8 px-4 xs:px-2">
        <SnapShot />
      </footer>
    </div>
  );
};

export default NFTMarket;