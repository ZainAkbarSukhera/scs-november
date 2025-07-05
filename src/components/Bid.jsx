// // Bid.js
// import React from 'react';
// import BidCard from './ArtBidCard/BidCardLanding';  // Import BidCard component
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';
// //import { BiData } from 'react-icons/bi';
//
// const projects = [
//   {
//     image: image1,
//     title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
//     deadline: 'November 15, 2024',
//     eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image2,
//     title: 'NEOM - Future of Living: Architectural Design Competition',
//     deadline: 'December 15, 2024',
//     eligibility: 'Open to Saudi architects',
//     buttonText: 'Apply',
//   },
//   {
//     image: image3,
//     title: 'Expo 2030 - Future Forward',
//     deadline: 'January 15, 2025',
//     eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image4,
//     title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
//     deadline: 'October 20, 2024',
//     eligibility: 'Open to Saudi tech developers and digital artists',
//     buttonText: 'Apply',
//   },
//   {
//     image: image5,
//     title: 'FIFA 2034 - Game on',
//     deadline: 'March 1, 2025',
//     eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
//     buttonText: 'Apply',
//   }
// ];

// const Bid = () => {
//   const navigate=useNavigate();
//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
//             Art-Bid
//           </h2>
//           <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//             Submit Your Idea
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
//           Join Exciting Opportunities
//         </p>
//         <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//           This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
//         </p>
//       </div>

//       {/* Cards in a Horizontal Line */}
//       <div className="flex overflow-x-auto space-x-2">
//         {projects.map((project, index) => (
//           <BidCard key={index} project={project} />
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//         onClick={()=>navigate('art-bid')}>
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bid;

// import React from 'react'; 
// import BidCard from './ArtBidCard/BidCardLanding';  // Import BidCard component
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';

// const projects = [
//   {
//     image: image1,
//     title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
//     deadline: 'November 15, 2024',
//     eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image2,
//     title: 'NEOM - Future of Living: Architectural Design Competition',
//     deadline: 'December 15, 2024',
//     eligibility: 'Open to Saudi architects',
//     buttonText: 'Apply',
//   },
//   {
//     image: image3,
//     title: 'Expo 2030 - Future Forward',
//     deadline: 'January 15, 2025',
//     eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image4,
//     title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
//     deadline: 'October 20, 2024',
//     eligibility: 'Open to Saudi tech developers and digital artists',
//     buttonText: 'Apply',
//   },
//   {
//     image: image5,
//     title: 'FIFA 2034 - Game on',
//     deadline: 'March 1, 2025',
//     eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
//     buttonText: 'Apply',
//   }
// ];

// const Bid = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="p-8 xs:p-4"> 
//     <div className="mb-8">
//       <div className="flex flex-col xs:flex-row xs:justify-between items-center w-full">
//         <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl text-yankees-blue mb-10 font-montserrat-medium">
//           Art-Bid
//         </h2>
//         <button className="lg:px-24 lg:py-2 xs:px-2 xs:py-1 xs:mb-8 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light" onClick={()=>navigate('art-learn')}>
//           Submit Your Idea
//         </button>
//       </div>
  
//       <p className="text-base  md:text-lg lg:text-xl text-yankees-blue mb-2 font-montserrat-regular">
//         Join Exciting Opportunities
//       </p>
//       <p className="text-base  text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//         This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
//       </p>
//     </div>
  
//     {/* Cards in a Responsive Layout */}
//     <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//       {projects.map((project, index) => (
//         <BidCard key={index} project={project} />
//       ))}
//     </div>
  
//     <div className="text-center mt-6">
//       <button 
//         className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//         onClick={() => navigate('art-bid')}
//       >
//         Discover More
//       </button>
//     </div>
//   </div>
//   );
// };

// export default Bid;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from 'react-redux';
import BidCard from './ArtBidCard/BidCardLanding';
import { getAllOpenCalls } from '../api/bid';

const Bid = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const [openCalls, setOpenCalls] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  // Check for the presence of a token in localStorage
  const hasToken = localStorage.getItem("token") ? true : false;

  useEffect(() => {
    const fetchBidsData = async () => {
      if (status === 'idle' || status === 'failed') {
        setStatus('loading');
        setError(null);

        try {
          const data = await getAllOpenCalls();
          setOpenCalls(data);
          setStatus('succeeded');
        } catch (err) {
          console.error("Failed to fetch open calls:", err);
          setError(err.message || 'Failed to fetch bids.');
          setStatus('failed');
          setOpenCalls([]);
        }
      }
    };

    fetchBidsData();
  }, [status]);

  const projectsToDisplay = openCalls.slice(0, 5);

  if (status === 'loading') {
    return (
      <div className="text-center p-8 text-yankees-blue font-montserrat-regular">
        Loading bids...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center p-8 text-red-600 font-montserrat-regular">
        Error: {error}
      </div>
    );
  }

 return (
    <div className="p-8 xs:p-4">
      <div className="mb-8">
        {/* Changed flex-col back to flex and removed individual mb- classes */}
        <div className="flex justify-between items-center w-full">
          {/* Removed mb-10 from h2 */}
          <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl text-yankees-blue font-montserrat-medium">
            Art-Bid
          </h2>
          {/* Removed xs:mb-8 from button */}
          <button
            className="lg:px-24 lg:py-2 xs:px-2 xs:py-1 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light"
            onClick={() => {
              if (hasToken) {
                navigate('/art-learn'); // Changed from /art-bid to /art-learn as per previous instruction
              } else {
                navigate('/login');
              }
            }}
          >
            Submit Your Idea
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-yankees-blue mb-2 mt-2 font-montserrat-regular">
          Join Exciting Opportunities
        </p>
        <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
          This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
        </p>
      </div>

      {/* Cards in a Responsive Layout */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project) => (
            <BidCard key={project._id} project={project} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 font-montserrat-light">No bids/open calls available.</p>
        )}
      </div>

      <div className="text-center mt-6">
        <button
          className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
          onClick={() => navigate('art-bid')}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Bid;


// import React from 'react';
// import BidCard from './ArtBidCard/BidCardLanding';  // Import BidCard component
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';

// const projects = [
//   {
//     image: image1,
//     title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
//     deadline: 'November 15, 2024',
//     eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image2,
//     title: 'NEOM - Future of Living: Architectural Design Competition',
//     deadline: 'December 15, 2024',
//     eligibility: 'Open to Saudi architects',
//     buttonText: 'Apply',
//   },
//   {
//     image: image3,
//     title: 'Expo 2030 - Future Forward',
//     deadline: 'January 15, 2025',
//     eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image4,
//     title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
//     deadline: 'October 20, 2024',
//     eligibility: 'Open to Saudi tech developers and digital artists',
//     buttonText: 'Apply',
//   },
//   {
//     image: image5,
//     title: 'FIFA 2034 - Game on',
//     deadline: 'March 1, 2025',
//     eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
//     buttonText: 'Apply',
//   }
// ];

// const Bid = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
//             Art-Bid
//           </h2>
//           <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//             Submit Your Idea
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
//           Join Exciting Opportunities
//         </p>
//         <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//           This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
//         </p>
//       </div>

//       {/* Cards in a Horizontal Line with Responsive Layout */}
//       <div className="flex overflow-x-auto space-x-4 pb-4">
//         {/* Ensure cards scroll horizontally on small screens and wrap on large screens */}
//         <div className="flex flex-nowrap md:flex-wrap space-x-4 md:space-x-6">
//           {projects.map((project, index) => (
//             <div className="min-w-[16rem] md:min-w-[20rem] lg:min-w-[22rem]" key={index}>
//               <BidCard project={project} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="text-center mt-6">
//         <button
//           className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//           onClick={() => navigate('art-bid')}
//         >
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bid;

// Bid.js
// Bid.js
// import React from 'react';
// import BidCard from './ArtBidCard/BidCardLanding';  // Import BidCard component
// import { useNavigate } from 'react-router-dom';
// import image1 from '../assets/Aramco.png';
// import image2 from '../assets/Neom.jpg';
// import image3 from '../assets/Riyadh Expo 2030.png';
// import image4 from '../assets/STC.jpg';
// import image5 from '../assets/World Cup 2034.jpg';

// const projects = [
//   {
//     image: image1,
//     title: 'Saudi Aramco - Sustainable Energy Awareness Campaign',
//     deadline: 'November 15, 2024',
//     eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image2,
//     title: 'NEOM - Future of Living: Architectural Design Competition',
//     deadline: 'December 15, 2024',
//     eligibility: 'Open to Saudi architects',
//     buttonText: 'Apply',
//   },
//   {
//     image: image3,
//     title: 'Expo 2030 - Future Forward',
//     deadline: 'January 15, 2025',
//     eligibility: 'Open to all Saudi artists, designers, architects, and digital creators',
//     buttonText: 'Apply',
//   },
//   {
//     image: image4,
//     title: 'Saudi Telecom (STC) - Digital Innovation in Connectivity',
//     deadline: 'October 20, 2024',
//     eligibility: 'Open to Saudi tech developers and digital artists',
//     buttonText: 'Apply',
//   },
//   {
//     image: image5,
//     title: 'FIFA 2034 - Game on',
//     deadline: 'March 1, 2025',
//     eligibility: 'Open to Saudi graphic designers, digital artists, event planners, and multimedia creators',
//     buttonText: 'Apply',
//   }
// ];

// const Bid = () => {
//   const navigate = useNavigate();
  
//   return (
//     <div className="p-8">
//       <div className="mb-8">
//         <div className="flex justify-between items-center w-full">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
//             Art-Bid
//           </h2>
//           <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
//             Submit Your Idea
//           </button>
//         </div>

//         <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
//           Join Exciting Opportunities
//         </p>
//         <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//           This is where creative meets opportunity. Browse through open calls from various entities looking for fresh ideas and innovative designs. Submit your work to projects that align with your passions and expertise and bring your creative visions to life.
//         </p>
//       </div>

//       {/* Cards in a Responsive Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {projects.map((project, index) => (
//           <BidCard key={index} project={project} />
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <button
//           className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
//           onClick={() => navigate('art-bid')}
//         >
//           Discover More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Bid;

