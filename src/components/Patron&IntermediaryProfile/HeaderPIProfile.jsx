// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// const HeaderPatronsProfile = ( {patronDetails})=>  {
//   return(
//     <div className="flex flex-col lg:flex-row justify-between items-start mx-6 lg:space-x-10 xs:mb-8">
//     {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
//     <div className="w-full flex flex-col lg:flex-row lg:justify-start gap-14 lg:items-start xs:items-center xs:mb-8">
      
//       {/* Left Section: Initiative Name and Host */}
     
//       {/* Middle Section: Follow Button, Social Media Links */}
//       <div className="lg:flex xs:flex-col  lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 lg:mt-1">
//         <button className="text-sm lg:w-20 lg:py-1 xs:w-48 xs:py-2 rounded-lg text-white bg-madder-lake hover:bg-red-600 font-montserrat-regular xs:ml-10 xs:mb-4">
//           Follow
//         </button>
//         <div className="flex items-center lg:space-x-4 xs:space-x-12 text-yankees-blue">
//           <a
//             href="https://www.instagram.com/theqandeel"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-montserrat-light text-sm hover:underline flex items-center space-x-1" 
//           >
//             <FontAwesomeIcon className="w-8 h-8" icon={faInstagram} /> <span>@miskksa</span>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/theqandeel"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-montserrat-light text-sm hover:underline flex items-center space-x-1 "
//           >
//             <FontAwesomeIcon className="w-8 h-8" icon={faXTwitter} /> <span>@miskksa</span>
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Stats Section */}
//     <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light xs:ml-11">
//       <div className="flex justify-between w-full text-sm ">
//         <span className='whitespace-nowrap'>Profile Views:</span>
//         <span className="font-montserrat-light  ml-32">{patronDetails.profileViews}</span>
//       </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className='whitespace-nowrap'>Appreciations:</span>
//         <span className="font-montserrat-light ml-32">{patronDetails.Appreciations}</span>
//       </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className='whitespace-nowrap'>Followers:</span>
//         <span className="font-montserrat-light ml-32">{patronDetails.Followers}</span>
//       </div>
//     </div>
//   </div>
//   );
// }
// export default HeaderPatronsProfile;