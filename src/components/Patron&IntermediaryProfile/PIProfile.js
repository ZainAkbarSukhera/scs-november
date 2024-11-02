import React from "react";

import Navbar from "../NavigationBar/Navbar";
import HeaderPatronsProfile from "./HeaderPIProfile";
import SidePatronsProfile from "./SidePIProfile";
import ContentPatronsProfile from "./ContentPIProfile";
import FooterPatronsProfile from "./FooterPIProfile";

import image1 from '../../assets/pifLogo.png';
import image2 from '../../assets/ithralogo.png';
import image3 from '../../assets/miskLogo.png';
import image4 from '../../assets/heritagecomission.png';
import image5 from '../../assets/saudiartcouncil.png';
import miskImg from '../../assets/miskLogo.png';

const patronDetails= {
  profileViews: 50000,      
  Appreciations: 30000,    
  Followers: 17500,
  artworksBought: 45,
  artworksResold:3,
  artworksSupported:12,
  totalFinancialContribution:"320,000 SAR",
  patronName: "Misk Foundation",
  location: "Riyadh, Saudi Arabia",
  website:"https://misk.org.sa/en/",
  image: miskImg,
  userRole:"Patron",
  profilebio: "Established by HRH Prince Mohammed Bin Salman Bin Abdulaziz in 2011, the Misk Foundation is a non-profit organization dedicated to cultivating and encouraging learning and leadership in the youth for a better future in Saudi Arabia. To this end, Misk supports the youth across the country by providing various means to foster, empower, and establish a healthy environment for their creative talents to grow and flourish. The foundation invests in empowering the youth of Saudi Arabia through two main tracks: education and entrepreneurship, and culture and the creative arts, with science and technology as a supporting field. Misk pursues these goals by both designing programs and partnering with local and global organizations in diverse fields. Through an array of incubators, the foundation invests in the intellectual capital and capabilities of Saudi Arabia's youth. The Misk Foundation believes that its endeavors will support and enhance efforts to establish a knowledge-based society, which will, in turn, bring fulfillment and add value to Saudi Arabia.",

};

const patron = [
  {
    name: 'Public Investment Fund',
    image: image1, // replace with actual image path
  },
  {
    name: 'Misk Foundation',
    image: image3, // replace with actual image path
  },
  {
    name: 'Ithra (King Abdulaziz Center for World Culture)',
    image: image2, // replace with actual image path
  },
  {
    name: 'Heritage Commission (Ministry of Culture)',
    image: image4, // replace with actual image path
  },
  {
    name: 'Saudi Art Council',
    image: image5, // replace with actual image path
  },
 
];


const PatronsProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Header section */}
     

      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow ">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4  p-4 mt-32">
          <SidePatronsProfile
          patronDetails={patronDetails}
          />
        </aside>

        {/* Main section */}
        <main className="flex-grow p-4">
        <div className="mt-32 px-0">
        <HeaderPatronsProfile
        patronDetails={patronDetails}
        />
      </div>

          <ContentPatronsProfile patronDetails={patronDetails} />

          {/* Footer always at the bottom */}
          <footer className=" mt-auto p-4">
                <FooterPatronsProfile patronsDetail={patron} />
              </footer>
        </main>
      </div>

            
    </div>
  );
};

export default PatronsProfile;
