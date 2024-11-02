// import React, { useState } from 'react';
// import FilterComponent from './Filter';
// // import BidCard from './BidCard'; // Your existing card component

// // Sample card data
// const projects = [
//   {
//     category: 'Calligraphy',
//     title: 'Calligraphy Art Project',
//     image: 'path_to_image1',
//     description: 'Project related to calligraphy.',
//   },
//   {
//     category: 'Drawing & Illustration',
//     title: 'Illustration Design',
//     image: 'path_to_image2',
//     description: 'Project related to drawing and illustration.',
//   },
//   {
//     category: 'Graphics',
//     title: 'Graphic Design Competition',
//     image: 'path_to_image3',
//     description: 'Project related to graphics.',
//   },
//   {
//     category: 'Mixed Media',
//     title: 'Mixed Media Challenge',
//     image: 'path_to_image4',
//     description: 'Project related to mixed media.',
//   }, 
//   {
//     category: 'Photography',
//     title: 'Photography Contest',
//     image: 'path_to_image5',
//     description: 'Project related to photography.',
//   },
//   {
//     category: 'All',
//     title: 'General Art Contest',
//     image: 'path_to_image6',
//     description: 'This project is open to all categories.',
//   },
// ];

// const FilteredCards = () => {
//   const [selectedFilter, setSelectedFilter] = useState('All');

//   const filters = [
//     { name: 'All', color: 'black' },
//     { name: 'Calligraphy', color:'yankees-blue' },
//     { name: 'Drawing & Illustration', color:'pewter-blue' },
//     { name: 'Graphics', color: 'madder-lake' },
//     { name: 'Mixed Media', color: 'yellow-munsell' },
//     { name: 'Painting', color: 'palatinate-purple' },
//     { name: 'Photography', color: 'fire-opal' },
//     { name: 'Printmaking', color: 'deep-peach' },
//     { name: 'Sculpture', color: 'royal-orange' },
//   ];

//   const handleFilterSelect = (filterName) => {
//     setSelectedFilter(filterName);
//   };

//   // const filteredProjects =
//   //   selectedFilter === 'All'
//   //     ? projects
//   //     : projects.filter((project) => project.category === selectedFilter);

//   return (
//     <div className="font-montserrat-light absolute top-0 right-3 flex items-center mt-40 p-8">
//       {/* Filter Buttons */}
//       <FilterComponent
//         filters={filters}
//         selectedFilter={selectedFilter}
//         onFilterSelect={handleFilterSelect}
//       />

//       {/* Render filtered cards */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProjects.map((project, index) => (
//           <BidCard key={index} project={project} />
//         ))}
//       </div> */}
//     </div>
//   );
// };
//

// export default FilteredCards;

import React, { useState } from 'react';
import FilterComponent from './Filter';
// import BidCard from './BidCard'; // Your existing card component

// Sample card data
const projects = [
  {
    category: 'Calligraphy',
    title: 'Calligraphy Art Project',
    image: 'path_to_image1',
    description: 'Project related to calligraphy.',
  },
  {
    category: 'Drawing & Illustration',
    title: 'Illustration Design',
    image: 'path_to_image2',
    description: 'Project related to drawing and illustration.',
  },
  {
    category: 'Graphics',
    title: 'Graphic Design Competition',
    image: 'path_to_image3',
    description: 'Project related to graphics.',
  },
  {
    category: 'Mixed Media',
    title: 'Mixed Media Challenge',
    image: 'path_to_image4',
    description: 'Project related to mixed media.',
  },
  {
    category: 'Photography',
    title: 'Photography Contest',
    image: 'path_to_image5',
    description: 'Project related to photography.',
  },
  {
    category: 'All',
    title: 'General Art Contest',
    image: 'path_to_image6',
    description: 'This project is open to all categories.',
  },
];

// const filters = [
//   { name: 'All', color: 'black' },
//   { name: 'Calligraphy', color:'yankees-blue' },
//   { name: 'Drawing & Illustration', color:'pewter-blue' },
//   { name: 'Graphics', color: 'madder-lake' },
//   { name: 'Mixed Media', color: 'yellow-munsell' },
//   { name: 'Painting', color: 'palatinate-purple' },
//   { name: 'Photography', color: 'fire-opal' },
//   { name: 'Printmaking', color: 'deep-peach' },
//   { name: 'Sculpture', color: 'royal-orange' },
// ];

const FilteredCards = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');



  const handleFilterSelect = (filterName) => {
    setSelectedFilter(filterName);
  };

  // const filteredProjects =
  //   selectedFilter === 'All'
  //     ? projects
  //     : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="font-montserrat-light relative flex flex-col items-center p-6 lg:mt-32 sm:mt-36">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center ">
        <FilterComponent
          // filters={filters}
          // selectedFilter={selectedFilter}
          // onFilterSelect={handleFilterSelect}
          className="text-xs md:text-sm p-1 md:p-2 rounded"
        />
      </div>

      {/* Render filtered cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <BidCard key={index} project={project} />
        ))}
      </div> */}
    </div>
  );
};

export default FilteredCards;
