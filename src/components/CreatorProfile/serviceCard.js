import React from "react";

const ServiceCard = ({ title, service,deliveryTime,cost, }) =>  {
  return (
    <div className="workshop-card border border-gray-300 rounded-lg flex flex-col relative p-2 max-h-48">
    <div className="w-full pr-4 flex-grow">
      {/* Title */}
      <div className="flex justify-between items-center mb-2 text-yankees-blue">
        <h3 className="text-base font-montserrat-medium">{title}</h3>
      </div>
  
      <div className="flex items-center text-xs mb-1 font-montserrat-light">
        <span>Service: {service}</span>
      </div>
      <div className="flex items-center text-xs mb-1 font-montserrat-light">
        <span>Delivery Time: {deliveryTime}</span>
      </div>
      <div className="flex items-center text-xs mb-1 font-montserrat-light">
        <span>Cost: {cost}</span>
      </div>
    </div>
  
    <div className="flex justify-end mt-auto mr-2">
      <button className="px-6 py-1 border border-madder-lake text-madder-lake rounded hover:bg-red-600 hover:text-white text-xs font-montserrat-light">
        Inquire
      </button>
    </div>
  </div>
  );
};

export default ServiceCard;
