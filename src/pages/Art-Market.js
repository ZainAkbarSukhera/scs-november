import React, { useState } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
////import BidCardMain from '../components/ArtBidCard/BidCardMain';
// import MarketFilterMenu from '../components/SideFilterMenu/MarketFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { MarketSideFilters } from '../static/data';
import { NFTSideFilters } from '../static/data';
import { PrintSideFilters } from '../static/data';
import {MarketCategories} from "../static/data";

import PrimaryMarket from "../components/PrimaryMarket/PrimaryMarket";
import SecondaryMarket from "../components/SecondaryMarket/SecondaryMarket";
import NFTMarket from "../components/NFTMarket/NFTMarket";
import PrintsMarket from "../components/PrintsMarket/PrintsMarket";

import im1 from '../assets/After Marylin.png';
import im2 from '../assets/Frog.png';
import im3 from '../assets/Landscapes-13.png';
import im4 from '../assets/Landscapes-11.png';

import BidFooter from '../components/BidPageFooter/BidFooter';

const artworks = [
  {
    image: im1,
    title: 'After Marylin',
    artist: 'Noura Al-Mutairi',
    initialLikes: 25700,
    initialViews: 50000,
  },
  {
    image: im4,
    title: 'Landscapes (XI)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: im2,
    title: 'Frog',
    artist: 'Hanan Al-Ahmadi',
    initialLikes: 17400,
    initialViews: 30000,
  },
  {
    image: im3,
    title: 'Landscapes (VIII)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 15400,
    initialViews: 25000,
  },
];


const sortOptions = ['Recommended', 'Newest', 'Oldest'];

const ArtMarket = () => {
  const [selectedMarket, setSelectedMarket] = useState("PRIMARY MARKET");

  // Function to render the appropriate market component based on selectedMarket
  const renderMarketComponent = () => {
    switch (selectedMarket) {
      case "PRIMARY MARKET":
        return <PrimaryMarket />;
      case "SECONDARY MARKET":
        return <SecondaryMarket />;
      case "NFTs":
        return <NFTMarket />;
      case "PRINTS & SOUVENIRS":
        return <PrintsMarket />;
      default:
        return null; // Return null if no matching case
    }
  };

  const getFilters = () => {
    if (selectedMarket === "NFTs") return NFTSideFilters;
    if (selectedMarket === "PRINTS & SOUVENIRS") return PrintSideFilters;
    return MarketSideFilters;
  };


  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-col  sm:flex-row md:flex-row space-y-6">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
        <SideFilters filter={getFilters()} />
      </aside>
  
        {/* Main content area in the middle */}
        <main className="flex-grow p-2">
          {/* Search bar, toggle, and dropdown */}
          <div className="mb-4 font-montserrat-light">
            <SearchBar  placeholderValue={"Search ArtWorks...."}/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <CardViewToggle />
            <SortDropdown options={sortOptions} />
          </div>
  
          {/* Filtered Cards */}
          <div >
            <FilteredCards />
          </div>

        <div className="container mx-auto p-2 bg-white">
      {/* Categories */}
      <div className="border-b border-gray-400 flex space-x-6 justify-start mb-2">
        {MarketCategories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 ${
              selectedMarket === category
                  ? "border-yankees-blue text-white bg-yankees-blue border-b-4 rounded-t-md"
                : "text-yankees-blue border-transparent"
            }`}
            onClick={() => setSelectedMarket(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render the selected market component */}
      <div className="mt-4">
        {renderMarketComponent()}
      </div>
      
    </div>
  
          {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
          {/* <MarketProfile /> */}

          {/* Footer */}
          {/* <footer className="bg-gray-200 mt-auto">
            <BidFooter />
          </footer> */}
        </main>
      </div>
    </div>
  );
};

export default ArtMarket;
