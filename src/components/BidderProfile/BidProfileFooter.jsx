// import React from 'react';

// import image1 from '../../assets/pifLogo.png';
// import image2 from '../../assets/ithralogo.png';
// import image3 from '../../assets/miskLogo.png';
// import image4 from '../../assets/heritagecomission.png';
// import image5 from '../../assets/saudiartcouncil.png'


  
// const BidProfileFooter = () => {
//   const projects = [
//     {
//       name: 'Public Investment Fund',
//       image: image1, // replace with actual image path
//     },
//     {
//       name: 'Misk Foundation',
//       image: image3, // replace with actual image path
//     },
//     {
//       name: 'Ithra (King Abdulaziz Center for World Culture)',
//       image: image2, // replace with actual image path
//     },
//     {
//       name: 'Heritage Commission (Ministry of Culture)',
//       image: image4, // replace with actual image path
//     },
//     {
//       name: 'Saudi Art Council',
//       image: image5, // replace with actual image path
//     },
   
//   ];


//   return (
//         <footer className="bg-white py-8">
//        {/* Heading */}
//        <div className="container mx-auto ">
//          <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">View Similar Projects</h2>
//          <hr className="border-t border-black mb-6" />
//        </div>

//        {/* Patron Cards */}
//        <div className="mx-auto grid grid-cols-2 lg:grid-cols-5 xs:space-y-4 justify-center space-x-4">
//          {projects.map((project, index) => (
//            <div key={index} className="text-center">
//              <img
//                src={project.image}
//               alt={project.name}
//                className="h-16 w-auto object-contain mx-auto mb-2"
//              />
//              <p className="text-yankees-blue text-sm font-montserrat-medium">{project.name}</p>
//            </div>
//          ))}
//        </div>
//      </footer>
//   );
// };

// export default BidProfileFooter;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPatrons } from '../../api/patron'; // Ensure this path is correct

const BidProfileFooter = () => {
  const navigate = useNavigate();
  const [patronsForFooter, setPatronsForFooter] = useState([]);
  const [patronsStatus, setPatronsStatus] = useState('idle'); // 'idle', 'loading', 'succeeded', 'failed'

  useEffect(() => {
    const fetchPatronsData = async () => {
      // Only fetch if currently idle to prevent multiple fetches on mount
      if (patronsStatus === 'idle') {
        setPatronsStatus('loading');
        try {
          // Assume data is now an object like { success: true, patrons: [...] }
          const response = await getAllPatrons(); 
          
          // Check if response has a 'patrons' array and it's an array
          const patronsData = Array.isArray(response.patrons) ? response.patrons : [];

          // Take the first 5 patrons or fewer if not enough
          const top5Patrons = patronsData.slice(0, 5);
          
          setPatronsForFooter(top5Patrons);
          setPatronsStatus('succeeded');
        } catch (err) {
          console.error("Failed to fetch patrons for footer:", err);
          setPatronsForFooter([]); // Set to empty array on error
          setPatronsStatus('failed');
        }
      }
    };

    fetchPatronsData();
    // The dependency array should include patronsStatus only if you intend
    // to re-run this effect when patronsStatus changes from outside.
    // For a single fetch on mount, an empty array `[]` is usually sufficient
    // after the initial 'idle' state is handled.
  }, [patronsStatus]); 

  const handlePatronClick = (patronId) => {
    navigate(`/patrons-profile/${patronId}`); // Example navigation, adjust as per your routes
  };

  // --- Loading State ---
  if (patronsStatus === 'loading') {
    return (
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center text-yankees-blue">
          Loading similar projects...
        </div>
      </footer>
    );
  }

  // --- Failed State (and no data) ---
  if (patronsStatus === 'failed' && patronsForFooter.length === 0) {
    return (
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center text-red-500">
          Failed to load similar projects.
        </div>
      </footer>
    );
  }

  // --- No Patrons to Display ---
  if (!patronsForFooter || patronsForFooter.length === 0) {
    return null; // Don't render footer if no patrons are available
  }

  // --- Render Footer with Patrons ---
  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">View Similar Projects</h2>
        <hr className="border-t border-black mb-6" />
      </div>

      {/* Patron Cards */}
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-5 xs:space-y-4 justify-center space-x-4">
        {patronsForFooter.map((patron, index) => (
          <div
            key={patron._id || index}
            className="text-center cursor-pointer"
            onClick={() => handlePatronClick(patron._id)}
          >
            <img
              src={patron.profilePicture || ''} 
              alt={patron.organisationName?.english || 'Patron Logo'} // Use optional chaining for safety
              className="h-40 w-60 object-fill mx-auto mb-2"
            />
            <p className="text-yankees-blue text-sm font-montserrat-medium">
              {patron.organisationName?.english || 'Unknown Patron'} {/* Use optional chaining for safety */}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default BidProfileFooter;