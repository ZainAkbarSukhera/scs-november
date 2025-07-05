import React from 'react';
import { MdHexagon } from "react-icons/md";
import mission from "../../assets/mission2.png"


const OurMission= () =>  {
  return (
    <section className="flex flex-col md:flex-row py-16 md:py-6 px-4 md:px-8 lg:px-8 bg-white">
  {/* Text Container */}
  <div className="md:w-1/2 lg:w-3/4 text-left md:pr-8">
    <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl  text-yankees-blue mb-10 font-montserrat-medium">
      Our Mission
    </h2>

    <p className="text-base md:text-base lg:text-lg text-yankees-blue mb-6 text-justify font-montserrat-light">
      Saudi Creative Streams (SCS) is a dynamic platform designed to empower visual artists across Saudi Arabia by offering a comprehensive ecosystem that supports their growth and visibility. SCS operates on 3 core principles: <span className="font-montserrat-lightitalic">Detect, Develop, and Connect</span>.
    </p>

    <div className="space-y-4">
      <div className="flex items-start">
        <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
        <p className="text-yankees-blue font-montserrat-light text-justify mb-4 text-base md:text-base lg:text-lg">
          SCS maintains a Creative Directory, which serves as a centralised hub for discovering and highlighting talented artists throughout the Kingdom. This directory allows artists to gain visibility and connects them with potential collaborators, clients and supporters.
        </p>
      </div>

      <div className="flex items-start">
        <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
        <p className="text-yankees-blue font-montserrat-light text-justify mb-4 text-base md:text-base lg:text-lg">
          SCS is integrated with the Ministry of Culture's Cultural Learning (CLP) platform, providing artists with access to workshops, training programs, and resources that enhance their skills and professional development.
        </p>
      </div>

      <div className="flex items-start">
        <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
        <p className="text-yankees-blue font-montserrat-light text-justify mb-4 text-base md:text-base lg:text-lg">
          SCS facilitates a Marketplace for Artworks, providing a platform for artists to showcase and sell their creations. This marketplace not only connects artists with buyers buto also encourages public and private sectors to acquire and promote national artwork and traditional crafts.
        </p>
      </div>
    </div>
  </div>

  {/* Right Side: Picture */}
  <div className="md:w-4/6 flex justify-center items-center mt-8 md:mt-14">
    <img src={mission} alt="Our Mission Icons" className="w-full h-auto max-w-sm " />
  </div>
</section>
  //   <section className="flex flex-col py-16 md:py-6 px-4 md:px-8 lg:px-8 bg-white">
  //   {/* Mission Heading */}
  //   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-left">
  //     Our Mission
  //   </h2>
  
  //   {/* Text Container */}
  //   <div className="md:w-full lg:w-3/4  text-left">
  //     <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 text-justify">
  //       Saudi Creative Streams (SCS) is a dynamic platform designed to empower visual artists across Saudi Arabia by offering a comprehensive ecosystem that supports their growth and visibility. SCS operates on 3 core principles: <span className="font-medium">Detect, Develop, and Connect</span>.
  //     </p>
  
  //     <div className="space-y-4">
  //       <div className="flex items-start">
  //         <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
  //         <p className="text-gray-700 text-justify">
  //           SCS maintains a Creative Directory, which serves as a centralised hub for discovering and highlighting talented artists throughout the Kingdom.
  //         </p>
  //       </div>
  
  //       <div className="flex items-start">
  //         <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
  //         <p className="text-gray-700 text-justify">
  //           SCS is integrated with the Ministry of Culture's Cultural Learning (CLP) platform, providing artists with access to workshops, training programs, and resources.
  //         </p>
  //       </div>
  
  //       <div className="flex items-start">
  //         <MdHexagon className="text-red-600 mr-4 mt-1 flex-shrink-0" />
  //         <p className="text-gray-700 text-justify">
  //           SCS facilitates a Marketplace for Artworks, providing a platform for artists to showcase and sell their creations.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  //   {/* Right Side: Picture */}
  //    {/* Image Container */}
  // <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
  //   <img img src={mission} alt="Our Mission Icons"  className="w-full h-auto max-w-sm rounded-lg shadow-lg" />
  // </div>
  //   {/* <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
  //         <img src={mission} alt="Our Mission Icons" className="w-64 md:w-5/6" />
  //      </div> */}
  // </section>
  )
};

//  // <section className="flex flex-col py-16 md:py-6 px-4 md:px-8 lg:px-8 bg-white">

//     //    {/* Mission Heading */}
//     //   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankeesBlue mb-10 text-left">
//     //     Our Mission
//     //   </h2>

//     //   {/* Left Side: Text */}
//     //   <div className="md:w-1/2 text-center md:text-left">

//     //     <p className="text-sm md:text-base lg:text-lg text-gray-700 text-justify">
//     //     Saudi Creative Streams (SCS) is a dynamic platform designed to empower visual artists across Saudi Arabia by offering a comprehensive ecosystem that supports their growth and visibility. SCS operates on 3 core principles: <span className="font-medium">Detect, Develop, and Connect</span>.
//     //     </p><br/>

//         {/* <p className="text-gray-700">
//              SCS maintains a Creative Directory, which serves as a centralised hub for discovering and highlighting talented artists throughout the Kingdom.
//         </p>

//         <p className="text-gray-700">
//              SCS is integrated with the Ministry of Culture's Cultural Learning (CLP) platform, providing artists with access to workshops, training programs, and resources.
//         </p>

//         <p className="text-gray-700">
//                SCS facilitates a Marketplace for Artworks, providing a platform for artists to showcase and sell their creations.
//         </p> */}

//         {/* <div className="space-y-4">
//     <p className="text-gray-700 flex items-start">
//       <MdHexagon className="text-red-600 mr-2" />
//       SCS maintains a Creative Directory, which serves as a centralised hub for discovering and highlighting talented artists throughout the Kingdom.
//     </p>
//     <p className="text-gray-700 flex items-start">
//       <MdHexagon className="text-red-600 mr-2" />
//       SCS is integrated with the Ministry of Culture's Cultural Learning (CLP) platform, providing artists with access to workshops, training programs, and resources.
//     </p>
//     <p className="text-gray-700 flex items-start">
//       <MdHexagon className="text-red-600 mr-2" />
//       SCS facilitates a Marketplace for Artworks, providing a platform for artists to showcase and sell their creations.
//     </p>
//   </div>

//       </div> */}

//       {/* Right Side: Picture */}
//       {/* <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center md:justify-start">
//         <img src={Hero} alt="Saudi Creative Streams Logo" className="w-64 md:w-5/6" />
//       </div> */}
      
    
    // <section className="bg-gray-100 p-8">
    //   <div className="container mx-auto">
    //     <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
    //     <p className="text-lg mb-6">
    //       Saudi Creative Streams (SCS) is a dynamic platform designed to empower visual artists across Saudi Arabia by offering a comprehensive ecosystem that supports their growth and visibility. SCS operates on 3 core principles: <span className="font-medium">Detect, Develop, and Connect</span>.
    //     </p>
    //     <div className="grid md:grid-cols-3 gap-8">
    //       <div className="flex flex-col items-center text-center">
    //         <div className="bg-red-500 text-white p-4 rounded-full mb-4">
    //           {/* Icon placeholder */}
    //           <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    //             <path d="M12 2a10 10 0 00-10 10h4l3-5 3 5h4a10 10 0 00-10-10z" />
    //             <path d="M12 22a10 10 0 0010-10h-4l-3 5-3-5h-4a10 10 0 0010 10z" />
    //           </svg>
    //         </div>
    //         <h3 className="text-xl font-bold mb-2">DETECT</h3>
    //         <p className="text-gray-700">
    //           SCS maintains a Creative Directory, which serves as a centralised hub for discovering and highlighting talented artists throughout the Kingdom.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center text-center">
    //         <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
    //           {/* Icon placeholder */}
    //           <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    //             <path d="M5 3v3h2v12h10V6h2V3H5zm7 14H8V8h4v9zm4 0h-2V8h2v9z" />
    //           </svg>
    //         </div>
    //         <h3 className="text-xl font-bold mb-2">DEVELOP</h3>
    //         <p className="text-gray-700">
    //           SCS is integrated with the Ministry of Culture's Cultural Learning (CLP) platform, providing artists with access to workshops, training programs, and resources.
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center text-center">
    //         <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
    //           {/* Icon placeholder */}
    //           <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
    //             <path d="M18 14v5h-3v-4H9v4H6v-5L12 9z" />
    //             <path d="M12 2l5 5h-3v3h-4V7H7z" />
    //           </svg>
    //         </div>
    //         <h3 className="text-xl font-bold mb-2">CONNECT</h3>
    //         <p className="text-gray-700">
    //           SCS facilitates a Marketplace for Artworks, providing a platform for artists to showcase and sell their creations.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  

export default OurMission;