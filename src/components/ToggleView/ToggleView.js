import React, { useState } from 'react';
import { MdOutlineGridView } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";
import {  Squares2X2Icon  } from '@heroicons/react/20/solid'

const CardViewToggle = () => {
  const [view, setView] = useState('grid'); // Default to grid view

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return  (
    <div className="flex items-center gap-4 absolute top-0 right-0 mr-64 mt-32">
      <button
        className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
          view === 'grid' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
        }`}
        onClick={() => handleViewChange('grid')}
        aria-label="Grid View"
      >
        <Squares2X2Icon className="h-5 w-5" />
      </button>
      <button
        className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
          view === 'list' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
        }`}
        onClick={() => handleViewChange('list')}
        aria-label="List View"
      >
        <TfiViewListAlt className="h-5 w-5" />
      </button>
    </div>
  );
};


export default CardViewToggle;