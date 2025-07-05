// import React from 'react';
// import MarketCard from './ArtMarketCard/marketCard';


// import im1 from '../assets/After Marylin.png';
// import im2 from '../assets/Frog.png';
// import im3 from '../assets/Landscapes-13.png';
// import im4 from '../assets/Landscapes-11.png';


//
// const Marketplace = () => {
//   const artworks = [
//     {
//       image: im1,
//       title: 'After Marylin',
//       artist: 'Noura Al-Mutairi',
//       initialLikes: 25700,
//       initialViews: 50000,
//     },
//     {
//       image: im4,
//       title: 'Landscapes (XI)',
//       artist: 'Ahmed Al-Turki',
//       initialLikes: 19500,
//       initialViews: 37000,
//     },
//     {
//       image: im2,
//       title: 'Frog',
//       artist: 'Hanan Al-Ahmadi',
//       initialLikes: 17400,
//       initialViews: 30000,
//     },
//     {
//       image: im3,
//       title: 'Landscapes (VIII)',
//       artist: 'Ahmed Al-Turki',
//       initialLikes: 15400,
//       initialViews: 25000,
//     },
//   ];

//   return (
//     <div className="p-8 bg-yankees-blue">

//       <div className="flex justify-between items-center w-full">
//           <h2 className=" text-white text-3xl md:text-4xl lg:text-5xl font-bold  mb-10 font-montserrat-medium ">
//             Art-Market
//           </h2>
//           <div className='hidden md:flex space-x-1'>
//           <button className="bg-fire-opal hover:bg-orange-400 text-white py-2 px-12 rounded font-montserrat-light">Buy</button>
//           <button className="bg-madder-lake hover:bg-red-600 text-white py-2 px-12 rounded font-montserrat-light">Sell</button>
//           </div>
//         </div>

//       <p className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 font-montserrat-regular">
//         Buy, Sell and Celebrate Creativity
//         </p>
//         <p className="text-base text-justify md:text-base lg:text-lg text-white mt-2 mb-4 font-montserrat-light">
//         Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
//         </p>

//       {/* Artworks */}
//       <div className="flex space-x-4 mb-8">
//         {artworks.map((art, index) => (
//           <MarketCard key={index} {...art} />
//         ))}
//       </div>

//       {/* Discover More Button */}
//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Marketplace;

// import React from 'react';
// import MarketCard from './ArtMarketCard/marketCard';
// import { useNavigate } from 'react-router-dom';

// import im1 from '../assets/After Marylin.png';
// import im2 from '../assets/Frog.png';
// import im3 from '../assets/Landscapes-13.png';
// import im4 from '../assets/Landscapes-11.png';

// const Marketplace = () => {
//   const navigate=useNavigate();
//   const artworks = [
//     {
//       image: im1,
//       title: 'After Marylin',
//       artist: 'Noura Al-Mutairi',
//       initialLikes: 25700,
//       initialViews: 50000,
//     },
//     {
//       image: im4,
//       title: 'Landscapes (XI)',
//       artist: 'Ahmed Al-Turki',
//       initialLikes: 19500,
//       initialViews: 37000,
//     },
//     {
//       image: im2,
//       title: 'Frog',
//       artist: 'Hanan Al-Ahmadi',
//       initialLikes: 17400,
//       initialViews: 30000,
//     },
//     {
//       image: im3,
//       title: 'Landscapes (VIII)',
//       artist: 'Ahmed Al-Turki',
//       initialLikes: 15400,
//       initialViews: 25000,
//     },
//   ];

//   return (
//     <div className="p-8 bg-yankees-blue"> 
//     {/* Header Section */}
//     <div className="flex justify-between items-center w-full">
//       <h2 className="text-white text-3xl xs:text-2xl xs:whitespace-nowrap md:text-4xl lg:text-5x mb-10 font-montserrat-medium">
//         Art-Market
//       </h2>
//       <div className="space-x-1 xs:space-y-2 xs: mb-9">
//         <button className="bg-fire-opal hover:bg-orange-400 xs:ml-1 text-white xs:px-8 xs:py-1 py-2 px-12 rounded font-montserrat-light" onClick={()=>navigate('login')}>Buy</button>
//         <button className=" bg-madder-lake hover:bg-red-600 text-white xs:px-8 xs:py-1 py-2 px-12 rounded font-montserrat-light" onClick={()=>navigate('login')}>Sell</button>
//       </div>
//     </div>

//     {/* Description Section */}
//     <p className="text-base xs:mt-1 md:text-lg lg:text-xl  text-white mb-2 font-montserrat-regular">
//       Buy, Sell and Celebrate Creativity
//     </p>
//     <p className="text-base text-justify md:text-base lg:text-lg text-white mt-2 mb-4 font-montserrat-light">
//       Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
//     </p>

//     {/* Artworks Section - Adjusted for Mobile Screens */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
//       {artworks.map((art, index) => (
//         <MarketCard key={index} {...art} />
//       ))}
//     </div>

//     {/* Discover More Button */}
//     <div className="text-center mt-6">
//       <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//         Discover More
//       </button>
//     </div>
//   </div>
//   );
// };

// export default Marketplace;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { useNavigate } from 'react-router-dom';
import MarketCard from './ArtMarketCard/marketCard'; // Ensure this path is correct
import { setMarketItems, setMarketLoading, setMarketError } from './redux/reducers/market'; // Import actions
import { getAllMarketItems } from '../api/market'; // Import the new API function

const Marketplace = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check for the presence of a token in localStorage
  const hasToken = localStorage.getItem("token") ? true : false;

  // Select data from the Redux store
  const marketItems = useSelector((state) => state.market.items);
  const status = useSelector((state) => state.market.status);
  const error = useSelector((state) => state.market.error);

  useEffect(() => {
    const fetchMarketData = async () => {
      // Only fetch if not already loading or succeeded, or if you want to refetch on status change
      if (status === 'idle' || status === 'failed') { // Added 'failed' to allow re-fetching on error
        dispatch(setMarketLoading()); // Set loading status

        try {
          const data = await getAllMarketItems(); // Use the API function
          dispatch(setMarketItems(data)); // Set data to Redux state
        } catch (err) {
          console.error("Failed to fetch market items:", err);
          dispatch(setMarketError(err.message || 'Failed to fetch market items.')); // Set error
        }
      }
    };

    fetchMarketData();
  }, [status, dispatch]); // Dependencies: status and dispatch

  // Limit to 4 cards as requested
  const artworksToDisplay = marketItems.slice(0, 4);

  console.log("Artwork Display: ", artworksToDisplay);

  if (status === 'loading') {
    return (
      <div className="text-center p-8 text-white font-montserrat-regular">
        Loading artworks...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center p-8 text-red-600 font-montserrat-regular">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-8 bg-yankees-blue">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-white text-3xl xs:text-2xl xs:whitespace-nowrap md:text-4xl lg:text-5x mb-10 font-montserrat-medium">
          Art-Market
        </h2>
        <div className="space-x-1 xs:space-y-2 xs: mb-9">
          {/* Buy Button Logic */}
          <button
            className="bg-fire-opal hover:bg-orange-400 xs:ml-1 text-white xs:px-8 xs:py-1 py-2 px-12 rounded font-montserrat-light"
            onClick={() => {
              if (hasToken) {
                navigate('art-market'); // Navigate to internal art-market if token exists
              } else {
                navigate('login'); // Navigate to login if no token
              }
            }}
          >
            Buy
          </button>
          {/* Sell Button Logic */}
          <button
            className="bg-madder-lake hover:bg-red-600 text-white xs:px-8 xs:py-1 py-2 px-12 rounded font-montserrat-light"
            onClick={() => {
              if (hasToken) {
                window.location.href = 'https://www.artist-saudicreativestreams.com'; // External redirect if token exists
              } else {
                // navigate('login'); // Navigate to login if no token
                 window.location.href = 'https://www.artist-saudicreativestreams.com';
              }
            }}
          >
            Sell
          </button>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-base xs:mt-1 md:text-lg lg:text-xl text-white mb-2 font-montserrat-regular">
        Buy, Sell and Celebrate Creativity
      </p>
      <p className="text-base text-justify md:text-base lg:text-lg text-white mt-2 mb-4 font-montserrat-light">
        Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
      </p>

      {/* Artworks Section - Adjusted for Mobile Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {artworksToDisplay.length > 0 ? (
          artworksToDisplay.map((artworkItem) => ( // Renamed 'art' to 'artworkItem' for clarity
            <MarketCard
              key={artworkItem._id} // Use _id from the fetched data as key
              artworkId={artworkItem.artwork._id}
              image={artworkItem.image}
              title={artworkItem.artwork?.title || 'Untitled Artwork'} // Access title from populated artwork
              artist={artworkItem.artist?.fullNameEnglish || 'Unknown Artist'} // Access artist name from populated artist
              initialLikes={artworkItem.likes}
              initialViews={artworkItem.artwork.profileViews}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 font-montserrat-light">No artworks available.</p>
        )}
      </div>

      {/* Discover More Button */}
      <div className="text-center mt-6">
        <button
          className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
          onClick={() => navigate('art-market')} // Always navigate to 'art-market'
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Marketplace;