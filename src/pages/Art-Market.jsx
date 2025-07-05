// import React, { useState } from 'react';

// import SearchBar from '../components/SearchBar/SearchBar';
// import CardViewToggle from '../components/ToggleView/ToggleView';
// import SortDropdown from '../components/SortDropdown/SortDropdown';
// import FilteredCards from '../components/DisciplineFilter/FilterCard';
// ////import BidCardMain from '../components/ArtBidCard/BidCardMain';
// // import MarketFilterMenu from '../components/SideFilterMenu/MarketFilterMenu';
// import Navbar from '../components/NavigationBar/Navbar';
// import SideFilters from '../components/SideFilterMenu/SideFilters';
// import { MarketSideFilters } from '../static/data';
// import { NFTSideFilters } from '../static/data';
// import { PrintSideFilters } from '../static/data';
// import {MarketCategories} from "../static/data";

// import PrimaryMarket from "../components/PrimaryMarket/PrimaryMarket";
// import SecondaryMarket from "../components/SecondaryMarket/SecondaryMarket";
// import NFTMarket from "../components/NFTMarket/NFTMarket";
// import PrintsMarket from "../components/PrintsMarket/PrintsMarket";
// import Footer from '../components/Footer/footer';

// import im1 from '../assets/After Marylin.png';
// import im2 from '../assets/Frog.png';
// import im3 from '../assets/Landscapes-13.png';
// import im4 from '../assets/Landscapes-11.png';

// import BidFooter from '../components/BidPageFooter/BidFooter';

// const artworks = [
//   {
//     image: im1,
//     title: 'After Marylin',
//     artist: 'Noura Al-Mutairi',
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: im4,
//     title: 'Landscapes (XI)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: im2,
//     title: 'Frog',
//     artist: 'Hanan Al-Ahmadi',
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
//   {
//     image: im3,
//     title: 'Landscapes (VIII)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 15400,
//     initialViews: 25000,
//   },
// ];


// const sortOptions = ['Recommended', 'Newest', 'Oldest'];

// const ArtMarket = () => {
//   const [selectedMarket, setSelectedMarket] = useState("PRIMARY MARKET");

//   // Function to render the appropriate market component based on selectedMarket
//   const renderMarketComponent = () => {
//     switch (selectedMarket) {
//       case "PRIMARY MARKET":
//         return <PrimaryMarket />;
//       case "SECONDARY MARKET":
//         return <SecondaryMarket />;
//       case "NFTs":
//         return <NFTMarket />;
//       case "PRINTS & SOUVENIRS":
//         return <PrintsMarket />;
//       default:
//         return null; // Return null if no matching case
//     }
//   };

//   const getFilters = () => {
//     if (selectedMarket === "NFTs") return NFTSideFilters;
//     if (selectedMarket === "PRINTS & SOUVENIRS") return PrintSideFilters;
//     return MarketSideFilters;
//   };


//   return (
//     <div className="min-h-screen flex flex-col">
//     {/* Navbar at the top */}
//     <Navbar />
  
//     {/* Main content area */}
//     <div className="flex flex-col xs:space-y-4 sm:flex-row md:flex-row space-y-6">
//       {/* Sidebar filter menu */}
//       <aside className="w-full xs:w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
//         <SideFilters filter={getFilters()} />
//       </aside>
  
//       {/* Main content area */}
//       <main className="flex-grow lg:p-2">
//         {/* Search bar */}
//         <div className="lg:mb-4 font-montserrat-light">
//           <SearchBar placeholderValue={"Search ArtWorks...."} />
//         </div>
  
//         {/* Filter controls */}
//         <div className="flex flex-col xs:space-y-2 md:space-y-0 md:flex-row justify-between items-start md:items-center mb-4">
//           <CardViewToggle />
//           <SortDropdown options={sortOptions} />
//         </div>
  
//         {/* Filtered Cards */}
//         <div>
//           <FilteredCards />
//         </div>
  
//         {/* Categories Section */}
//         <div className="container mx-auto p-2 bg-white xs:mt-4">
//           <div className="border-b border-gray-400 flex xs:flex-nowrap xs:space-y-2 sm:space-x-6 lg:justify-start xs:justify-center  mb-2">
//             {MarketCategories.map((category) => (
//               <button
//                 key={category}
//                 className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 ${
//                   selectedMarket === category
//                     ? "border-yankees-blue text-white bg-yankees-blue border-b-4 rounded-t-md"
//                     : "text-yankees-blue border-transparent"
//                 }`}
//                 onClick={() => setSelectedMarket(category)}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
  
//           {/* Render the selected market component */}
//           <div className="mt-4">
//             {renderMarketComponent()}
//           </div>
//         </div>
//       </main>
//     </div>
//     <Footer />
//   </div>
//   );
// };

// export default ArtMarket;



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { MarketSideFilters, NFTSideFilters, PrintSideFilters, MarketCategories } from '../static/data';
import PrimaryMarket from "../components/PrimaryMarket/PrimaryMarket";
import SecondaryMarket from "../components/SecondaryMarket/SecondaryMarket";
import NFTMarket from "../components/NFTMarket/NFTMarket";
import PrintsMarket from "../components/PrintsMarket/PrintsMarket";
import Footer from '../components/Footer/footer';
import { getAllMarketItems } from '../api/market';

// --- Ensure this import path is correct for your project ---
import { getCreationDateFromObjectId } from '../utils/dateHelpers';

const sortOptions = ['Recommended', 'Newest', 'Oldest'];

// Helper to initialize the side filter state based on the filter configuration
const initializeFilterState = (filtersConfig) => {
    const initialState = {};
    if (filtersConfig) {
        filtersConfig.forEach(filterGroup => {
            initialState[filterGroup.id] = [];
        });
    }
    console.log("initializeFilterState: ", initialState); // Corrected log to show the actual state
    return initialState;
};

const ArtMarket = () => {
    const [selectedMarket, setSelectedMarket] = useState("PRIMARY MARKET");
    const [marketData, setMarketData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // States for search, view, sort, and discipline filters
    const [searchText, setSearchText] = useState('');
    const [cardView, setCardView] = useState('grid'); // Default view
    const [selectedDiscipline, setSelectedDiscipline] = useState('All');
    const [sortOrder, setSortOrder] = useState('Recommended');

    // Determine which filter configuration to use for the current market
    const currentSideFilterConfig = useMemo(() => {
        if (selectedMarket === "NFTs") return NFTSideFilters;
        if (selectedMarket === "PRINTS & SOUVENIRS") return PrintSideFilters;
        return MarketSideFilters;
    }, [selectedMarket]);

    // State for side filters - initialized dynamically based on selected market
    const [activeSideFilters, setActiveSideFilters] = useState(() =>
        initializeFilterState(currentSideFilterConfig)
    );

    // Effect to reset side filters when the market category changes
    useEffect(() => {
        setActiveSideFilters(initializeFilterState(currentSideFilterConfig));
    }, [currentSideFilterConfig]);


    // Helper function to standardize displayOption strings for consistent filtering
    const toDisplayOptionFilterString = useCallback((option) => {
        if (!option) return 'UNKNOWN'; // Default fallback for undefined/null

        const trimmed = option.trim().toUpperCase();

        // These exact strings should match your MarketCategories array from static/data.js
        if (trimmed === "PRIMARY MARKET") return "PRIMARY MARKET";
        if (trimmed === "SECONDARY MARKET") return "SECONDARY MARKET";
        if (trimmed === "NFTS") return "NFTs";
        // Handle variations of "Prints & Souvenirs"
        if (trimmed.includes("PRINTS") && trimmed.includes("SOUVENIRS")) {
            return "PRINTS & SOUVENIRS";
        }
        return 'UNKNOWN'; // Fallback if no specific match
    }, []);

    // Helper function for converting other string values to lowercase-hyphenated format
    const toLowerHyphen = useCallback((str) => {
        if (!str) return '';
        // Special handling for '1 of 1 (Unique)' to match '1of1' in filters
        if (str.toLowerCase().trim() === '1 of 1 (unique)') {
            return '1of1';
        }
        // Converts strings like "Signed by Artist" to "signed-by-artist"
        // Also handles "Signed" or "Unsigned" if they appear as main values
        return str.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '').trim();
    }, []);


    // Effect to fetch market data
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                setLoading(true);
                const data = await getAllMarketItems();
                console.log("1. Raw data from getAllMarketItems:", data); // Log raw data

                const formattedData = data.map(item => {
                    const artwork = item.artwork || {}; // Ensure artwork is an object

                    return {
                        image: item.image,
                        title: artwork.title || 'No Title',
                        artist: item.artist ? item.artist.fullNameEnglish : 'Unknown Artist',
                        initialLikes: item.likes,
                        initialViews: artwork.profileViews,
                        _id: item._id, // Ensure _id is always present and accessible
                        artworkId: artwork._id,
                        yearOfCreation: artwork.yearOfCreation || '',
                        // CRITICAL: Use the standardization helper here for displayOption
                        displayOption: toDisplayOptionFilterString(artwork.displayOption),

                        // Convert these fields to match filter values using toLowerHyphen
                        category: artwork.category,
                        format: artwork.format,
                        size: artwork.size || 'unknown', // Keep original for mapping functions
                        price: parseFloat(artwork.price) || 0,
                        location: artwork.location,
                        style: artwork.style,
                        theme: artwork.theme,
                        intermediary: artwork.intermediary,
                        // Map availability 'available' to 'available-now' for consistency
                        availability: artwork.availability,
                        // ?.toLowerCase() === 'available' ? 'available-now' : toLowerHyphen(artwork.availability),
                        framingOptions: artwork.framingOptions,
                        shipping: artwork.shipping,
                        // Map rarity to '1of1' if it's 'unique' or '1 of 1 (Unique)', otherwise toLowerHyphen
                        rarity: artwork.rarity,
                        // .toLowerCase() === 'unique' || artwork.rarity?.toLowerCase() === '1 of 1 (unique)'
                        //     ? '1of1'
                        //     : toLowerHyphen(artwork.rarity),
                        signatureByArtist: artwork.signatureByArtist,
                        licensing: artwork.licensing, // Added licensing for NFTs
                        // Certifications array needs to be consistent too
                        certifications: Array.isArray(artwork.certifications)
                            ? artwork.certifications.map(c => c)
                            : [],
                        // Prefer artwork.createdAt if robust, otherwise rely on getCreationDateFromObjectId
                        createdAt: artwork.createdAt?.$date ? new Date(artwork.createdAt.$date) : undefined,

                        images: toDisplayOptionFilterString(artwork.displayOption) === "PRINTS & SOUVENIRS"
                            ? (artwork.images ? artwork.images.map(imgObj => ({ url: imgObj.url })) : [{ url: item.image }])
                            : undefined,
                    };
                });

                console.log("2. Formatted Data (after standardization): ", formattedData); // Log formatted data
                setMarketData(formattedData);
            } catch (err) {
                setError(err.message || 'Failed to fetch market data');
                console.error("Error fetching market data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMarketData();
    }, [toDisplayOptionFilterString, toLowerHyphen]); // Depend on memoized helpers


    // Handlers for search, toggle, sort, and discipline (already wrapped in useCallback)
    const handleSearchChange = useCallback((value) => {
        setSearchText(value);
    }, []);

    const handleCardViewChange = useCallback((newView) => {
        setCardView(newView);
    }, []);

    const handleSortOptionChange = useCallback((newOption) => {
        setSortOrder(newOption);
    }, []);

    const handleDisciplineSelect = useCallback((disciplineName) => {
        setSelectedDiscipline(disciplineName);
    }, []);

    const handleSideFilterChange = useCallback((filterId, value, isChecked) => {
        setActiveSideFilters(prevFilters => {
            if (filterId === 'resetAll') {
                return initializeFilterState(currentSideFilterConfig);
            }

            const currentSelections = prevFilters[filterId] || [];
            let newSelections;

            if (isChecked) {
                newSelections = [...currentSelections, value];
            } else {
                newSelections = currentSelections.filter(item => item !== value);
            }
            return {
                ...prevFilters,
                [filterId]: newSelections,
            };
        });
    }, [currentSideFilterConfig]);

    // Helper functions for size mapping, wrapped in useCallback
    const mapArtworkSizeToCategory = useCallback((sizeString) => {
        if (!sizeString) return 'unknown';

        const cleanedSize = sizeString.toLowerCase().replace(/cm|in|m|px/g, '');
        const parts = cleanedSize.split(/x|\s*x\s*/).map(s => parseFloat(s.trim()));

        if (parts.length >= 1 && !isNaN(parts[0])) {
            const firstDim = parts[0]; // Only consider the first dimension for categorization

            if (firstDim < 50) return 'small'; // Under 50 cm
            if (firstDim >= 50 && firstDim <= 100) return 'medium'; // 50 - 100 cm
            if (firstDim > 100 && firstDim <= 150) return 'large'; // 100-150 cm
            if (firstDim > 150) return 'extra-large'; // Above 150 cm
        }
        return 'unknown';
    }, []);

    const mapDigitalSizeToCategory = useCallback((sizeString) => {
        if (!sizeString) return 'unknown';
        const lowerSize = sizeString.toLowerCase();

        // Direct matches for common digital size descriptors
        if (lowerSize.includes('under 1000 x 1000 pixels') || lowerSize.includes('under 8 x 10 inches')) return 'small';
        if (lowerSize.includes('up to 3000 x 3000 pixels') || lowerSize.includes('under 11 x 14 inches')) return 'medium';
        if (lowerSize.includes('above 3000 x 3000 pixels') || lowerSize.includes('under 16 x 20 inches')) return 'large';

        // Extract pixel dimensions if present (e.g., "1920x1080 pixels")
        const pixelMatch = lowerSize.match(/(\d+)\s*x\s*(\d+)\s*pixels/);
        if (pixelMatch) {
            const maxPx = Math.max(parseInt(pixelMatch[1]), parseInt(pixelMatch[2]));
            if (maxPx < 1000) return 'small';
            if (maxPx <= 3000) return 'medium';
            if (maxPx > 3000) return 'large';
        }
        return 'custom'; // For sizes that don't fit predefined categories
    }, []);


    // Combined Filtering and Sorting Logic for market items
    const filteredAndSortedMarketItems = useMemo(() => {
        console.log("3. selectedMarket state:", selectedMarket); // Log current selected market
        console.log("4. marketData before filtering:", marketData); // Log all formatted data

        // Initial filtering by selected market display option
        let currentItems = marketData.filter(item => {
            const matches = item.displayOption === selectedMarket;
            // console.log(`Item ID: ${item._id}, displayOption: ${item.displayOption}, selectedMarket: ${selectedMarket}, Match: ${matches}`); // Detailed match check
            return matches;
        });

        console.log("5. After initial displayOption filter (currentItems):", currentItems); // Log items after displayOption filter

        // 1. Apply Search Filter
        if (searchText) {
            const lowerCaseSearchText = searchText.toLowerCase();
            currentItems = currentItems.filter(item =>
                item.title?.toLowerCase().includes(lowerCaseSearchText) ||
                item.artist?.toLowerCase().includes(lowerCaseSearchText) ||
                item.category?.toLowerCase().includes(lowerCaseSearchText) ||
                item.format?.toLowerCase().includes(lowerCaseSearchText) ||
                item.style?.toLowerCase().includes(lowerCaseSearchText) ||
                item.theme?.toLowerCase().includes(lowerCaseSearchText)
            );
        }

        // 2. Apply Discipline Filter (from FilteredCards/FilterComponent)
        if (selectedDiscipline && selectedDiscipline !== 'All') {
            currentItems = currentItems.filter(item =>
                item.category?.toLowerCase() === selectedDiscipline.toLowerCase()
            );
        }

        // 3. Apply Side Filters
        Object.entries(activeSideFilters).forEach(([filterId, selectedValues]) => {
            if (selectedValues && selectedValues.length > 0) {
                currentItems = currentItems.filter(item => {
                    switch (filterId) {
                        case 'categories':
                            // console.log("Categories value:", item.category);
                            return selectedValues.includes(item.category);

                        case 'format':
                            // console.log("Format value:", item.format);
                            return selectedValues.includes(item.format);

                        case 'size':
                            {
                                let itemSizeCategory;
                                // Determine which mapping function to use based on the current market
                                if (selectedMarket === "NFTs" || selectedMarket === "PRINTS & SOUVENIRS") {
                                    itemSizeCategory = mapDigitalSizeToCategory(item.size);
                                    // console.log("NFT Digital size value:", item.size, "->", itemSizeCategory);
                                } else {
                                    itemSizeCategory = mapArtworkSizeToCategory(item.size);
                                    // console.log("Artwork size value:", item.size, "->", itemSizeCategory);
                                }
                                return selectedValues.includes(itemSizeCategory);
                            }
                        case 'certifications':
                            return selectedValues.some(val => {
                                // Check if any of the item's certifications match the selected filter value
                                if (item.certifications.includes(val)) return true;
                                // Special mapping for 'signed-by-artist' filter option
                                if (val === 'signed-by-artist' && item.signatureByArtist === 'signed-by-artist') return true;
                                // Special mapping for 'copyrighted' filter option
                                if (val === 'copyrighted' && item.certifications.includes('copyrighted-by-saip-registration')) return true;
                                return false;
                            });

                        case 'location':
                            // console.log("Location value:", item.location);
                            return selectedValues.includes(item.location);

                        case 'price-range':
                            {
                                const itemPrice = item.price;
                                // console.log("Item price:", itemPrice, "Selected market:", selectedMarket);
                                return selectedValues.some(rangeOption => {
                                    if (selectedMarket === "NFTs") {
                                        switch (rangeOption) {
                                            case 'under-500': return itemPrice < 500;
                                            case '500-2000': return itemPrice >= 500 && itemPrice <= 2000;
                                            case '2000-10000': return itemPrice >= 2000 && itemPrice <= 10000;
                                            case 'above-10000': return itemPrice > 10000;
                                            case 'auction / bid-based': return false; // This requires specific logic if auctions are present
                                            default: return false;
                                        }
                                    } else if (selectedMarket === "PRINTS & SOUVENIRS") {
                                        // Note: Your data.js uses 'under-50', '50-100', etc. without 'sar-' prefix
                                        switch (rangeOption) {
                                            case 'under-50': return itemPrice < 50;
                                            case '50-100': return itemPrice >= 50 && itemPrice <= 100;
                                            case '100-200': return itemPrice >= 100 && itemPrice <= 200;
                                            case '200-500': return itemPrice >= 200 && itemPrice <= 500;
                                            case 'above-500': return itemPrice > 500;
                                            default: return false;
                                        }
                                    } else { // Primary/Secondary Market
                                        switch (rangeOption) {
                                            case 'under-5000': return itemPrice < 5000;
                                            case '5000-20000': return itemPrice >= 5000 && itemPrice <= 20000;
                                            case '20000-50000': return itemPrice >= 20000 && itemPrice <= 50000;
                                            case '50000-100000': return itemPrice >= 50000 && itemPrice <= 100000;
                                            case 'above-100000': return itemPrice > 100000;
                                            default: return false;
                                        }
                                    }
                                });
                            }

                        case 'style':
                            // console.log("Style option:", item.style);
                            return selectedValues.includes(item.style);

                        case 'themes':
                            // console.log("Theme option:", item.theme);
                            return selectedValues.includes(item.theme);

                        case 'year-of-creation':
                            {
                                const currentYear = new Date().getFullYear();
                                const itemYear = parseInt(item.yearOfCreation);
                                const creationDateFromId = getCreationDateFromObjectId(item._id);
                                const effectiveItemCreatedAt = item.createdAt || creationDateFromId; // Prefer artwork.createdAt if available

                                return selectedValues.some(yearOption => {
                                    if (selectedMarket === "NFTs" || selectedMarket === "PRINTS & SOUVENIRS") {
                                        // Time-based checks for NFTs/Prints using effectiveItemCreatedAt
                                        const now = new Date();
                                        const sevenDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
                                        const thirtyDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);

                                        if (yearOption === 'new-release' && effectiveItemCreatedAt) {
                                            return effectiveItemCreatedAt >= sevenDaysAgo;
                                        }
                                        if (yearOption === 'last 30 days' && effectiveItemCreatedAt) {
                                            return effectiveItemCreatedAt >= thirtyDaysAgo;
                                        }
                                        if (yearOption === 'older' && effectiveItemCreatedAt) {
                                            return effectiveItemCreatedAt < thirtyDaysAgo;
                                        }
                                    } else {
                                        // Year-based checks for Market (Primary/Secondary)
                                        const yearToCompare = !isNaN(itemYear) && itemYear > 0 ? itemYear : (creationDateFromId ? creationDateFromId.getFullYear() : null);

                                        if (!yearToCompare) return false; // Filter out if no valid year

                                        if (yearOption === 'recent') { // Last 1-2 Years
                                            return yearToCompare >= (currentYear - 2);
                                        }
                                        if (yearOption === 'within-5-years') {
                                            return yearToCompare >= (currentYear - 5);
                                        }
                                        if (yearOption === 'older-works') { // 5+ Years
                                            return yearToCompare < (currentYear - 5);
                                        }
                                    }
                                    return false;
                                });
                            }

                        case 'intermediaries':
                            return selectedValues.includes(item.intermediary);

                        case 'availability':
                            // console.log("Availability value:", item.availability);
                            return selectedValues.includes(item.availability);

                        case 'framing-options':
                            // console.log("Framing options:", item.framingOptions);
                            return selectedValues.includes(item.framingOptions);

                        case 'shipping':
                            // console.log("Shipping value:", item.shipping);
                            return selectedValues.includes(item.shipping);

                        case 'rarity': // Handles both edition and rarity for NFTs
                            // console.log("Rarity value:", item.rarity);
                            return selectedMarket === "NFTs" && selectedValues.includes(item.rarity);

                        case 'licensing': // Handles 'licensing' filter specifically for NFTs
                            // console.log("Licensing value:", item.licensing);
                            return selectedMarket === "NFTs" && selectedValues.includes(item.licensing);

                        default:
                            return true; // If filterId is not matched, don't filter anything out
                    }
                });
            }
        });

        // 4. Apply Sorting
        currentItems.sort((a, b) => {
            // Get creation dates, prioritizing 'createdAt' from artwork if available, otherwise _id
            const dateA = a.createdAt?.getTime() || (getCreationDateFromObjectId(a._id)?.getTime() || 0);
            const dateB = b.createdAt?.getTime() || (getCreationDateFromObjectId(b._id)?.getTime() || 0);

            if (sortOrder === 'Newest') {
                return dateB - dateA; // Descending (Newest first)
            }
            if (sortOrder === 'Oldest') {
                return dateA - dateB; // Ascending (Oldest first)
            }
            return 0; // 'Recommended' or default: maintains original order
        });

        console.log("6. Final filteredAndSortedMarketItems for current market:", currentItems); // Log final filtered items
        return currentItems;
    }, [
        marketData,
        selectedMarket,
        searchText,
        selectedDiscipline,
        sortOrder,
        activeSideFilters,
        mapArtworkSizeToCategory,
        mapDigitalSizeToCategory
    ]);

    const renderMarketComponent = () => {
        if (loading) return <div className="text-center py-4">Loading artworks...</div>;
        if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

        switch (selectedMarket) {
            case "PRIMARY MARKET":
                return <PrimaryMarket artworks={filteredAndSortedMarketItems} cardView={cardView} />;
            case "SECONDARY MARKET":
                return <SecondaryMarket artworks={filteredAndSortedMarketItems} cardView={cardView} />;
            case "NFTs":
                console.log("7. Passing to NFTMarket (filteredAndSortedMarketItems for NFTs):", filteredAndSortedMarketItems); // Log data passed to NFTMarket
                return <NFTMarket artworks={filteredAndSortedMarketItems} cardView={cardView} />;
            case "PRINTS & SOUVENIRS":
                console.log("7. Passing to PrintsMarket (filteredAndSortedMarketItems for PRINTS & SOUVENIRS):", filteredAndSortedMarketItems); // Log data passed to PrintsMarket
                return <PrintsMarket artworks={filteredAndSortedMarketItems} cardView={cardView} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col xs:space-y-4 sm:flex-row md:flex-row space-y-6">
                <aside className="w-full xs:w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
                    <SideFilters
                        filterConfig={currentSideFilterConfig}
                        activeFilters={activeSideFilters}
                        onFilterChange={handleSideFilterChange}
                    />
                </aside>

                <main className="flex-grow lg:p-2">
                    <div className="lg:mb-4 font-montserrat-light">
                        <SearchBar
                            placeholderValue={"Search ArtWorks...."}
                            searchTerm={searchText}
                            onSearch={handleSearchChange}
                        />
                    </div>

                    <div className="flex flex-col xs:space-y-2 md:space-y-0 md:flex-row justify-between items-start md:items-center mb-4">
                        <CardViewToggle
                            currentView={cardView}
                            onViewChange={handleCardViewChange}
                        />
                        <SortDropdown
                            options={sortOptions}
                            selectedOption={sortOrder}
                            onOptionChange={handleSortOptionChange}
                        />
                    </div>

                    <div>
                        <FilteredCards
                            selectedDiscipline={selectedDiscipline}
                            onDisciplineSelect={handleDisciplineSelect}
                        />
                    </div>

                    <div className="container mx-auto p-2 bg-white xs:mt-4">
                        <div className="border-b border-gray-400 flex xs:flex-nowrap xs:space-y-2 sm:space-x-6 lg:justify-start xs:justify-center mb-2 overflow-x-auto pb-2">
                            {MarketCategories.map((category) => (
                                <button
                                    key={category}
                                    className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 whitespace-nowrap ${
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

                        <div className="mt-4">
                            {renderMarketComponent()}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ArtMarket;