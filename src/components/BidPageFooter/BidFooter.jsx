// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import image1 from '../../assets/pifLogo.png';
// import image2 from '../../assets/ithralogo.png';
// import image3 from '../../assets/miskLogo.png';
// import image4 from '../../assets/heritagecomission.png';
// import image5 from '../../assets/saudiartcouncil.png';

// const patrons = [
//   {
//     name: 'Public Investment Fund',
//     image: image1, // replace with actual image path
//   },
//   {
//     name: 'Misk Foundation',
//     image: image3, // replace with actual image path
//   },
//   {
//     name: 'Ithra (King Abdulaziz Center for World Culture)',
//     image: image2, // replace with actual image path
//   },
//   {
//     name: 'Heritage Commission (Ministry of Culture)',
//     image: image4, // replace with actual image path
//   },
//   {
//     name: 'Saudi Art Council',
//     image: image5, 
//   },
 
// ];

// const Footer = () => {
//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/patrons-profile');} // Use navigate to go to the profile page

//     return (
//          <footer className="bg-white py-8">
//        {/* Heading */}
//        <div className="container mx-auto ">
//          <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">VIEW PATRONS</h2>
//          {/* Horizontal Line */}
//          <hr className="border-t border-gray-400 mb-6" />
//        </div>

//        {/* Patron Cards */}
//        <div className="container mx-auto flex lg:flex-row xs:flex-col xs:space-y-4 justify-center space-x-8" onClick={handleOnClick}>
//          {patrons.map((patron, index) => (
//            <div
//              key={index}
//              className="text-center transform transition duration-200 hover:scale-105 hover:shadow-lg hover:opacity-100"
//            >
//              <img
//                src={patron.image}
//                alt={patron.name}
//                className="h-20 w-auto object-fill mx-auto mb-2"
//              />
//              <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
//            </div>
//          ))}
//        </div>
//      </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Remove hardcoded image imports as we'll use URLs from fetched data
// import image1 from '../../assets/pifLogo.png';
// import image2 from '../../assets/ithralogo.png';
// import image3 from '../../assets/miskLogo.png';
// import image4 from '../../assets/heritagecomission.png';
// import image5 from '../../assets/saudiartcouncil.png';

// Remove the hardcoded patrons array
// const patrons = [ /* ... */ ];

// Change the component name to BidFooter, as it's imported as such in ArtBid
const BidFooter = ({ patrons }) => { // Accept 'patrons' as a prop
  const navigate = useNavigate();

  // The handleOnClick now needs to be dynamic per patron,
  // or it can navigate to a general patrons listing page.
  // Given it's a footer, a general page might be more appropriate,
  // or each patron logo could have its own click handler.
  // For now, I'll remove the overall div onClick and add it to individual patron items.
  const handlePatronClick = (patronId) => {
    navigate(`/patron-profile/${patronId}`); // Navigate to a specific patron's profile
  };

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">VIEW PATRONS</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      {/* Patron Cards */}
      <div className="container mx-auto flex lg:flex-row xs:flex-col xs:space-y-4 justify-start space-x-4">
        {patrons.length > 0 ? (
          patrons.map((patron) => ( // Use the 'patrons' prop
            <div
              key={patron._id} // Use patron._id for unique key
              className="text-center transform transition duration-200 hover:scale-105 hover:shadow-lg hover:opacity-100"
              onClick={() => handlePatronClick(patron._id)} // Add individual click handler
            >
              <img
                src={patron.profilePicture} // Use companyLogo from the patron object
                alt={patron.organisationName.english || 'Patron Logo'} // Use companyName for alt text
                className="h-40 w-60 object-fill mx-auto mb-2"
              />
              <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.organisationName.english}</p> {/* Use companyName */}
            </div>
          ))
        ) : (
          <div className="text-center col-span-full text-gray-600">
            <p>No patrons to display.</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default BidFooter; // Export as BidFooter
