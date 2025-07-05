// import React from "react";

// import MarketCardMain from "../ArtMarketCard/MarketCardMain";
// import SnapShot from "../Snapshot/SnapShot";
// import MarketCategory from "../MarketTopSellers/MarketCategories";

// import im1 from "../../assets/After Marylin.png";
// import im2 from "../../assets/Frog.png";
// import im3 from "../../assets/Landscapes-13.png";
// import abq2 from '../../assets/Landscapes-11.png';
// import abq8 from '../../assets/abq8.png';
// import abq9 from '../../assets/abq9.png';
// import abq10 from '../../assets/abq10.png';
// import abq11 from '../../assets/abq11.png';
// import abq12 from '../../assets/abq12.png';
// import PrintSouvenirsCard from "../ArtMarketCard/PrintSouvenirsCard";

// const artworks4 =  [
//   {
//     image: im1,
//     title: "After Marylin",
//     artist: "Noura Al-Mutairi",
//     initialLikes: 25700,
//     initialViews: 50000,
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
// ];

// const prints_souvenirs = {
//   images:[abq2, abq8, abq9, abq10, abq11, abq12],
//   name: 'Will-Battle (2021)',
//   artist: 'Abdullah Qandeel',
// };

// const PrintsMarket = () => {
//   return (
//     <div>
//     <div className="flex justify-between mb-8">

//       <PrintSouvenirsCard printData={prints_souvenirs} />
//     </div>

//     <div className="bg-gray-200 mt-32">
//       <MarketCategory />
//     </div>

//     <footer className="bg-white py-8">
//       <SnapShot />
//     </footer>
//   </div>
//   );
// };

// export default PrintsMarket;

// import React from "react";
// import SnapShot from "../Snapshot/SnapShot";
// import MarketCategory from "../MarketTopSellers/MarketCategories";
// import PrintSouvenirsMarketCard from "../ArtMarketCard/PrintSouvenirsMarketCard";

// const PrintsMarket = ({ artworks, cardView }) => { // Accept artworks and cardView as props



//   const formattedPrints = artworks.map(artwork => {
//     let processedImages = [];
  
//     if (artwork.images && Array.isArray(artwork.images)) {
//       processedImages = artwork.images.map(img => ({
//         url: img.url || '',
//         altText: img.altText || artwork.title || 'Print Image'
//       }));
//     } else if (artwork.image) {
//       processedImages = [{ url: artwork.image, altText: artwork.title || 'Print Image' }];
//     }

//     return {
//       ...artwork,
//       allImages: processedImages // Ensure allImages holds the processed array
//     };
//   });

//   console.log("formatted prints yahaan check karein: ", formattedPrints); // Keep for debugging if needed

//   return (
//     <div>
//       {/* Pass the fully formatted array AND cardView to PrintSouvenirsMarketCard */}
//       {/* PrintSouvenirsMarketCard will handle the internal mapping and layout based on cardView */}
//       <div className="flex flex-wrap justify-between mb-8">
//         <PrintSouvenirsMarketCard printData={formattedPrints} cardView={cardView} />
//       </div>

//       <div className="bg-gray-200 mt-32">
//         <MarketCategory />
//       </div>

//       <footer className="bg-white py-8">
//         <SnapShot />
//       </footer>
//     </div>
//   );
// };

// export default PrintsMarket;

import React from "react";
import SnapShot from "../Snapshot/SnapShot";
import MarketCategory from "../MarketTopSellers/MarketCategories";
import PrintSouvenirsMarketCard from "../ArtMarketCard/PrintSouvenirsMarketCard";

const PrintsMarket = ({ artworks, cardView }) => { // Accept artworks and cardView as props



  const formattedPrints = artworks.map(artwork => {
    let processedImages = [];
  
    if (artwork.images && Array.isArray(artwork.images)) {
      processedImages = artwork.images.map(img => ({
        url: img.url || '',
        altText: img.altText || artwork.title || 'Print Image'
      }));
    } else if (artwork.image) {
      processedImages = [{ url: artwork.image, altText: artwork.title || 'Print Image' }];
    }

    return {
      ...artwork,
      allImages: processedImages // Ensure allImages holds the processed array
    };
  });

  console.log("formatted prints yahaan check karein: ", formattedPrints); // Keep for debugging if needed

  return (
    <div>
      {/* Pass the fully formatted array AND cardView to PrintSouvenirsMarketCard */}
      {/* PrintSouvenirsMarketCard will handle the internal mapping and layout based on cardView */}
      <div className="flex flex-wrap justify-between mb-8">
        <PrintSouvenirsMarketCard printData={formattedPrints} cardView={cardView} />
      </div>

      <div className="bg-gray-200 mt-32">
        <MarketCategory />
      </div>

      <footer className="bg-white py-8">
        <SnapShot />
      </footer>
    </div>
  );
};

export default PrintsMarket;