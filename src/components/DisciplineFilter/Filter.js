// import React, { useState } from 'react';

// const Filter = ({ filters, selectedFilter, onFilterSelect }) => {
//   return (
//     <div className="flex space-x-5 mb-4">
//       {filters.map((filter, index) => (
//         <button
//           key={index}
//           className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${
//             selectedFilter === filter.name
//               ? `bg-${filter.color} text-white`
//               : `border-${filter.color} text-${filter.color}`
//           }`}
//           onClick={() => onFilterSelect(filter.name)}
//         >
//           {filter.name}
//         </button>
//       ))}
//     </div>
//   );
// };
//
// export default Filter;

import React from 'react';
import { useState } from 'react';

const filters = [
  { name: 'All', color: 'black' },
  { name: 'Calligraphy', color:'#133240' },
  { name: 'Drawing & Illustration', color:'#82BABB' },
  { name: 'Graphics', color: '#C2373D' },
  { name: 'Mixed Media', color: '#F2CB05' },
  { name: 'Painting', color: '#6F2A53' },
  { name: 'Photography', color: '#E85846' },
  { name: 'Printmaking', color: '#F8CCA7' },
  { name: 'Sculpture', color: '#F59D48' },
];


const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterSelect = (filterName) => {
    setSelectedFilter(filterName);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2.5 ">
      {filters.map((filter, index) => {
        const isSelected = selectedFilter === filter.name;
        return (
          <button
            key={index}
            style={{
              backgroundColor: isSelected ? filter.color : 'transparent',
              color: isSelected ? 'white' : filter.color,
              borderColor: filter.color,
            }}
            className={`px-5 py-1 rounded-xl text-sm font-medium border-2 transition-all duration-300 ease-in-out
              ${isSelected ? 'shadow-lg' : 'hover:bg-gray-100 hover:text-yankees-blue'}`}
            onClick={() => handleFilterSelect(filter.name)}
          >
            {filter.name}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
