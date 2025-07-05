// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const BidCard = ({project}) => {
//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/bidders-profile'); 
//   }
//   return (
//     <div 
//       className="flex w-full xs:ml-12 xs:max-w-xs sm:max-w-sm lg:max-w-sm flex-col justify-between border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" 
//       onClick={handleOnClick}
//     >
//       <div>
//         {/* Project Image */}
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-40 xs:h-48 object-fill mb-3 xs:mb-4 rounded-md" 
//         />
  
//         {/* Project Title */}
//         <h3 className="text-base xs:text-lg sm:text-xl font-montserrat-regular mb-3 xs:mb-4 text-yankees-blue">
//           {project.title}
//         </h3>
  
//         {/* Hosted By */}
//         <div className="flex items-start mb-1 xs:mb-2">
//           <p className="text-yankees-blue font-montserrat-regular text-sm xs:text-base">Hosted by:</p>
//         </div>
//         <p className="text-yankees-blue mb-3 xs:mb-4 font-montserrat-light text-xs xs:text-sm">
//           {project.hostedBy}
//         </p>
  
//         {/* Deadline */}
//         <div className="flex items-start mb-1 xs:mb-2">
//           <p className="text-yankees-blue font-montserrat-regular text-sm xs:text-base">Deadline:</p>
//         </div>
//         <p className="text-yankees-blue mb-3 xs:mb-4 font-montserrat-light text-xs xs:text-sm">
//           {project.deadline}
//         </p>
  
//         {/* Eligibility */}
//         <div className="flex items-start mb-1 xs:mb-2">
//           <p className="text-yankees-blue font-montserrat-regular text-sm xs:text-base">Eligibility:</p>
//         </div>
//         <p className="text-yankees-blue mb-3 xs:mb-4 font-montserrat-light text-xs xs:text-sm">
//           {project.eligibility}
//         </p>
  
//         {/* Prize */}
//         <div className="flex items-start mb-1 xs:mb-2">
//           <p className="text-yankees-blue font-montserrat-regular text-sm xs:text-base">Prize:</p>
//         </div>
//         <p className="text-yankees-blue mb-3 xs:mb-4 font-montserrat-light text-xs xs:text-sm">
//           {project.prize}
//         </p>
//       </div>
  
//       {/* Apply Button */}
//       <div className="mt-auto">
//         <button 
//           className="w-full px-3 xs:px-4 py-2 border border-madder-lake text-madder-lake rounded-md hover:bg-red-600 hover:text-white font-montserrat-light transition-colors duration-300"
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BidCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const BidCardMain = ({ bid, viewType }) => {
  const navigate = useNavigate();

  const {
    _id,
    hostedBy,
    image,
    deadlineDate,
    title,
    eligibilityDetail,
    prizeDetails,
    description,
  } = bid;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date string received: ${dateString}`);
        return 'Invalid Date';
      }
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    } catch (e) {
      console.error("Error formatting date:", e);
      return 'N/A';
    }
  };

  const formattedDeadline = formatDate(deadlineDate);

  const handleOnClick = () => {
    navigate(`/bid-details/${_id}`);
  };

  // --- Conditional Classes based on viewType ---
  // GRID VIEW CLASSES (UNCHANGED)
  const gridCardClasses = "flex w-full xs:ml-12 xs:max-w-xs sm:max-w-sm lg:max-w-sm flex-col justify-between border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out lg:ml-8";
  const gridImageClasses = "w-full h-40 xs:h-48 object-fill mb-3 xs:mb-4 rounded-md";
  const gridTitleClasses = "text-base xs:text-lg sm:text-xl font-montserrat-regular mb-3 xs:mb-4 text-yankees-blue";
  const gridContentWrapperClasses = "flex-grow flex flex-col min-h-[220px] justify-between";
  const gridDetailLabelClasses = "text-yankees-blue font-montserrat-regular text-sm xs:text-base";
  const gridEligibilityPrizeTextWrapperClasses = "flex-grow flex flex-col justify-start min-h-[48px]";
  const gridDetailValueClasses = "text-yankees-blue mb-0 font-montserrat-light text-xs xs:text-sm line-clamp-3";
  const gridEligibilityPrizeContainerClasses = "flex flex-col gap-2";


  // LIST VIEW CLASSES (MODIFIED FOR Eligibility/Prize Stacking)
  const listCardClasses = "flex flex-col sm:flex-row items-stretch w-full border border-gray-300 shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out md:ml-0 md:mb-4 lg:mb-4 lg:ml-20";
  const listImageClasses = "w-full h-auto sm:w-48 object-cover mb-3 sm:mr-4 rounded-md flex-shrink-0";
  const listContentWrapperClasses = "flex-grow flex flex-col";
  const listTitleClasses = "text-lg sm:text-xl font-montserrat-regular mb-1 sm:mb-2 text-yankees-blue";
  const listDescriptionClasses = "text-gray-700 text-sm mb-3 line-clamp-2";
  const listDetailLabelClasses = "text-yankees-blue font-montserrat-regular text-sm";
  const listDetailValueClasses = "text-yankees-blue mb-2 font-montserrat-light text-xs";

  // MODIFIED: This ensures Eligibility and Prize always stack vertically in list view
  const listEligibilityPrizeContainerClasses = "flex flex-col gap-y-2 mt-2"; // Added gap-y-2 and mt-2 for vertical spacing

  const listApplyButtonContainerClasses = "mt-auto pt-4 flex justify-center w-full";
  const listApplyButtonClasses = "w-full sm:w-3/4 md:w-1/2 lg:w-2/5 px-3 py-2 border border-madder-lake text-madder-lake rounded-md hover:bg-red-600 hover:text-white font-montserrat-light transition-colors duration-300";


  return (
    <div
      className={viewType === 'grid' ? gridCardClasses : listCardClasses}
      onClick={handleOnClick}
    >
      <img
        src={image}
        alt={hostedBy}
        className={viewType === 'grid' ? gridImageClasses : listImageClasses}
      />

      <div className={viewType === 'grid' ? gridContentWrapperClasses : listContentWrapperClasses}>
        <h3 className={viewType === 'grid' ? gridTitleClasses : listTitleClasses}>
          {title}
        </h3>

        {viewType === 'list' && (
          <p className={listDescriptionClasses}>
            {description}
          </p>
        )}

        {/* Hosted By */}
        <div>
          <div className="flex items-start mb-1">
            <p className={viewType === 'grid' ? gridDetailLabelClasses : listDetailLabelClasses}>Hosted by:</p>
          </div>
          <p className={viewType === 'grid' ? gridDetailValueClasses : listDetailValueClasses}>
            {hostedBy}
          </p>
        </div>

        {/* Deadline */}
        <div>
          <div className="flex items-start mb-1 mt-3">
            <p className={viewType === 'grid' ? gridDetailLabelClasses : listDetailLabelClasses}>Deadline:</p>
          </div>
          <p className={viewType === 'grid' ? gridDetailValueClasses : listDetailValueClasses}>
            {formattedDeadline}
          </p>
        </div>

        {/* Eligibility and Prize Grouping - CRITICALLY MODIFIED FOR LIST VIEW */}
        <div className={viewType === 'grid' ? gridEligibilityPrizeContainerClasses : listEligibilityPrizeContainerClasses}>
            {/* Eligibility */}
            <div>
                <div className="flex items-start mb-1 mt-3">
                    <p className={viewType === 'grid' ? gridDetailLabelClasses : listDetailLabelClasses}>Eligibility:</p>
                </div>
                {/* Note: gridEligibilityPrizeTextWrapperClasses ensures 3-line height for grid view only */}
                <div className={viewType === 'grid' ? gridEligibilityPrizeTextWrapperClasses : ''}>
                    <p className={viewType === 'grid' ? gridDetailValueClasses : listDetailValueClasses}>
                        {eligibilityDetail}
                    </p>
                </div>
            </div>

            {/* Prize */}
            <div>
                <div className="flex items-start mb-1">
                    <p className={viewType === 'grid' ? gridDetailLabelClasses : listDetailLabelClasses}>Prize:</p>
                </div>
                {/* Note: gridEligibilityPrizeTextWrapperClasses ensures 3-line height for grid view only */}
                <div className={viewType === 'grid' ? gridEligibilityPrizeTextWrapperClasses : ''}>
                    <p className={viewType === 'grid' ? gridDetailValueClasses : listDetailValueClasses}>
                        {prizeDetails}
                    </p>
                </div>
            </div>
        </div>

        {/* Apply Button */}
        <div className={viewType === 'grid' ? "mt-auto pt-3" : listApplyButtonContainerClasses}>
          <button
            className={viewType === 'grid' ? "w-full px-3 xs:px-4 py-2 border border-madder-lake text-madder-lake rounded-md hover:bg-red-600 hover:text-white font-montserrat-light transition-colors duration-300" : listApplyButtonClasses}
            onClick={handleOnClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BidCardMain;

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
//    );
// };

// export default BidCard;


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