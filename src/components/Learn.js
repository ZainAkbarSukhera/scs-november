import React from "react";
import { useNavigate } from "react-router-dom";
import LearnCard from './ArtLearnCard/LearnCardLanding'; 
import drawingIcon from '../assets/drawing_icon.png';
import calligraphyIcon from '../assets/calligraphy_icon.png';
import paintingIcon from '../assets/painting_icon.png';
import photographyIcon from '../assets/photography_icon.png';
import printMakingIcon from '../assets/printMaking_icon.png';
import sculptureIcon from '../assets/sculpture_icon.png';

const Workshop = () =>  {
  const navigate=useNavigate();
  const workshops = [
    {
      title: "Digital Illustration",
      date: "September 20, 2024",
      location: "Online / Remote",
      instructor: "Omar Al-Harbi, Digital Artist",
      duration: "20 hours",
      tag: "Drawing & Illustration",
      tagColor: "bg-pewter-blue",
      icon: drawingIcon,
    },
    {
      title: "Arabic Calligraphy and Modern Art",
      date: "October 5, 2024",
      location: "Online / Remote",
      instructor: "Yousef Al-Qahtani, Calligrapher",
      duration: "12 hours",
      tag: "Calligraphy",
      tagColor: "bg-yankees-blue",
      icon: calligraphyIcon,
    },
    {
      title: "Photography in Urban Landscapes",
      date: "November 1, 2024",
      location: "Online / Remote",
      instructor: "Laila Al-Saadi, Photographer",
      duration: "10 hours",
      tag: "Photography",
      tagColor: "bg-madder-lake",
      icon: photographyIcon,
    },
    {
      title: "From Concept to Creation",
      date: "November 20, 2024",
      location: "Online / Remote",
      instructor: "Majid Al-Turki, Sculptor",
      duration: "6 hours",
      tag: "Sculpture",
      tagColor: "bg-royal-orange",
      icon: sculptureIcon,
    },
    {
      title: "Exploring Techniques and Creativity",
      date: "December 15, 2024",
      location: "Online / Remote",
      instructor: "Layla Al-Otaibi, Printmaker",
      duration: "15 hours",
      tag: "Printmaking",
      tagColor: "bg-deep-peach",
      icon: printMakingIcon,
    },
    {
      title: "Advanced Painting Techniques",
      date: "March 20, 2025",
      location: "Online / Remote",
      instructor: "Huda Al-Rashid, Fine Artist",
      duration: "8 hours",
      tag: "Painting",
      tagColor: "bg-palatinate-purple",
      icon: paintingIcon,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yankees-blue mb-10 font-montserrat-medium">
            Art-Learn
          </h2>
          <button className="px-24 py-2 text-white bg-fire-opal rounded hover:bg-orange-400 font-montserrat-light">
            Attend a Workshop
          </button>
        </div>

        <p className="text-base md:text-lg lg:text-xl font-bold text-yankees-blue mb-2 font-montserrat-regular">
          Unlock Your Creative Potential
        </p>
        <p className="text-base text-justify md:text-base lg:text-lg text-yankees-blue mt-2 mb-0 font-montserrat-light">
        At SCS, we believe in the power of continuous learning and skill development. Our workshops are designed to help creatives at all
        levels—whether you are just starting out or looking to refine your craft.
        </p>
      </div>

      <div className="workshop-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workshops.map((workshop, index) => (
          <LearnCard key={index} {...workshop} />
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
        onClick={()=>navigate('art-learn')}>
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Workshop;
