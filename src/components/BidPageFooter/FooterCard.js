import React, { useState } from 'react';


const FooterCard = ({ image, title }) =>  {
 
  return (
    <div className="bg-yankees-blue p-1 w-full">
      {/* Image */}
      <img src={image} alt={title} className="h-40 w-full object-cover mb-4" />

      {/* Title with Stats */}
      <div className="flex items-center justify-between w-full mt-2 text-xs text-white">
        <h3 className="text-lg font-montserrat-medium text-white">{title}</h3>
      </div>
    </div>
  );
};

export default FooterCard;