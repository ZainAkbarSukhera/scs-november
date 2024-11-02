import React from 'react';
import { useNavigate } from 'react-router-dom';


const BidCard = ({project}) => {
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/bidders-profile'); 
  }
  return (
    <div 
  className="flex w-full max-w-xs sm:max-w-sm lg:max-w-sm flex-col justify-between border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" 
  onClick={handleOnClick}
>
  <div>
    {/* Project Image */}
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-full h-48 object-fill mb-4 rounded-md" 
    />

    {/* Project Title */}
    <h3 className="text-lg sm:text-xl font-montserrat-regular mb-4 text-yankees-blue">
      {project.title}
    </h3>

    {/* Hosted By */}
    <div className="flex items-start mb-2">
      <p className="text-yankees-blue font-montserrat-regular text-base">Hosted by:</p>
    </div>
    <p className="text-yankees-blue mb-4 font-montserrat-light text-sm">{project.hostedBy}</p>

    {/* Deadline */}
    <div className="flex items-start mb-2">
      <p className="text-yankees-blue font-montserrat-regular text-base">Deadline:</p>
    </div>
    <p className="text-yankees-blue mb-4 font-montserrat-light text-sm">{project.deadline}</p>

    {/* Eligibility */}
    <div className="flex items-start mb-2">
      <p className="text-yankees-blue font-montserrat-regular text-base">Eligibility:</p>
    </div>
    <p className="text-yankees-blue mb-4 font-montserrat-light text-sm">{project.eligibility}</p>

    {/* Prize */}
    <div className="flex items-start mb-2">
      <p className="text-yankees-blue font-montserrat-regular text-base">Prize:</p>
    </div>
    <p className="text-yankees-blue mb-4 font-montserrat-light text-sm">{project.prize}</p>
  </div>

  {/* Apply Button */}
  <div className="mt-auto">
    <button 
      className="w-full px-4 py-2 border border-madder-lake text-madder-lake rounded-md hover:bg-red-600 hover:text-white font-montserrat-light transition-colors duration-300"
    >
      Apply
    </button>
  </div>
</div>


  //   <div className="flex w-auto flex-col justify-between border-2 border-gray-700 rounded-lg p-4 bg-white min-h-[300px]"
  //   onClick={handleOnClick}
  //  >
  //     <div>
  //       <img src={project.image} alt={project.title} className="w-full h-52 object-fill mb-2 rounded" />
  //       <h3 className="text-xl font-montserrat-regular mb-4 text-yankees-blue">{project.title}</h3>

  //       <div className="flex items-start">
  //         <p className="text-yankees-blue font-montserrat-regular">Hosted by:</p>
  //       </div>
  //       <p className="text-yankees-blue  mb-4 font-montserrat-light">{project.hostedBy}</p>
        
  //       <div className="flex items-start">
  //         <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
  //       </div>
  //       <p className="text-yankees-blue  mb-4 font-montserrat-light">{project.deadline}</p>
        
  //       <div className="flex items-start">
  //         <p className="text-yankees-blue font-montserrat-regular">Eligibility: </p>
  //       </div>
  //       <p className="text-yankees-blue  mb-6 font-montserrat-light">{project.eligibility}</p>

  //       <div className="flex items-start">
  //         <p className="text-yankees-blue font-montserrat-regular">Prize: </p>
  //       </div>
  //       <p className="text-yankees-blue  mb-6 font-montserrat-light">{project.prize}</p>
  //     </div>
      
  //     <div className="mt-auto ">
  //       <button className="w-full px-4 py-2 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
  //         Apply
  //       </button>
  //     </div>
  //   </div>
   );
};

export default BidCard;


// import React from "react";

// const Card = ({ project }) => {
//   return (
//     <div className="bg-white shadow-md rounded-md overflow-hidden">
//       <img src={project.image} alt={project.title} className="w-full" />
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800 mb-2">
//         {project.title}
//         </h2>
//         <p className="text-gray-600 mb-4">
//           Hosted by: {project.hostedBy}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Deadline: {project.deadline}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Eligibility: {project.eligibility}
//         </p>
//         <p className="text-gray-600 mb-4">
//           Prize: {project.prize}
//         </p>
//         <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;