import React from 'react';
import { PatronsAndIntermediariesSideTitles } from '../../static/data';

const SidePatronsProfile = ({patronDetails}) =>  {
  return (
    <div className="bg-white">
    <div className="flex flex-col mb-8 ">
    <div className="flex flex-col items-start">
      <div className="border-b-2 border-black mb-2 pb-1">
        <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-normal">
          {patronDetails.patronName}
        </h1>
      </div>
      <p className="text-2xl font-montserrat-regular text-red-500">{patronDetails.location}</p>
      <p className="text-sm font-montserrat-regular uppercase text-palatinate-purple mt-1">
        {patronDetails.userRole}
      </p>
      <a
        href={patronDetails.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yankees-blue font-montserrat-light text-xs hover:underline mt-2"
      >
        {patronDetails.website}
      </a>
    </div>

    <img
      src={patronDetails.image}
      alt="creatorImage"
      className="w-full h-auto mt-4"
    />

<p className=" text-sm  text-justify font-montserrat-light mb-4 mt-4">
         {patronDetails.profilebio}
               </p>
               </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
      {PatronsAndIntermediariesSideTitles.map((detail) => (
          patronDetails[detail.id] && ( 
            <div key={detail.id} className="flex items-start space-x-2">
              <img src={detail.img} alt={`${detail.name} icon`} className="w-6 h-6" />
              <div>
                <p className="text-sm text-yankees-blue font-montserrat-light">{detail.name}:</p>
                <p className="text-sm text-yankees-blue font-montserrat-medium whitespace-nowrap">{patronDetails[detail.id]}</p>
              </div>
            </div>
          )
        ))}
      </div>

      </div>

  );
};

export default SidePatronsProfile;