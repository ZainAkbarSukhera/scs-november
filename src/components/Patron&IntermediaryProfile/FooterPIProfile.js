import React from 'react';



const Footer = ({patronsDetail}) =>  {
  

  return (
    <footer className="bg-white py-8">
      {/* Heading */}
      <div className="container mx-auto ">
        <h2 className="text-base font-montserrat-medium text-yankees-blue uppercase">VIEW SIMILAR PATRONS</h2>
        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      {/* Patron Cards */}
      <div className="container mx-auto flex justify-center space-x-4">
        {patronsDetail.map((patron, index) => (
          <div key={index} className="text-center">
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
