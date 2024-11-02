import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';
import { MarketCategories } from '../../static/data';

function formatNumber(num) {
  if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;  // If less than 1000, return the number 
}
const CreatorProfileCard = ({ image, title, artist, initialLikes, initialViews })=> {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // To track if the user has liked the item
  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return(
    <div className="relative group p-2 w-full">
      {/* Image */}
      <img
        src={image} alt={title}
        className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay on Hover */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 flex justify-between items-center">
        
        {/* Title and Artist on the Left */}
        <div className="flex flex-col">
          <p className="font-montserrat-medium text-sm text-white">{title}</p>
          <p className="font-montserrat-light text-xs text-white">{artist}</p>
        </div>

        {/* Like and Views on the Right */}
        <div className="flex space-x-2">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 p-1 rounded transition-all duration-200 ${
              liked ? 'text-madder-lake' : 'text-white'
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
            <span className="text-xs text-white font-montserrat-light">{formatNumber(likes)}</span>
          </button>
          <div className="flex items-center space-x-1 text-xs  text-white font-montserrat-light">
            <FaEye size={10} /> <span>{formatNumber(views)}</span>
          </div>
        </div>
      </div>
    </div>

  );

};

export default CreatorProfileCard;