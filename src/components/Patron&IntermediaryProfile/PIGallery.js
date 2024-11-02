import React from 'react';
import CreatorProfileCard from '../CreatorProfile/CreatorProfileCard';

const PatronsGallery = ({galleryDetails})=>  {
  return(
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0.5 mb-8">
        {galleryDetails.map((art, index) => (
          <CreatorProfileCard key={index} {...art} />
        ))}
      </div>
    </div>
  );

};

export default PatronsGallery;