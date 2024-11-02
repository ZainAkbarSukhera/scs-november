import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import CardViewToggle from '../components/ToggleView/ToggleView';
import SortDropdown from '../components/SortDropdown/SortDropdown';
import FilteredCards from '../components/DisciplineFilter/FilterCard';
import BidCardMain from '../components/ArtBidCard/BidCardMain';
//// import FilterMenu from '../components/SideFilterMenu/BidFilterMenu';
import Navbar from '../components/NavigationBar/Navbar';
import SideFilters from '../components/SideFilterMenu/SideFilters';
import { BidSideFilters } from '../static/data';

import image1 from '../assets/Aramco.png';
import image2 from '../assets/Neom.jpg';
import image3 from '../assets/Riyadh Expo 2030.png';
import image4 from '../assets/STC.jpg';
import image5 from '../assets/World Cup 2034.jpg';
import image6 from '../assets/alWaleedLogo.png';
import image7 from '../assets/redseagloballogo.JPG';
import image8 from '../assets/alulalogo.png';
import BidFooter from '../components/BidPageFooter/BidFooter';


const sortOptions = ['Recommended','Newest','Oldest'];


const ArtBid = () => {

  const navigate=useNavigate();
 
  const projects = [
    {
      image: image1,
      title: 'Calligraphy Initiative',
      hostedBy:'Saudi Aramco',
      deadline: 'November 15, 2024',
      eligibility: 'Open to Saudi digital artists, filmmakers, and animators',
      prize:'SAR 75,000 cash prize and featured in exhibitions in Aramco’s cultural centers',
    },
    {
      image: image2,
      title: 'Visual Arts Residency',
      hostedBy:'Neom',
      deadline: 'December 15, 2024',
      eligibility: 'Open to Saudi and international artists aged 18 and above with a strong portfolio in visual arts',
      prize:'SAR 100,000 grant for project development and exhibition of completed works at a prominent venue in NEOM',
    },
    {
      image: image3,
      title: 'Future Forward',
      hostedBy:'Expo 2030',
      deadline: 'January 15, 2025',
      eligibility: 'Open to Saudi and international artists across all levels',
      prize:'Opportunity to exhibit at Expo 2030 in Riyadh and featured in the official Expo 2030 art catalog',
    },
    {
      image: image4,
      title: 'Digital Art Innovation Challenge',
      hostedBy: 'Saudi Telecom (STC)',
      deadline: 'February 25, 2025',
      eligibility: 'Open to digital artists globally, with a focus on technological themes',
      prize:'SAR 100,000 cash prize and featured in a digital exhibition hosted by STC',
    },
    {image: image5,
      title: 'Calligraphy & Heritage Initiative',
      hostedBy:'Saudi Arabian Football Federation (SAFF)',
      deadline: 'March 1 ,2025',
      eligibility: 'Open to artists, designers, and creatives worldwide with a passion for sports and art',
      prize:'SAR 100,000 commission for selected projects and artworks will be displayed in FIFA 2034 venues across Saudi Arabia',
    },
    {
      image: image6,
      title: 'Sculptural Art Program',
      hostedBy:'Alwaleed Philanthrophies',
      deadline: 'April 30, 2025',
      eligibility: 'Open to professional sculptors with experience in public art',
      prize:'SAR 200,000 commission, installation in a prominent public space and media coverage and inclusion in a national art tour',
    },
    {
      image: image7,
      title: 'Photography Competition',
      hostedBy:'Red Sea Global',
      deadline: 'June 19, 2025',
      eligibility: 'Open to photographers worldwide',
      prize:'SAR 50,000 cash prize, featured in a traveling exhibition and publication in a Red Sea Global photography book',
    },
    {
      image: image8,
      title: 'Mixed Media Exploration in Al Ula',
      hostedBy:'Royal Commission of Al Ula',
      deadline: 'November 17, 2025',
      eligibility: 'Open to digital artists globally, with a focus on technological themes',
      prize:'SAR 60,000 grant for materials and production, the artwork will be exhibited in AlUla’s Cultural Center and inclusion in a documentary feature',
    },
   
  ];
  
  const handleCardClick=()=>{
    navigate('/bidderprofile');
  }

  return (
    <div className="min-h-screen flex flex-col" >
      {/* Navbar at the top */}
      <Navbar />
  
      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-col  sm:flex-row md:flex-row space-y-4"  >
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:mt-16 sm:w-auto md:w-1/5 lg:mt-24 p-4">
          <SideFilters filter={BidSideFilters} />
        </aside>
  
        {/* Main content area in the middle */}
        <main className="flex-grow p-4">
          {/* Search bar, toggle, and dropdown */}
          <div className="mb-4 font-montserrat-light">
            <SearchBar placeholderValue={"Search Projects...."}/>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <CardViewToggle />
            <SortDropdown options={sortOptions} />
          </div>
  
          {/* Filtered Cards */}
          <div > {/* Added bottom margin to ensure spacing */}
            <FilteredCards />
          </div>
  
          {/* Cards Section (BidCardMain components start here, below FilteredCards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> {/* Added margin-top for extra spacing */}
            {projects.map((project, index) => (
              <BidCardMain key={index} 
              project={project}
               />
            ))}
          </div>
          <div>
            {/* Footer always at the bottom */}
            <footer className="bg-gray-200 mt-auto">
              <BidFooter />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};  

export default ArtBid;
