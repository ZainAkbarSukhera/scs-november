// import React from "react";

// import LearnCardMain from '../components/ArtLearnCard/LearnCardMain'; 
// import LearnCardLanding from '../components/ArtLearnCard/LearnCardLanding';
// import drawingIcon from '../assets/drawing_icon.png';
// import calligraphyIcon from '../assets/calligraphy_icon.png';
// import paintingIcon from '../assets/painting_icon.png';
// import photographyIcon from '../assets/photography_icon.png';
// import printMakingIcon from '../assets/printMaking_icon.png';
// import sculptureIcon from '../assets/sculpture_icon.png';

// import SearchBar from '../components/SearchBar/SearchBar';
// import CardViewToggle from '../components/ToggleView/ToggleView';
// import SortDropdown from '../components/SortDropdown/SortDropdown';
// import FilteredCards from '../components/DisciplineFilter/FilterCard';
// ////import BidCardMain from '../components/ArtBidCard/BidCardMain';
// // import LearnFilterMenu from '../components/SideFilterMenu/LearnFilterMenu';
// import Navbar from '../components/NavigationBar/Navbar';
// import BidFooter from '../components/BidPageFooter/BidFooter';
// import SideFilters from "../components/SideFilterMenu/SideFilters";
// import { LearnSideFilters } from "../static/data";
// import LearnCategories from "../components/LearnTopSellers/LearnCategories";

// import CategoryComponent from "../components/ArtLearnFooter/ArtLearnFooter";
// import Footer from "../components/Footer/footer";



// const sortOptions = ['Recommended','Newest','Oldest'];


// const ArtLearn = () => {


//   const workshops = [
//     {
//       title: "Digital Illustration Calligraphy Design ",
//       date: "September 20, 2024",
//       location: "Online / Remote",
//       instructor: "Omar Al-Harbi, Digital Artist ",
//       duration: "20 hours",
//       tag: "Drawing & Illustration",
//       tagColor: "bg-pewter-blue",
//       icon: drawingIcon,
//     },
//     {
//       title: "Arabic Calligraphy and Modern Art",
//       date: "October 5, 2024",
//       location: "Online / Remote",
//       instructor: "Yousef Al-Qahtani, Calligrapher ",
//       duration: "12 hours",
//       tag: "Calligraphy",
//       tagColor: "bg-yankees-blue",
//       icon: calligraphyIcon,
//     },
//     {
//       title: "Photography in Urban Landscapes",
//       date: "November 1, 2024",
//       location: "Online / Remote",
//       instructor: "Laila Al-Saadi, Photographer",
//       duration: "10 hours",
//       tag: "Photography",
//       tagColor: "bg-madder-lake",
//       icon: photographyIcon,
//     },
//     {
//       title: "From Concept to Creation",
//       date: "November 20, 2024",
//       location: "Online / Remote",
//       instructor: "Majid Al-Turki, Sculptor",
//       duration: "6 hours",
//       tag: "Sculpture",
//       tagColor: "bg-royal-orange",
//       icon: sculptureIcon,
//     },
//     {
//       title: "Exploring Techniques and Creativity",
//       date: "December 15, 2024",
//       location: "Online / Remote",
//       instructor: "Layla Al-Otaibi, Printmaker",
//       duration: "15 hours",
//       tag: "Printmaking",
//       tagColor: "bg-deep-peach",
//       icon: printMakingIcon,
//     },
//     {
//       title: "Advanced Painting Techniques",
//       date: "March 20, 2025",
//       location: "Online / Remote",
//       instructor: "Huda Al-Rashid, Fine Artist",
//       duration: "8 hours",
//       tag: "Painting",
//       tagColor: "bg-palatinate-purple",
//       icon: paintingIcon,
//     },
//     {
//       title: " Brand Identity Design",
//       date: "February 15-17, 2025",
//       location: "Online / Remote",
//       instructor: " Hadel Alsaleh, Graphic Designer",
//       duration: "16 hours",
//       tag: "Graphic Design",
//       tagColor: "bg-fire-opal",
//       icon: drawingIcon,
//     },
//     {
//       title: "Contemporary Realism",
//       date: "May 5-9, 2025",
//       location: "Online / Remote",
//       instructor: "Majed Alosailan, Muralist",
//       duration: "30 hours",
//       tag: "Painting",
//       tagColor: "bg-palatinate-purple",
//       icon: paintingIcon,
//     },
//     {
//       title: "Lettering",
//       date: "March 6-8,2025",
//       location: "Online / Remote",
//       instructor: "Shatha Abuzindada, Lettering Artist ",
//       duration: "12 hours",
//       tag: "Calligraphy",
//       tagColor: "bg-yankees-blue",
//       icon: calligraphyIcon,
//     },
//     {
//       title: "Modern Sculpture Forms",
//       date: "May 24-28, 2025",
//       location: "Online / Remote",
//       instructor: "Khaled Al-harbi, Ceramic Sculptor",
//       tag: "Sculpture",
//       tagColor: "bg-royal-orange",
//       icon: sculptureIcon,
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//     {/* Navbar at the top */}
//     <Navbar />
  
//     {/* Main content area */}
//     <div className="flex flex-col xs:space-y-4 sm:flex-row md:flex-row space-y-6">
//       {/* Sidebar filter menu */}
//       <aside className="w-full xs:w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
//         <SideFilters filter={LearnSideFilters} />
//       </aside>
  
//       {/* Main content area */}
//       <main className="flex-grow p-2">
//         {/* Search bar */}
//         <div className="mb-4 font-montserrat-light">
//           <SearchBar placeholderValue={"Search Workshops...."} />
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
  
//         {/* Cards Section */}
//         <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 xs:mt-4">
//           {workshops.map((workshop, index) => (
//             <LearnCardMain key={index} {...workshop} />
//           ))}
//         </div>
  
//         {/* Footer */}
//         <div>
//           <footer className="bg-gray-200 mt-16 xs:mt-8">
//             <LearnCategories />
//           </footer>
//         </div>
//       </main>
//     </div>
//     <Footer />
//   </div>

//     // <div className="min-h-screen flex flex-col">
//     //   {/* Navbar at the top */}
//     //   <Navbar />
  
//     //   {/* Main content area with FilterMenu and Cards */}
//     //   <div className="flex flex-col  sm:flex-row md:flex-row">
//     //     {/* Sidebar filter menu on the left */}
//     //     <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-20 p-4">
//     //       <SideFilters filter={LearnSideFilters} />
//     //     </aside>
  
//     //     {/* Main content area in the middle */}
//     //     <main className="flex-grow p-4 md:p-8">
//     //       {/* Search bar, toggle, and dropdown */}
//     //       <div className="mb-4 font-montserrat-light">
//     //         <SearchBar placeholderValue={"Search Workshops...."} />
//     //       </div>
//     //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//     //         <CardViewToggle />
//     //         <SortDropdown options={sortOptions} />
//     //       </div>
  
//     //       {/* Filtered Cards */}
//     //       <div > {/* Added bottom margin to ensure spacing */}
//     //         <FilteredCards />
//     //       </div>
  
//     //       {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
//     //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Added margin-top for extra spacing */}
//     //       {workshops.map((workshop, index) => (
//     //       <LearnCardMain key={index} {...workshop} />
//     //     ))}
//     //       </div>
//     //       <div>
//     //         {/* Footer always at the bottom */}
//     //         <footer className="bg-gray-200 mt-auto">
//     //           <CategoryComponent />
//     //         </footer>
//     //       </div>
//     //     </main>
//     //   </div>
//     // </div>
//   );
// };  

// export default ArtLearn;







import React, { useEffect, useState, useCallback, useMemo } from "react";
import LearnCardMain from '../components/ArtLearnCard/LearnCardMain';
import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from "../components/SideFilterMenu/SideFilters";
import { LearnSideFilters } from "../static/data";
import LearnCategories from "../components/LearnTopSellers/LearnCategories";
import Footer from "../components/Footer/footer";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import drawingIcon from '../assets/drawing_icon.png';
import calligraphyIcon from '../assets/calligraphy_icon.png';
import paintingIcon from '../assets/painting_icon.png';
import photographyIcon from '../assets/photography_icon.png';
import printMakingIcon from '../assets/printMaking_icon.png';
import sculptureIcon from '../assets/sculpture_icon.png';
import graphicsIcon from '../assets/graphics_icon.png';
import mixedMediaIcon from '../assets/mixedMedia_icon.png';

import { setWorkshops, setWorkshopsLoading, setWorkshopsError } from '../components/redux/reducers/workshop';
import { getAllWorkshops } from '../api/workshop';

// --- Helper Functions ---

/**
 * Extracts the creation timestamp from a MongoDB ObjectId string.
 * This function should be robust to handle different formats of _id.
 * @param {string|object} objectId The MongoDB ObjectId string or object (e.g., "60c72b2f9b1d8d001c8e4d1f" or { "$oid": "..." }).
 * @returns {Date|null} A Date object representing the creation time, or null if the ObjectId is invalid.
 */
const getCreationDateFromObjectId = (objectId) => {
  let idString;

  if (typeof objectId === 'string') {
    idString = objectId;
  } else if (typeof objectId === 'object' && objectId !== null && objectId.$oid) {
    idString = objectId.$oid; // Handle the extended JSON format
  } else {
    return null; // Invalid input type
  }

  if (idString.length !== 24) { // Basic validation for ObjectId string length
    return null;
  }
  try {
    const timestampHex = idString.substring(0, 8);
    const timestampMs = parseInt(timestampHex, 16) * 1000;
    return new Date(timestampMs);
  } catch (e) {
    console.error("Error parsing ObjectId for creation date:", e);
    return null;
  }
};


const ALL_CATEGORIES = [
  { name: 'All', color: 'black' },
  { name: 'Calligraphy', color: '#133240' },
  { name: 'Drawing & Illustration', color: '#82BABB' },
  { name: 'Graphics', color: '#C2373D' },
  { name: 'Mixed Media', color: '#F2CB05' },
  { name: 'Painting', color: '#6F2A53' },
  { name: 'Photography', color: '#E85846' },
  { name: 'Printmaking', color: '#F8CCA7' },
  { name: 'Sculpture', color: '#F59D48' },
];

const sortOptions = ['Recommended', 'Newest', 'Oldest'];

const ArtLearn = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const workshops = useSelector((state) => state.workshops.items);
  const status = useSelector((state) => state.workshops.status);
  const error = useSelector((state) => state.workshops.error);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('Recommended');
  const [activeFilters, setActiveFilters] = useState({});
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [currentView, setCurrentView] = useState('grid');

  const handleSearchChange = useCallback((term) => {
    setSearchTerm(term);
  }, []);

  const handleSortChange = useCallback((option) => {
    setSelectedSortOption(option);
  }, []);

  const handleViewChange = useCallback((view) => {
    setCurrentView(view);
  }, []);

  const handleDisciplineSelect = useCallback((discipline) => {
    setSelectedDiscipline(discipline);
  }, []);

  const handleFilterChange = useCallback((sectionId, optionValue, isChecked) => {
    setActiveFilters(prevFilters => {
      if (sectionId === 'resetAll') {
        console.log("Clearing all filters.");
        return {};
      }

      const currentSelections = prevFilters[sectionId] || [];
      let newSelections;

      if (isChecked) {
        newSelections = [...new Set([...currentSelections, optionValue])];
      } else {
        newSelections = currentSelections.filter(val => val !== optionValue);
      }

      if (newSelections.length === 0) {
        // eslint-disable-next-line no-unused-vars
        const { [sectionId]: omitted, ...rest } = prevFilters;
        return rest;
      }

      return {
        ...prevFilters,
        [sectionId]: newSelections,
      };
    });
  }, []);

  const getWorkshopDetails = useCallback((category) => {
    let tagColor = "bg-gray-500";
    let icon = drawingIcon;

    switch (category) {
      case "Calligraphy": tagColor = "bg-yankees-blue"; icon = calligraphyIcon; break;
      case "Drawing & Illustration": tagColor = "bg-pewter-blue"; icon = drawingIcon; break;
      case "Graphics": tagColor = "bg-madder-lake"; icon = graphicsIcon; break;
      case "Mixed Media": tagColor = "bg-yellow-400"; icon = mixedMediaIcon; break;
      case "Painting": tagColor = "bg-palatinate-purple"; icon = paintingIcon; break;
      case "Photography": tagColor = "bg-fire-opal"; icon = photographyIcon; break;
      case "Printmaking": tagColor = "bg-deep-peach"; icon = printMakingIcon; break;
      case "Sculpture": tagColor = "bg-royal-orange"; icon = sculptureIcon; break;
      default: break;
    }
    return { tagColor, icon, tag: category };
  }, []);

  const formatDate = useCallback((dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date string received: ${dateString}`);
        return 'Invalid Date';
      }
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    } catch (e) {
      console.error("Error formatting date:", e);
      return 'N/A';
    }
  }, []);

  useEffect(() => {
    const fetchWorkshopsData = async () => {
      if (status === 'idle') {
        dispatch(setWorkshopsLoading());
        try {
          const data = await getAllWorkshops();
          const processedData = data.map(workshop => {
            const instructorName = workshop.instructor
              ? `${workshop.instructor.fullNameEnglish || 'Unknown Artist'}${workshop.instructor.fieldOfExpertise ? ', ' + workshop.instructor.fieldOfExpertise : ''}`
              : 'Unknown Instructor';

            return {
              ...workshop,
              date: formatDate(workshop.date),
              instructor: instructorName,
              ...getWorkshopDetails(workshop.category),
            };
          });
          dispatch(setWorkshops(processedData));
        } catch (err) {
          console.error("Failed to fetch workshops:", err);
          dispatch(setWorkshopsError(err.message || 'Failed to fetch workshops.'));
        }
      }
    };
    fetchWorkshopsData();
  }, [status, dispatch, formatDate, getWorkshopDetails]);

  const filteredAndSortedWorkshops = useMemo(() => {
    let tempWorkshops = [...workshops];

    // 1. Filter by Search Term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      tempWorkshops = tempWorkshops.filter(workshop =>
        (workshop.title && workshop.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (workshop.description && workshop.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (workshop.instructor && workshop.instructor.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    // 2. Filter by Discipline (Category) - using the top filter buttons
    if (selectedDiscipline && selectedDiscipline.toLowerCase() !== 'all') {
      tempWorkshops = tempWorkshops.filter(workshop =>
        workshop.category && workshop.category.toLowerCase() === selectedDiscipline.toLowerCase()
      );
    }

    // 3. Filter by Side Filters (activeFilters object)
    Object.keys(activeFilters).forEach(filterId => {
      const selectedOptions = activeFilters[filterId];
      if (selectedOptions && selectedOptions.length > 0) {
        tempWorkshops = tempWorkshops.filter(workshop => {
          const filterSection = LearnSideFilters.find(f => f.id === filterId);
          if (!filterSection) {
            console.warn(`Filter section not found for ID: ${filterId}`);
            return false;
          }

          let workshopPropertyName = filterId;
          if (filterId === 'workshopType') {
            workshopPropertyName = 'workshopMode';
          }

          const workshopPropertyValue = workshop[workshopPropertyName];

          return selectedOptions.some(selectedValue => {
            let matches = false;

            if (filterId === 'skills') {
              const matchingOption = filterSection.subCategories
                ?.flatMap(sc => sc.options)
                .find(opt => opt.value === selectedValue);

              if (matchingOption && workshop.skills) {
                const workshopSkillsArray = workshop.skills.toLowerCase().split(',').map(s => s.trim());
                matches = workshopSkillsArray.some(wsPart => wsPart.includes(matchingOption.label.toLowerCase()));
              }
            } else if (filterId === 'budget' || filterId === 'priceRange' || filterId === 'location') {
                if (workshopPropertyValue) {
                    matches = workshopPropertyValue.toLowerCase() === selectedValue.toLowerCase();
                }
            } else {
              if (workshopPropertyValue) {
                matches = workshopPropertyValue.toLowerCase() === selectedValue.toLowerCase();
              }
            }
            return matches;
          });
        });
      }
    });

    // 4. Sort
    if (selectedSortOption === 'Newest') {
      tempWorkshops.sort((a, b) => {
        // Pass the raw _id to the helper, which will handle its format
        const dateA = getCreationDateFromObjectId(a._id);
        const dateB = getCreationDateFromObjectId(b._id);
        return (dateB?.getTime() || 0) - (dateA?.getTime() || 0);
      });
    } else if (selectedSortOption === 'Oldest') {
      tempWorkshops.sort((a, b) => {
        // Pass the raw _id to the helper, which will handle its format
        const dateA = getCreationDateFromObjectId(a._id);
        const dateB = getCreationDateFromObjectId(b._id);
        return (dateA?.getTime() || 0) - (dateB?.getTime() || 0);
      });
    }

    return tempWorkshops;
  }, [workshops, searchTerm, selectedDiscipline, activeFilters, selectedSortOption, LearnSideFilters]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <p>Loading workshops...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col xs:space-y-4 sm:flex-row md:flex-row space-y-6">
        <aside className="w-full xs:w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
          <SideFilters
            filterConfig={LearnSideFilters}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <main className="flex-grow p-2">
          <div className="mb-4 font-montserrat-light">
            <SearchBar
              placeholderValue={"Search Workshops...."}
              searchTerm={searchTerm}
              onSearch={handleSearchChange}
            />
          </div>

          <div className="flex flex-col xs:space-y-2 md:space-y-0 md:flex-row justify-between items-start md:items-center mb-4">
            <CardViewToggle
              currentView={currentView}
              onViewChange={handleViewChange}
            />
            <SortDropdown
              options={sortOptions}
              selectedOption={selectedSortOption}
              onOptionChange={handleSortChange}
            />
          </div>

          <div>
            <FilteredCards
              selectedDiscipline={selectedDiscipline}
              onDisciplineSelect={handleDisciplineSelect}
            />
          </div>

          <div className={`
            ${currentView === 'grid'
              ? 'grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              : 'grid grid-cols-1'
            }
            gap-2 p-4 xs:mt-4
          `}>
            {filteredAndSortedWorkshops.length > 0 ? (
              filteredAndSortedWorkshops.map((workshop) => (
                <LearnCardMain key={workshop._id?.$oid || workshop.title} workshop={workshop} />
              ))
            ) : (
              <div className="text-center col-span-full py-8 text-gray-600">
                No workshops found matching your criteria.
              </div>
            )}
          </div>

          <div>
            <footer className="bg-gray-200 mt-16 xs:mt-8">
              <LearnCategories />
            </footer>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ArtLearn;