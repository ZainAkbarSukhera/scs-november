

import React from 'react';
import { MdHexagon } from "react-icons/md";

const BidCard = ({ project }) => {
  // return (
  //   <div className="flex-1 flex-col justify-between rounded-lg p-4 bg-white min-h-[320px] mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xs shadow-sm cursor-pointer ">
  //     <div>
  //       {/* Project Image */}
  //       <img
  //         src={project.image}
  //         alt={project.title}
  //         className="w-full h-44 sm:h-64 object-cover mb-3 rounded-lg"
  //       />
  
  //       {/* Project Title */}
  //       <h3 className="text-lg sm:text-xl font-montserrat-regular mb-3 text-yankees-blue">
  //         {project.title}
  //       </h3>
  
  //       {/* Deadline Section */}
  //       <div className="flex items-start mb-2">
  //         <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
  //         <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
  //       </div>
  //       <p className="text-yankees-blue ml-8 mb-4 font-montserrat-light">
  //         {project.deadline}
  //       </p>
  
  //       {/* Eligibility Section */}
  //       <div className="flex items-start mb-2">
  //         <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
  //         <p className="text-yankees-blue font-montserrat-regular">Eligibility:</p>
  //       </div>
  //       <p className="text-yankees-blue ml-8 mb-6 font-montserrat-light">
  //         {project.eligibility}
  //       </p>
  //     </div>
  
  //     {/* Button */}
  //     <div className="mt-auto">
  //       <button className="w-full h-full px-4 py-2 border border-madder-lake text-madder-lake rounded-lg hover:bg-red-600 hover:text-white font-montserrat-light transition duration-200 ease-in-out">
  //         Register
  //       </button>
  //     </div>
  //   </div>
  // );

  return (
    <div className=" flex-1 cursor-pointer flex flex-col justify-between rounded-lg p-4 bg-white min-h-[300px] mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xs shadow-sm">
      <div>
        <img src={project.image} alt={project.title} className="w-full h-44 sm:h-64 object-cover mb-2 rounded" />
        <h3 className="text-lg sm:text-xl font-montserrat-regular mb-4 text-yankees-blue">{project.title}</h3>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
          <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
        </div>
        <p className="text-yankees-blue ml-8 mb-4 font-montserrat-light">{project.deadline}</p>
        
        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
          <p className="text-yankees-blue font-montserrat-regular">Eligibility: </p>
        </div>
        <p className="text-yankees-blue ml-8 mb-6 font-montserrat-light">{project.eligibility}</p>
      </div>
      
      <div className="mt-auto">
        <button className="w-full h-full px-4 py-2 border border-madder-lake text-madder-lake rounded-lg hover:bg-red-600 hover:text-white font-montserrat-light transition duration-200 ease-in-out">
          Register
        </button>
      </div>
    </div>
  );
};

export default BidCard;
