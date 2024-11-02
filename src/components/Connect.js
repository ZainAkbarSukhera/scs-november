// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import ConnectCard from './ArtConnectCard/ConnectCardLanding';  

// import fPortrait from '../assets/abdulaziz_profile.png';
// import f1 from '../assets/abdulaziz_1.png';
// import f2 from '../assets/abdulaziz_2.png';
// import f3 from '../assets/abdulaziz_3.png';

// import oPortrait from '../assets/sofana_profile.png';
// import o1 from '../assets/sofana1.jpeg';
// import o2 from '../assets/sofana7.png';
// import o3 from '../assets/sofana6.png';
//
// import yPortrait from '../assets/hadel_profile.png';
// import y1 from '../assets/hadel1.png';
// import y2 from '../assets/hadel2.png';
// import y3 from '../assets/hadel3.png';

// import lPortrait from '../assets/shady_profile1.jpeg';
// import l1 from '../assets/shady2.png';
// import l2 from '../assets/shady1.png';
// import l3 from '../assets/shady3.png';

// const Connect = () => {
//   const navigate=useNavigate();
//   const creatives = [
//     {
//       profileImage: fPortrait,
//       topImages: [f1, f2, f3],
//       name: 'Abdulaziz Albassam',
//       location: 'Khobar, Saudi Arabia',
//       profession: 'TYPOGRAPHIC DESIGNER',
//       initialLikes: 500000,
//       initialViews: 750000,
//     },
//     {
//       profileImage: oPortrait,
//       topImages: [o1, o2, o3],
//       name: 'Sofana Dahlan',
//       location: 'Makkah, Saudi Arabia',
//       profession: 'DIGITAL ARTIST',
//       initialLikes: 450000,
//       initialViews: 650000,
//     },
//     {
//       profileImage: yPortrait,
//       topImages: [y1, y2, y3],
//       name: 'Hadel Al-Saleh',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'GRAPHIC DESIGNER',
//       initialLikes: 350000,
//       initialViews: 500000,
//     },
//     {
//       profileImage: lPortrait,
//       topImages: [l1, l2, l3],
//       name: 'Shady Sirajuddin',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'COLLAGE ARTIST',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//   ];

//   return (
//     <div className="p-8 bg-yankees-blue">
//       <div className="flex justify-between items-center w-full">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-white font-montserrat-medium">
//           Art-Connect
//         </h2>
//         <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//           Create Your Profile
//         </button>
//       </div>

//       <p className="text-base text-white md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 font-montserrat-regular">
//         Explore Our Creative Directory
//       </p>
//       <p className="text-base text-white text-justify md:text-base lg:text-lg mt-2 mb-4 font-montserrat-light">
//         Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
//       </p>

//       <div className="flex flex-wrap gap-4 mb-8">
//         {creatives.map((creative, index) => (
//           <ConnectCard key={index} {...creative} /> 
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//         onClick={()=>navigate('art-connect')}>
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Connect;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import ConnectCard from './ArtConnectCard/ConnectCardLanding';  

// import fPortrait from '../assets/abdulaziz_profile.png';
// import f1 from '../assets/abdulaziz_1.png';
// import f2 from '../assets/abdulaziz_2.png';
// import f3 from '../assets/abdulaziz_3.png';

// import oPortrait from '../assets/sofana_profile.png';
// import o1 from '../assets/sofana1.jpeg';
// import o2 from '../assets/sofana7.png';
// import o3 from '../assets/sofana6.png';

// import yPortrait from '../assets/hadel_profile.png';
// import y1 from '../assets/hadel1.png';
// import y2 from '../assets/hadel2.png';
// import y3 from '../assets/hadel3.png';

// import lPortrait from '../assets/shady_profile1.jpeg';
// import l1 from '../assets/shady2.png';
// import l2 from '../assets/shady1.png';
// import l3 from '../assets/shady3.png';

// const Connect = () => {
//   const navigate = useNavigate();
//   const creatives = [
//     {
//       profileImage: fPortrait,
//       topImages: [f1, f2, f3],
//       name: 'Abdulaziz Albassam',
//       location: 'Khobar, Saudi Arabia',
//       profession: 'TYPOGRAPHIC DESIGNER',
//       initialLikes: 500000,
//       initialViews: 750000,
//     },
//     {
//       profileImage: oPortrait,
//       topImages: [o1, o2, o3],
//       name: 'Sofana Dahlan',
//       location: 'Makkah, Saudi Arabia',
//       profession: 'DIGITAL ARTIST',
//       initialLikes: 450000,
//       initialViews: 650000,
//     },
//     {
//       profileImage: yPortrait,
//       topImages: [y1, y2, y3],
//       name: 'Hadel Al-Saleh',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'GRAPHIC DESIGNER',
//       initialLikes: 350000,
//       initialViews: 500000,
//     },
//     {
//       profileImage: lPortrait,
//       topImages: [l1, l2, l3],
//       name: 'Shady Sirajuddin',
//       location: 'Riyadh, Saudi Arabia',
//       profession: 'COLLAGE ARTIST',
//       initialLikes: 275000,
//       initialViews: 475000,
//     },
//   ];

//   return (
//     <div className="p-8 bg-yankees-blue">
//       <div className="flex justify-between items-center w-full">
//         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-white font-montserrat-medium">
//           Art-Connect
//         </h2>
//         <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//           Create Your Profile
//         </button>
//       </div>

//       <p className="text-base text-white md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 font-montserrat-regular">
//         Explore Our Creative Directory
//       </p>
//       <p className="text-base text-white text-justify md:text-base lg:text-lg mt-2 mb-4 font-montserrat-light">
//         Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
//       </p>

//       <div className="flex flex-wrap gap-4 mb-8">
//         {creatives
//           .slice(0, window.innerWidth < 768 ? 3 : creatives.length) // Show only 3 cards on small screens
//           .map((creative, index) => (
//             <ConnectCard key={index} {...creative} />
//           ))}
//       </div>

//       <div className="text-center mt-6">
//         <button 
//           className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//           onClick={() => navigate('art-connect')}
//         >
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Connect;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ConnectCard from './ArtConnectCard/ConnectCardMain';  

import fPortrait from '../assets/abdulaziz_profile.png';
import f1 from '../assets/abdulaziz_1.png';
import f2 from '../assets/abdulaziz_2.png';
import f3 from '../assets/abdulaziz_3.png';

import oPortrait from '../assets/sofana_profile.png';
import o1 from '../assets/sofana1.jpeg';
import o2 from '../assets/sofana7.png';
import o3 from '../assets/sofana6.png';

import yPortrait from '../assets/hadel_profile.png';
import y1 from '../assets/hadel1.png';
import y2 from '../assets/hadel2.png';
import y3 from '../assets/hadel3.png';

import lPortrait from '../assets/shady_profile1.jpeg';
import l1 from '../assets/shady2.png';
import l2 from '../assets/shady1.png';
import l3 from '../assets/shady3.png';

const Connect = () => {
  const navigate = useNavigate();
  const creatives = [
    {
      profileImage: fPortrait,
      topImages: [f1, f2, f3],
      name: 'Abdulaziz Albassam',
      location: 'Khobar, Saudi Arabia',
      profession: 'TYPOGRAPHIC DESIGNER',
      initialLikes: 500000,
      initialViews: 750000,
    },
    {
      profileImage: oPortrait,
      topImages: [o1, o2, o3],
      name: 'Sofana Dahlan',
      location: 'Makkah, Saudi Arabia',
      profession: 'DIGITAL ARTIST',
      initialLikes: 450000,
      initialViews: 650000,
    },
    {
      profileImage: yPortrait,
      topImages: [y1, y2, y3],
      name: 'Hadel Al-Saleh',
      location: 'Riyadh, Saudi Arabia',
      profession: 'GRAPHIC DESIGNER',
      initialLikes: 350000,
      initialViews: 500000,
    },
    {
      profileImage: lPortrait,
      topImages: [l1, l2, l3],
      name: 'Shady Sirajuddin',
      location: 'Riyadh, Saudi Arabia',
      profession: 'COLLAGE ARTIST',
      initialLikes: 275000,
      initialViews: 475000,
    },
  ];

  return (
    <div className="p-8 bg-yankees-blue">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-white font-montserrat-medium">
          Art-Connect
        </h2>
        <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
          Create Your Profile
        </button>
      </div>

      <p className="text-base text-white md:text-lg lg:text-xl font-bold text-yankeesBlue mb-2 font-montserrat-regular">
        Explore Our Creative Directory
      </p>
      <p className="text-base text-white text-justify md:text-base lg:text-lg mt-2 mb-4 font-montserrat-light">
        Our platform is home to a diverse and dynamic directory of Saudi creatives, from artists and designers to writers and innovators. Whether you're looking for collaboration or inspiration, our directory is the place to discover the best and brightest talents in the Kingdom. Connect with like-minded individuals, share your work, and grow your creative network.
      </p>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {creatives.map((creative, index) => (
          <ConnectCard key={index} {...creative} />
        ))}
      </div>

      <div className="text-center mt-6">
        <button 
          className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
          onClick={() => navigate('art-connect')}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Connect;

