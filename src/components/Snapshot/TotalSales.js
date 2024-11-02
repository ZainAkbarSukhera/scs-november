import React from "react";
import growth_icon from "../../assets/growth.png";
import decline_icon from "../../assets//decline.png";

const TotalSales = () =>  {
  return (
    <div className=" w-60 border rounded-lg p-4 shadow-md flex flex-col text-center">
      <div>
        <h3 className="text-base text-center font-montserrat-regular text-yankees-blue mb-1">
          Total Sales
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-center text-yankees-blue font-montserrat-light mb-6">
          2024-2025
        </p>

        {/* Icon based on value */}
        <div className="flex items-center justify-center mb-4 rounded-lg overflow-hidden mt-8">
          {50 >= 0 ? (
            <img src={growth_icon} alt="Growth Icon" className="w-20 h-20" />
          ) : (
            <img src={decline_icon} alt="Decline Icon" className="w-20 h-20" />
          )}
        </div>

        {/* Value */}

        <div className="text-sm  font-montserrat-light text-yankees-blue mt-2">
          +50%
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
