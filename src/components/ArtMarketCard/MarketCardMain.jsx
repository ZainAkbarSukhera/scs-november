

// import React, { useState } from 'react';
// import { FaThumbsUp, FaEye } from 'react-icons/fa';
// import { MarketCategories } from '../../static/data';
// import { useNavigate } from 'react-router-dom';

// function formatNumber(num) {
//   if (num >= 1000) {
//       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
//   }
//   return num;  // If less than 1000, return the number as it is
// }

// const MarketCard = ({ image, title, artist, initialLikes, initialViews }) => {

//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/artwork-profile'); // Use navigate to go to the profile page
//   }

//   const [likes, setLikes] = useState(initialLikes);
//   const [liked, setLiked] = useState(false); // To track if the user has liked the item
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
//     <div className="p-2 w-full xs:p-1">
//       {/* Image */}
//       <img 
//         src={image} 
//         alt={title} 
//         onClick={handleOnClick} 
//         className="h-40 w-full object-fill transform transition duration-100 hover:scale-105 hover:shadow-md hover:opacity-100 xs:h-36" 
//       />
  
//       {/* Title and Stats */}
//       <div className="flex items-start xs:items-center justify-between w-full mt-2">
//         <p className="font-montserrat-medium text-sm xs:text-xs text-yankees-blue">{title}</p>
//         <div className="flex space-x-1 xs:space-x-0.5">
//           <button
//             onClick={handleLike}
//             className={`flex items-center space-x-1 p-1 rounded transition-all duration-200 ${
//               liked ? 'text-madder-lake' : ''
//             }`}
//           >
//             <svg 
//               className="w-3 h-3" 
//               xmlns="http://www.w3.org/2000/svg" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke-width="1.5" 
//               stroke="currentColor"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
//               ></path>
//             </svg>
//             <span className="text-xs">{formatNumber(likes)}</span>
//           </button>
//           <div className="flex items-center space-x-1 xs:space-x-0.5 text-xs text-yankees-blue">
//             <FaEye size={10} /> <span>{formatNumber(views)}</span>
//           </div>
//         </div>
//       </div>
  
//       {/* Artist */}
//       <p className="text-yankees-blue text-xs font-montserrat-light xs:text-xs mt-1">{artist}</p>
//     </div>
//   );
// };

// export default MarketCard;

import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;
}

const MarketCardMain = ({
  artworkId,
  image,
  title,
  artist,
  initialLikes,
  initialViews,
  description,
  cardView // This prop is crucial for conditional styling
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const id=artworkId;
    navigate(`/artwork-profile/${id}`);
  };

  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [views] = useState(initialViews);

  const handleLike = (e) => {
    e.stopPropagation(); // Prevent card click when liking
    setLikes(prevLikes => prevLikes + (liked ? -1 : 1));
    setLiked(prevLiked => !prevLiked);
  };

  // --- GRID VIEW STYLING (TAKEN FROM YOUR PROVIDED CODE) ---
  const gridContainerClasses = "p-2 w-full xs:p-1";
  const gridImageClasses = "h-40 w-full object-fill transform transition duration-100 hover:scale-105 hover:shadow-md hover:opacity-100 xs:h-36";
  const gridTitleStatsWrapperClasses = "flex items-start xs:items-center justify-between w-full mt-2";
  const gridTitleClasses = "font-montserrat-medium text-sm xs:text-xs text-yankees-blue";
  const gridStatsGroupClasses = "flex space-x-1 xs:space-x-0.5";
  const gridArtistClasses = "text-yankees-blue text-xs font-montserrat-light xs:text-xs mt-1";

  // --- LIST VIEW STYLING (MODIFIED FOR ELONGATED LAYOUT, LARGER IMAGE, AND RIGHT-ALIGNED STATS ON SAME LINE) ---
  const listContainerClasses = "flex items-center p-6 border-b border-gray-200 last:border-b-0 w-full cursor-pointer hover:bg-gray-50 transition duration-150 ease-in-out";
  const listImageClasses = "w-56 h-40 object-cover rounded-lg flex-shrink-0 mr-6";
  const listContentAreaClasses = "flex flex-col flex-grow"; // This part will contain title, artist, description
  const listTitleClasses = "font-montserrat-bold text-xl text-yankees-blue";
  const listArtistClasses = "text-gray-600 text-base mt-1";
  const listDescriptionClasses = "text-gray-500 text-sm mt-2 line-clamp-3";
  // Updated: listStatsGroupClasses will now define a row for likes and views
  const listStatsGroupClasses = "flex items-center space-x-4 ml-auto text-sm text-yankees-blue"; // Now a row, ml-auto to push right
  const listStatsIndividualClasses = "flex items-center space-x-1"; // For individual like/view groups

  return (
    <div
      className={cardView === 'grid' ? gridContainerClasses : listContainerClasses}
      onClick={handleOnClick}
    >
      {cardView === 'grid' ? (
        // Grid View
        <>
          <img
            src={image}
            alt={title}
            className={gridImageClasses}
          />

          {/* Title and Stats */}
          <div className={gridTitleStatsWrapperClasses}>
            <p className={gridTitleClasses}>{title}</p>
            <div className={gridStatsGroupClasses}>
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 p-1 rounded transition-all duration-200 ${
                  liked ? 'text-madder-lake' : ''
                }`}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  ></path>
                </svg>
                <span className="text-xs">{formatNumber(likes)}</span>
              </button>
              <div className="flex items-center space-x-1 xs:space-x-0.5 text-xs text-yankees-blue">
                <FaEye size={10} /> <span>{formatNumber(views)}</span>
              </div>
            </div>
          </div>

          {/* Artist */}
          <p className={gridArtistClasses}>{artist}</p>
        </>
      ) : (
        // List View
        <>
          <img
            src={image}
            alt={title}
            className={listImageClasses}
          />
          <div className={listContentAreaClasses}>
            <h3 className={listTitleClasses}>{title}</h3>
            <p className={listArtistClasses}>{artist}</p>
            {description && (
              <p className={listDescriptionClasses}>{description}</p>
            )}
          </div>
          {/* Likes and Views for List View - Now on the same line */}
          <div className={listStatsGroupClasses}> {/* This flex row pushes to the right */}
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 p-1 rounded transition-all duration-200 ${
                liked ? 'text-madder-lake' : ''
              }`}
            >
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
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                ></path>
              </svg>
              <span className="text-sm">{formatNumber(likes)}</span>
            </button>
            <div className={listStatsIndividualClasses}> {/* Keep this for spacing between icon and text */}
              <FaEye size={12} />
              <span>{formatNumber(views)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarketCardMain;