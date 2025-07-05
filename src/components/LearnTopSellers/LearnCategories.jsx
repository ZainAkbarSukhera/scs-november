import React, { useState } from "react";

import TopWorkshop from './TopWorkshop';
import TopInstructor from './TopInstructor';
import NewWorkshop from './NewWorkshop';
import HighestRated from './HighestRated';
import MostAttended from './MostAttended';


// Categories and data for the cards
const categories =  [
  "TOP WORKSHOP",
  "TOP INSTRUCTOR",
  "NEW WORKSHOP",
  "HIGHEST RATED",
  "MOST ATTENDED",
];



const LearnCategories =() => {
  const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

  return (
    <div className="container mx-auto mt-20 p-2 mb-28 bg-white">
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {categories.map((category, index) => (
          <div key={category} className="flex flex-col items-center ">
            {/* Category Button */}
            <button
              className={`py-2 px-6 font-montserrat-regular border-b-4 rounded-lg mr-2 text-nowrap ${
                selectedCategory === category
                  ? "border-yankees-blue text-white bg-yankees-blue"
                  : "border-transparent text-yankees-blue"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

            {/* Card Component */}
            <div className="mt-4 flex flex-col justify-between">
              {/* Render the appropriate card based on the index */}
              {index === 0 && (
                <div className={`flex-grow transition-transform duration-300 ease-in-out ${ 
                  selectedCategory === category
                    ? "hover:scale-105 hover:shadow-2xl"
                    : "opacity-70"
                }`}>
                  <TopWorkshop />
                </div>
              )}

              {index === 1 && (
                <div className={`flex-grow transition-transform duration-300 ease-in-out ${ 
                  selectedCategory === category
                    ? "hover:scale-105 hover:shadow-2xl"
                    : "opacity-70"
                }`}>
                  <TopInstructor />
                </div>
              )}

              {index === 2 && (
                <div className={`flex-grow transition-transform duration-300 ease-in-out ${ 
                  selectedCategory === category
                    ? "hover:scale-105 hover:shadow-2xl"
                    : "opacity-70"
                }`}>
                  <NewWorkshop />
                </div>
              )}

              {index === 3 && (
                <div className={`flex-grow transition-transform duration-300 ease-in-out ${ 
                  selectedCategory === category
                    ? "hover:scale-105 hover:shadow-2xl"
                    : "opacity-70"
                }`}>
                  <HighestRated />
                </div>
              )}

              {index === 4 && (
                <div className={`flex-grow transition-transform duration-300 ease-in-out ${ 
                  selectedCategory === category
                    ? "hover:scale-105 hover:shadow-2xl"
                    : "opacity-70"
                }`}>
                  <MostAttended />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default LearnCategories;