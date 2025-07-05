import react from 'react';
import growth_icon from "../../assets/growth.png";
import decline_icon from "../../assets//decline.png";

const FastestGrowingCategories =() => {

  return  (
    <div className=" lg:w-60 border rounded-lg lg:p-4 shadow-md flex flex-col text-center xs:w-48 xs:p-4">
    <div >
      <h3 className="text-base text-center font-montserrat-regular text-yankees-blue mb-1">
        Fastest Growing Categories
      </h3>

{/* Subtitle */}
      <p className="text-sm text-center text-yankees-blue font-montserrat-light mb-4">
      The category with the most rapid growth in sales
      </p>

      <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-1">
        Photography
      </p>
      <div className="flex items-center justify-center mb-4 rounded-lg overflow-hidden ">
      {50 >= 0 ? (
     <img src={growth_icon} alt="Growth Icon" className="w-4 h-4" />
         
    ) : (
        <img src={decline_icon} alt="Decline Icon" className="w-4 h-4" />
        )}
        <div
        className="text-sm ml-1  font-montserrat-light text-yankees-blue"
      >
        +50%
      </div>
      </div>
    </div>

    <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-1">
       Painting
      </p>
      <div className="flex items-center justify-center mb-4 rounded-lg overflow-hidden ">
      {50 >= 0 ? (
          <img src={growth_icon} alt="Growth Icon" className="w-4 h-4" />
         
        ) : (
            <img src={decline_icon} alt="Decline Icon" className="w-4 h-4" />
        )}
        <div
        className="text-sm  ml-1 font-montserrat-light text-yankees-blue"
      >
        +50%
      </div>
      </div>
    </div>

    <div className="flex justify-between">
      <p className="text-xs text-start text-yankees-blue font-montserrat-light mt-1">
        Sculpture
      </p>
      <div className="flex items-center justify-center mb-4 rounded-lg overflow-hidden ">
      {50 >= 0 ? (
           <img src={growth_icon} alt="Growth Icon" className="w-4 h-4" />
         
        ) : (
            <img src={decline_icon} alt="Decline Icon" className="w-4 h-4" />
        )}
        <div
        className="text-sm  ml-1 font-montserrat-light text-yankees-blue"
      >
        +50%
      </div>
      </div>
    </div>

        </div>

        </div>
    
  );

};

export default FastestGrowingCategories;