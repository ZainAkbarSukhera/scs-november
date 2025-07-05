import React, { createContext, useState } from 'react';
import { MarketCategories, sortOptions } from '../static/data'; // Assuming data.js is in src/static/

// Create the context
export const ArtMarketContext = createContext();

// Create a Provider component to wrap your application or relevant part
export const ArtMarketProvider = ({ children }) => {
  // State for the main market category selection (e.g., "PRIMARY MARKET", "NFTs")
  const [selectedMarket, setSelectedMarket] = useState(MarketCategories[0]); // Default to the first market category

  // State for all the active side filter options
  // This will be an object where keys are filter IDs (e.g., 'categories', 'price-range')
  // and values are arrays of selected option objects (e.g., [{ label: "Painting", value: "painting" }])
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({});

  // State for the selected sorting option (e.g., "Newest", "Oldest")
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]); // Default to the first sort option

  // The value that will be provided to consumers of this context
  const contextValue = {
    selectedMarket,
    setSelectedMarket,
    selectedFilterOptions,
    setSelectedFilterOptions,
    selectedSortOption,
    setSelectedSortOption,
  };

  return (
    <ArtMarketContext.Provider value={contextValue}>
      {children}
    </ArtMarketContext.Provider>
  );
};