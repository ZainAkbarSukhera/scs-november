import React, { useState } from 'react';
import { FaThumbsUp, FaEye, FaLocationArrow } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function formatNumber(num) {
  if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;  // If less than 1000, return the number as it is
}

const ConnectCard = ({ profileImage, topImages, name, location, profession, initialLikes, initialViews }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); 
  const [views] = useState(initialViews);
  const navigate = useNavigate(); // Correct the useNavigate initialization

  const handleOnClick = () => {
    navigate('/creative-profile'); // Use navigate to go to the profile page
  }

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };


  return (
    <div 
      className="bg-white shadow-md rounded-lg p-4 flex-1 cursor-pointer" 
      onClick={handleOnClick} // Make the entire card clickable
    >
      {/* Top Images - */}
      <div className="flex overflow-hidden mb-0 rounded-md space-x-0.5">
        {topImages.slice(0, 3).map((image, index) => (
          <div key={index} className="flex-1 overflow-hidden h-16">
            <img
              src={image}
              alt={`Top image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
  
      {/* Profile Image */}
      <div className="flex justify-center mb-2">
        <img src={profileImage} alt={name} className="h-24 w-24 rounded-full border-4 border-white shadow-lg" />
      </div>
  
      {/* Name, Location, and Profession */}
      <h3 className="text-lg text-center font-montserrat-medium text-yankees-blue">{name}</h3>
      <div className='flex justify-center'>
        <FaLocationArrow className='text-madder-lake text-sm mt-1 mr-2'/>
        <p className="text-madder-lake text-center font-montserrat-light">{location}</p>
      </div>
      <p className="text-palatinate-purple text-center text-sm mb-2 font-montserrat-light">{profession}</p>
  
      {/* Badges, Likes, and Views */}
      <div className="flex justify-between items-center mt-2 text-gray-700">
        <div className="flex items-center space-x-2">
          {/* Placeholder for badges */}
          <span className="bg-gray-200 px-1 py-1 rounded-full text-xs">Badge 1</span>
          <span className="bg-gray-200 px-1 py-1 rounded-full text-xs">Badge 2</span>
        </div>
        <div className="flex items-center space-x-2 mr-2 font-montserrat-light text-xs">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from triggering card navigation
              handleLike();
            }}
            className={`flex items-center space-x-1 p-1 rounded transition-all duration-200 ${
              liked ? ' text-madder-lake' : ''
            }`}
          >
            {/* <FaThumbsUp className={`transition-colors duration-200 ${liked ? 'border-madder-lake' : 'text-gray-600'}`} /> */}
            <svg class="w-4 h-4 text-yankees-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg>
            <span className='text-xs'>{formatNumber(likes)}</span>
          </button>
          <div className="flex items-center space-x-1">
            <FaEye /> <span className='text-xs text-yankees-blue'>{formatNumber(views)}</span>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ConnectCard;
