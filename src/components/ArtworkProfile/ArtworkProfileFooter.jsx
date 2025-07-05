// import React from "react";
// import CreatorProfileCard from "../CreatorProfile/CreatorProfileCard";




// const Footer = ({artworks}) => {
  

//   return (
//         <footer className="bg-white py-8">
//        {/* Headin*/}
//        <div className="container mx-auto ">
//          <h2 className="text-sm font-montserrat-medium text-yankees-blue uppercase ">MORE WORK BY THE ARTIST</h2>
//          {/* Horizontal Line */}
//          <hr className="border-t border-gray-400 mb-6" />
//        </div>

//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
//          {artworks.map((art, index) => (
//            <CreatorProfileCard key={index} {...art} />
//          ))}
//        </div>
//      </footer>
//   );
// };

// export default Footer;


import React from "react";
import CreatorProfileCard from "../CreatorProfile/CreatorProfileCard";

const ArtworkProfileFooter = ({ artworks }) => {
  // Ensure artworks is an array and has items before rendering
  if (!artworks || artworks.length === 0) {
    return null; // Don't render the footer if there are no related artworks
  }

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-sm font-montserrat-medium text-yankees-blue uppercase ">MORE WORK BY THE ARTIST</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
        {artworks.map((art) => (
          <CreatorProfileCard
            key={art._id} // Use the unique _id from your schema for the key
            artwork={art} // Pass the entire artwork object as 'artwork' prop
            // Assuming artist name is nested in art.artist.fullNameEnglish
            creatorName={art.artist?.fullNameEnglish || "Unknown Artist"}
          />
        ))}
      </div>
    </footer>
  );
};

export default ArtworkProfileFooter;