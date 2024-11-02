// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const HeaderCreativeProfile = ({ CreatorName, host, profession,website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center ml-4">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-bold mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl text-red-500">{host}</p>
//         <p className="text-base text-palatinate-purple">{profession}</p>
//         <a href="https://www.theqandeel.com" target="_blank" className="text-black text-xs hover:underline mr-4">
//            {website}
//           </a>
//       </div>

//       {/* Follow Button and Social Media Links */}
//       <div className="flex flex-row  ml-16 items-start space-x-2 mt-4 lg:mt-0">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700">
//           Follow
//         </button>

//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" className="text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" className="text-blue-500 hover:underline">
//             <FontAwesomeIcon icon={faLinkedin} className="mr-1" />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex flex-col items-start space-y-2 mt-4 mr-8 ml-96  lg:mt-0">
//         <div className="text-sm text-gray-600 mb-2">
//           Profile Views: <strong>{ProfileViews}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Appreciations: <strong>{Appreciations}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Followers: <strong>{Followers}</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';


// const HeaderCreativeProfile = ({ CreatorName, host, profession, website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-montserrat-bold text-yankees-blue mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl text-red-500">{host}</p>
//         <p className="text-base text-palatinate-purple">{profession}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline">
//           {website}
//         </a>
//       </div>

//       {/* Middle Section: Follow Button and Social Media Links */}
//       <div className="flex flex-grow justify-start items-start ml-16 space-x-4 mt-4 lg:mt-0">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700 font-montserrat-regular">
//           Follow
//         </button>

//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline">
//           <FontAwesomeIcon icon={faXTwitter} className='mr-1' />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex font-montserrat-light  flex-col items-start mt-4 mr-8 lg:mt-0">
//         <div className="text-sm text-gray-600 mb-2">Profile Views:<strong className='ml-48'>{ProfileViews}</strong></div>
//         <div className="text-sm text-gray-600 mb-2">Appreciations: <strong className='ml-48'>{Appreciations}</strong></div>
//         <div className="text-sm text-gray-600 mb-2">Followers: <strong className='ml-48'>{Followers}</strong></div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// const HeaderCreativeProfile = ({ CreatorName, host, profession, website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4 ">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-montserrat-bold text-yankees-blue mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl font-montserrat-regular text-red-500">{host}</p>
//         <p className="text-base font-montserrat-regular text-palatinate-purple">{profession}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline">
//           {website}
//         </a>
//       </div>

//       {/* Middle Section: Follow Button and Social Media Links */}
//       <div className="flex flex-grow justify-start items-start ml-16 space-x-4 mt-0 ">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700 font-montserrat-regular">
//           Follow
//         </button>
//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline">
//             <FontAwesomeIcon icon={faXTwitter} className="mr-1" />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex flex-col items-start mt-0 lg:mt-0 lg:ml-8">
//         <div className="text-sm font-montserrat-light text-gray-600 mb-2">
//           Profile Views: <strong className="ml-48">{ProfileViews}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Appreciations: <strong className="ml-48">{Appreciations}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Followers: <strong className="ml-52">{Followers}</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';



const HeaderCreativeProfile = ({  ProfileViews, Appreciations, Followers }) => {
  
  return(
        <div className="flex flex-col lg:flex-row justify-between items-start mx-6 lg:space-x-10">
      {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
      <div className="w-full flex flex-col lg:flex-row justify-start gap-14 lg:items-start">
        
        {/* Left Section: Initiative Name and Host */}
       
        {/* Middle Section: Follow Button, Social Media Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mt-4 lg:mt-1">
          <button className="text-sm w-20 py-1 rounded-lg text-white bg-madder-lake hover:bg-red-600 font-montserrat-regular">
            Follow
          </button>
          <div className="flex items-center space-x-4 text-yankees-blue ">
            <a
              href="https://www.instagram.com/theqandeel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat-light text-sm hover:underline flex items-center space-x-1"
            >
              <FontAwesomeIcon className="w-8 h-8" icon={faInstagram} /> <span>@theqandeel</span>
            </a>
            <a
              href="https://www.linkedin.com/in/theqandeel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat-light text-sm hover:underline flex items-center space-x-1 "
            >
              <FontAwesomeIcon className="w-8 h-8" icon={faXTwitter} /> <span>@theqandeel</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light">
        <div className="flex justify-between w-full text-sm ">
          <span className='whitespace-nowrap'>Profile Views:</span>
          <span className="font-montserrat-light  ml-32">{ProfileViews}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className='whitespace-nowrap'>Appreciations:</span>
          <span className="font-montserrat-light ml-32">{Appreciations}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className='whitespace-nowrap'>Followers:</span>
          <span className="font-montserrat-light ml-32">{Followers}</span>
        </div>
      </div>
    </div>

  );
};

export default HeaderCreativeProfile;