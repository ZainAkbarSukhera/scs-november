import React, { useState } from "react";

import TopSale from "./TopSale";
import TopArtist from "./TopArtist";
import TopNewcomer from "./TopNewcomer";
import MostAppreciated from "./MostAppreciated";
import MostViewed from "./MostViewed";

// Importing images correctly
import p1 from "../../assets/abq_sm_1.PNG";
import p2 from "../../assets/shaker1.jpeg";
import p3 from "../../assets/khalidzahid1.png";
import p4 from "../../assets/basmah1.jpg";
import p5 from "../../assets/abq_sm_4.png";

// Categories and data for the cards
const categories = [
  "TOP SALE",
  "TOP ARTIST",
  "TOP NEWCOMER",
  "MOST APPRECIATED",
  "MOST VIEWED",
];

const cardsData = {
  "TOP SALE": {
    title: "Kingdom of Love (2012)",
    instructor: "Abdullah Qandeel",
    imgSrc: p1,
    details: {
      Buyer: "Buyer: Sofana Dahlan",
      Price: "Price: SAR 150,000",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "TOP ARTIST": {
    title: "Shaker Kashgari",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p2,
    details: {
      sales: "Total Sales last 12 months: SAR 75,000",
      comparison: "VS Previous Year: + 99%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "TOP NEWCOMER": {
    title: "Khalid Zahid",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p3,
    details: {
      sales: "Total Sales last 12 months: SAR 50,500",
      comparison: "VS Previous Year: + 95%",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "MOST APPRECIATED": {
    title: "Basmah Felemban",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p4,
    details: {
      likes: "No. of Likes: 790,000",
      artwork: "Most Liked Artwork: Sidana",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
  "MOST VIEWED": {
    title: "Abdullah Qandeel",
    instructor: "Jeddah, Saudi Arabia",
    imgSrc: p5,
    details: {
      attendees: "No. of Views: 360,000",
      locations: "Most Viewed Artwork: The Race",
    },
    buttonText: "Follow",
    buttonColor: "bg-red-500",
  },
};

// const CategoryMarket = () => {
//   const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

//   return (
//     <div className="container mx-auto mt-20 p-2 bg-white">
//       {/* Categories */}
//       <div className=" border-b  border-gray-400 flex justify-between  mb-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`py-2 px-6 font-montserrat-regular ml-10  border-b-4 rounded-lg ${
//               selectedCategory === category
//                 ? "border-yankees-blue text-white bg-yankees-blue border-r-2"
//                 : "border-transparent text-yankees-blue"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mr-2">
//         {categories.map((category) => {
//           const card = cardsData[category];

//           return (
//             <div
//               key={category}
//               className={`w-full mt-2  border border-yankees-blue rounded-lg p-4 transition transform ${
//                 selectedCategory === category
//                   ? "hover:scale-105 hover:shadow-2xl"
//                   : "opacity-70"
//               }`}
//             >
//               <h3 className="text-sm font-montserrat-regular text-yankees-blue mt-4 mb-2 text-center">{card.title}</h3>
//               <p className="text-xs text-yankees-blue font-montserrat-light text-center mb-4">{card.instructor}</p>

//               <div className="relative w-full mb-4">
//               <img
//                 src={card.imgSrc}
//                 alt={card.title}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//               />

//               <div className=" flex flex-row justify-around items-start mb-6  text-xs space-x-8 font-montserrat-light">
//                 {Object.values(card.details).map((detail, index) => (
//                   <p key={index} className="text-yankees-blue ">
//                     {detail}
//                   </p>
//                 ))}
//               </div>
//               </div>

//               <div className="mt-auto">
//               <button
//                 className={"mt-auto w-full py-2 rounded-lg font-montserrat-light text-white bg-madder-lake"}>
//                 Follow
//               </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CategoryMarket;

// const CategoryMarket = () => {
//   const [selectedCategory, setSelectedCategory] = useState("TOP SALE");

//   return (

// <div className="container mx-auto mt-20 p-2 bg-white">
{
  /* Categories */
}
{
  /* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 "> */
}
{
  /* <div className="border-b border-gray-400"> */
}
{
  /* {categories.map((category, index) => (
      <div key={category} className="flex flex-col items-center "> */
}
{
  /* Category Button */
}
{
  /* <button
          className={`py-2 px-6 font-montserrat-regular border-b-4 rounded-lg mr-2 ${
            selectedCategory === category
              ? "border-yankees-blue text-white bg-yankees-blue"
              : "border-transparent text-yankees-blue"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
    {/* </div> */
}

{
  /* Card Component */
}
//   <div className="mt-4 w-full">
//     {index === 0 && <TopSale />}
//     {index === 1 && <TopArtist />}
//     {index === 2 && <TopNewcomer />}
//     {index === 3 && <MostAppreciated />}
//     {index === 4 && <MostViewed />}
//   </div>
// </div>
//   ))}
// </div>
// </div> */

//   <div className="container mx-auto mt-20 p-2 space-x-1 bg-white">
//     {/* Categories */}
//     <div className="flex justify-between mb-6 mr-2 border-b border-gray-400">
//       {categories.map((category) => (
//         <button
//           key={category}
//           className={`py-2 px-6 font-montserrat-regular ml-12 border-b-4 rounded-lg ${
//             selectedCategory === category
//               ? "border-yankees-blue text-white bg-yankees-blue"
//               : "border-transparent text-yankees-blue"
//           }`}
//           onClick={() => setSelectedCategory(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>

//       <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mx-auto" >
//         <TopSale />
//         <TopArtist />
//         <TopNewcomer />
//         <MostAppreciated />
//         <MostViewed />
//       </div>

// </div>
//   );
// };
// export default CategoryMarket;

const CategoryMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState("TOP SALE");

  return (
    <div className="container mx-auto mt-20 p-2 mb-28 bg-white xs:p-4">
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {categories.map((category, index) => (
          <div key={category} className="flex flex-col items-center  ">
            {/* Category Button */}
            <button
              className={`py-2 px-6 font-montserrat-regular border-b-4 rounded-lg mr-2 text-nowrap  ${
                selectedCategory === category
                  ? "border-yankees-blue text-white bg-yankees-blue"
                  : "border-transparent text-yankees-blue"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

            {/* Card Component */}
            <div className="mt-4 flex flex-col justify-between">
              {/* Render the appropriate card based on the index */}
              {index === 0 && (
                <div
                  className={`flex-grow transition-transform duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "hover:scale-105 hover:shadow-2xl"
                      : "opacity-70"
                  }`}
                >
                  <TopSale />
                </div>
              )}

              {index === 1 && (
                <div
                  className={`flex-grow transition-transform duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "hover:scale-105 hover:shadow-2xl"
                      : "opacity-70"
                  }`}
                >
                  <TopArtist />
                </div>
              )}

              {index === 2 && (
                <div
                  className={`flex-grow transition-transform duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "hover:scale-105 hover:shadow-2xl"
                      : "opacity-70"
                  }`}
                >
                  <TopNewcomer />
                </div>
              )}

              {index === 3 && (
                <div
                  className={`flex-grow transition-transform duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "hover:scale-105 hover:shadow-2xl"
                      : "opacity-70"
                  }`}
                >
                  <MostAppreciated />
                </div>
              )}

              {index === 4 && (
                <div
                  className={`flex-grow transition-transform duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "hover:scale-105 hover:shadow-2xl"
                      : "opacity-70"
                  }`}
                >
                  <MostViewed />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMarket;
