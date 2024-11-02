import React, { useState } from 'react';
import { FaThumbsUp, FaEye } from 'react-icons/fa';


const MarketCardPortfolio = ({ image, title, artist, initialLikes, initialViews }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // To track if user has liked the item
  const [views] = useState(initialViews);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className=" p-1 w-full">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover mb-4" />

      {/* Title and Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
        </div>
     

      {/* Artist */}
      <div className="flex flex-col">
      </div>
    </div>
  );
};

export default MarketCardPortfolio;