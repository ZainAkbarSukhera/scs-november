import React from "react";

// import BidderProfile from "../components/BidderProfile/profileBidder";
import Navbar from "../NavigationBar/Navbar";
import SideProfileWorkshop from "../WorkshopProfile/SideWorkshopProfile"
import HeaderProfileWorkshop from "../WorkshopProfile/HeaderWorkshopProfile";
import MainProfileWorkshop from "../WorkshopProfile/MainWorkshopProfile";
import FooterWorkshopProfile from "../WorkshopProfile/FooterWorkshopProfile";


import Nugamshi from "../../assets/nugamshi_portrait.png";
import im1 from "../../assets/abq_eoa_2.jpg";

const workshopDetails =  {
  workshopName: 'The Art of Contemporary Arabic Calligraphy',
  host: 'Nugamshi',
  mainImage:im1,
  pageViews: 25000,
  registeredParticipants: 12500,
  daysRemaining: 80,
  dates:' November 10-12, 2024 (Sunday-Tuesday)',
  duration:' 12 hours (4 hours/day for 3 days)',
  location:'Kayanspace, Jeddah',
  price:'2,500 SAR per participant',
  description: 'Dive into the world of contemporary Arabic calligraphy with celebrated calligrapher Nugamshi. This workshop offers a unique opportunity to explore traditional Arabic scripts and learn how to reinterpret them in modern and expressive forms. Nugamshi, known for his bold and innovative approach to calligraphy, will guide participants through the process of creating dynamic calligraphic artworks that blend tradition with contemporary art.',
  workshopHighlights: ['Introduction to traditional Arabic calligraphy scripts.', 
  'Techniques for modernizing and abstracting calligraphy forms.',
  'Hands-on practice in creating large-scale calligraphic works.',
  'Exploration of various tools and materials, including unconventional instruments.',
  'Personalised guidance and critique from Nugamshi'],
  whoShouldAttend:[
    'Artists and designers interested in calligraphy.',
    'Calligraphers seeking to explore modern and abstract approaches.',
    'Art enthusiasts who want to learn from a master of contemporary calligraphy.',
  ],
  materialsProvided: [
    'High-quality paper, ink, and brushes.',
    'Experimental tools for abstract calligraphy.',
    'Participants are encouraged to bring their own calligraphy tools if preferred.',
  ],
  learningOutcomes:[
    'Mastery of basic and advanced Arabic calligraphy techniques.',
    'Ability to create contemporary calligraphic artworks with a personal style.',
    'Understanding of how to integrate calligraphy into modern art practices.',
  ],
  certificate: 'Participants will receive a certificate of completion signed by Nugamshi.',
  testimonials:[{
    comment:"Nugamshi’s workshop was a transformative experience. His approach to calligraphy is both inspiring and liberating.",
    userName:'Aisha H. - Participant',
  },
  {
    comment: "Learning from Nugamshi has given me a new perspective on how calligraphy can be integrated into modern art.",
    userName:'Khalid A. - Artist',
  }
  ],
  artistDescription: "Nugamshi is a trailblazing Saudi artist whose work redefines the boundaries of Arabic calligraphy. Born and raised in Riyadh, Nugamshi has carved out a unique niche in the art world by merging traditional calligraphic techniques with modern, abstract expressions. His bold, expressive strokes and innovative use of unconventional tools have earned him widespread recognition, making him a leading figure in the contemporary art scene both in Saudi Arabia and internationally. Deeply rooted in the rich cultural heritage of Arabic calligraphy, Nugamshi's work is a powerful exploration of identity, language, and expression. He often challenges the norms of traditional calligraphy by using oversized brushes, broad gestures, and experimental materials, creating artworks that are as much about the process as they are about the finished piece. Nugamshi’s art has been showcased in numerous exhibitions and cultural events around the world, from the bustling streets of Riyadh to prestigious galleries in Europe and the Middle East.",
  image:Nugamshi,

};



const WorkshopProfile =()=>{

  return(

    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Header section */}
     

      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow ">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          <SideProfileWorkshop
                workshopDetails={workshopDetails}
            // bidderDetails={bidderDetails}
          />
        </aside>

        {/* Main section */}
        <main className="flex-grow p-4">
        <div className="mt-32 px-0 mb-4 border-b border-gray-400 ">
        <HeaderProfileWorkshop
            workshopDetails={workshopDetails}

          // bidderDetails={bidderDetails}
          // ProfileViews={CreatorDetails.ProfileViews} 
          // Appreciations={CreatorDetails.Appreciations} 
          // Followers={CreatorDetails.Followers} 
        />
      </div>

          <MainProfileWorkshop workshopDetails={workshopDetails}  />
          {/* {...bidderDetails} */}
          {/* <CreatorProfile /> */}

           <footer className=" mt-auto p-4">
               <FooterWorkshopProfile workshopDetails={workshopDetails} />
           </footer>

        </main>
      </div>

    </div>

  );

};

export default WorkshopProfile;