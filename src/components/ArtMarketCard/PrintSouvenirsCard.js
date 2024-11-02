import React from "react";
import { useNavigate } from "react-router-dom";





const PrintSouvenirsCard =({printData})=> {
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/artwork-profile');}

  return (
    <div className="container mx-auto justify-between p-4 bg-white ">
      {/* Image Row */}
      <div className="flex flex-row space-x-4">
        {printData.images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? 'w-88' : 'w-auto'
            }`}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={handleOnClick}
              className="object-cover h-52 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100" 
            />
          </div>
        ))}
      </div>
  
      {/* Text Section */}
           <div class="flex flex-col items-start mt-1">
             <span class="text-sm font-montserrat-medium text-yankees-blue">{printData.name}</span>
             <span class="text-xs text-yankees-blue font-montserrat-light">{printData.artist}</span>
           </div>
    </div>
  );
};

export default PrintSouvenirsCard;