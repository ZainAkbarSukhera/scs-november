// import React from "react";
// import { useNavigate } from "react-router-dom";
// import LearnCard from './ArtLearnCard/LearnCardLanding'; 
// import drawingIcon from '../assets/drawing_icon.png';
// import calligraphyIcon from '../assets/calligraphy_icon.png';
// import paintingIcon from '../assets/painting_icon.png';
// import photographyIcon from '../assets/photography_icon.png';
// import printMakingIcon from '../assets/printMaking_icon.png';
// import sculptureIcon from '../assets/sculpture_icon.png';

// const Workshop = () =>  {
//   const navigate=useNavigate();
//   const workshops = [
//     {
//       title: "Digital Illustration",
//       date: "September 20, 2024",
//       location: "Online / Remote",
//       instructor: "Omar Al-Harbi, Digital Artist",
//       duration: "20 hours",
//       tag: "Drawing & Illustration",
//       tagColor: "bg-pewter-blue",
//       icon: drawingIcon,
//     },
//     {
//       title: "Arabic Calligraphy and Modern Art",
//       date: "October 5, 2024",
//       location: "Online / Remote",
//       instructor: "Yousef Al-Qahtani, Calligrapher",
//       duration: "12 hours",
//       tag: "Calligraphy",
//       tagColor: "bg-yankees-blue",
//       icon: calligraphyIcon,
//     },
//     {
//       title: "Photography in Urban Landscapes",
//       date: "November 1, 2024",
//       location: "Online / Remote",
//       instructor: "Laila Al-Saadi, Photographer",
//       duration: "10 hours",
//       tag: "Photography",
//       tagColor: "bg-madder-lake",
//       icon: photographyIcon,
//     },
//     {
//       title: "From Concept to Creation",
//       date: "November 20, 2024",
//       location: "Online / Remote",
//       instructor: "Majid Al-Turki, Sculptor",
//       duration: "6 hours",
//       tag: "Sculpture",
//       tagColor: "bg-royal-orange",
//       icon: sculptureIcon,
//     },
//     {
//       title: "Exploring Techniques and Creativity",
//       date: "December 15, 2024",
//       location: "Online / Remote",
//       instructor: "Layla Al-Otaibi, Printmaker",
//       duration: "15 hours",
//       tag: "Printmaking",
//       tagColor: "bg-deep-peach",
//       icon: printMakingIcon,
//     },
//     {
//       title: "Advanced Painting Techniques",
//       date: "March 20, 2025",
//       location: "Online / Remote",
//       instructor: "Huda Al-Rashid, Fine Artist",
//       duration: "8 hours",
//       tag: "Painting",
//       tagColor: "bg-palatinate-purple",
//       icon: paintingIcon,
//     },
//   ];

//   return (
//     <div className="p-8 xs:px-4 xs:py-6">
//     <div className="mb-8">
//       <div className="flex justify-between items-center w-full">
//         <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl text-yankees-blue mb-10 font-montserrat-medium">
//           Art-Learn
//         </h2>
//         <button className="lg:px-24 lg:py-2 xs:px-2 xs:py-1 xs:mb-8 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light" onClick={()=>navigate('login')}>
//           Attend a Workshop
//         </button>
//       </div>
  
//       <p className="text-base md:text-lg lg:text-xl  text-yankees-blue mb-2 font-montserrat-regular">
//         Unlock Your Creative Potential
//       </p>
//       <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
//         At SCS, we believe in the power of continuous learning and skill development. Our workshops are designed to help creatives at all
//         levels—whether you are just starting out or looking to refine your craft.
//       </p>
//     </div>
  
//     <div className="workshop-container grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {workshops.map((workshop, index) => (
//         <LearnCard key={index} {...workshop} />
//       ))}
//     </div>
  
//     <div className="text-center mt-6">
//       <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light" onClick={()=>navigate('art-learn')}>
//         Discover More
//       </button>
//     </div>
//   </div>
//   );
// };

// export default Workshop;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LearnCard from './ArtLearnCard/LearnCardLanding';
import drawingIcon from '../assets/drawing_icon.png';
import calligraphyIcon from '../assets/calligraphy_icon.png';
import paintingIcon from '../assets/painting_icon.png';
import photographyIcon from '../assets/photography_icon.png';
import printMakingIcon from '../assets/printMaking_icon.png';
import sculptureIcon from '../assets/sculpture_icon.png';
import graphicsIcon from '../assets/graphics_icon.png';
import mixedMediaIcon from '../assets/mixedMedia_icon.png'

import { setWorkshops, setWorkshopsLoading, setWorkshopsError } from './redux/reducers/workshop';
import { getAllWorkshops } from '../api/workshop';

const Workshop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Check for the presence of a token in localStorage
  const hasToken = localStorage.getItem("token") ? true : false;

  const workshops = useSelector((state) => state.workshops.items);
  const status = useSelector((state) => state.workshops.status);
  const error = useSelector((state) => state.workshops.error);

  const getWorkshopDetails = (category) => {
    let tagColor = "bg-gray-500";
    let icon = drawingIcon;

    switch (category) {
      case "Calligraphy": tagColor = "bg-yankees-blue"; icon = calligraphyIcon; break;
      case "Drawing & Illustration": tagColor = "bg-pewter-blue"; icon = drawingIcon; break;
      case "Graphics": tagColor = "bg-madder-lake"; icon = graphicsIcon; break;
      case "Mixed Media": tagColor = "bg-yellow-400"; icon = mixedMediaIcon; break;
      case "Painting": tagColor = "bg-palatinate-purple"; icon = paintingIcon; break;
      case "Photography": tagColor = "bg-fire-opal"; icon = photographyIcon; break;
      case "Printmaking": tagColor = "bg-deep-peach"; icon = printMakingIcon; break;
      case "Sculpture": tagColor = "bg-royal-orange"; icon = sculptureIcon; break;
      default: break;
    }
    return { tagColor, icon, tag: category };
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        console.warn(`Invalid date string received: ${dateString}`);
        return 'Invalid Date';
      }
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    } catch (e) {
      console.error("Error formatting date:", e);
      return 'N/A';
    }
  };

  useEffect(() => {
    const fetchWorkshopsData = async () => {
      if (status === 'idle') {
        dispatch(setWorkshopsLoading());

        try {
          const data = await getAllWorkshops();
          const processedData = data.map(workshop => {
            const instructorName = workshop.instructor
              ? `${workshop.instructor.fullNameEnglish || 'Unknown Artist'}${workshop.instructor.fieldOfExpertise ? ', ' + workshop.instructor.fieldOfExpertise : ''}`
              : 'Unknown Instructor';

            return {
              ...workshop,
              date: formatDate(workshop.date),
              instructor: instructorName,
              ...getWorkshopDetails(workshop.category),
            };
          });
          dispatch(setWorkshops(processedData));
        } catch (err) {
          console.error("Failed to fetch workshops:", err);
          dispatch(setWorkshopsError(err.message || 'Failed to fetch workshops.'));
        }
      }
    };

    fetchWorkshopsData();
  }, [status, dispatch]);

  const workshopsToDisplay = workshops.slice(0, 6);

  if (status === 'loading') {
    return (
      <div className="p-8 text-center text-yankees-blue font-montserrat-regular">
        Loading workshops...
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="p-8 text-center text-red-600 font-montserrat-regular">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-8 xs:px-4 xs:py-6">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl xs:text-2xl md:text-4xl lg:text-5xl text-yankees-blue mb-10 font-montserrat-medium">
            Art-Learn
          </h2>
          {/* Conditional logic for "Attend a Workshop" button */}
          <button
            className="lg:px-24 lg:py-2 xs:px-2 xs:py-1 xs:mb-8 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light"
            onClick={() => {
              if (hasToken) {
                navigate('art-learn'); // Navigate to art-learn if token exists
              } else {
                navigate('login'); // Navigate to login if no token
              }
            }}
          >
            Attend a Workshop
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl text-yankees-blue mb-2 font-montserrat-regular">
          Unlock Your Creative Potential
        </p>
        <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
          At SCS, we believe in the power of continuous learning and skill development. Our workshops are designed to help creatives at all
          levels—whether you are just starting out or looking to refine your craft.
        </p>
      </div>

      <div className="workshop-container grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshopsToDisplay.length > 0 ? (
          workshopsToDisplay.map((workshop) => (
            <LearnCard key={workshop._id} {...workshop} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 font-montserrat-light">No workshops available.</p>
        )}
      </div>

      <div className="text-center mt-6">
        <button
          className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
          onClick={() => navigate('art-learn')}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Workshop;