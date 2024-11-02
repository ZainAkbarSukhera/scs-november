import React from "react";
import CreatorProfileCard from "../CreatorProfile/CreatorProfileCard";




const Footer = ({artworks}) => {
  

  return (
    <footer className="bg-white py-8">
      {/* Headin*/}
      <div className="container mx-auto ">
        <h2 className="text-sm font-montserrat-medium text-yankees-blue uppercase ">MORE WORK BY THE ARTIST</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
        {artworks.map((art, index) => (
          <CreatorProfileCard key={index} {...art} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
