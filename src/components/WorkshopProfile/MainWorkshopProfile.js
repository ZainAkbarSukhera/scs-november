import React from "react";
import { MdHexagon } from "react-icons/md";



const MainWorkshopProfile = ({workshopDetails}) => {
  return(
<div className="container mx-auto ml-4">
  <div>
    {/* Description Section */}
    <div className="mb-8 mt-4">
      <span className="text-lg font-montserrat-regular text-yankees-blue mb-4">Description</span>
      <p className="text-yankees-blue leading-relaxed font-montserrat-light text-justify mr-4">
        {workshopDetails?.description || "No description available."}
      </p>
    </div>

    {/* Workshop Highlights Section */}
     <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Workshop Highlights</h2>
      <ul className="pl-1 text-yankees-blue space-y-2">
        {workshopDetails?.workshopHighlights?.length > 0 ? (
          workshopDetails.workshopHighlights.map((highlight, index) => (
            <li key={index} className="flex items-start text-justify mr-4">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-light text-yankees-blue'>{highlight}</span>
            </li>
          ))
        ) : (
          <li>No highlights available.</li>
        )}
      </ul>
    </div>

    {/* Who Should Attend Section */}
    <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Who Should Attend</h2>
      <ul className="text-yankees-blue space-y-2 text-justify mr-4">
        {workshopDetails?.whoShouldAttend?.length > 0 ? (
          workshopDetails.whoShouldAttend.map((attendee, index) => (
            <li key={index} className="flex items-start text-justify">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-light'>{attendee}</span>
            </li>
          ))
        ) : (
          <li>No attendees listed.</li>
        )}
      </ul>
    </div>

    {/* Materials Provided Section */}
    <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Materials Provided</h2>
      <ul className="text-yankees-blue space-y-2 text-justify mr-4">
        {workshopDetails?.materialsProvided?.length > 0 ? (
          workshopDetails.materialsProvided.map((material, index) => (
            <li key={index} className="flex items-start text-justify">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-light'>{material}</span>
            </li>
          ))
        ) : (
          <li>No materials provided.</li>
        )}
      </ul>
    </div>

    {/* Learning Outcomes Section */}
    <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Learning Outcomes</h2>
      <ul className="text-yankees-blue space-y-2 text-justify mr-4">
        {workshopDetails?.learningOutcomes?.length > 0 ? (
          workshopDetails.learningOutcomes.map((outcome, index) => (
            <li key={index} className="flex items-start text-justify">
              <MdHexagon className="text-red-600 mr-2 flex-shrink-0 text-xs mt-2" />
              <span className='font-montserrat-light'>{outcome}</span>
            </li>
          ))
        ) : (
          <li>No learning outcomes available.</li>
        )}
      </ul>
    </div>

    {/* Certificate Section */}
    <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Certificate</h2>
      <span className="text-yankees-blue leading-relaxed font-montserrat-light text-justify mr-4">
        {workshopDetails.certificate}
      </span>
    </div>

    {/* Testimonials Section */}
    <div className="mb-8">
      <h2 className="text-lg font-montserrat-regular text-yankees-blue mb-4">Testimonials</h2>
      <div className="text-yankees-blue space-y-2 text-justify mr-4">
        {workshopDetails?.testimonials?.length > 0 ? (
          workshopDetails.testimonials.map((testimonial, index) => (
            <div key={index} className="font-montserrat-light">
              <p>{testimonial.comment}</p>
              <p className="text-gray-600 text-sm">{testimonial.userName}</p>
            </div>
          ))
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>
    </div>
  </div>
</div>
  );
};

export default MainWorkshopProfile;