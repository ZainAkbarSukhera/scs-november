// import React from 'react';

// import abq1 from "../../assets/abq_1.jpg";
// import abq2 from '../../assets/abq_va_1.png';
// import abq3 from "../../assets/abq_3.jpg";
// import abq4 from "../../assets/abq_pm_2.jpg";
// import abq8 from '../../assets/abq8.png';
// import abq9 from '../../assets/abq9.png';
// import abq10 from '../../assets/abq10.png';
// import abq11 from '../../assets/abq11.png';
// import abq12 from '../../assets/abq12.png';

// import CreatorProfileCard from './CreatorProfileCard';
// import PrintSouvenirsCard from '../ArtMarketCard/PrintSouvenirsCard';

// const artworks =
// [
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

// const prints_souvenirs = {
//   images:[abq2, abq8, abq9, abq10, abq11, abq12],
//   name: 'Will-Battle',
//   artist: '2021',
// };






// const ProfileAssets = () => {

//   return (
//     <div>
//     <div className="mt-8">
//       <p className="border-b border-gray-400 text-yankees-blue mb-4">
//         <span className="font-montserrat-medium text-sm">PRIMARY MARKET -</span>
//         <span className="font-montserrat-light text-xs ml-1">
//           refers to the sale of artworks directly from the artist or through intermediaries, where the work is sold for the first time
//         </span>
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
//         {artworks.map((art, index) => (
//           <CreatorProfileCard key={index} {...art} />
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>

//     <div className="mt-20">
//       <p className="border-b border-gray-400 text-yankees-blue mb-4">
//         <span className="font-montserrat-medium text-sm">SECONDARY MARKET -</span>
//         <span className="font-montserrat-light text-xs ml-1">
//           refers to the resale of artworks that have already been sold at least once
//         </span>
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
//         {artworks.map((art, index) => (
//           <CreatorProfileCard key={index} {...art} />
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>

//     <div className="mt-20">
//       <p className="border-b border-gray-400 text-yankees-blue mb-4">
//         <span className="font-montserrat-medium text-sm">NFTs</span>
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
//         {artworks.map((art, index) => (
//           <CreatorProfileCard key={index} {...art} />
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>

//     <div className="mt-20 mb-4">
//       <p className="border-b border-gray-400 text-yankees-blue mb-4">
//         <span className="font-montserrat-medium text-sm">PRINTS & SOUVENIRS</span>
//       </p>
//       <div className="flex justify-between py-2">
//         <PrintSouvenirsCard printData={prints_souvenirs} />
//       </div>
//       <div className="text-center mt-6">
//         <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default ProfileAssets;

import React, { useState, useEffect } from 'react';

import CreatorProfileCard from './CreatorProfileCard';
import PrintSouvenirsCard from '../ArtMarketCard/PrintSouvenirsCard'; // Assuming this component maps over its printData prop
import { getArtworksById } from '../../api/artwork';

const ProfileAssets = ({ creatorId, creatorName }) => {
  const [allArtworks, setAllArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States to hold categorized artworks
  const [primaryMarketArtworks, setPrimaryMarketArtworks] = useState([]);
  const [secondaryMarketArtworks, setSecondaryMarketArtworks] = useState([]);
  const [nftsArtworks, setNftsArtworks] = useState([]);
  const [printsSouvenirsArtworks, setPrintsSouvenirsArtworks] = useState([]);

  // States to manage "Discover More" visibility for each category
  const [showAllPrimary, setShowAllPrimary] = useState(false);
  const [showAllSecondary, setShowAllSecondary] = useState(false);
  const [showAllNfts, setShowAllNfts] = useState(false);
  const [showAllPrints, setShowAllPrints] = useState(false);

  useEffect(() => {
    const fetchAllArtworks = async () => {
      if (!creatorId) {
        console.warn("Creator ID is missing, cannot fetch artworks for assets.");
        setLoading(false);
        setError("No creator ID provided to fetch assets.");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await getArtworksById(creatorId);
        console.log("Response for Assets", response);

        if (response && response.data) {
          const fetchedArtworks = response.data;
          setAllArtworks(fetchedArtworks);

          setPrimaryMarketArtworks(fetchedArtworks.filter(
            (art) => art.displayOption === "Primary Market"
          ));
          setSecondaryMarketArtworks(fetchedArtworks.filter(
            (art) => art.displayOption === "Secondary Market"
          ));
          setNftsArtworks(fetchedArtworks.filter(
            (art) => art.displayOption === "NFTs"
          ));
          setPrintsSouvenirsArtworks(fetchedArtworks.filter(
            (art) => art.displayOption === "Prints & Souvenirs"
          ));

        } else {
          setAllArtworks([]);
          setPrimaryMarketArtworks([]);
          setSecondaryMarketArtworks([]);
          setNftsArtworks([]);
          setPrintsSouvenirsArtworks([]);

          console.warn("No artwork data received or invalid response:", response);
        }
      } catch (err) {
        console.error("Error fetching all artworks for assets:", err);
        setError("Failed to load assets. Please try again.");
        setAllArtworks([]);
        setPrimaryMarketArtworks([]);
        setSecondaryMarketArtworks([]);
        setNftsArtworks([]);
        setPrintsSouvenirsArtworks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllArtworks();
  }, [creatorId]);

  if (loading) {
    return <div className="text-center py-8">Loading artist assets...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  // Helper function to render an artwork section with Discover More logic
  const renderArtworkSection = (title, description, artworks, showAllState, setShowAllState, limit) => {
    if (artworks.length === 0) {
      return null;
    }

    const artworksToDisplay = showAllState ? artworks : artworks.slice(0, limit);

    return (
      <div className="mt-8">
        <p className="border-b border-gray-400 text-yankees-blue mb-4">
          <span className="font-montserrat-medium text-sm">{title} </span>
          <span className="font-montserrat-light text-xs ml-1">{description}</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
          {artworksToDisplay.map((art) => (
            <CreatorProfileCard key={art._id} artwork={art} creatorname={creatorName} />
          ))}
        </div>
        {artworks.length > limit && !showAllState && (
          <div className="text-center mt-6">
            <button
              className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
              onClick={() => setShowAllState(true)}
            >
              Discover More
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* Primary Market */}
      {renderArtworkSection(
        "PRIMARY MARKET - ",
        "refers to the sale of artworks directly from the artist or through intermediaries, where the work is sold for the first time",
        primaryMarketArtworks,
        showAllPrimary,
        setShowAllPrimary,
        4 // Limit for primary market
      )}

      {/* Secondary Market */}
      {renderArtworkSection(
        "SECONDARY MARKET - ",
        "refers to the resale of artworks that have already been sold at least once",
        secondaryMarketArtworks,
        showAllSecondary,
        setShowAllSecondary,
        4 // Limit for secondary market
      )}

      {/* NFTs */}
      {renderArtworkSection(
        "NFTs",
        "",
        nftsArtworks,
        showAllNfts,
        setShowAllNfts,
        4 // Limit for NFTs
      )}

      {/* Prints & Souvenirs */}
      {printsSouvenirsArtworks.length > 0 && (
        <div className="mt-20 mb-4">
          <p className="border-b border-gray-400 text-yankees-blue mb-4">
            <span className="font-montserrat-medium text-sm">PRINTS & SOUVENIRS</span>
          </p>
          <div className="flex justify-between py-2">
            {/* Pass the sliced array of prints/souvenirs to PrintSouvenirsCard */}
            <PrintSouvenirsCard
              printData={showAllPrints ? printsSouvenirsArtworks : printsSouvenirsArtworks.slice(0, 1)}
              creatorname={creatorName}
            />
          </div>
          {printsSouvenirsArtworks.length > 1 && !showAllPrints && (
            <div className="text-center mt-6">
              <button
                className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
                onClick={() => setShowAllPrints(true)}
              >
                Discover More
              </button>
            </div>
          )}
        </div>
      )}

      {/* Message if no artworks are found in any category */}
      {allArtworks.length === 0 && (
        <div className="text-center py-8 text-gray-600">No assets found for this artist.</div>
      )}
    </div>
  );
};

export default ProfileAssets;