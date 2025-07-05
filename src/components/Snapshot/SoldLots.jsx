import React from 'react';
import { PieChart } from 'react-minimal-pie-chart'

const SoldLots = () => {

  const value=75;

  return  (
    <div className=" lg:w-60 border rounded-lg lg:p-4 shadow-md flex flex-col text-center xs:w-48 xs:p-4">
    <div className='xs:space-y-2' >
      <h3 className="text-base text-center font-montserrat-regular text-yankees-blue mb-1">
        Sold Lots
      </h3>

{/* Subtitle */}
      <p className="text-sm text-center text-yankees-blue font-montserrat-light mb-4">
      The percentage of all sold lots by price segment
      </p>

      <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-2">
        Under SAR 10,000
      </p>
      <PieChart
        className="w-8 mb-4"
        data={[
          { title: 'Value', value: value, color: '#133240' },
          { title: 'Remaining', value: 100 - value, color: '#e0e0e0' },
        ]}
        lineWidth={30}
        rounded
        animate
        startAngle={270}
        // label={({ dataEntry }) => dataEntry.value + '%' }
        // labelPosition={50}
       
      />
    </div>

    <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-2 ">
         SAR 10,000 -  SAR 100,000
      </p>
      <PieChart
        className="w-8 mb-4"
        data={[
          { title: 'Value', value: value, color: '#133240' },
          { title: 'Remaining', value: 100 - value, color: '#e0e0e0' },
        ]}
        lineWidth={30}
        rounded
        animate
        startAngle={270}
        // label={({ dataEntry }) => dataEntry.value + '%' }
        // labelPosition={50}
      />
    </div>

    <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-2">
      Above SAR 100,000
      </p>
      <PieChart
        className="w-8 mb-4"
        data={[
          { title: 'Value', value: value, color: '#133240' },
          { title: 'Remaining', value: 100 - value, color: '#e0e0e0' },
        ]}
        lineWidth={30}
        rounded
        animate
        startAngle={270}
        // label={({ dataEntry }) => dataEntry.value + '%' }
        // labelPosition={50}
      />
    </div>

        </div>

        </div>
    
  );

};

export default SoldLots;