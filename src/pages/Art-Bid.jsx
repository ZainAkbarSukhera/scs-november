// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import SearchBar from '../components/SearchBar/SearchBar';
// import CardViewToggle from '../components/ToggleView/ToggleView';
// import SortDropdown from '../components/SortDropdown/SortDropdown';
// import FilteredCards from '../components/DisciplineFilter/FilterCard';
// import BidCardMain from '../components/ArtBidCard/BidCardMain';
// //// import FilterMenu from '../components/SideFilterMenu/BidFilterMenu';
// import Navbar from '../components/NavigationBar/Navbar';
// import SideFilters from '../components/SideFilterMenu/SideFilters';
// import { BidSideFilters } from '../static/data';
// import Footer from '../components/Footer/footer';

// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';
// import image6 from '../assets/alWaleedLogo.png';
// import image7 from '../assets/redseagloballogo.JPG';
// import image8 from '../assets/alulalogo.png';
// import BidFooter from '../components/BidPageFooter/BidFooter';


// const sortOptions = ['Recommended','Newest','Oldest'];


// const ArtBid = () => {

//   const navigate=useNavigate();
 
//   const projects = [
//     {
//       image: image1,
//       title: 'Calligraphy Initiative',
//       hostedBy:'Saudi Aramco',
//       deadline: 'November 15, 2024',
//       eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//       prize:'SAR 75,000 cash prize and featured in exhibitions in Aramco’s cultural centers',
//     },
//     {
//       image: image2,
//       title: 'Visual Arts Residency',
//       hostedBy:'Neom',
//       deadline: 'December 15, 2024',
//       eligibility: 'Open to Saudi and international artists aged 18 and above with a strong portfolio in visual arts',
//       prize:'SAR 100,000 grant for project development and exhibition of completed works at a prominent venue in NEOM',
//     },
//     {
//       image: image3,
//       title: 'Future Forward',
//       hostedBy:'Expo 2030',
//       deadline: 'January 15, 2025',
//       eligibility: 'Open to Saudi and international artists across all levels',
//       prize:'Opportunity to exhibit at Expo 2030 in Riyadh and featured in the official Expo 2030 art catalog',
//     },
//     {
//       image: image4,
//       title: 'Digital Art Innovation Challenge',
//       hostedBy: 'Saudi Telecom (STC)',
//       deadline: 'February 25, 2025',
//       eligibility: 'Open to digital artists globally, with a focus on technological themes',
//       prize:'SAR 100,000 cash prize and featured in a digital exhibition hosted by STC',
//     },
//     {image: image5,
//       title: 'Calligraphy & Heritage Initiative',
//       hostedBy:'Saudi Arabian Football Federation (SAFF)',
//       deadline: 'March 1 ,2025',
//       eligibility: 'Open to artists, designers, and creatives worldwide with a passion for sports and art',
//       prize:'SAR 100,000 commission for selected projects and artworks will be displayed in FIFA 2034 venues across Saudi Arabia',
//     },
//     {
//       image: image6,
//       title: 'Sculptural Art Program',
//       hostedBy:'Alwaleed Philanthrophies',
//       deadline: 'April 30, 2025',
//       eligibility: 'Open to professional sculptors with experience in public art',
//       prize:'SAR 200,000 commission, installation in a prominent public space and media coverage and inclusion in a national art tour',
//     },
//     {
//       image: image7,
//       title: 'Photography Competition',
//       hostedBy:'Red Sea Global',
//       deadline: 'June 19, 2025',
//       eligibility: 'Open to photographers worldwide',
//       prize:'SAR 50,000 cash prize, featured in a traveling exhibition and publication in a Red Sea Global photography book',
//     },
//     {
//       image: image8,
//       title: 'Mixed Media Exploration in Al Ula',
//       hostedBy:'Royal Commission of Al Ula',
//       deadline: 'November 17, 2025',
//       eligibility: 'Open to digital artists globally, with a focus on technological themes',
//       prize:'SAR 60,000 grant for materials and production, the artwork will be exhibited in AlUla’s Cultural Center and inclusion in a documentary feature',
//     },
   
//   ];
  
//   const handleCardClick=()=>{
//     navigate('/bidderprofile');
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//   {/* Navbar at the top */}
//   <Navbar />

//   {/* Main content area with FilterMenu and Cards */}
//   <div className="flex flex-col sm:flex-row md:flex-row  space-y-4">
//     {/* Sidebar filter menu */}
//     <aside className="w-full sm:mt-16 sm:w-1/4 md:w-1/4 lg:w-1/4 lg:p-4 xs:p-4">
//       <SideFilters filter={BidSideFilters} />
//     </aside>

//     {/* Main content area */}
//     <main className="flex-grow">
//       {/* Search bar, toggle, and dropdown */}
//       <div className=" font-montserrat-light">
//         <SearchBar placeholderValue={"Search Projects...."} />
//       </div>
//       <div className="flex flex-col  md:space-y-0 md:flex-row justify-between items-start md:items-center lg:p-4">
//         <CardViewToggle />
//         <SortDropdown options={sortOptions} />
//       </div>

//       {/* Filtered Cards */}
//       <div className="lg:mt-2 lg:ml-4 xs:mb-4 ">
//         <FilteredCards />
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 lg:mr-16 ">
//         {projects.map((project, index) => (
//           <BidCardMain key={index} project={project} />
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="lg:p-4 xs:p-2 mt-6">
//         <BidFooter />
//       </div>
//     </main>

    
//   </div>
//   <Footer />
// </div>
//   );
// };  

// export default ArtBid;



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard'; // Make sure this path is correct
import BidCardMain from '../components/ArtBidCard/BidCardMain';
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { BidSideFilters } from '../static/data';
import Footer from '../components/Footer/footer';
import BidFooter from '../components/BidPageFooter/BidFooter';

import { getAllOpenCalls } from '../api/bid';
import { getAllPatrons } from '../api/patron';

import { getCreationDateFromObjectId } from '../utils/dateHelpers';

const sortOptions = ['Recommended', 'Newest', 'Oldest'];

const initializeFilterState = (filtersConfig) => {
  const initialState = {};
  filtersConfig.forEach(filterGroup => {
    initialState[filterGroup.id] = [];
  });
  console.log("[ArtBid] Initialized filter state:", initialState);
  return initialState;
};

const ArtBid = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [openCalls, setOpenCalls] = useState([]);
  const [patronsForFooter, setPatronsForFooter] = useState([]);
  const [status, setStatus] = useState('idle');
  const [patronsStatus, setPatronsStatus] = useState('idle');

  const [searchText, setSearchText] = useState('');
  const [cardView, setCardView] = useState('grid');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [sortOrder, setSortOrder] = useState('Recommended');

  const [activeSideFilters, setActiveSideFilters] = useState(() => initializeFilterState(BidSideFilters));

  useEffect(() => {
    console.log("[ArtBid] activeSideFilters state changed:", activeSideFilters);
  }, [activeSideFilters]);

  useEffect(() => {
    const fetchBidsData = async () => {
      if (status === 'idle') {
        setStatus('loading');
        setError(null);
        console.log("[ArtBid] Fetching all open calls...");
        try {
          const data = await getAllOpenCalls();
          console.log("[ArtBid] Successfully fetched open calls:", data);
          setOpenCalls(data);
          setStatus('succeeded');
        } catch (err) {
          console.error("[ArtBid] Failed to fetch open calls:", err);
          setError(err.message || 'Failed to fetch bids.');
          setStatus('failed');
          setOpenCalls([]);
        }
      }
    };
    fetchBidsData();
  }, [status]);

  useEffect(() => {
    const fetchPatronsData = async () => {
      if (patronsStatus === 'idle') {
        setPatronsStatus('loading');
        console.log("[ArtBid] Fetching patrons for footer...");
        try {
          const response = await getAllPatrons();
          if (response.success && Array.isArray(response.patrons)) {
            const top5Patrons = response.patrons.slice(0, 5);
            setPatronsForFooter(top5Patrons);
            setPatronsStatus('succeeded');
            console.log("[ArtBid] Successfully fetched patrons for footer.");
          } else {
            console.error("[ArtBid] Failed to fetch patrons or invalid response format for footer:", response);
            setPatronsForFooter([]);
            setPatronsStatus('failed');
          }
        } catch (err) {
          console.error("[ArtBid] Failed to fetch patrons for footer:", err);
          setPatronsForFooter([]);
          setPatronsStatus('failed');
        }
      }
    };
    fetchPatronsData();
  }, [patronsStatus]);

  const handleCardClick = useCallback((bidId) => {
    navigate(`/bid-details/${bidId}`);
  }, [navigate]);

  const handleSearchChange = useCallback((value) => {
    console.log("[ArtBid] Search text changed to:", value);
    setSearchText(value);
  }, []);

  const handleCardViewChange = useCallback((newView) => {
    console.log("[ArtBid] Card view changed to:", newView);
    setCardView(newView);
  }, []);

  const handleSortOptionChange = useCallback((newOption) => {
    console.log("[ArtBid] Sort option changed to:", newOption);
    setSortOrder(newOption);
  }, []);

  const handleDisciplineSelect = useCallback((disciplineName) => {
    console.log("[ArtBid] Discipline (Category) selected:", disciplineName);
    setSelectedDiscipline(disciplineName);
  }, []);

  const handleSideFilterChange = useCallback((filterId, value, isChecked) => {
    console.log(`[ArtBid] handleSideFilterChange received: filterId='${filterId}', value='${value}', isChecked=${isChecked}`);
    setActiveSideFilters(prevFilters => {
      if (filterId === 'resetAll') {
        console.log("[ArtBid] Resetting all side filters due to 'resetAll' action.");
        return initializeFilterState(BidSideFilters);
      }

      const currentSelections = prevFilters[filterId] || [];
      let newSelections;

      if (isChecked) {
        if (!currentSelections.includes(value)) {
          newSelections = [...currentSelections, value];
          console.log(`[ArtBid] Adding '${value}' to filter '${filterId}'. New selections:`, newSelections);
        } else {
          newSelections = currentSelections;
          console.log(`[ArtBid] '${value}' already in filter '${filterId}', no change.`);
        }
      } else {
        newSelections = currentSelections.filter(item => item !== value);
        console.log(`[ArtBid] Removing '${value}' from filter '${filterId}'. New selections:`, newSelections);
      }

      return {
        ...prevFilters,
        [filterId]: newSelections,
      };
    });
  }, []);

  // REMOVED: uniqueCategories useMemo.
  // The full list of categories will now be managed by FilterComponent.

  // --- Combined Filtering and Sorting Logic ---
  const filteredAndSortedOpenCalls = useMemo(() => {
    console.groupCollapsed("[ArtBid] Filtering & Sorting Bids Cycle Triggered");
    console.log("  Initial bids count:", openCalls.length);
    console.log("  Current searchText:", searchText);
    console.log("  Current selectedDiscipline (Category):", selectedDiscipline);
    console.log("  Current activeSideFilters:", activeSideFilters);
    console.log("  Current sortOrder:", sortOrder);

    let currentOpenCalls = [...openCalls];

    // 1. Apply Search Filter
    if (searchText) {
      const lowerCaseSearchText = searchText.toLowerCase();
      currentOpenCalls = currentOpenCalls.filter(bid =>
        bid.title?.toLowerCase().includes(lowerCaseSearchText) ||
        bid.description?.toLowerCase().includes(lowerCaseSearchText) ||
        bid.hostedBy?.toLowerCase().includes(lowerCaseSearchText) ||
        bid.category?.toLowerCase().includes(lowerCaseSearchText)
      );
      console.log(`  After Search Filter ('${searchText}'):`, currentOpenCalls.length, "bids remaining.");
    }

    // 2. Apply Discipline/Category Filter (from FilteredCards)
    if (selectedDiscipline && selectedDiscipline !== 'All') {
      currentOpenCalls = currentOpenCalls.filter(bid =>
        bid.category?.toLowerCase() === selectedDiscipline.toLowerCase()
      );
      console.log(`  After Discipline/Category Filter ('${selectedDiscipline}'):`, currentOpenCalls.length, "bids remaining.");
    }

    // 3. Apply Side Filters (Logic remains the same)
    Object.entries(activeSideFilters).forEach(([filterId, selectedValues]) => {
      if (selectedValues && selectedValues.length > 0) {
        console.log(`  Applying Side Filter: '${filterId}' with selected values:`, selectedValues);
        currentOpenCalls = currentOpenCalls.filter(bid => {
          let passesFilter = false;
          switch (filterId) {
            case 'status':
              {const bidStatus = bid.status?.toLowerCase();
              passesFilter = selectedValues.includes(bidStatus);
              console.log(`    - Bid Status: '${bidStatus}', Selected: ${selectedValues}, Passes: ${passesFilter}`);
              break;}

            case 'projectType':
              {const bidProjectType = bid.projectType?.toLowerCase();
              passesFilter = selectedValues.includes(bidProjectType);
              console.log(`    - Bid Project Type: '${bidProjectType}', Selected: ${selectedValues}, Passes: ${passesFilter}`);
              break;}

            case 'eligibility':
              if (Array.isArray(bid.eligibility)) {
                passesFilter = bid.eligibility.some(el => selectedValues.includes(el.toLowerCase()));
                console.log(`    - Bid Eligibility (Array): ${bid.eligibility}, Selected: ${selectedValues}, Passes: ${passesFilter}`);
              } else {
                const bidEligibility = bid.eligibility?.toLowerCase();
                passesFilter = selectedValues.includes(bidEligibility);
                console.log(`    - Bid Eligibility (String): '${bidEligibility}', Selected: ${selectedValues}, Passes: ${passesFilter}`);
              }
              break;

            case 'location':
             { const bidLocation = bid.location?.toLowerCase();
              passesFilter = selectedValues.includes(bidLocation);
              console.log(`    - Bid Location: '${bidLocation}', Selected: ${selectedValues}, Passes: ${passesFilter}`);
              break;}

            case 'prize':
              {
                const bidPrizeString = bid.prize?.toLowerCase();
                if (!bidPrizeString) {
                  passesFilter = false;
                  console.log(`    - Bid Prize: No prize string found, Passes: ${passesFilter}`);
                  break;
                }
                passesFilter = selectedValues.some(prizeOption => {
                  let subFilterPasses = false;
                  switch (prizeOption) {
                    case 'under-sar-10000':
                      subFilterPasses = bidPrizeString.includes('under sar 10,000');
                      break;
                    case 'sar-10000-50000':
                      subFilterPasses = bidPrizeString.includes('10,000 - sar 50,000');
                      break;
                    case 'sar-50000-100000':
                      subFilterPasses = bidPrizeString.includes('50,000 - sar 100,000');
                      break;
                    case 'above-sar-100,000':
                      subFilterPasses = bidPrizeString.includes('above sar 100,000');
                      break;
                    case 'non-monetary-exposure':
                      subFilterPasses = bidPrizeString.includes('non-monetary (exposure)');
                      break;
                    case 'non-monetary-collaboration':
                      subFilterPasses = bidPrizeString.includes('non-monetary (collaboration)');
                      break;
                    default:
                      subFilterPasses = false;
                  }
                  console.log(`      - Prize Sub-Option: '${prizeOption}', Bid Prize String: "${bidPrizeString}", Sub-Filter Passes: ${subFilterPasses}`);
                  return subFilterPasses;
                });
                console.log(`    - Bid Prize Overall Passes: ${passesFilter}`);
              }
              break;

            case 'deadline':
              {
                const bidDeadline = bid.deadlineDate ? new Date(bid.deadlineDate) : null;
                if (!bidDeadline || isNaN(bidDeadline.getTime())) {
                  passesFilter = selectedValues.includes('no-deadline');
                  console.log(`    - Bid Deadline: No valid date or "no-deadline" selected. Passes: ${passesFilter}`);
                  break;
                }
                passesFilter = selectedValues.some(deadlineOption => {
                  let subFilterPasses = false;
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  const bidDeadlineStartOfDay = new Date(bidDeadline);
                  bidDeadlineStartOfDay.setHours(0, 0, 0, 0);

                  const oneWeekFromNow = new Date(now);
                  oneWeekFromNow.setDate(now.getDate() + 7);
                  oneWeekFromNow.setHours(23, 59, 59, 999);

                  const endOfThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                  endOfThisMonth.setHours(23, 59, 59, 999);

                  const threeMonthsFromNow = new Date(now);
                  threeMonthsFromNow.setMonth(now.getMonth() + 3);
                  threeMonthsFromNow.setHours(23, 59, 59, 999);

                  const endOfThisYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

                  switch (deadlineOption) {
                    case 'within-1-week':
                      subFilterPasses = bidDeadlineStartOfDay >= now && bidDeadlineStartOfDay <= oneWeekFromNow;
                      break;
                    case 'this-month':
                      subFilterPasses = bidDeadline.getMonth() === now.getMonth() && bidDeadline.getFullYear() === now.getFullYear();
                      break;
                    case 'next-3-months':
                      subFilterPasses = bidDeadlineStartOfDay > now && bidDeadlineStartOfDay <= threeMonthsFromNow;
                      break;
                    case 'later-this-year':
                      subFilterPasses = bidDeadlineStartOfDay > threeMonthsFromNow && bidDeadlineStartOfDay <= endOfThisYear;
                      break;
                    case 'no-deadline':
                      subFilterPasses = false;
                      break;
                    default:
                      subFilterPasses = false;
                  }
                  console.log(`      - Deadline Sub-Option: '${deadlineOption}', Bid Deadline Date: ${bidDeadline?.toLocaleDateString()} (start of day: ${bidDeadlineStartOfDay?.toLocaleDateString()}), Now: ${now?.toLocaleDateString()}, Passes: ${subFilterPasses}`);
                  return subFilterPasses;
                });
                console.log(`    - Bid Deadline Overall Passes: ${passesFilter}`);
              }
              break;

            case 'hostOrganization':
             { const bidHostOrg = bid.hostOrganizationType?.toLowerCase();
              passesFilter = selectedValues.includes(bidHostOrg);
              console.log(`    - Bid Host Organization: '${bidHostOrg}', Selected: ${selectedValues}, Passes: ${passesFilter}`);
              break;}

            default:
              passesFilter = true;
              console.warn(`    - Unknown Filter ID: '${filterId}'. Defaulting to true.`);
          }
          return passesFilter;
        });
        console.log(`  After Side Filter ('${filterId}'):`, currentOpenCalls.length, "bids remaining.");
      }
    });

    // 4. Apply Sorting
    currentOpenCalls.sort((a, b) => {
      const dateA = getCreationDateFromObjectId(a._id)?.getTime() || 0;
      const dateB = getCreationDateFromObjectId(b._id)?.getTime() || 0;

      if (sortOrder === 'Newest') {
        return dateB - dateA;
      }
      if (sortOrder === 'Oldest') {
        return dateA - dateB;
      }
      return 0;
    });

    console.log("  Final Filtered & Sorted Bids:", currentOpenCalls.length, "bids.");
    console.groupEnd();
    return currentOpenCalls;
  }, [openCalls, searchText, selectedDiscipline, sortOrder, activeSideFilters]);


  const isLoading = status === 'loading';
  const hasError = status === 'failed';

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <p>Loading bidding opportunities...</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col sm:flex-row md:flex-row space-y-4">
        <aside className="w-full sm:mt-16 sm:w-1/4 md:w-1/4 lg:w-1/4 lg:p-4 xs:p-4">
          <SideFilters
            filterConfig={BidSideFilters}
            activeFilters={activeSideFilters}
            onFilterChange={handleSideFilterChange}
          />
        </aside>

        <main className="flex-grow">
          <div className="font-montserrat-light">
            <SearchBar
              placeholderValue={"Search Projects...."}
              searchTerm={searchText}
              onSearch={handleSearchChange}
            />
          </div>
          <div className="flex flex-col md:space-y-0 md:flex-row justify-between items-start md:items-center lg:p-4">
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

          {/* FilteredCards now doesn't need 'disciplines' prop */}
          <div className="lg:mt-2 lg:ml-4 xs:mb-4">
            <FilteredCards
              // Removed: disciplines={uniqueCategories}
              selectedDiscipline={selectedDiscipline}
              onDisciplineSelect={handleDisciplineSelect}
            />
          </div>

          <div className={`gap-2 lg:gap-2 lg:mr-16 ${
            cardView === 'grid'
              ? 'grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'flex flex-col items-center'
          }`}>
            {filteredAndSortedOpenCalls.length > 0 ? (
              filteredAndSortedOpenCalls.map((bid) => (
                <BidCardMain
                  key={bid._id}
                  bid={bid}
                  onCardClick={handleCardClick}
                  viewType={cardView}
                />
              ))
            ) : (
              <div className="text-center col-span-full py-8 text-gray-600 mt-32">
                No bidding opportunities found matching your criteria.
              </div>
            )}
          </div>

          <div className="lg:p-4 xs:p-2 mt-6">
            <BidFooter patrons={patronsForFooter} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ArtBid;