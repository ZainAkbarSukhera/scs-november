import React from "react";

import BidderProfile from "../components/BidderProfile/profileBidder";
import Navbar from "../components/NavigationBar/Navbar";
import SideProfileBidder from "../components/BidderProfile/SideProfileBidder";
import HeaderBidderProfile from "../components/BidderProfile/headerBidderProfile";
import BidProfileFooter from "../components/BidderProfile/BidProfileFooter";

import image1 from "../assets/Aramco.png";

const bidderDetails = {
  initiativeName: 'Calligraphy Initiative',
  host: 'Saudi Aramco',
  pageViews: 25000,
  bidsSubmitted: 50,
  daysRemaining: 79,
  imageUrl: image1,
  keyDates: [
    { label: 'Bid Submission Deadline', value: 'November 15, 2024' },
    { label: 'Selected Artists Announcement', value: 'January 1, 2025' },
    { label: 'Project Completion Deadline', value: 'March 1, 2025' }
  ],
  eligibilityCriteria: [
    'Open to Saudi nationals and international calligraphers with expertise in Arabic script.',
    'Artists of all experience levels are encouraged to apply, with a demonstrated portfolio in Arabic calligraphy.',
    'Collaborative submissions are allowed, but the lead artist must be clearly identified.'
  ],
  overview: `The Calligraphy Initiative by Saudi Aramco is a prestigious project aimed at preserving and celebrating the rich tradition of 
Arabic calligraphy, a fundamental aspect of Saudi Arabia’s cultural heritage. This initiative invites talented calligraphers 
from across the Kingdom and beyond to participate in a unique opportunity to create works that merge the timeless 
beauty of traditional Arabic script with modern artistic interpretations.
Through this initiative, Saudi Aramco seeks to commission a series of calligraphic artworks that reflect the Kingdom’s 
heritage, values, and the evolving nature of Arabic calligraphy in the contemporary art world. These artworks will be 
displayed in Aramco’s cultural centers, public spaces, and corporate offices, serving as a testament to the enduring 
significance of calligraphy in Saudi Arabia’s cultural identity.`,
  goals: [
    'To preserve and promote Arabic calligraphy as a key element of Saudi Arabia’s cultural heritage.',
    'To foster creativity and innovation in the field of calligraphy by encouraging modern interpretations of traditional scripts.',
    'To provide a platform for emerging and established calligraphers to showcase their work.',
    'To integrate calligraphy into contemporary public and corporate spaces, enhancing their cultural and aesthetic value',
  ],
  bidRequirements: [
        'Submit a portfolio containing 3-5 examples of your recent calligraphy work. The portfolio should demonstrate your technical skills, creativity, and familiarity with traditional Arabic scripts. (Accepted formats: PDF, JPEG - minimum resolution of 300 dpi).',
    'A detailed project proposal (up to 500 words) outlining your concept for the calligraphic artwork. The proposal should describe how your work will reflect Saudi Arabia’s cultural heritage and how it can be integrated into modern contexts (Include sketches or digital renderings of the proposed work.',
    'A proposed budget for the creation of the artwork, including materials, time, and any additional resources required.',
    'A breakdown of costs, including artist fees, materials, and any other expenses.',
    'A proposed timeline for the creation and completion of the artwork, ensuring alignment with the project’s overall schedule.',
    'A short artist statement (200 words) explaining your artistic philosophy and your connection to Arabic calligraphy.',
    'Provide at least two professional references who can speak to your experience and skills in calligraphy.',
  ],
  selectionCriteria: [
    'Artistic merit and originality of the proposal.',
    'Technical proficiency in Arabic calligraphy.',
    'Alignment with the cultural and thematic goals of the initiative.',
    'Feasibility of the proposed budget and timeline',
  ],
  prizesAndCompensation: [
    'SAR 75,000 Cash Prize: Awarded to the selected artists as a commission fee for the creation of the artwork.',
    'Exhibition Opportunity: The completed works will be prominently displayed in Aramco’s cultural centers, public spaces, and corporate offices',
    'Publication and Media Coverage: Selected artworks will be featured in a special publication celebrating Saudi calligraphy, with media coverage provided through Aramco’s channels and partners',
  ]
};


const BiddersProfileComponent =()=>{

  return(

    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Header section */}
     

      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow ">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          <SideProfileBidder 
            bidderDetails={bidderDetails}
          />
        </aside>

        {/* Main section */}
        <main className="flex-grow p-4">
        <div className="mt-32 px-0 mb-4 border-b border-gray-400 ">
        <HeaderBidderProfile

          bidderDetails={bidderDetails}
          //// ProfileViews={CreatorDetails.ProfileViews} 
          // Appreciations={CreatorDetails.Appreciations} 
          // Followers={CreatorDetails.Followers} 
        />
      </div>

          <BidderProfile {...bidderDetails} />
          {/* <CreatorProfile /> */}

           <footer className=" mt-auto p-4">
               <BidProfileFooter />
           </footer>

        </main>
      </div>

     


      {/* Footer always at the bottom */}
      {/* <footer className="bg-gray-200 mt-auto p-4"> */}
        {/* Footer content (e.g., <BidProfileFooter />) */}
      {/* </footer> */}
    </div>



    // <div className="min-h-screen flex flex-col">
    //   {/* Navbar at the top */}
    //   <Navbar /> 
      
    //   <div className="mt-36 mr-1">
    //   <HeaderBidderProfile initiativeName={bidderDetails.initiativeName} host={bidderDetails.host} pageViews={bidderDetails.pageViews}bidsSubmitted={bidderDetails.bidsSubmitted} daysRemaining={bidderDetails.daysRemaining} />
    //   </div>
  
    //   {/* Main content area with FilterMenu and Cards */}
    //   <div className="flex flex-grow mr-4">
        
    //     {/* Sidebar filter menu on the left */}
    //     <aside className="w-1/5 p-4 mt-0">
    //       <SideProfileBidder 
    //         imageUrl={bidderDetails.imageUrl}
    //         initiativeName={bidderDetails.initiativeName}
    //         keyDates={bidderDetails.keyDates}
    //         eligibilityCriteria={bidderDetails.eligibilityCriteria}  
    //       />
    //     </aside>
    //     <main className="flex-grow p-4">
    //       <BidderProfile {...bidderDetails} />

    //       {/* Footer always at the bottom */}
    //       <footer className="bg-gray-200 mt-auto">
    //           <BidProfileFooter />
    //         </footer>

    //     </main>
    //   </div>
    // </div>


  );

};

export default BiddersProfileComponent;