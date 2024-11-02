import react from 'react';

import abq1 from "../../assets/abq_1.jpg";
import abq2 from "../../assets/abq_2.jpg";
import abq3 from "../../assets/abq_3.jpg";
import abq4 from "../../assets/abq_pm_2.jpg";
import abq5 from "../../assets/abq_pm_4.png";
import abq6 from "../../assets/abq_pm_8.png";
import abq7 from "../../assets/abq_sm_4.png";
import abq8 from "../../assets/abq_pm_1.PNG";
import abq9 from "../../assets/abq_pm_3.PNG";
import abq10 from "../../assets/abq_pm_5.PNG";
import abq11 from "../../assets/abq_pm_6.PNG";
import abq12 from "../../assets/abq_pm_7.PNG";
import abq13 from "../../assets/abq_pm_8.png";
import abq14 from "../../assets/abq_sm_1.PNG";
import abq15 from "../../assets/abq_sm_2.PNG";
import abq16 from "../../assets/abq_sm_3.PNG";

import CreatorProfileCard from "./CreatorProfileCard";
import ProfileProjects from './ProfileProjects';
import ProfileFooter from './ProfileFooter';


const artworks = [
  {
    image: abq1,
    title: 'After Marylin',
    artist: 'Noura Al-Mutairi',
    initialLikes: 25700,
    initialViews: 50000,
  },
  {
    image: abq2,
    title: 'Landscapes (XI)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: abq3,
    title: 'Frog',
    artist: 'Hanan Al-Ahmadi',
    initialLikes: 17400,
    initialViews: 30000,
  },
  {
    image: abq4,
    title: 'Landscapes (VIII)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 15400,
    initialViews: 25000,
  },
];

const artists=[
  {image: abq1, name: 'Ahmed Ali'},
  {image: abq2, name:'Nugamshi'},
  {image: abq4, name:'Basma Felemban'},
  {image: abq5, name:'Hanan Al-Ahmadi'},
];

const projects= [
  {
    name: "Will-Battle (2021)",
    description: "LSA Exhibition USA",
    photos: [
      abq11,
      abq12,
      abq13,
      abq14,
      abq9,
    ],
  },
  {
    name: "Vogue Arabia",
    description: "Creativity Terminal (2019) ",
    photos: [abq2],
  },
  {
    name: "Edge of Arabia",
    description: "LSA Exhibition",
    photos: [
      abq5
    ],
  },

];

const ProfilePortfolio = () => {

  return(
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 mb-8">
        {artworks.map((art, index) => (
          <CreatorProfileCard key={index} {...art} />
        ))}
      </div>
      <div className="text-center mt-6">
          <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
            Discover More
          </button>
      </div>

      <div className=" mt-20">
      <ProfileProjects projects={projects} />
      </div>

      <div className="container w-full mx-auto mt-20 flex justify-center">
        <ProfileFooter artists={artists} />
      </div>
  </div>

  );

};

export default ProfilePortfolio;