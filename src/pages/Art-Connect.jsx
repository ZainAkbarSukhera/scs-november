// import React from "react";

// import ConnectCardMain from '../components/ArtConnectCard/ConnectCardMain'; 

// import SearchBar from '../components/SearchBar/SearchBar';
// import CardViewToggle from '../components/ToggleView/ToggleView';
// import SortDropdown from '../components/SortDropdown/SortDropdown';
// import FilteredCards from '../components/DisciplineFilter/FilterCard';
// import Navbar from '../components/NavigationBar/Navbar';
// //// import ConnectFilterMenu from '../components/SideFilterMenu/ConnectFilterMenu';
// import SideFilters from '../components/SideFilterMenu/SideFilters';
// import { ConnectSideFilters } from "../static/data";

// import AbdulazizPortrait from '../assets/abdulaziz_profile.png';
// import Abdulaziz1 from '../assets/abdulaziz_1.png';
// import Abdulaziz2 from '../assets/abdulaziz_2.png';
// import Abdulaziz3 from '../assets/abdulaziz_3.png';

// import AbqPortrait from '../assets/abqandeelprofile.jpg';
// import abq1 from '../assets/abq3.png';
// import abq2 from '../assets/abq4.png';
// import abq3 from '../assets/abq5.png';

// import SofanaPortrait from '../assets/sofana_profile.png';
// import sofana1 from '../assets/sofana1.jpeg';
// import sofana2 from '../assets/sofana7.png';
// import sofana3 from '../assets/sofana6.png';

// import HadelPortrait from '../assets/hadel_profile.png';
// import hadel1 from '../assets/hadel1.png';
// import hadel2 from '../assets/hadel2.png';
// import hadel3 from '../assets/hadel3.png';

// import FawazPortrait from '../assets/fawaz_profile.jpeg';
// import fawaz1 from '../assets/fawaz1.jpg';
// import fawaz2 from '../assets/fawaz2.jpg';
// import fawaz3 from '../assets/fawaz3.jpg';

// import BaderPortrait from '../assets/bader_profile.jpeg';
// import bader1 from '../assets/bader1.jpg';
// import bader2 from '../assets/bader2.jpeg';
// import  bader3 from '../assets/bader3.jpeg';

// import DalyaPortrait from '../assets/dalya_profile.jpeg';
// import dalya1 from '../assets/dalya1.png';
// import dalya2 from '../assets/dalya2.png';
// import dalya3 from '../assets/dalya3.jpeg';

// import KhaledPortrait from '../assets/khaled_profile.jpeg';
// import khaled1 from '../assets/khaled1.jpg';
// import khaled2 from '../assets/khaled2.jpg';
// import khaled3 from '../assets/khaled3.jpg';

// import ShathaPortrait from '../assets/shatha_profile.jpeg';
// import shatha1 from '../assets/shatha1.png';
// import shatha2 from '../assets/shatha2.jpeg';
// import shatha3 from '../assets/shatha3.png';

// import SalamPortrait from '../assets/salam_profile.jpeg';
// import salam1 from '../assets/salam1.png';
// import salam2 from '../assets/salam2.png';
// import salam3 from '../assets/salam3.png';

// import RudwanPortrait from '../assets/rudwan_profile.jpeg';
// import rudwan1 from '../assets/rudwan1.png';
// import rudwan2 from '../assets/rudwan2.png';
// import rudwan3 from '../assets/rudwan3.png';

// import YazeedPortrait from '../assets/yazeed_profile.jpeg';
// import yazeed1 from '../assets/yazeed1.jpg';
// import yazeed2 from '../assets/yazeed2.png';
// import yazeed3 from '../assets/yazeed3.png';

// import MajedPortrait from '../assets/majed_profile.jpeg';
// import majed1 from '../assets/majed1.jpeg';
// import majed2 from '../assets/majed2.png';
// import majed3 from '../assets/majed3.jpg';

// import OmeralabdaliPortrait from '../assets/omarabdali_profile.jpeg';
// import omeralabdali1 from '../assets/omarabdali1.jpg';
// import omeralabdali2 from '../assets/omarabdali2.jpg';
// import omeralabdali3 from '../assets/omarabdali3.jpg';

// import HattanPortrait from '../assets/hattan_profile.jpeg';
// import hattan1 from '../assets/hattan1.jpg';
// import hattan2 from '../assets/hattan2.jpg';
// import hattan3 from '../assets/hattan3.png';

// import AlkadhiPortrait from '../assets/omaralkadhi_profile.jpeg';
// import alkadhi1 from '../assets/omaralkadhi1.jpg';
// import alkadhi2 from '../assets/omaralkadhi2.jpg';
// import alkadhi3 from '../assets/omaralkadhi3.jpg';

// import AljunaidPortrait from '../assets/ahmadaljunaid_profile.jpeg';
// import aljunaid1 from '../assets/ahmadaljunaid1.jpg';
// import aljunaid2 from '../assets/ahmadaljunaid2.jpg';
// import Aljunaid3 from '../assets/ahmadaljunaid3.jpeg';

// import ZiadPortrait from '../assets/ziad_profile.jpeg';
// import ziad1 from '../assets/ziad1.jpg';
// import ziad2 from '../assets/ziad2.png';
// import ziad3 from '../assets/ziad3.png';

// import AlharbiPortrait from '../assets/alharbi_profile.jpeg';
// import alharbi1 from '../assets/alharbi1.jpg';
// import alharbi2 from '../assets/alharbi2.jpeg';
// import alharbi3 from '../assets/alharbi3.jpeg';

// import Footer from "../components/Footer/footer";

// const sortOptions = ['Recommended','Newest','Oldest'];




// const ArtConnect = () => {

//   const creatives = [
//     {
//       profileImage: AbdulazizPortrait,
//       topImages: [Abdulaziz1,Abdulaziz2,Abdulaziz3],
//       name: 'Abdulaziz Albassam',
//       location: 'Khobar, Saudi Arabia',
//       profession: 'Typographic Designer',
//       initialLikes: 500000,
//       initialViews: 750000,
//     },
//     {
//       profileImage: AbqPortrait,
//       topImages: [abq1,abq2,abq3],
//       name: 'Abdullah Qandeel',
//       location: 'Jeddah, Saudi Arabia',
//       profession: 'Contemporary Artist',
//       initialLikes: 650000,
//       initialViews: 700000,
//     },
//     {
//       profileImage: SofanaPortrait,
//       topImages: [sofana1,sofana2,sofana3],
//       name: 'Sofana Dahlan',
//       location: 'Makkah, Saudi Arabia',
//       profession: 'Digital Artist',
//       initialLikes: 450000,
//       initialViews: 650000,
//     },
//     {
//       profileImage: HadelPortrait,
//       topImages: [hadel1,hadel2,hadel3],
//       name: 'Hadel Al-Saleh',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Graphic Designer',
//       initialLikes: 350000,
//       initialViews: 500000,
//     },
//     {
//       profileImage: FawazPortrait,
//       topImages: [fawaz1,fawaz2,fawaz3],
//       name: 'Fawaz Alotaibi',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Abstract Painter',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: BaderPortrait,
//       topImages: [bader1,bader2,bader3],
//       name: 'Bader Halawani',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Portrait Photographer',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: DalyaPortrait,
//       topImages: [dalya1,dalya2,dalya3],
//       name: 'Dalya Katoah',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Printmaker',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: KhaledPortrait,
//       topImages: [khaled1,khaled2,khaled3],
//       name: 'Khaled Alharbi',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Ceramic Sculptor',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: ShathaPortrait,
//       topImages: [shatha1,shatha2,shatha3],
//       name: 'Shatha Abuzinda',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Lettering Artist',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: SalamPortrait,
//       topImages: [salam1,salam2,salam3],
//       name: 'Salam Aljishi',
//       location: 'Khobar, Saudi Arabia',
//       profession: 'Illustrator',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: RudwanPortrait,
//       topImages: [rudwan1,rudwan2,rudwan3],
//       name: 'Rudwan Batterjee',
//       location: 'Jeddah, Saudi Arabia',
//       profession: 'Motion Graphics Designer',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: YazeedPortrait,
//       topImages: [yazeed1,yazeed2,yazeed3],
//       name: 'Yazeed Alyahya',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Product Photographer',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: MajedPortrait,
//       topImages: [majed1,majed2,majed3],
//       name: 'Majed  Alosailan',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Muralist',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: OmeralabdaliPortrait,
//       topImages: [omeralabdali1,omeralabdali2,omeralabdali3],
//       name: 'Omar Alabdali',
//       location: 'Jeddah, Saudi Arabia',
//       profession: 'Landscape Photographer',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: HattanPortrait,
//       topImages: [hattan1,hattan2,hattan3],
//       name: 'Hattan Rayes',
//       location: 'Jeddah, Saudi Arabia',
//       profession: 'Lithographer',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: AlkadhiPortrait,
//       topImages: [alkadhi1,alkadhi2,alkadhi3],
//       name: 'Omar Alkadhi',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Marble Sculptor',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage:AljunaidPortrait,
//       topImages: [aljunaid1,aljunaid2,Aljunaid3],
//       name: 'Ahmad Aljunaid',
//       location: 'Dhahran, Saudi Arabia',
//       profession: 'Calligrapher',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: ZiadPortrait,
//       topImages: [ziad1,ziad2,ziad3],
//       name: 'Ziad Alafaliq',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Visual Designert',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//     {
//       profileImage: AlharbiPortrait,
//       topImages: [alharbi1,alharbi2,alharbi3],
//       name: 'Mohammad Alharbi',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'Multimedia Specialist',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//   ];

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       {/* Navbar at the top */}
// //       <Navbar />
  
// //       {/* Main content area with FilterMenu and Cards */}
// //       <div className="flex flex-grow">
// //         {/* Sidebar filter menu on the left */}
// //         <aside className="w-1/5 p-4">
// //           <ConnectFilterMenu />
// //         </aside>
  
// //         {/* Main content area in the middle */}
// //         <main className="flex-grow p-8">
// //           {/* Search bar, toggle, and dropdown */}
// //           <div className="mb-4 font-montserrat-light">
// //             <SearchBar placeholderValue={"Search Creatives...."} />
// //           </div>
// //           <div className="flex justify-between items-center mb-4">
// //             <CardViewToggle />
// //             <SortDropdown options={sortOptions} />
// //           </div>
  
// //           {/* Filtered Cards */}
// //           <div className="mb-52"> {/* Added bottom margin to ensure spacing */}
// //             <FilteredCards />
// //           </div>
  
// //           {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
// //           <div className="grid grid-cols-4 gap-2 mt-8"> {/* Added margin-top for extra spacing */}
// //           {creatives.map((creative, index) => (
// //           <ConnectCardMain key={index} {...creative} />
// //         ))}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };  

// // export default ArtConnect;

// // const ArtConnect = () => {
//   return (
//      <div className="min-h-screen flex flex-col">
//        {/* Navbar at the top */}
//        <Navbar />
  
//        {/* Main content area with FilterMenu and Cards */}
//        <div className="flex flex-col  sm:flex-row md:flex-row ">
//          {/* Sidebar filter menu on the left for larger screens, on top for mobile */}
//          <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
//            {/* <ConnectFilterMenu /> */}
//            <SideFilters filter={ConnectSideFilters}/>
//          </aside>
  
//          {/* Main content area */}
//          <main className="flex-grow  md:p-8 ">
//            {/* Search bar, toggle, and dropdown */}
//            <div className="font-montserrat-light">
//              <SearchBar placeholderValue={"Search Creatives...."} />
//            </div>

//            {/* Filter controls (toggle and dropdown) */}
//            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-2">
//              <CardViewToggle />
//              <SortDropdown options={sortOptions} />
//            </div>
  
//            {/* Filtered Cards */}
//            <div className="flex flex-nowrap xs:mb-4" > {/* Added margin for better spacing */}
//              <FilteredCards />
//            </div>

//            {/* Cards Section */}
//            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-0">
//              {creatives.map((creative, index) => (
//                <ConnectCardMain key={index} {...creative} />
//              ))}
//            </div>
//          </main>
//       </div>
//       <Footer/>
//      </div>
//   );
// };

// export default ArtConnect;

import React, { useState, useEffect, useMemo, useCallback } from "react";

import ConnectCardMain from '../components/ArtConnectCard/ConnectCardMain';
import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilterComponent from '../components/DisciplineFilter/Filter'; // This is the component that uses workCategoryClassification
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { ConnectSideFilters } from "../static/data";
import Footer from "../components/Footer/footer";

import { getAllArtists } from '../api/artist';
import { getCreationDateFromObjectId } from '../utils/dateHelpers'; // <--- IMPORT THE HELPER

const sortOptions = ['Recommended', 'Newest', 'Oldest'];

const initializeFilterState = (filtersConfig) => {
    const initialState = {};
    filtersConfig.forEach(filterGroup => {
        initialState[filterGroup.id] = [];
    });
    return initialState;
};

const ArtConnect = () => {
    const [allArtists, setAllArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeFilters, setActiveFilters] = useState(() => initializeFilterState(ConnectSideFilters));
    const [searchText, setSearchText] = useState('');
    const [sortOrder, setSortOrder] = useState('Recommended');
    const [selectedDiscipline, setSelectedDiscipline] = useState('All'); // This will now control workCategoryClassification

    const [cardView, setCardView] = useState('grid');

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                console.log("Art-Connect: Starting data fetch.");
                setLoading(true);
                const data = await getAllArtists();
                console.log("Art-Connect: Data received from API.", data);

                if (Array.isArray(data)) {
                    // --- Debugging for `_id` presence ---
                    data.forEach(artist => {
                        if (!artist._id) {
                            console.warn(`Art-Connect Debug: Artist "${artist.fullNameEnglish}" is missing an '_id' field.`);
                        }
                    });
                    setAllArtists(data);
                } else {
                    setError("Received unexpected data format from API.");
                    console.error("Art-Connect Error: API did not return an array:", data);
                }
            } catch (err) {
                setError("Failed to fetch artists.");
                console.error("Art-Connect Error: Error fetching artists:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchArtists();
    }, []);

    const handleFilterChange = useCallback((filterId, value, isChecked) => {
        setActiveFilters(prevFilters => {
            if (filterId === 'resetAll') {
                return initializeFilterState(ConnectSideFilters);
            }

            const currentSelections = prevFilters[filterId] || [];
            let newSelections;

            // For single-select filters (experience, budget, availability)
            if (filterId === 'experience' || filterId === 'budget' || filterId === 'availability') {
                newSelections = isChecked ? [value] : [];
            } else { // For multi-select filters (skills, location)
                newSelections = isChecked
                    ? [...currentSelections, value]
                    : currentSelections.filter(item => item !== value);
            }
            return {
                ...prevFilters,
                [filterId]: newSelections,
            };
        });
    }, []);

    const handleDisciplineSelect = useCallback((disciplineName) => {
        // This disciplineName should now map to workCategoryClassification
        setSelectedDiscipline(disciplineName);
    }, []);

    const handleCardViewChange = useCallback((newView) => {
        setCardView(newView);
    }, []);

    const handleSortOptionChange = useCallback((newOption) => {
        console.log(`Art-Connect Debug: Sort option changed from "${sortOrder}" to "${newOption}"`);
        setSortOrder(newOption);
    }, [sortOrder]);


    const filteredAndSortedArtists = useMemo(() => {
        console.log(`Art-Connect Debug: Re-evaluating filteredAndSortedArtists. Current sort order: "${sortOrder}"`);

        let currentArtists = [...allArtists];

        // 1. Apply Search Filter
        if (searchText) {
            const lowerCaseSearchText = searchText.toLowerCase();
            currentArtists = currentArtists.filter(artist =>
                artist.fullNameEnglish?.toLowerCase().includes(lowerCaseSearchText) ||
                artist.fieldOfExpertise?.toLowerCase().includes(lowerCaseSearchText) ||
                artist.city?.toLowerCase().includes(lowerCaseSearchText) ||
                artist.country?.toLowerCase().includes(lowerCaseSearchText) ||
                artist.skills?.some(skill => skill.toLowerCase().includes(lowerCaseSearchText)) ||
                artist.workCategoryClassification?.toLowerCase().includes(lowerCaseSearchText) // Added for search
            );
        }

        // 2. Apply Discipline Filter (from FilterComponent - now based on workCategoryClassification)
        if (selectedDiscipline !== 'All') {
            currentArtists = currentArtists.filter(artist =>
                artist.workCategoryClassification?.toLowerCase() === selectedDiscipline.toLowerCase()
            );
        }

        // 3. Apply Side Filters (based on activeFilters state)
        Object.entries(activeFilters).forEach(([filterId, selectedValues]) => {
            if (selectedValues && selectedValues.length > 0) {
                currentArtists = currentArtists.filter(artist => {
                    // Skills filter
                    if (filterId === 'skills') {
                        // Ensure artist.skills is an array before using .some()
                        return artist.skills && artist.skills.some(skill =>
                            selectedValues.includes(skill)
                        );
                    }

                    if (filterId === 'availability') {
                        // Ensure artist.skills is an array before using .some()
                        return selectedValues.includes(artist.availability);
                    
                    }

                    // Experience filter
                    if (filterId === 'experience') {
                        // Match artist.experience directly (which is a string like "Beginner (0-2 years)")
                        // selectedValues will contain exactly one value for 'experience'
                        return selectedValues.includes(artist.experience);
                    }
                    // Location filter
                    if (filterId === 'location') {
                        const artistCity = artist.city
                        // const artistCountry = artist.country?.toLowerCase();
                        return selectedValues.some(loc =>
                            loc === artistCity 
                            // || loc.toLowerCase() === artistCountry
                        );
                    }
                    // Budget filter
                    if (filterId === 'budget') {
                        // Parse artist.budget to a number for comparison,
                        // handle 'free' or non-numeric values gracefully.
                        let artistBudgetNumeric;
                        if (String(artist.budget).toLowerCase() === 'free' || artist.budget === 0) {
                            artistBudgetNumeric = 0; // Treat 'free' or 0 as 0 for comparison
                        } else {
                            artistBudgetNumeric = parseFloat(String(artist.budget));
                            // If parsing fails (e.g., artist.budget is a non-numeric string), treat as NaN
                            if (isNaN(artistBudgetNumeric)) {
                                artistBudgetNumeric = null; // Or some other indicator to skip comparison
                            }
                        }

                        return selectedValues.some(budgetValue => {
                            // If artistBudgetNumeric is null, it means the artist's budget is invalid/unparseable for ranges
                            if (artistBudgetNumeric === null) {
                                return false;
                            }

                            switch (budgetValue) {
                                case 'free':
                                    return artistBudgetNumeric === 0;
                                case 'under-1000':
                                    return artistBudgetNumeric > 0 && artistBudgetNumeric < 1000;
                                case '1000-5000':
                                    return artistBudgetNumeric >= 1000 && artistBudgetNumeric <= 5000;
                                case '5000-10000':
                                    return artistBudgetNumeric >= 5000 && artistBudgetNumeric <= 10000;
                                case 'custom-budget':
                                    // This means the artist's budget should not fall into any of the predefined buckets.
                                    // You need to define what "custom-budget" means in terms of a range or specific criteria.
                                    // For now, it will return true if the budget is not 0 and not within the defined ranges.
                                    return artistBudgetNumeric > 0 &&
                                           !(artistBudgetNumeric < 1000) &&
                                           !(artistBudgetNumeric >= 1000 && artistBudgetNumeric <= 5000) &&
                                           !(artistBudgetNumeric >= 5000 && artistBudgetNumeric <= 10000);
                                default:
                                    return false;
                            }
                        });
                    }
                });
            }
        });

        // 4. Apply Sorting - NOW USING getCreationDateFromObjectId
        currentArtists.sort((a, b) => {
            // Get creation dates from _id, fallback to epoch if invalid _id
            const dateA = getCreationDateFromObjectId(a._id)?.getTime() || 0;
            const dateB = getCreationDateFromObjectId(b._id)?.getTime() || 0;

            if (sortOrder === 'Newest') {
                return dateB - dateA; // Descending order
            }
            if (sortOrder === 'Oldest') {
                return dateA - dateB; // Ascending order
            }
            return 0; // No change for 'Recommended'
        });

        console.log("Art-Connect Debug: First 5 artists after sort:", currentArtists.slice(0, 5).map(a => ({
            name: a.fullNameEnglish,
            _id: a._id, // Include _id in debug log
            createdAtDerived: getCreationDateFromObjectId(a._id)?.toISOString(), // Show derived date
            workCategoryClassification: a.workCategoryClassification, // Include new field for debug
            experience: a.experience, // Include new field for debug
            budget: a.budget // Include new field for debug
        })));

        return currentArtists;
    }, [allArtists, activeFilters, searchText, sortOrder, selectedDiscipline]);


    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center ">
                <p>Loading artists...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-col sm:flex-row md:flex-row ">
                <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
                    <SideFilters
                        filterConfig={ConnectSideFilters}
                        activeFilters={activeFilters}
                        onFilterChange={handleFilterChange}
                    />
                </aside>

                <main className="flex-grow md:p-8 ">
                    <div className="font-montserrat-light">
                        <SearchBar
                            placeholderValue={"Search Creatives...."}
                            searchTerm={searchText}
                            onSearch={setSearchText}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-2">
                        <CardViewToggle currentView={cardView} onViewChange={handleCardViewChange} />
                        <SortDropdown
                            options={sortOptions}
                            selectedOption={sortOrder}
                            onOptionChange={handleSortOptionChange}
                        />
                    </div>

                    <div className="font-montserrat-light absolute flex flex-col items-center lg:p-6 lg:mt-32 sm:mt-36">
                        <div className="flex flex-wrap justify-center ">
                            <FilterComponent
                                selectedFilter={selectedDiscipline}
                                onFilterSelect={handleDisciplineSelect}
                                className="text-xs md:text-sm p-1 md:p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className={`gap-4 mt-48 ${
                        cardView === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '
                            : 'flex flex-col'
                        }`}>
                        {filteredAndSortedArtists.length > 0 ? (
                            filteredAndSortedArtists.map((artist) => (
                                <ConnectCardMain key={artist._id} creative={artist} viewType={cardView} />
                            ))
                        ) : (
                            <div className="text-center col-span-full py-8 text-gray-600">
                                No artists found matching your criteria.
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ArtConnect;