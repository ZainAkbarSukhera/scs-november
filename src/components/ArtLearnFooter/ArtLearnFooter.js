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
    <div className="container mx-auto mt-20 p-4 bg-white"> {/* White background for container */}
      {/* Categories */}
      <div className="flex justify-around mb-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular border-b-4 ${
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
      <div className="border-t border-black grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {categories.map((category) => {
          const card = cardsData[category];

          return (
            <div
              key={category}
              className={`w-full mt-4 bg-white border border-black rounded-lg p-6 transition transform ${
                selectedCategory === category
                  ? "hover:scale-105 hover:shadow-2xl"
                  : "opacity-70"
              }`}
            >
              <h3 className="text-sm font-montserrat-regular mb-2 text-center">{card.title}</h3>
              <p className="text-xs text-gray-600 font-montserrat-light text-center mb-4">{card.instructor}</p>

              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="flex flex-row justify-center  mt-4 mb-6 text-xs font-montserrat-light">
                {Object.values(card.details).map((detail, index) => (
                  <p key={index} className="text-gray-500 px-8 font-montserrat-light">
                    {detail}
                  </p>
                ))}
              </div>

              <button
                className={`mt-4 w-full py-2 rounded-lg text-white ${card.buttonColor}`}
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
