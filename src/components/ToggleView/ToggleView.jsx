// import React, { useState } from 'react';
// import { MdOutlineGridView } from "react-icons/md";
// import { TfiViewListAlt } from "react-icons/tfi";
// import {  Squares2X2Icon  } from '@heroicons/react/20/solid'

// const CardViewToggle = () => {
//   const [view, setView] = useState('grid'); // Default to grid view

//   const handleViewChange = (newView) => {
//     setView(newView);
//   };

//   return  (
//     <div className="flex items-center gap-4 absolute top-0 right-0 lg:mr-64 lg:mt-32 xs:mt-48 xs:mr-80 xs:gap-1">
//     <button
//       className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
//         view === 'grid' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
//       }`}
//       onClick={() => handleViewChange('grid')}
//       aria-label="Grid View"
//     >
//       <Squares2X2Icon className="h-5 w-5" />
//     </button>
//     <button
//       className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
//         view === 'list' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
//       }`}
//       onClick={() => handleViewChange('list')}
//       aria-label="List View"
//     >
//       <TfiViewListAlt className="h-5 w-5" />
//     </button>
//   </div>
//   );
// };


// export default CardViewToggle;

import React from 'react';
import { MdOutlineGridView } from "react-icons/md"; // Not used currently, but kept for reference
import { TfiViewListAlt } from "react-icons/tfi";
import { Squares2X2Icon } from '@heroicons/react/20/solid'; // Already used

// CardViewToggle now accepts two props:
// - `currentView`: The current active view ('grid' or 'list') from the parent.
// - `onViewChange`: A function provided by the parent to update the view state.
const CardViewToggle = ({ currentView, onViewChange }) => {
  // Remove the internal `useState` for `view`
  // const [view, setView] = useState('grid');

  // Remove the internal `handleViewChange`
  // const handleViewChange = (newView) => {
  //   setView(newView);
  // };

  return (
    // Adjust positioning if needed, current absolute positioning seems tied to specific layout
    <div className="flex items-center gap-4 absolute top-0 right-0 lg:mr-64 lg:mt-32 xs:mt-48 xs:mr-80 xs:gap-1">
      <button
        // Use `currentView` prop to determine active state
        className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
          currentView === 'grid' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
        }`}
        // Call `onViewChange` prop when clicked
        onClick={() => onViewChange('grid')}
        aria-label="Grid View"
      >
        <Squares2X2Icon className="h-5 w-5" />
      </button>
      <button
        // Use `currentView` prop to determine active state
        className={`flex items-center justify-center w-11 h-11 rounded-md transition duration-300 ease-in-out shadow-md border ${
          currentView === 'list' ? 'bg-yankees-blue text-white border-blue-950' : 'bg-white text-yankees-blue border-gray-300 hover:bg-gray-100'
        }`}
        // Call `onViewChange` prop when clicked
        onClick={() => onViewChange('list')}
        aria-label="List View"
      >
        <TfiViewListAlt className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CardViewToggle;