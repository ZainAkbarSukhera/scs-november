import react from 'react';
import ServiceCard from './serviceCard';
import ProfileProjects from './ProfileProjects';
import ProfileFooter from './ProfileFooter';

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

const services = [
  {
    title: "Graphic Design",
    service: "Custom Logo Design",
    deliveryTime: "5 days",
    cost: 150
  },
  {
    title: "Web Development",
    service: "E-commerce Website Development",
    deliveryTime: "14 days",
    cost: 1200
  },
  {
    title: "Content Writing",
    service: "SEO Blog Article Writing",
    deliveryTime: "3 days",
    cost: 75
  },
  {
    title: "Digital Marketing",
    service: "Social Media Marketing Package",
    deliveryTime: "30 days",
    cost: 500
  },
  {
    title: "Photography",
    service: "Product Photography Session",
    deliveryTime: "7 days",
    cost: 300
  },
  {
    title: "Consulting",
    service: "Business Strategy Consultation",
    deliveryTime: "2 days",
    cost: 200
  }
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

const ProfileServices = () =>  {

  return(
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
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

export default ProfileServices;