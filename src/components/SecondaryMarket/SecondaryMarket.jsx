// import React from "react";
// import MarketCardMain from "../ArtMarketCard/MarketCardMain";
// import SnapShot from "../Snapshot/SnapShot";
// import MarketCategory from "../MarketTopSellers/MarketCategories";

// import im1 from "../../assets/After Marylin.png";
// import im2 from "../../assets/Frog.png";
// import im3 from "../../assets/Landscapes-13.png";
// import im4 from "../../assets/Landscapes-11.png";
// import im5 from "../../assets/abq_pm_4.png";
// import im6 from "../../assets/fawaz2.jpg";
// import im7 from "../../assets/abq_pm_6.PNG";
// import im8 from "../../assets/abq_pm_2.jpg";

// const artworks2 =  [
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
// ];

// const SecondaryMarket = () => {
//   return (
//     <div>
//     {/* Grid for artworks, adjusted for xs screens */}
//     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8">
//       {artworks2.map((art, index) => (
//         <MarketCardMain key={index} {...art} />
//       ))}
//     </div>
  
//     {/* Market Category section */}
//     <div className="bg-gray-200 mt-32 xs:mt-16">
//       <MarketCategory />
//     </div>
  
//     {/* Footer */}
//     <footer className="bg-white py-8 xs:py-6">
//       <SnapShot />
//     </footer>
//   </div>
//   );
// };

// export default SecondaryMarket;


import React from "react";
import MarketCardMain from "../ArtMarketCard/MarketCardMain";
import SnapShot from "../Snapshot/SnapShot";
import MarketCategory from "../MarketTopSellers/MarketCategories";

const SecondaryMarket = ({ artworks, cardView }) => { // Accept artworks and cardView as props
  // Determine the grid/list class based on cardView prop
  const cardContainerClass = cardView === 'grid'
    ? "grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8"
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

      {/* Market Category section */}
      <div className="bg-gray-200 mt-32 xs:mt-16">
        <MarketCategory />
      </div>

      {/* Footer (assuming SnapShot acts as a footer in this context) */}
      <footer className="bg-white py-8 xs:py-6">
        <SnapShot />
      </footer>
    </div>
  );
};

export default SecondaryMarket;