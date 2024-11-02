import React from "react";
import { useNavigate } from "react-router-dom";


const ProfileFooter = ({artists}) => {

  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/creative-profile');
  };

  return(

    <div>
    <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium uppercase mb-4">
      VIEW SIMILAR ARTISTS
    </h2>
    <div onClick={handleOnClick} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6 p-4 justify-start ">
      {artists.map((artist, index) => (
        <div key={index} className="text-left">
          <img
            src={artist.image}
            alt={artist.name}
            className="h-44 w-full object-fill mx-auto mb-2 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100"
          />
          <span className="text-yankees-blue text-base font-montserrat-regular">{artist.name}</span>
        </div>
      ))}
    </div>
  </div>


  );

};

export default ProfileFooter;