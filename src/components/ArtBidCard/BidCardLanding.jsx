

// import React from 'react';
// import { MdHexagon } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';

// const BidCard = ({ project }) => {
//   const navigate = useNavigate();
//   // return (
//   //   <div className="flex-1 flex-col justify-between rounded-lg p-4 bg-white min-h-[320px] mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xs shadow-sm cursor-pointer ">
//   //     <div>
//   //       {/* Project Image */}
//   //       <img
//   //         src={project.image}
//   //         alt={project.title}
//   //         className="w-full h-44 sm:h-64 object-cover mb-3 rounded-lg"
//   //       />
  
//   //       {/* Project Title */}
//   //       <h3 className="text-lg sm:text-xl font-montserrat-regular mb-3 text-yankees-blue">
//   //         {project.title}
//   //       </h3>
  
//   //       {/* Deadline Section */}
//   //       <div className="flex items-start mb-2">
//   //         <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
//   //         <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
//   //       </div>
//   //       <p className="text-yankees-blue ml-8 mb-4 font-montserrat-light">
//   //         {project.deadline}
//   //       </p>
  
//   //       {/* Eligibility Section */}
//   //       <div className="flex items-start mb-2">
//   //         <MdHexagon className="text-red-600 text-sm mr-2 mt-1" />
//   //         <p className="text-yankees-blue font-montserrat-regular">Eligibility:</p>
//   //       </div>
//   //       <p className="text-yankees-blue ml-8 mb-6 font-montserrat-light">
//   //         {project.eligibility}
//   //       </p>
//   //     </div>
  
//   //     {/* Button */}
//   //     <div className="mt-auto">
//   //       <button className="w-full h-full px-4 py-2 border border-madder-lake text-madder-lake rounded-lg hover:bg-red-600 hover:text-white font-montserrat-light transition duration-200 ease-in-out">
//   //         Register
//   //       </button>
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div className="flex-1 cursor-pointer flex flex-col justify-between rounded-lg p-4 bg-white min-h-[300px] mx-auto w-full max-w-[90%] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xs shadow-sm">
//       <div>
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-36 xs:h-44 sm:h-64 object-cover mb-2 rounded"
//         />
//         <h3 className="text-base xs:text-lg sm:text-xl font-montserrat-regular mb-3 xs:mb-4 text-yankees-blue">
//           {project.title}
//         </h3>
  
//         <div className="flex items-start">
//           <MdHexagon className="text-red-600 text-xs xs:text-sm mr-2 mt-1" />
//           <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
//         </div>
//         <p className="text-yankees-blue ml-6 xs:ml-8 mb-3 xs:mb-4 font-montserrat-light">
//           {project.deadline}
//         </p>
  
//         <div className="flex items-start">
//           <MdHexagon className="text-red-600 text-xs xs:text-sm mr-2 mt-1" />
//           <p className="text-yankees-blue font-montserrat-regular">Eligibility:</p>
//         </div>
//         <p className="text-yankees-blue ml-6 xs:ml-8 mb-4 xs:mb-6 font-montserrat-light">
//           {project.eligibility}
//         </p>
//       </div>
  
//       <div className="mt-auto">
//         <button className="w-full h-full px-3 xs:px-4 py-2 border border-madder-lake text-madder-lake rounded-lg hover:bg-red-600 hover:text-white font-montserrat-light transition duration-200 ease-in-out" onClick={()=>navigate('bidders-profile')}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BidCard;

import React from 'react';
import { MdHexagon } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const BidCard = ({ project }) => {
  const navigate = useNavigate();

  // Destructure properties from the project object, providing default empty strings
  const { image, title, deadlineDate, eligibilityDetail, _id } = project || {};

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      // Create a Date object from the "YYYY-MM-DD" string
      const date = new Date(dateString);
      // Check if the date is valid (e.g., if dateString was 'invalid-date')
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date string received: ${dateString}`);
        return 'Invalid Date';
      }
      // Format the date using Intl.DateTimeFormat for locale-specific formatting
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long', // 'long' for full month name (June), 'short' for abbreviated (Jun)
        year: 'numeric',
      }).format(date);
    } catch (e) {
      console.error("Error formatting date:", e);
      return 'N/A';
    }
  };

  // Format the deadlineDate using the new function
  const formattedDeadline = formatDate(deadlineDate);

  const handleCardClick = () => {
    if (_id) {
      navigate(`/bid-details/${_id}`);
    } else {
      console.warn("Attempted to navigate to bid details without a valid _id.");
    }
  };

  const handleRegisterClick = (e) => {
    e.stopPropagation();
    if (_id) {
      navigate(`/bid-details/${_id}`);
    } else {
      console.warn("Cannot register without a valid bid _id.");
    }
  };

  return (
    <div
      className="flex-1 cursor-pointer flex flex-col justify-between rounded-lg p-4 bg-white min-h-[300px] mx-auto w-full max-w-[90%] xs:max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xs shadow-sm"
      onClick={handleCardClick}
    >
      <div>
        <img
          src={image || ''}
          alt={title || 'Project Image'}
          className="w-full h-36 xs:h-44 sm:h-64 object-cover mb-2 rounded"
        />
        <h3 className="text-base xs:text-lg sm:text-xl font-montserrat-regular mb-3 xs:mb-4 text-yankees-blue">
          {title || 'Untitled Project'}
        </h3>

        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-xs xs:text-sm mr-2 mt-1" />
          <p className="text-yankees-blue font-montserrat-regular">Deadline:</p>
        </div>
        <p className="text-yankees-blue ml-6 xs:ml-8 mb-3 xs:mb-4 font-montserrat-light">
          {formattedDeadline} {/* Use the formatted date here */}
        </p>

        <div className="flex items-start">
          <MdHexagon className="text-red-600 text-xs xs:text-sm mr-2 mt-1" />
          <p className="text-yankees-blue font-montserrat-regular">Eligibility:</p>
        </div>
        <p className="text-yankees-blue ml-6 xs:ml-8 mb-4 xs:mb-6 font-montserrat-light">
          {eligibilityDetail || 'N/A'}
        </p>
      </div>

      <div className="mt-auto">
        <button
          className="w-full h-full px-3 xs:px-4 py-2 border border-madder-lake text-madder-lake rounded-lg hover:bg-red-600 hover:text-white font-montserrat-light transition duration-200 ease-in-out"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default BidCard;
