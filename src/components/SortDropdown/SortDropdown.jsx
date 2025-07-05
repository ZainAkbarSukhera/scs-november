// /import React from 'react';

// const SortDropdown = ({ options, selectedOption, onOptionChange }) =>  {
//   return (
//     <div >
//     <label className="absolute top-0 right-0 flex items-center lg:mr-52 lg:mt-28  xs:mt-44 xs:mr-60 text-sm xs:text-xs text-yankees-blue font-montserrat-light ">Sort</label>
//      <div className="absolute top-0 right-0 flex items-center lg:mr-14 lg:mt-32  xs:mt-48 xs:mr-20 ">
//     <select
//       className="px-4 py-2 mt-0.5 xs:px-5 xs:py-2 border border-gray-300 rounded-md text-yankees-blue font-montserrat-light focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-200 ease-in-out"
//       value={selectedOption}
//       onChange={(e) => onOptionChange(e.target.value)}
//     >
//       {options.map((option, index) => (
//         <option className='font-montserrat-light' key={index} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   </div>
//   </div>
//     );
//     };

// export default SortDropdown;

 import React from 'react';

const SortDropdown = ({ options, selectedOption, onOptionChange }) =>  {
  return (
    <div >
    <label className="absolute top-0 right-0 flex items-center lg:mr-48 lg:mt-28  xs:mt-44 xs:mr-60 text-sm xs:text-xs text-yankees-blue font-montserrat-light ">Sort</label>
     <div className="absolute top-0 right-0 flex items-center lg:mr-14 lg:mt-32  xs:mt-48 xs:mr-20 ">
    <select
      className="px-4 py-2 mt-0.5 xs:px-5 xs:py-2 border border-gray-300 rounded-md text-yankees-blue font-montserrat-light focus:outline-none focus:ring-2 focus:ring-blue-950 transition duration-200 ease-in-out"
      value={selectedOption}
      onChange={(e) => onOptionChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option className='font-montserrat-light' key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  </div>
    );
    };

export default SortDropdown;

 