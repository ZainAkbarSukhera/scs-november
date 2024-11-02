import React from "react";

import ConnectCardMain from '../components/ArtConnectCard/ConnectCardMain'; 

import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import Navbar from '../components/NavigationBar/Navbar';
//// import ConnectFilterMenu from '../components/SideFilterMenu/ConnectFilterMenu';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { ConnectSideFilters } from "../static/data";

import AbdulazizPortrait from '../assets/abdulaziz_profile.png';
import Abdulaziz1 from '../assets/abdulaziz_1.png';
import Abdulaziz2 from '../assets/abdulaziz_2.png';
import Abdulaziz3 from '../assets/abdulaziz_3.png';

import AbqPortrait from '../assets/abqandeelprofile.jpg';
import abq1 from '../assets/abq3.png';
import abq2 from '../assets/abq4.png';
import abq3 from '../assets/abq5.png';

import SofanaPortrait from '../assets/sofana_profile.png';
import sofana1 from '../assets/sofana1.jpeg';
import sofana2 from '../assets/sofana7.png';
import sofana3 from '../assets/sofana6.png';

import HadelPortrait from '../assets/hadel_profile.png';
import hadel1 from '../assets/hadel1.png';
import hadel2 from '../assets/hadel2.png';
import hadel3 from '../assets/hadel3.png';

import FawazPortrait from '../assets/fawaz_profile.jpeg';
import fawaz1 from '../assets/fawaz1.jpg';
import fawaz2 from '../assets/fawaz2.jpg';
import fawaz3 from '../assets/fawaz3.jpg';

import BaderPortrait from '../assets/bader_profile.jpeg';
import bader1 from '../assets/bader1.jpg';
import bader2 from '../assets/bader2.jpeg';
import  bader3 from '../assets/bader3.jpeg';

import DalyaPortrait from '../assets/dalya_profile.jpeg';
import dalya1 from '../assets/dalya1.png';
import dalya2 from '../assets/dalya2.png';
import dalya3 from '../assets/dalya3.jpeg';

import KhaledPortrait from '../assets/khaled_profile.jpeg';
import khaled1 from '../assets/khaled1.jpg';
import khaled2 from '../assets/khaled2.jpg';
import khaled3 from '../assets/khaled3.jpg';

import ShathaPortrait from '../assets/shatha_profile.jpeg';
import shatha1 from '../assets/shatha1.png';
import shatha2 from '../assets/shatha2.jpeg';
import shatha3 from '../assets/shatha3.png';

import SalamPortrait from '../assets/salam_profile.jpeg';
import salam1 from '../assets/salam1.png';
import salam2 from '../assets/salam2.png';
import salam3 from '../assets/salam3.png';

import RudwanPortrait from '../assets/rudwan_profile.jpeg';
import rudwan1 from '../assets/rudwan1.png';
import rudwan2 from '../assets/rudwan2.png';
import rudwan3 from '../assets/rudwan3.png';

import YazeedPortrait from '../assets/yazeed_profile.jpeg';
import yazeed1 from '../assets/yazeed1.jpg';
import yazeed2 from '../assets/yazeed2.png';
import yazeed3 from '../assets/yazeed3.png';

import MajedPortrait from '../assets/majed_profile.jpeg';
import majed1 from '../assets/majed1.jpeg';
import majed2 from '../assets/majed2.png';
import majed3 from '../assets/majed3.jpg';

import OmeralabdaliPortrait from '../assets/omarabdali_profile.jpeg';
import omeralabdali1 from '../assets/omarabdali1.jpg';
import omeralabdali2 from '../assets/omarabdali2.jpg';
import omeralabdali3 from '../assets/omarabdali3.jpg';

import HattanPortrait from '../assets/hattan_profile.jpeg';
import hattan1 from '../assets/hattan1.jpg';
import hattan2 from '../assets/hattan2.jpg';
import hattan3 from '../assets/hattan3.png';

import AlkadhiPortrait from '../assets/omaralkadhi_profile.jpeg';
import alkadhi1 from '../assets/omaralkadhi1.jpg';
import alkadhi2 from '../assets/omaralkadhi2.jpg';
import alkadhi3 from '../assets/omaralkadhi3.jpg';

import AljunaidPortrait from '../assets/ahmadaljunaid_profile.jpeg';
import aljunaid1 from '../assets/ahmadaljunaid1.jpg';
import aljunaid2 from '../assets/ahmadaljunaid2.jpg';
import Aljunaid3 from '../assets/ahmadaljunaid3.jpeg';

import ZiadPortrait from '../assets/ziad_profile.jpeg';
import ziad1 from '../assets/ziad1.jpg';
import ziad2 from '../assets/ziad2.png';
import ziad3 from '../assets/ziad3.png';

import AlharbiPortrait from '../assets/alharbi_profile.jpeg';
import alharbi1 from '../assets/alharbi1.jpg';
import alharbi2 from '../assets/alharbi2.jpeg';
import alharbi3 from '../assets/alharbi3.jpeg';


const sortOptions = ['Recommended','Newest','Oldest'];




const ArtConnect = () => {

  const creatives = [
    {
      profileImage: AbdulazizPortrait,
      topImages: [Abdulaziz1,Abdulaziz2,Abdulaziz3],
      name: 'Abdulaziz Albassam',
      location: 'Khobar, Saudi Arabia',
      profession: 'Typographic Designer',
      initialLikes: 500000,
      initialViews: 750000,
    },
    {
      profileImage: AbqPortrait,
      topImages: [abq1,abq2,abq3],
      name: 'Abdullah Qandeel',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Contemporary Artist',
      initialLikes: 650000,
      initialViews: 700000,
    },
    {
      profileImage: SofanaPortrait,
      topImages: [sofana1,sofana2,sofana3],
      name: 'Sofana Dahlan',
      location: 'Makkah, Saudi Arabia',
      profession: 'Digital Artist',
      initialLikes: 450000,
      initialViews: 650000,
    },
    {
      profileImage: HadelPortrait,
      topImages: [hadel1,hadel2,hadel3],
      name: 'Hadel Al-Saleh',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Graphic Designer',
      initialLikes: 350000,
      initialViews: 500000,
    },
    {
      profileImage: FawazPortrait,
      topImages: [fawaz1,fawaz2,fawaz3],
      name: 'Fawaz Alotaibi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Abstract Painter',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: BaderPortrait,
      topImages: [bader1,bader2,bader3],
      name: 'Bader Halawani',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Portrait Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: DalyaPortrait,
      topImages: [dalya1,dalya2,dalya3],
      name: 'Dalya Katoah',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Printmaker',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: KhaledPortrait,
      topImages: [khaled1,khaled2,khaled3],
      name: 'Khaled Alharbi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Ceramic Sculptor',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: ShathaPortrait,
      topImages: [shatha1,shatha2,shatha3],
      name: 'Shatha Abuzinda',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Lettering Artist',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: SalamPortrait,
      topImages: [salam1,salam2,salam3],
      name: 'Salam Aljishi',
      location: 'Khobar, Saudi Arabia',
      profession: 'Illustrator',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: RudwanPortrait,
      topImages: [rudwan1,rudwan2,rudwan3],
      name: 'Rudwan Batterjee',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Motion Graphics Designer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: YazeedPortrait,
      topImages: [yazeed1,yazeed2,yazeed3],
      name: 'Yazeed Alyahya',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Product Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: MajedPortrait,
      topImages: [majed1,majed2,majed3],
      name: 'Majed  Alosailan',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Muralist',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: OmeralabdaliPortrait,
      topImages: [omeralabdali1,omeralabdali2,omeralabdali3],
      name: 'Omar Alabdali',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Landscape Photographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: HattanPortrait,
      topImages: [hattan1,hattan2,hattan3],
      name: 'Hattan Rayes',
      location: 'Jeddah, Saudi Arabia',
      profession: 'Lithographer',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: AlkadhiPortrait,
      topImages: [alkadhi1,alkadhi2,alkadhi3],
      name: 'Omar Alkadhi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Marble Sculptor',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage:AljunaidPortrait,
      topImages: [aljunaid1,aljunaid2,Aljunaid3],
      name: 'Ahmad Aljunaid',
      location: 'Dhahran, Saudi Arabia',
      profession: 'Calligrapher',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: ZiadPortrait,
      topImages: [ziad1,ziad2,ziad3],
      name: 'Ziad Alafaliq',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Visual Designert',
      initialLikes: 275000,
      initialViews: 475000,
    },
    {
      profileImage: AlharbiPortrait,
      topImages: [alharbi1,alharbi2,alharbi3],
      name: 'Mohammad Alharbi',
      location: 'Riyadh, Saudi Arabia',
      profession: 'Multimedia Specialist',
      initialLikes: 275000,
      initialViews: 475000,
    },
  ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar at the top */}
//       <Navbar />
  
//       {/* Main content area with FilterMenu and Cards */}
//       <div className="flex flex-grow">
//         {/* Sidebar filter menu on the left */}
//         <aside className="w-1/5 p-4">
//           <ConnectFilterMenu />
//         </aside>
  
//         {/* Main content area in the middle */}
//         <main className="flex-grow p-8">
//           {/* Search bar, toggle, and dropdown */}
//           <div className="mb-4 font-montserrat-light">
//             <SearchBar placeholderValue={"Search Creatives...."} />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <CardViewToggle />
//             <SortDropdown options={sortOptions} />
//           </div>
  
//           {/* Filtered Cards */}
//           <div className="mb-52"> {/* Added bottom margin to ensure spacing */}
//             <FilteredCards />
//           </div>
  
//           {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
//           <div className="grid grid-cols-4 gap-2 mt-8"> {/* Added margin-top for extra spacing */}
//           {creatives.map((creative, index) => (
//           <ConnectCardMain key={index} {...creative} />
//         ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };  

// export default ArtConnect;

// const ArtConnect = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-col  sm:flex-row md:flex-row ">
        {/* Sidebar filter menu on the left for larger screens, on top for mobile */}
        <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
          {/* <ConnectFilterMenu /> */}
          <SideFilters filter={ConnectSideFilters}/>
        </aside>
  
        {/* Main content area */}
        <main className="flex-grow p-4 md:p-8">
          {/* Search bar, toggle, and dropdown */}
          <div className=" mb-2 font-montserrat-light">
            <SearchBar placeholderValue={"Search Creatives...."} />
          </div>

          {/* Filter controls (toggle and dropdown) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
            <CardViewToggle />
            <SortDropdown options={sortOptions} />
          </div>
  
          {/* Filtered Cards */}
          <div className="flex flex-nowrap" > {/* Added margin for better spacing */}
            <FilteredCards />
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-0">
            {creatives.map((creative, index) => (
              <ConnectCardMain key={index} {...creative} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArtConnect;