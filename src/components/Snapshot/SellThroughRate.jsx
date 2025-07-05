import React from "react";
import { PieChart } from 'react-minimal-pie-chart'

const SellThroughRate = () => {
  const value=50;

  return  (
    <div className=" lg:w-60 border rounded-lg lg:p-4 shadow-md flex flex-col text-center xs:w-48 xs:p-4">
    <div >
      <h3 className="text-base text-center font-montserrat-regular text-yankees-blue mb-1">
        Sell Through Rate
      </h3>

{/* Subtitle */}
      <p className="text-sm text-center text-yankees-blue font-montserrat-light mb-4">
        How many of offered artworks were sold
      </p>

      <div className="flex justify-center items-center mt-6 mb-2 ">
      <PieChart
        className="w-20"
        data={[
          { title: 'Value', value: value, color: '#133240' },
          { title: 'Remaining', value: 100 - value, color: '#e0e0e0' },
        ]}
        lineWidth={30}
        rounded
        animate
        startAngle={270}
      />
    </div>

{/* Value */}

      <div
        className="text-sm  font-montserrat-light text-yankees-blue mt-2"
      >
        {value}%
      </div>

        </div>

        </div>
    
  );
}; 

export default SellThroughRate;