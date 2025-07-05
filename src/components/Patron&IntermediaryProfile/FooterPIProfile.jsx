// import React from 'react';



// const Footer = ({patronsDetail}) =>  {
  

//   return (
//     <footer className="bg-white py-8">
//       {/* Heading */}
//       <div className="container mx-auto ">
//         <h2 className="text-base font-montserrat-medium text-yankees-blue uppercase">VIEW SIMILAR PATRONS</h2>
//         {/* Horizontal Line */}
//         <hr className="border-t border-gray-400 mb-6" />
//       </div>

//       {/* Patron Cards */}
//       <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-5 justify-center lg:space-x-4 ">
//         {patronsDetail.map((patron, index) => (
//           <div key={index} className="text-center">
//             <img
//               src={patron.image}
//               alt={patron.name}
//               className="h-20 w-auto object-fill mx-auto mb-2 *:"
//             />
//             <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FooterPatronsProfile = ({ patronsDetail }) => { // Renamed component to match file name convention
  const navigate = useNavigate(); // Initialize useNavigate

  if (!patronsDetail || patronsDetail.length === 0) {
    return null; // Don't render if no patrons
  }

  const handlePatronClick = (patronId) => {
    if (patronId) {
      navigate(`/patron-profile/${patronId}`);
    } else {
      console.warn("Patron ID is missing for navigation.");
    }
  };

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-base font-montserrat-medium text-yankees-blue uppercase">VIEW SIMILAR PATRONS</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      {/* Patron Cards */}
      <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-5 justify-center lg:space-x-4 ">
        {patronsDetail.map((patron, index) => (
          <div
            key={patron._id || index} // Use patron._id for unique key (assuming it's available)
            className="text-center cursor-pointer" // Add cursor-pointer for visual feedback
            onClick={() => handlePatronClick(patron._id)} // Attach click handler
          >
            <img
              src={patron.image || 'null'} // Use fallback image
              alt={patron.name || 'Patron Logo'}
              className="h-40 w-60 object-fill mx-auto mb-2 *:"
            />
            <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterPatronsProfile;
