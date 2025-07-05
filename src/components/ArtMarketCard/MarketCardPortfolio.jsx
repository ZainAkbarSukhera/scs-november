// import React, { useState } from 'react';
// import { FaThumbsUp, FaEye } from 'react-icons/fa';


// const MarketCardPortfolio = ({ image, title, artist, initialLikes, initialViews }) => {
//   const [likes, setLikes] = useState(initialLikes);
//   const [liked, setLiked] = useState(false); // To track if user has liked the item
//   const [views] = useState(initialViews);

//   const handleLike = () => {
//     if (liked) {
//       setLikes(likes - 1);
//     } else {
//       setLikes(likes + 1);
//     }
//     setLiked(!liked); // Toggle the liked state
//   };

//   return (
//     <div className="p-1 w-full xs:p-2">
//       {/* Image */}
//       <img 
//         src={image} 
//         alt={title} 
//         className="h-40 w-full object-cover mb-2 xs:h-36" 
//       />
  
//       {/* Title and Stats */}
//       <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
//         <p className="font-medium text-xs xs:text-sm">{title}</p>
//         <div className="flex items-center space-x-2">
//           <button className="flex items-center p-1 rounded transition-all duration-200">
//             <svg 
//               className="w-4 h-4" 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke-width="1.5" 
//               stroke="currentColor"
//             >
//               <path 
//                 stroke-linecap="round" 
//                 stroke-linejoin="round" 
//                 d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904"
//               ></path>
//             </svg>
//             <span className="text-xs ml-1">Like</span>
//           </button>
//         </div>
//       </div>
  
//       {/* Artist */}
//       <div className="flex flex-col mt-1">
//         <p className="text-white text-xs xs:text-sm font-light">Artist: {artist}</p>
//       </div>
//     </div>
//   );
// };

// export default MarketCardPortfolio;

import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';


const MarketCardPortfolio = ({ image, title, artist, initialLikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // To track if user has liked the item
  //  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="p-1 w-full xs:p-2">
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
        className="h-40 w-full object-cover mb-2 xs:h-36" 
      />
  
      {/* Title and Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
        <p className="font-medium text-xs xs:text-sm">{title}</p>
        <div className="flex items-center space-x-2">
          <button onSubmit={handleLike} className="flex items-center p-1 rounded transition-all duration-200">
            <svg 
              className="w-4 h-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904"
              ></path>
            </svg>
            <span className="text-xs ml-1">Like</span>
          </button>
        </div>
      </div>
  
      {/* Artist */}
      <div className="flex flex-col mt-1">
        <p className="text-white text-xs xs:text-sm font-light">Artist: {artist}</p>
      </div>
    </div>
  );
};

export default MarketCardPortfolio;