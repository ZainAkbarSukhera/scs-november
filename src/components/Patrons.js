// import React from 'react';
// // import {FaLocationArrow } from 'react-icons/fa';
// import PatronCard from './StatsCard/StatsCard';

// import alWaleedLogo from '../assets/alWaleedLogo.png';
// import alWaleed1 from '../assets/alWaleed1.png';
// import alWaleed2 from '../assets/alWaleed2.png';
// import alWaleed3 from '../assets/alWaleed3.png';

// import ajLogo from '../assets/artJameelLogo.png';
// import aj1 from '../assets/artJameel1.png';
// import aj2 from '../assets/artJameel2.png';
// import aj3 from '../assets/artJameel3.png';

// import miskLogo from '../assets/miskLogo.png';
// import misk1 from '../assets/misk1.png';
// import misk2 from '../assets/misk2.png';
// import misk3 from '../assets/misk3.png';

// import pifLogo from '../assets/pifLogo.png';
// import pif1 from '../assets/pif1.png';
// import pif2 from '../assets/pif2.png';
// import pif3 from '../assets/pif3.png';





// // Example usage of the Card component
// const Patrons = () => {
//   const exampleData = [
//     {
//       images: [pif1, pif2, pif3],
//       logo: pifLogo,
//       title: 'Public Investment Fund',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 50,
//         artworksResold: 7,
//         artistsSupported: 25,
//         financialContribution: '775,000 SAR',
//       },
//     },
//     {
//       images: [alWaleed1, alWaleed2, alWaleed3],
//       logo: alWaleedLogo,
//       title: 'Alwaleed Philanthropies',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 30,
//         artworksResold: 5,
//         artistsSupported: 14,
//         financialContribution: '425,000 SAR',
//       },
//     },
//     {
//       images: [misk1, misk2, misk3],
//       logo: miskLogo,
//       title: 'Misk Foundation',
//       location: 'Riyadh, Saudi Arabia',
//       stats: {
//         artworksBought: 15,
//         artworksResold: 3,
//         artistsSupported: 10,
//         financialContribution: '260,000 SAR',
//       },
//     },
//     {
//       images: [aj1, aj2, aj3],
//       logo: ajLogo,
//       title: 'Art Jameel',
//       location: 'Jeddah, Saudi Arabia',
//       stats: {
//         artworksBought: 9,
//         artworksResold: 2,
//         artistsSupported: 7,
//         financialContribution: '137,000 SAR',
//       },
//     },
//   ];

//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-10 font-montserrat-medium text-yankees-blue">
//             Art-Patrons
//           </h2>
//           <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//             Become a Patron
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold font-montserrat-regular text-yankees-blue mb-2">
//           Supporting the Future of Saudi Creativity
//         </p>
//         <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//           At SCS, we are deeply grateful to the patrons who believe in the power of art, design, and innovation to shape the future of Saudi Arabia. Their generous support enables us to identify, nurture, and connect the Kingdom’s most promising creatives, helping them realize their full potential and contribute to the cultural and creative landscape.
//         </p>
//       </div>

//       <div className="flex justify-around items-center space-x-4">
//         {exampleData.map((data, index) => (
//           <PatronCard key={index} {...data} />
//         ))}
//       </div>
//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Patrons;

import React from 'react';
import PatronCard from './StatsCard/StatsCard';
import { useNavigate } from 'react-router-dom';

import alWaleedLogo from '../assets/alWaleedLogo.png';
import alWaleed1 from '../assets/alWaleed1.png';
import alWaleed2 from '../assets/alWaleed2.png';
import alWaleed3 from '../assets/alWaleed3.png';

import ajLogo from '../assets/artJameelLogo.png';
import aj1 from '../assets/artJameel1.png';
import aj2 from '../assets/artJameel2.png';
import aj3 from '../assets/artJameel3.png';

import miskLogo from '../assets/miskLogo.png';
import misk1 from '../assets/misk1.png';
import misk2 from '../assets/misk2.png';
import misk3 from '../assets/misk3.png';

import pifLogo from '../assets/pifLogo.png';
import pif1 from '../assets/pif1.png';
import pif2 from '../assets/pif2.png';
import pif3 from '../assets/pif3.png';

const exampleData = [
  {
    images: [pif1, pif2, pif3],
    logo: pifLogo,
    title: 'Public Investment Fund',
    location: 'Riyadh, Saudi Arabia',
    stats: {
      artworksBought: 50,
      artworksResold: 7,
      artistsSupported: 25,
      financialContribution: '775,000 SAR',
    },
  },
  {
    images: [alWaleed1, alWaleed2, alWaleed3],
    logo: alWaleedLogo,
    title: 'Alwaleed Philanthropies',
    location: 'Riyadh, Saudi Arabia',
    stats: {
      artworksBought: 30,
      artworksResold: 5,
      artistsSupported: 14,
      financialContribution: '425,000 SAR',
    },
  },
  {
    images: [misk1, misk2, misk3],
    logo: miskLogo,
    title: 'Misk Foundation',
    location: 'Riyadh, Saudi Arabia',
    stats: {
      artworksBought: 15,
      artworksResold: 3,
      artistsSupported: 10,
      financialContribution: '260,000 SAR',
    },
  },
  {
    images: [aj1, aj2, aj3],
    logo: ajLogo,
    title: 'Art Jameel',
    location: 'Jeddah, Saudi Arabia',
    stats: {
      artworksBought: 9,
      artworksResold: 2,
      artistsSupported: 7,
      financialContribution: '137,000 SAR',
    },
  },
];


// Example usage of the Card component
const Patrons = () =>  {
 
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/patrons-profile');}

  return (
    <div className="p-6 sm:p-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10 font-montserrat-medium text-yankees-blue">
            Art-Patrons
          </h2>
          <button className="w-full sm:w-auto px-12 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Become a Patron
          </button>
        </div>

        <p className="text-base sm:text-lg md:text-xl font-bold font-montserrat-regular text-yankees-blue mb-2">
          Supporting the Future of Saudi Creativity
        </p>
        <p className="text-base text-justify sm:text-base md:text-lg text-yankees-blue mt-2 mb-4 font-montserrat-light">
          At SCS, we are deeply grateful to the patrons who believe in the power of art, design, and innovation to shape the future of Saudi Arabia. Their generous support enables us to identify, nurture, and connect the Kingdom’s most promising creatives, helping them realize their full potential and contribute to the cultural and creative landscape.
        </p>
      </div>

      {/* Cards Section */}
      <div onClick={handleOnClick} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {exampleData.map((data, index) => (
          <PatronCard key={index} {...data} />
        ))}
      </div>
      
      {/* Discover More Button */}
      <div className="text-center mt-6">
        <button onClick={handleOnClick} className="w-full sm:w-auto px-24 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Patrons;
