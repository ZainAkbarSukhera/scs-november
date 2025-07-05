// import react from 'react';

// import abq1 from "../../assets/abq_1.jpg";
// import abq2 from "../../assets/abq_2.jpg";
// import abq3 from "../../assets/abq_3.jpg";
// import abq4 from "../../assets/abq_pm_2.jpg";
// import abq5 from "../../assets/abq_pm_4.png";
// import abq6 from "../../assets/abq_pm_8.png";
// import abq7 from "../../assets/abq_sm_4.png";
// import abq8 from "../../assets/abq_pm_1.PNG";
// import abq9 from "../../assets/abq_pm_3.PNG";
// import abq10 from "../../assets/abq_pm_5.PNG";
// import abq11 from "../../assets/abq_pm_6.PNG";
// import abq12 from "../../assets/abq_pm_7.PNG";
// import abq13 from "../../assets/abq_pm_8.png";
// import abq14 from "../../assets/abq_sm_1.PNG";
// import abq15 from "../../assets/abq_sm_2.PNG";
// import abq16 from "../../assets/abq_sm_3.PNG";
// import abq_eoa_1 from '../../assets/abq_eoa_1.jpg';
// import abq_eoa_2 from '../../assets/abq_eoa_2.jpg';
// import abq_va_1 from '../../assets/abq_va_1.png';
// import abq_va_2 from '../../assets/abq_va_2.png';
// import abq_va_3 from '../../assets/abq_va_3.png';
// import nugamshi from '../../assets/nugamshi_portrait.png';
// import basma from '../../assets/basma_portrait.png';
// import halla from '../../assets/halla_portrait.jpg';
// import shaker from '../../assets/shaker_portrait.png';

// import CreatorProfileCard from "./CreatorProfileCard";
// import ProfileProjects from './ProfileProjects';
// import ProfileFooter from './ProfileFooter';


// const artworks = [
//   {
//     image: abq1,
//     title: 'After Marylin',
//     artist: 'Noura Al-Mutairi',
//     initialLikes: 25700,
//     initialViews: 50000,
//   },
//   {
//     image: abq2,
//     title: 'Landscapes (XI)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 19500,
//     initialViews: 37000,
//   },
//   {
//     image: abq3,
//     title: 'Frog',
//     artist: 'Hanan Al-Ahmadi',
//     initialLikes: 17400,
//     initialViews: 30000,
//   },
//   {
//     image: abq4,
//     title: 'Landscapes (VIII)',
//     artist: 'Ahmed Al-Turki',
//     initialLikes: 15400,
//     initialViews: 25000,
//   },
// ];

// const artists=[
//   {image: nugamshi, name: 'Nugamshi'},
//   {image: halla, name:'Halla bint Khaled'},
//   {image: basma, name:'Basma Felemban'},
//   {image: shaker, name:'Shaker Kashgeri'},
// ];

// const projects= [
//   {
//     name: "Vogue Arabia",
//     description: "Creativity Terminal (2019)",
//     photos: [
//       abq_va_1,abq_va_2,abq_va_3
//     ],
//   },
//   {
//     name: "Edge of Arabia",
//     description: "KSA/LAX Exhibition ",
//     photos: [abq_eoa_1],
//   },
//   {
//     name: "Edge of Arabia",
//     description: " USA Tour (2014-2019)",
//     photos: [
//       abq_eoa_2
//     ],
//   },

// ];

// const ProfilePortfolio = () => {

//   return (
//     <div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
//       {artworks.map((art, index) => (
//         <CreatorProfileCard key={index} {...art} />
//       ))}
//     </div>
//     <div className="text-center mt-6">
//         <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//     </div>

//     <div className=" mt-20">
//     <ProfileProjects projects={projects} />
//     </div>

//     <div className=" xs:p-2 w-full mx-auto mt-20 flex flex-grow">
//       <ProfileFooter artists={artists} />
//     </div>
// </div>
//   );

// };

// export default ProfilePortfolio;


import React, { useState, useEffect } from 'react';

import CreatorProfileCard from "./CreatorProfileCard";
import ProfileProjects from './ProfileProjects'; // This component will receive the sliced projects
import ProfileFooter from './ProfileFooter';
import { getArtworksById } from '../../api/artwork';
import { getAllArtists } from '../../api/artist';


const ProfilePortfolio = ({ creatorId, creatorName, projects }) => {
  const [artworks, setArtworks] = useState([]);
  const [loadingArtworks, setLoadingArtworks] = useState(true);
  const [artworkError, setArtworkError] = useState(null);

  const [recommendedArtists, setRecommendedArtists] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [artistError, setArtistError] = useState(null);

  // New state to control how many artwork cards are displayed (already existing from previous modification)
  const [showAllArtworks, setShowAllArtworks] = useState(false);

  // NEW state to control how many projects are displayed
  const [showAllProjects, setShowAllProjects] = useState(false);


  // Effect for fetching artworks for the current artist's portfolio
  useEffect(() => {
    const fetchArtworks = async () => {
      if (!creatorId) {
        console.warn("Creator ID is missing, cannot fetch artworks for portfolio.");
        setLoadingArtworks(false);
        setArtworkError("No creator ID provided to fetch portfolio artworks.");
        return;
      }

      try {
        setLoadingArtworks(true);
        setArtworkError(null);

        const response = await getArtworksById(creatorId);

        if (response && response.data) {
          setArtworks(response.data);
        } else {
          setArtworks([]);
          console.warn("No artwork data received or invalid response from getArtworksById:", response);
        }
      } catch (err) {
        console.error("Error fetching artworks for portfolio:", err);
        setArtworkError("Failed to load artworks for this portfolio. Please try again.");
        setArtworks([]);
      } finally {
        setLoadingArtworks(false);
      }
    };

    fetchArtworks();
  }, [creatorId]);


  // Effect for fetching ALL artists for the footer (recommended artists)
  useEffect(() => {
    const fetchAllArtistsForFooter = async () => {
      try {
        setLoadingArtists(true);
        setArtistError(null);

        const artistsData = await getAllArtists();

        if (artistsData && Array.isArray(artistsData)) {
          const otherArtists = artistsData.filter(artist => artist._id !== creatorId);

          setRecommendedArtists(otherArtists.slice(0, 4)); // Still slice for recommended artists in footer
        } else {
          setRecommendedArtists([]);
          console.warn("No artist data received or invalid response from getAllArtists (expected direct array).", artistsData);
        }
      } catch (err) {
        console.error("Error fetching all artists for footer:", err);
        setArtistError("Failed to load recommended artists.");
        setRecommendedArtists([]);
      } finally {
        setLoadingArtists(false);
      }
    };
    console.log("Name toh check karo", creatorName);
    fetchAllArtistsForFooter();
  }, [creatorId, creatorName]);


  // Determine which artworks to display based on showAllArtworks state
  const artworksToDisplay = showAllArtworks ? artworks : artworks.slice(0, 4);

  // Determine which projects to display based on showAllProjects state
  const projectsToDisplay = showAllProjects ? projects : projects.slice(0, 3);

  // Handler for Discover More button click (for artworks)
  const handleDiscoverMoreArtworksClick = () => {
    setShowAllArtworks(true);
  };

  // NEW: Handler for Discover More button click (for projects)
  const handleDiscoverMoreProjectsClick = () => {
    setShowAllProjects(true);
  };


  // Consolidate loading/error for main display
  if (loadingArtworks) {
    return <div className="text-center py-8">Loading portfolio...</div>;
  }

  if (artworkError) {
    return <div className="text-center py-8 text-red-500">{artworkError}</div>;
  }

  if (artworks.length === 0) {
    return <div className="text-center py-8 text-gray-600">No artworks found for this artist's portfolio.</div>;
  }

  return (
    <div>
      {/* Artworks Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
        {artworksToDisplay.map((art) => (
          <CreatorProfileCard key={art._id} artwork={art} creatorName={creatorName} />
        ))}
      </div>
      <div className="text-center mt-6">
        {/* Conditionally render Discover More button for artworks */}
        {artworks.length > 4 && !showAllArtworks && (
          <button
            className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
            onClick={handleDiscoverMoreArtworksClick} // Use artwork-specific handler
          >
            Discover More 
          </button>
        )}
      </div>

      {/* Projects Section */}
      <div className="mt-20">
        <ProfileProjects projects={projectsToDisplay} /> {/* Pass sliced projects */}
      </div>
      <div className="text-center mt-6">
        {/* NEW: Conditionally render Discover More button for projects */}
        {projects && projects.length > 3 && !showAllProjects && (
          <button
            className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
            onClick={handleDiscoverMoreProjectsClick} // Use project-specific handler
          >
            Discover More 
          </button>
        )}
      </div>


      {/* Recommended Artists Section (Footer) */}
      <div className=" xs:p-2 w-full mx-auto mt-20 flex flex-grow">
        {loadingArtists ? (
          <div className="text-center w-full">Loading recommended artists...</div>
        ) : artistError ? (
          <div className="text-center w-full text-red-500">{artistError}</div>
        ) : (
          <ProfileFooter artists={recommendedArtists} />
        )}
      </div>
    </div>
  );
};

export default ProfilePortfolio;