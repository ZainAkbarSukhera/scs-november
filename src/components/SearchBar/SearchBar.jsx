// import React, { useState } from 'react';
// import { FaSearch } from "react-icons/fa";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// const SearchBar = ({ placeholderValue }) => {
//   // const [searchTerm, setSearchTerm] = useState('');

//   // const handleChange = (event) => {
//   //   setSearchTerm(event.target.value);
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // Perform search action here
//   //   console.log('Search term:', searchTerm);
//   // };

//   return  (
//     <div className="absolute top-0 right-0 flex items-center lg:mr-96 lg:mt-32 xs:mr-14 xs:mt-32">
//     <form className="max-w-md w-80 relative">   
//       <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//       <div className="relative">
        
//         {/* Search icon on the left inside input */}
//         {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
//         </div>
//    */}
//         {/* Input field with right padding to make room for the button */}
//         <input 
//           type="search" 
//           id="default-search" 
//           className="block w-full p-3 ps-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yankees-blue focus:border-yankees-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//           placeholder={placeholderValue} 
//           required 
//         />
  
//         {/* Search button fixed to the right inside the input */}
//         <button 
//           type="submit" 
//           className="text-white absolute right-1 top-1/2 -translate-y-1/2 bg-yankees-blue hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </div>
//     </form>
//   </div>
  
//   );
// };

// export default SearchBar;


import React from 'react'; // useState is no longer needed here
import { FaSearch } from "react-icons/fa"; // Consider using this icon if desired
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Or this one

// The SearchBar component now receives `searchTerm` and `onSearch` as props.
// `searchTerm` is the current value of the input field.
// `onSearch` is a function that `ArtConnect.jsx` provides to update the search term.
const SearchBar = ({ placeholderValue, searchTerm, onSearch }) => {

  // This function handles changes to the input field.
  // It calls the `onSearch` prop with the new value, updating the state in ArtConnect.jsx.
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  // This function handles the form submission (e.g., when the user presses Enter or clicks the search button).
  // It prevents the default form submission behavior (which would refresh the page).
  const handleSubmit = (event) => {
    event.preventDefault();
    // The actual filtering is handled in ArtConnect.jsx's useMemo,
    // so we just need to ensure the `onSearch` prop has updated the state.
    // If you had a complex search that needed to be explicitly triggered on submit,
    // you'd call a different prop here. For simple filtering, just updating the input
    // on each change (via handleChange) is usually enough.
    console.log('Search triggered with term:', searchTerm);
  };

  return (
    // The positioning of the search bar (absolute top/right) seems to be related to your layout.
    // Ensure it's correctly placed within your ArtConnect.jsx's main section.
    <div className="absolute top-0 right-0 flex items-center lg:mr-96 lg:mt-32 xs:mr-14 xs:mt-32">
      <form className="max-w-md w-80 relative" onSubmit={handleSubmit}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">

          {/* Search icon on the left inside input - uncomment if you want it */}
          {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" aria-hidden="true" />
          </div> */}

          {/* Input field */}
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yankees-blue focus:border-yankees-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholderValue}
            value={searchTerm} // Make it a controlled component by setting its value from state
            onChange={handleChange} // Update state in parent on every change
            required
          />

          {/* Search button fixed to the right inside the input */}
          <button
            type="submit"
            className="text-white absolute right-1 top-1/2 -translate-y-1/2 bg-yankees-blue hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
