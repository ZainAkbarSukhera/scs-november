// import React from "react";
// import { useNavigate } from "react-router-dom";


// const ProfileFooter = ({artists}) => {

//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/creative-profile');
//   };

//   return (
//     <div className="container">
//     <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium uppercase mb-4">
//       VIEW SIMILAR ARTISTS
//     </h2>
//     <div onClick={handleOnClick} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6 p-4 lg:justify-start xs:justify-center ">
//       {artists.map((artist, index) => (
//         <div key={index} className="text-left">
//           <img
//             src={artist.image}
//             alt={artist.name}
//             className="h-52 w-full object-fill mx-auto mb-2 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100"
//           />
//           <span className="text-yankees-blue text-base font-montserrat-regular">{artist.name}</span>
//         </div>
//       ))}
//     </div>
//   </div>
//   );

// };

// export default ProfileFooter;

import React from "react";
import { useNavigate } from "react-router-dom";


const ProfileFooter = ({ artists }) => {
  const navigate = useNavigate();

  // Function to handle click on an artist card
  // This should navigate to the specific artist's profile, not a generic one
  const handleArtistClick = (artistId) => {
    navigate(`/creative-profile/${artistId}`); // Assuming this is your route for individual artist profiles
  };

  return (
    <div className="container">
      <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium uppercase mb-4">
        VIEW SIMILAR ARTISTS
      </h2>
      {/* Changed onClick to delegate to individual artist cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-6 p-4 lg:justify-start xs:justify-center ">
        {/* Check if artists array is not empty before mapping */}
        {artists && artists.length > 0 ? (
          artists.map((artist) => (
            // Added onClick to the individual artist div
            <div
              key={artist._id} // Use artist._id as key for uniqueness
              className="text-left cursor-pointer" // Add cursor-pointer for better UX
              onClick={() => handleArtistClick(artist._id)} // Pass artist's ID to handler
            >
              <img
                src={artist.profilePicture || 'https://via.placeholder.com/200?text=No+Image'} // Use profilePicture, with fallback
                alt={artist.fullNameEnglish || 'Artist Name'} // Use fullNameEnglish for alt text
                className="h-52 w-full object-cover mx-auto mb-2 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100" // object-cover is usually better for profile pictures
              />
              <span className="text-yankees-blue text-base font-montserrat-regular">
                {artist.fullNameEnglish || 'Unknown Artist'} {/* Use fullNameEnglish for display */}
              </span>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No similar artists found.</div>
        )}
      </div>
    </div>
  );
};

export default ProfileFooter;