import React from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaUserAlt, FaClock } from "react-icons/fa";

const LearnCard = ({ title, date, location, instructor, duration, tag, tagColor, icon }) => {
  return (
    <div className="workshop-card border-2 border-gray-300 rounded-lg flex relative p-4">
      <div className="w-full pr-6">
        {/* Title and Image in one line */}
        <div className="flex justify-between items-center mb-4 text-yankees-blue">
          <h3 className="text-lg font-montserrat-medium">{title}</h3>
          <img
            src={icon}
            alt="Card Icon"
            className="w-20 h-10 object-scale-down ml-24" // Small icon 
          />
        </div>

        <div className="flex items-center mb-2">
          <FaRegCalendarAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-light">{date}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-light">{location}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaUserAlt className="mr-2 text-madder-lake" />
          <span className="font-montserrat-light">{instructor}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaClock className="mr-2 text-madder-lake" />
          <span className="font-montserrat-light">{duration}</span>
        </div>

        <div className="flex flex-col items-end">
          <button className="px-10 py-1 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white font-montserrat-light">
            Register
          </button>
        </div>
      </div>
      <div
        className={`tag-container ${tagColor} text-white absolute rounded top-0 right-0 h-full flex items-center justify-center`}
        style={{ width: '30px' }}
      >
        <span className="font-light transform -rotate-90 whitespace-nowrap font-montserrat-light">{tag}</span>
      </div>
    </div>
  );
};

export default LearnCard;
