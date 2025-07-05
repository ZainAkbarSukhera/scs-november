// import React from 'react';
// import CreatorProfileCard from '../CreatorProfile/CreatorProfileCard';

// const PatronsGallery = ({galleryDetails})=>  {
//   return(
//     <div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8">
//       {galleryDetails.map((art, index) => (
//         <CreatorProfileCard key={index} {...art} />
//       ))}
//     </div>
//   </div>
//   );

// };

// export default PatronsGallery;

import React from 'react';
import CreatorProfileCard from '../CreatorProfile/CreatorProfileCard'; // Ensure this path is correct

const PatronsGallery = ({ galleryDetails }) => {
  if (!galleryDetails || galleryDetails.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10 text-lg font-montserrat-light">
        No artworks found in this category for this patron.
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8">
        {galleryDetails.map((art, index) => (
          // Make sure CreatorProfileCard can handle the 'art' object structure
          // It expects props like 'image', 'title', 'artist' (or creatorName), 'initialLikes', 'initialViews', '_id'
          <CreatorProfileCard
            key={art._id || index}
            artwork={art} // Pass the entire art object as 'artwork' prop
            // Assuming 'art.artist' is an object with 'fullNameEnglish' from backend population
            creatorName={art.artist?.fullNameEnglish || ''}
          />
        ))}
      </div>
    </div>
  );
};

export default PatronsGallery;
