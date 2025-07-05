// import React, { useState } from "react";

// // Importing images correctly
// import sofana from "../../assets/sofana_learn.jpg";
// import abdulaziz from "../../assets/abdulaziz1.png";
// import abqandeel from "../../assets/abqandeel.jpeg";
// import shady from "../../assets/shady.jpeg";


// const categories = [
//   "TOP WORKSHOP",
//   "TOP INSTRUCTOR",
//   "NEW WORKSHOP",
//   "HIGHEST RATED",
//   "MOST ATTENDED",
// ];

// const cardsData = {
//   "TOP WORKSHOP": {
//     title: "Abstract Expressionism",
//     instructor: "Abdullah Qandeel",
//     imgSrc: abqandeel,
//     details: {
//       participants: "No. of Registered Participants: 250",
//       date: "Upcoming Workshop: January 15-17, 2025",
//     },
//     buttonText: "Register",
//     buttonColor: "bg-red-500",
//   },
//   "TOP INSTRUCTOR": {
//     title: "Sofana Dahlan",
//     instructor: "Conceptual Art",
//     imgSrc: sofana,
//     details: {
//       sales: "Total Sales last 12 months: SAR 50,000",
//       comparison: "VS Previous Year: + 99%",
//     },
//     buttonText: "Follow",
//     buttonColor: "bg-red-500",
//   },
//   "NEW WORKSHOP": {
//     title: "Mixed Media Collage",
//     instructor: "Shady Sirajuddin",
//     imgSrc: shady,
//     details: {
//       sales: "Total Sales last 12 months: SAR 30,000",
//       comparison: "VS Previous Year: + 95%",
//     },
//     buttonText: "Follow",
//     buttonColor: "bg-red-500",
//   },
//   "HIGHEST RATED": {
//     title: "Abdulaziz Albassam",
//     instructor: "Khobar, Saudi Arabia",
//     imgSrc: abdulaziz,
//     details: {
//       ratings: "Ratings: ★★★★★",
//       workshop: "Workshop: Typography Design",
//     },
//     buttonText: "Follow",
//     buttonColor: "bg-red-500",
//   },
//   "MOST ATTENDED": {
//     title: "Exploring Colour",
//     instructor: "Abdullah Qandeel",
//     imgSrc: abqandeel,
//     details: {
//       attendees: "No. of Attendees: 1000",
//       locations: "Riyadh, Jeddah & Khobar",
//     },
//     buttonText: "Follow",
//     buttonColor: "bg-red-500",
//   },
// };

// const CategoryComponent = () => {
//   const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

//   return (
//     <div className="container mx-auto mt-10 p-3 bg-white"> {/* Reduced top margin and padding for xs */}
//       {/* Categories */}
//       <div className="flex justify-between mb-2 xs:flex-wrap xs:space-y-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`py-2 px-4 font-montserrat-regular border-b-4 text-sm ${
//               selectedCategory === category
//                 ? "border-blue-900 text-blue-900"
//                 : "border-transparent text-gray-500"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
  
//       {/* Cards */}
//       <div className="border-t border-black grid grid-cols-1 xs:grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-5">
//         {categories.map((category) => {
//           const card = cardsData[category];
  
//           return (
//             <div
//               key={category}
//               className={`w-full mt-4 bg-white border border-black rounded-lg p-4 xs:p-3 transition transform ${
//                 selectedCategory === category
//                   ? "hover:scale-105 hover:shadow-2xl"
//                   : "opacity-80"
//               }`}
//             >
//               <h3 className="text-sm font-montserrat-regular mb-1 text-center xs:text-xs">
//                 {card.title}
//               </h3>
//               <p className="text-xs text-gray-600 font-montserrat-light text-center mb-2 xs:mb-1">
//                 {card.instructor}
//               </p>
  
//               <img
//                 src={card.imgSrc}
//                 alt={card.title}
//                 className="w-full h-40 object-cover rounded-lg mb-3 xs:h-32"
//               />
  
//               <div className="flex flex-col items-center mt-2 mb-4 text-xs font-montserrat-light xs:text-[0.75rem]">
//                 {Object.values(card.details).map((detail, index) => (
//                   <p key={index} className="text-gray-500 text-center font-montserrat-light mb-1 xs:mb-0">
//                     {detail}
//                   </p>
//                 ))}
//               </div>
  
//               <button
//                 className={`w-full py-2 rounded-lg text-white text-xs ${card.buttonColor} xs:py-1`}
//               >
//                 {card.buttonText}
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryComponent;

import React, { useState } from "react";

// Importing images correctly
import sofana from "../../assets/sofana_learn.jpg";
import abdulaziz from "../../assets/abdulaziz1.png";
import abqandeel from "../../assets/abqandeel.jpeg";
import shady from "../../assets/shady.jpeg";


const categories = [
  "TOP WORKSHOP",
  "TOP INSTRUCTOR",
  "NEW WORKSHOP",
  "HIGHEST RATED",
  "MOST ATTENDED",
];

const cardsData = {
  "TOP WORKSHOP": {
    title: "Abstract Expressionism",
    instructor: "Abdullah Qandeel",
    imgSrc: abqandeel,
    details: {
      participants: "No. of Registered Participants: 250",
      date: "Upcoming Workshop: January 15-17, 2025",
    },
    buttonText: "Register",
    buttonColor: "bg-red-500",
  },
  "TOP INSTRUCTOR": {
    title: "Sofana Dahlan",
    instructor: "Conceptual Art",
    imgSrc: sofana,
    details: {
      sales: "Total Sales last 12 months: SAR 50,000",
      comparison: "VS Previous Year: + 99%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "NEW WORKSHOP": {
    title: "Mixed Media Collage",
    instructor: "Shady Sirajuddin",
    imgSrc: shady,
    details: {
      sales: "Total Sales last 12 months: SAR 30,000",
      comparison: "VS Previous Year: + 95%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "HIGHEST RATED": {
    title: "Abdulaziz Albassam",
    instructor: "Khobar, Saudi Arabia",
    imgSrc: abdulaziz,
    details: {
      ratings: "Ratings: ★★★★★",
      workshop: "Workshop: Typography Design",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "MOST ATTENDED": {
    title: "Exploring Colour",
    instructor: "Abdullah Qandeel",
    imgSrc: abqandeel,
    details: {
      attendees: "No. of Attendees: 1000",
      locations: "Riyadh, Jeddah & Khobar",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
};

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

  return (
    <div className="container mx-auto mt-10 p-3 bg-white"> {/* Reduced top margin and padding for xs */}
      {/* Categories */}
      <div className="flex justify-between mb-2 xs:flex-wrap xs:space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular border-b-4 text-sm ${
              selectedCategory === category
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
  
      {/* Cards */}
      <div className="border-t border-black grid grid-cols-1 xs:grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => {
          const card = cardsData[category];
  
          return (
            <div
              key={category}
              className={`w-full mt-4 bg-white border border-black rounded-lg p-4 xs:p-3 transition transform ${
                selectedCategory === category
                  ? "hover:scale-105 hover:shadow-2xl"
                  : "opacity-80"
              }`}
            >
              <h3 className="text-sm font-montserrat-regular mb-1 text-center xs:text-xs">
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 font-montserrat-light text-center mb-2 xs:mb-1">
                {card.instructor}
              </p>
  
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-40 object-cover rounded-lg mb-3 xs:h-32"
              />
  
              <div className="flex flex-col items-center mt-2 mb-4 text-xs font-montserrat-light xs:text-[0.75rem]">
                {Object.values(card.details).map((detail, index) => (
                  <p key={index} className="text-gray-500 text-center font-montserrat-light mb-1 xs:mb-0">
                    {detail}
                  </p>
                ))}
              </div>
  
              <button
                className={`w-full py-2 rounded-lg text-white text-xs ${card.buttonColor} xs:py-1`}
              >
                {card.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryComponent;
