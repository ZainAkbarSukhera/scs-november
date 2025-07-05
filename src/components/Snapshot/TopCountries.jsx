import React from "react";
import ReactCountryFlag from "react-country-flag"; 
import { countryNameToCode } from "../../static/data";



const TopCountries = ({countriesData}) =>  {
  return (
    <div className="lg:w-60 border rounded-lg lg:p-4 shadow-md flex flex-col text-center xs:w-48 xs:p-4">
      <div >
        <h3 className="text-base text-center font-montserrat-regular text-yankees-blue mb-1">
          Top Countries
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-center text-yankees-blue font-montserrat-light mb-4">
          Countries with the highest spending buyers
        </p>
      </div>

      {/* Displaying Country Budgets */}
      {countriesData.map(({ countryName, budget }) => {
        const countryCode = countryNameToCode[countryName];

        return (
          <div key={countryName} className="flex justify-between items-center mb-2">
            <span className="text-yankees-blue font-montserrat-light text-xs p-2">{budget}</span>
            {countryCode ? (
              <div style={{
                width: '2em',
                height: '2em',
                borderRadius: '50%',
                //overflow: 'auto',
                display: 'flex', // Center the flag within the circle
                alignItems: 'center', // Vertically center the flag
                justifyContent: 'center' // Horizontally center the flag
              }}>
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                  style={{
                    width: '100%', // Take the full width of the circle
                    height: '100%', // Take the full height of the circle
                  }}
                  title={countryName}
                />
              </div>
            ) : (
              <span className="text-red-500 font-montserrat-light text-sm">Country not found</span> // Error message if country name doesn't match
            )}
          </div>

        );
      })}
    </div>
  );
};

export default TopCountries;

