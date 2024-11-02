import React from "react";
import MarketCardMain from "../ArtMarketCard/MarketCardMain";
import SnapShot from "../Snapshot/SnapShot";
import MarketCategory from "../MarketTopSellers/MarketCategories";

import im1 from "../../assets/After Marylin.png";
import im2 from "../../assets/Frog.png";
import im3 from "../../assets/Landscapes-13.png";
import im4 from "../../assets/Landscapes-11.png";
import im5 from "../../assets/abq_pm_4.png";

const artworks3 =  [
  {
    image: im1,
    title: "After Marylin",
    artist: "Noura Al-Mutairi",
    initialLikes: 25700,
    initialViews: 50000,
  },
  {
    image: im4,
    title: "Landscapes (XI)",
    artist: "Ahmed Al-Turki",
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: im2,
    title: "Frog",
    artist: "Hanan Al-Ahmadi",
    initialLikes: 17400,
    initialViews: 30000,
  },
  {
    image: im3,
    title: "Landscapes (VIII)",
    artist: "Ahmed Al-Turki",
    initialLikes: 15400,
    initialViews: 25000,
  },
  {
    image: im5,
    title: "Untitled (2011)",
    artist: "Abdullah Qandeel",
    initialLikes: 18700,
    initialViews: 21000,
  },
];

const NFTMarket = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8">
        {artworks3.map((art, index) => (
          <MarketCardMain key={index} {...art} />
        ))}
      </div>

      <div className="bg-gray-200 mt-32">
        <MarketCategory  />
      </div>

      <footer className="bg-white py-8">
        <SnapShot />
      </footer>
    </div>
  );
};

export default NFTMarket;
