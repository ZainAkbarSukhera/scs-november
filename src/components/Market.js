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

import React from 'react';
import MarketCard from './ArtMarketCard/marketCard';

import im1 from '../assets/After Marylin.png';
import im2 from '../assets/Frog.png';
import im3 from '../assets/Landscapes-13.png';
import im4 from '../assets/Landscapes-11.png';

const Marketplace = () => {
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

  return (
    <div className="p-8 bg-yankees-blue">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-10 font-montserrat-medium">
          Art-Market
        </h2>
        <div className="space-x-1">
          <button className="bg-fire-opal hover:bg-orange-400 text-white py-2 px-12 rounded font-montserrat-light">Buy</button>
          <button className="bg-madder-lake hover:bg-red-600 text-white py-2 px-12 rounded font-montserrat-light">Sell</button>
        </div>
      </div>

      {/* Description Section */}
      <p className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 font-montserrat-regular">
        Buy, Sell and Celebrate Creativity
      </p>
      <p className="text-base text-justify md:text-base lg:text-lg text-white mt-2 mb-4 font-montserrat-light">
        Our Marketplace is a hub for creatives to showcase and sell their work, from NFTs and digital prints to physical artworks. Whether you're an artist looking to monetize your creations or a collector in search of unique pieces, the Marketplace offers a curated selection of Saudi creativity at its finest. Support local talent and own a piece of the Kingdom's vibrant artistic scene.
      </p>

      {/* Artworks Section - Adjusted for Mobile Screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {artworks.map((art, index) => (
          <MarketCard key={index} {...art} />
        ))}
      </div>

      {/* Discover More Button */}
      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Marketplace;
