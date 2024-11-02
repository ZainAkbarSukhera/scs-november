import React, {useState} from "react";

import MarketCardPortfolio from "../ArtMarketCard/MarketCardPortfolio";
import ServiceCard from "./serviceCard";
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


import image1 from "../../assets/abq_va_1.png";
import image2 from "../../assets/abq_eoa_1.jpg";
import image3 from "../../assets/abq_eoa_2.jpg";

import a1 from "../../assets/nugamshi_portrait.png";
import a2 from "../../assets/halla_portrait.jpg";
import a3 from "../../assets/basma_portrait.png";
import a4 from "../../assets/shaker_portrait.png";
import CreatorProfileCard from "./CreatorProfileCard";
import ProfilePortfolio from "./ProfilePortfolio";
import ProfileServices from "./ProfileServices";
import ProfileAssets from "./ProfileAssets";


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
  {
    image: abq1
  },
  {
    image: abq2
  },
  {
    image: abq3
  },
  {
    image: abq4
  },
  {
    image: abq5
  },
  {
    image: abq6
  },
  {
    image: abq7
  },
  {
    image: abq8
  },
  {
    image: abq9
  },
  {
    image: abq10
  },
  {
    image: abq11
  },
  {
    image: abq12
  },
  {
    image: abq13
  },
  {
    image: abq14
  },
  {
    image: abq15
  },
  {
    image: abq16
  },
];

const projects = [
  {
    name: 'Vogue Arabia',
    title: 'Creativity Terminal 2019',
    image: image1, 
  },
  {
    name: 'Edge of Arabia',
    title: 'KSA/LSX Exhibition 2018',
    image: image2, // replace with actual image path
  },
  {
    name: 'Edge of Arabia',
    title: 'USA Tour 2014-2019',
    image: image3, // replace with actual image path
  },
];

  const artists = [
    {
      name: 'Nugamshi',
      image: a1, // replace with actual image path
    },
    {
      name: 'Halla bint Khalid',
      image: a2, // replace with actual image path
    },
    {
      name: 'Basma Felemban',
      image: a3, // replace with actual image path
    },
    {
      name: 'Shaker Kashgari',
      image: a4, // replace with actual image path
    },
  
];

const Service=[
  {
    title: 'Commisioned Art',
    service: 'Custom Paintings',
    deliveryTime: '4-8 weeks( depending on the size and complexity of the artwork)',
    cost: 'Starting from SAR 50,000 (price varies based on size and detail)', 
  },
];

// const CreativeProfile = () => {
//   const [selectedCategory, setSelectedCategory] = useState("TOP WORKSHOP");

// const Categories=["PORTFOLIO","SERVICES","ASSETS"];

//   return (
//     <div className="  border-t border-black container mx-auto p-4 bg-white"> {/* White background for container */}
//       {/* Categories */}
//       <div className="flex space-x-6 justify-start mb-2">
//         {Categories.map((category) => (
//           <button
//             key={category}
//             className={`py-2 px-4 font-montserrat-medium border-b-4 ${
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
//       <div className="grid grid-cols-4 space-x-4 mb-8">
//         {artworks.map((art, index) => (
//           <MarketCardPortfolio key={index} {...art} />
//         ))}
//       </div>

//       <div className="text-center mt-6">
//         <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//           Discover More
//         </button>
//       </div>

//       <div className="bg-white py-8">
//         {/* Heading */}
//         <div className="container mx-auto">
//           <h2 className="text-lg font-montserrat-regular text-yankees-blue uppercase mb-4">Projects</h2>
//           {/* Horizontal Line */}
//           <hr className="border-t border-black mb-6" />
//         </div>

//         {/* Project Cards */}
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map((patron, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={patron.image}
//                 alt={patron.name}
//                 className="w-full h-48 object-contain mx-auto mb-2" // Increased size
//               />
//               <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
//               <p className="text-yankees-blue text-xs font-montserrat-regular">{patron.title}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//             Discover More
//           </button>
//         </div>

//         <footer className="bg-white py-8">
//         {/* Heading */}
//         <div className="container mx-auto">
//           <h2 className="text-lg font-montserrat-regular text-yankees-blue uppercase mb-4">VIEW SIMILAR ARTISTS</h2>
//           {/* Horizontal Line */}
//           <hr className="border-t border-black mb-6" />
//         </div>

//         {/* Artists Cards */}
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {artists.map((patron, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={patron.image}
//                 alt={patron.name}
//                 className="w-full h-48 object-fill mx-auto mb-2" // Adjust size as needed
//               />
//               <p className="text-yankees-blue text-sm font-montserrat-medium">{patron.name}</p>
//             </div>
//           ))}
//         </div>
//       </footer>

//       </div>

    
//       </div>
//   );
// };

// export default CreativeProfile;
// const CreatorProfile = () => {
//   const [selectedProfileCategory, setSelectedProfileCategory] = useState("PORTFOLIO"); // Default to PORTFOLIO

//   const ProfileCategories = ["PORTFOLIO", "SERVICES", "ASSETS"];

//     // Function to render the appropriate market component based on selectedMarket
//     const renderProfileComponent = () => {
//       switch (selectedProfileCategory) {
//         case "PORTFOLIO":
//           return <ProfilePortfolio />;
//         case "SERVICES":
//           return <ProfileServices />;
//         case "ASSETS":
//           return <ProfileAssets />;
//         default:
//           return null; // Return null if no matching case
//       }
//     };

//     return(

//       <div>
//           <div className="border-b border-gray-400 flex space-x-6 justify-start mb-2">
//                 {ProfileCategories.map((category) => (
//                   <button
//                     key={category}
//                     className={`py-2 px-4 font-montserrat-regular text-sm border-b-4 rounded-lg ${
//                       selectedProfileCategory === category
//                         ? "border-yankees-blue text-white bg-yankees-blue border-r-2"
//                         : "border-transparent text-yankees-blue"
//                     }`}
//                     onClick={() => setSelectedProfileCategory(category)}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>

//               <div className="mt-4">
//                 {renderProfileComponent()}
//               </div>

//       </div>

      
    

//     );
  

  
// };

// export default CreatorProfile;


const CreatorProfile = () => {
  const [selectedProfileCategory, setSelectedProfileCategory] = useState("PORTFOLIO"); // Default to PORTFOLIO
  const profileCategories = ["PORTFOLIO", "SERVICES", "ASSETS"];

  // Function to render the appropriate component based on selectedProfileCategory
  const renderProfileComponent = () => {
    switch (selectedProfileCategory) {
      case "PORTFOLIO":
        return <ProfilePortfolio />;
      case "SERVICES":
        return <ProfileServices />;
      case "ASSETS":
        return <ProfileAssets />;
      default:
        return null;
    }
  };

  return (
    <div className="">
      {/* Category Tabs */}
      <div className="border-b border-gray-400 flex space-x-6 mb-4">
        {profileCategories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 font-montserrat-regular text-sm transition-colors duration-300 ${
              selectedProfileCategory === category
                ? "border-yankees-blue text-white bg-yankees-blue border-b-4 rounded-t-md"
                : "text-yankees-blue border-transparent"
            }`}
            onClick={() => setSelectedProfileCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Rendered Component */}
      <div className="mt-4">{renderProfileComponent()}</div>
    </div>
  );
};

export default CreatorProfile;