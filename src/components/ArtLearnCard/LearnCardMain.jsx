// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaRegCalendarAlt,
//   FaMapMarkerAlt,
//   FaUserAlt,
//   FaClock,
// } from "react-icons/fa";

// const LearnCard = ({
//   title,
//   date,
//   location,
//   instructor,
//   duration,
//   tag,
//   tagColor,
//   icon,
// }) => {
//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/workshop-profile'); // Use navigate to go to the page
//   }

//   return (
//     <div className="border border-gray-300 rounded-lg flex relative p-2 max-h-48 overflow-hidden box-border">
//       <div className="w-full pr-4 flex flex-col box-border">
//         {/* Title and Image in one line */}
//         <div className="flex justify-between items-center mb-2 text-yankees-blue">
//           <h3 className="text-sm font-montserrat-regular break-words">{title}</h3>
//           <img
//             src={icon}
//             alt="Card Icon"
//             className="w-8 h-5 object-scale-down ml-2 mr-1" // Smaller icon size
//           />
//         </div>
  
//         {/* Text Rows */}
//         <div className="flex items-center text-xs mb-1 break-words">
//           <FaRegCalendarAlt className="mr-1 text-madder-lake" />
//           <span>Date: {date}</span>
//         </div>
//         <div className="flex items-center text-xs mb-1 break-words">
//           <FaMapMarkerAlt className="mr-1 text-madder-lake" />
//           <span>Location: {location}</span>
//         </div>
//         <div className="flex items-center text-xs mb-1 break-words">
//           <FaUserAlt className="mr-1 text-madder-lake" />
//           <span>Instructor: {instructor}</span>
//         </div>
//         <div className="flex items-center text-xs mb-1 break-words">
//           <FaClock className="mr-1 text-madder-lake" />
//           <span>Duration: {duration}</span>
//         </div>
  
//         {/* Button fixed at the bottom */}
//         <div className="flex justify-end mt-auto mr-2">
//           <button onClick={handleOnClick} className="px-5 py-1 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white text-xs font-montserrat-light">
//             Register
//           </button>
//         </div>
//       </div>
  
//       {/* Vertical tag on the right */}
//       <div
//         className={`absolute top-0 right-0 h-full flex items-center justify-center ${tagColor} text-white rounded overflow-hidden`}
//         style={{ width: "20px", boxSizing: "border-box" }}
//       >
//         <span className="font-light transform -rotate-90 whitespace-nowrap text-xs font-montserrat-light">
//           {tag}
//         </span>
//       </div>

//       {/* Custom CSS for 425px screens */}
//       <style jsx>{`
//         @media (max-width: 425px) {
//           .border {
//             padding: 4px;
//           }
//           .text-yankees-blue h3 {
//             font-size: 0.875rem; /* Smaller title font size */
//           }
//           .text-xs {
//             font-size: 0.75rem;
//           }
//           .w-8 {
//             width: 20px;
//             height: 16px; /* Smaller icon */
//           }
//           .px-5 {
//             padding-left: 0.5rem;
//             padding-right: 0.5rem; /* Adjust button padding */
//           }
//           .tag-container {
//             width: 16px; /* Smaller tag width */
//           }
//         }
//       `}</style>
//     </div>
//   );
//   // return (
//   //   <div className=" border border-gray-300 rounded-lg flex relative p-2 max-h-48">
//   //     <div className="w-full pr-4">
//   //       {/* Title and Image in one line */}
//   //       <div className="flex justify-between items-center mb-2 text-yankees-blue">
//   //         <h3 className="text-sm font-montserrat-regular">{title}</h3>
//   //         <img
//   //           src={icon}
//   //           alt="Card Icon"
//   //           className="w-12 h-6 object-scale-down ml-4" // Smaller icon size
//   //         />
//   //       </div>

//   //       <div className="flex items-center text-xs mb-1">
//   //         <FaRegCalendarAlt className="mr-2 text-madder-lake" />
//   //         <span>Date: {date}</span>
//   //       </div>
//   //       <div className="flex items-center text-xs mb-1">
//   //         <FaMapMarkerAlt className="mr-2 text-madder-lake" />
//   //         <span>Location: {location}</span>
//   //       </div>
//   //       <div className="flex items-center text-xs mb-1">
//   //         <FaUserAlt className="mr-2 text-madder-lake" />
//   //         <span>Instructor: {instructor}</span>
//   //       </div>
//   //       <div className="flex items-center text-xs mb-1">
//   //         <FaClock className="mr-2 text-madder-lake" />
//   //         <span>Duration: {duration}</span>
//   //       </div>

//   //       <div className="flex justify-end">
//   //         <button className="px-6 py-1 mr-4 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white text-xs font-montserrat-light">
//   //           Register
//   //         </button>
//   //       </div>
//   //     </div>
//   //     <div
//   //       className={`absolute top-0 right-0 h-full flex items-center justify-center ${tagColor} text-white rounded`}
//   //       style={{ width: "24px" }}
//   //     >
//   //       <span className="font-light transform -rotate-90 whitespace-nowrap text-xs font-montserrat-light">
//   //         {tag}
//   //       </span>
//   //     </div>
//   //   </div>
//   // );
// };

// export default LearnCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaUserAlt,
  FaClock,
} from "react-icons/fa";

// Renamed from LearnCard to LearnCardMain for clarity, assuming this is the file intended.
const LearnCardMain = ({ workshop }) => { // Accept a single 'workshop' prop
  const navigate = useNavigate();

  // Destructure properties from the workshop object
  const { title, date, workshopMode, instructor, duration, tag, tagColor, icon } = workshop;

  const handleOnClick = () => {
    // Navigate to a workshop profile page, ideally using a workshop ID
    navigate(`/workshop-profile/${workshop._id}`); // Assuming workshop has an _id
  };

  return (
    <div className="border border-gray-300 rounded-lg flex relative p-2 max-h-48 overflow-hidden box-border">
      <div className="w-full pr-4 flex flex-col box-border">
        {/* Title and Image in one line */}
        <div className="flex justify-between items-center mb-2 text-yankees-blue">
          <h3 className="text-sm font-montserrat-regular break-words">{title}</h3>
          <img
            src={icon} // Use the icon from the workshop object
            alt="Card Icon"
            className="w-8 h-5 object-scale-down ml-2 mr-1"
          />
        </div>

        <div className="flex items-center text-xs mb-1 break-words">
          <FaRegCalendarAlt className="mr-1 text-madder-lake" />
          <span className="font-montserrat-light">{date}</span>
        </div>
        <div className="flex items-center text-xs mb-1 break-words">
          <FaMapMarkerAlt className="mr-1 text-madder-lake" />
          <span className="font-montserrat-light">{workshopMode}</span> {/* Changed from location to workshopMode */}
        </div>
        <div className="flex items-center text-xs mb-1 break-words">
          <FaUserAlt className="mr-1 text-madder-lake" />
          <span className="font-montserrat-light">{instructor}</span>
        </div>
        <div className="flex items-center text-xs mb-1 break-words">
          <FaClock className="mr-1 text-madder-lake" />
          <span className="font-montserrat-light">{duration}</span>
        </div>

        <div className="flex justify-end mt-auto mr-2">
          <button
            className="px-5 py-1 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white text-xs font-montserrat-light"
            onClick={handleOnClick}
          >
            Register
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 h-full flex items-center justify-center ${tagColor} text-white rounded overflow-hidden`}
        style={{ width: "20px", boxSizing: "border-box" }}
      >
        <span className="font-light transform -rotate-90 whitespace-nowrap text-xs font-montserrat-light">{tag}</span>
      </div>

      {/* Custom CSS for 425px screens */}
      <style jsx>{`
        @media (max-width: 425px) {
          .border {
            padding: 4px;
          }
          .text-yankees-blue h3 {
            font-size: 0.875rem; /* Smaller title font size */
          }
          .text-xs {
            font-size: 0.75rem;
          }
          .w-8 {
            width: 20px;
            height: 16px; /* Smaller icon */
          }
          .px-5 {
            padding-left: 0.5rem;
            padding-right: 0.5rem; /* Adjust button padding */
          }
          .tag-container {
            width: 16px; /* Smaller tag width */
          }
        }
      `}</style>
    </div>
  );
};

export default LearnCardMain; // Export as LearnCardMain
