import React from 'react';
import skyline from '../../assets/OurVision.jpg'; 


const OurVision = () =>  {
  return (
    <section className="flex flex-col py-8 xs:py-6 md:py-20 px-4 xs:px-2 md:px-8 lg:px-8 bg-white"> 
    {/* Vision Heading */}
    <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl  text-yankees-blue mb-6 xs:mb-4 text-left font-montserrat-medium">
      Our Vision
    </h2>
    
    {/* Vision Paragraph */}
    <p className="text-base xs:text-sm text-justify md:text-base lg:text-lg text-yankees-blue leading-relaxed mb-6 xs:mb-4 font-montserrat-light">
      We aspire to cultivate a conscious stream of Saudi creatives, showcasing their talents beyond time and borders. By identifying untapped creative talent, nurturing their growth and connecting them with opportunities, we empower a new generation of Saudi creatives to reach their fullest potential and make a lasting impact both locally and internationally.
    </p>
    
    {/* Skyline Image */}
    <div className="w-full">
      <img src={skyline} alt="Saudi Skyline" className="w-full object-contain xs:max-w-full" />
    </div>
  </section>
  );
};

export default OurVision;
