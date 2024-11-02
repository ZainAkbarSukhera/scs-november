import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ placeholderValue }) => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Perform search action here
  //   console.log('Search term:', searchTerm);
  // };

  return  (
    <div className="absolute top-0 right-0 flex items-center mr-96 mt-32">
    <form class="max-w-md w-80">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon
                        className=" h-4 w-4 text-gray-500 "
                        aria-hidden="true"
                      />
        </div>
        <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yankees-blue focus:border-yankees-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={ placeholderValue } required />
        <button type="submit" class="text-white absolute end-1 bottom-1 bg-yankees-blue hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
</form>
</div>
  );
};

export default SearchBar;

