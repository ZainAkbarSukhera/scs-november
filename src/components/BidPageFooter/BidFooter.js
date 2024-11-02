import React from 'react';
import { useNavigate } from 'react-router-dom';

import image1 from '../../assets/pifLogo.png';
import image2 from '../../assets/ithralogo.png';
import image3 from '../../assets/miskLogo.png';
import image4 from '../../assets/heritagecomission.png';
import image5 from '../../assets/saudiartcouncil.png';

const patrons = [
  {
    name: 'Public Investment Fund',
    image: image1, // replace with actual image path
  },
  {
    name: 'Misk Foundation',
    image: image3, // replace with actual image path
  },
  {
    name: 'Ithra (King Abdulaziz Center for World Culture)',
    image: image2, // replace with actual image path
  },
  {
    name: 'Heritage Commission (Ministry of Culture)',
    image: image4, // replace with actual image path
  },
  {
    name: 'Saudi Art Council',
    image: image5, 
  },
 
];

const Footer = () => {
  const navigate=useNavigate();
  const handleOnClick = () => {
    navigate('/patrons-profile');} // Use navigate to go to the profile page

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-lg font-montserrat-medium text-yankees-blue uppercase mb-4">VIEW PATRONS</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      {/* Patron Cards */}
      <div className="container mx-auto flex justify-center space-x-8" onClick={handleOnClick}>
        {patrons.map((patron, index) => (
          <div
            key={index}
            className="text-center transform transition duration-200 hover:scale-105 hover:shadow-lg hover:opacity-100"
          >
            <img
              src={patron.image}
              alt={patron.name}
              className="h-20 w-auto object-fill mx-auto mb-2"
            />
            <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
