// import React from "react";

// // import BidderProfile from "../components/BidderProfile/profileBidder";
// import Navbar from "../NavigationBar/Navbar";
// import SideProfileWorkshop from "./SideWorkshopProfile"
// import HeaderProfileWorkshop from "./HeaderWorkshopProfile";
// import MainProfileWorkshop from "./MainWorkshopProfile";
// import FooterWorkshopProfile from "./FooterWorkshopProfile";
// import Footer from "../Footer/footer";


// import Nugamshi from "../../assets/nugamshi_portrait.png";
// import im1 from "../../assets/abq_eoa_2.jpg";

// const workshopDetails =  {
//   workshopName: 'The Art of Contemporary Arabic Calligraphy',
//   host: 'Nugamshi',
//   mainImage:im1,
//   pageViews: 25000,
//   registeredParticipants: 12500,
//   daysRemaining: 80,
//   dates:' November 10-12, 2024 (Sunday-Tuesday)',
//   duration:' 12 hours (4 hours/day for 3 days)',
//   location:'Kayanspace, Jeddah',
//   price:'2,500 SAR per participant',
//   description: 'Dive into the world of contemporary Arabic calligraphy with celebrated calligrapher Nugamshi. This workshop offers a unique opportunity to explore traditional Arabic scripts and learn how to reinterpret them in modern and expressive forms. Nugamshi, known for his bold and innovative approach to calligraphy, will guide participants through the process of creating dynamic calligraphic artworks that blend tradition with contemporary art.',
//   workshopHighlights: ['Introduction to traditional Arabic calligraphy scripts.', 
//   'Techniques for modernizing and abstracting calligraphy forms.',
//   'Hands-on practice in creating large-scale calligraphic works.',
//   'Exploration of various tools and materials, including unconventional instruments.',
//   'Personalised guidance and critique from Nugamshi'],
//   whoShouldAttend:[
//     'Artists and designers interested in calligraphy.',
//     'Calligraphers seeking to explore modern and abstract approaches.',
//     'Art enthusiasts who want to learn from a master of contemporary calligraphy.',
//   ],
//   materialsProvided: [
//     'High-quality paper, ink, and brushes.',
//     'Experimental tools for abstract calligraphy.',
//     'Participants are encouraged to bring their own calligraphy tools if preferred.',
//   ],
//   learningOutcomes:[
//     'Mastery of basic and advanced Arabic calligraphy techniques.',
//     'Ability to create contemporary calligraphic artworks with a personal style.',
//     'Understanding of how to integrate calligraphy into modern art practices.',
//   ],
//   certificate: 'Participants will receive a certificate of completion signed by Nugamshi.',
//   testimonials:[{
//     comment:"Nugamshi’s workshop was a transformative experience. His approach to calligraphy is both inspiring and liberating.",
//     userName:'Aisha H. - Participant',
//   },
//   {
//     comment: "Learning from Nugamshi has given me a new perspective on how calligraphy can be integrated into modern art.",
//     userName:'Khalid A. - Artist',
//   }
//   ],
//   artistDescription: "Nugamshi is a trailblazing Saudi artist whose work redefines the boundaries of Arabic calligraphy. Born and raised in Riyadh, Nugamshi has carved out a unique niche in the art world by merging traditional calligraphic techniques with modern, abstract expressions. His bold, expressive strokes and innovative use of unconventional tools have earned him widespread recognition, making him a leading figure in the contemporary art scene both in Saudi Arabia and internationally. Deeply rooted in the rich cultural heritage of Arabic calligraphy, Nugamshi's work is a powerful exploration of identity, language, and expression. He often challenges the norms of traditional calligraphy by using oversized brushes, broad gestures, and experimental materials, creating artworks that are as much about the process as they are about the finished piece. Nugamshi’s art has been showcased in numerous exhibitions and cultural events around the world, from the bustling streets of Riyadh to prestigious galleries in Europe and the Middle East.",
//   image:Nugamshi,

// };



// const WorkshopProfile =()=>{

//   return(

//     <div className="min-h-screen flex flex-col">
//     {/* Navbar at the top */}
//     <Navbar />

//     {/* Header section */}
   

//     {/* Main content area with FilterMenu and Cards */}
//     <div className="flex flex-grow xs:flex-col lg:flex-row ">
//       {/* Sidebar filter menu on the left */}
//       <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
//         <SideProfileWorkshop
//               workshopDetails={workshopDetails}
//         />
//       </aside>

//       {/* Main section */}
//       <main className="flex-grow p-4">
//       <div className="lg:mt-32 px-0 mb-4 border-b border-gray-400 ">
//       <HeaderProfileWorkshop
//           workshopDetails={workshopDetails}
//       />
//     </div>

//         <MainProfileWorkshop workshopDetails={workshopDetails}  />
       
//          <footer className=" mt-auto p-4">
//              <FooterWorkshopProfile workshopDetails={workshopDetails} />
//          </footer>

//       </main>
//     </div>
//     <Footer />

//   </div>
//   );

// };

// export default WorkshopProfile;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get workshopId from the URL
import { getWorkshopByWorkshopId } from "../../api/workshop"; // Import the new API function

import Navbar from "../NavigationBar/Navbar";
import SideProfileWorkshop from "./SideWorkshopProfile";
import HeaderProfileWorkshop from "./HeaderWorkshopProfile";
import MainProfileWorkshop from "./MainWorkshopProfile";
import FooterWorkshopProfile from "./FooterWorkshopProfile";
import Footer from "../Footer/footer"; // Assuming this is your global footer

const WorkshopProfile = () => {
  const { workshopId } = useParams(); // Get the workshopId from the URL
  const [workshopDetails, setWorkshopDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshopData = async () => {
      console.log("Workshop ID received:", workshopId);
      if (!workshopId) {
        setError("Workshop ID is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await getWorkshopByWorkshopId(workshopId);

        if (response.success && response.workshop) {
          // ** IMPORTANT: Mapping fetched data to your component's expected props **
          // Your hardcoded `workshopDetails` object had fields not present in your schema.
          // We will map schema fields to what your components expect.
          const fetchedWorkshop = response.workshop;
          const formattedDetails = {
            _id: fetchedWorkshop._id,
            workshopName: fetchedWorkshop.title,
            host: fetchedWorkshop.instructor?.fullNameEnglish || 'Unknown Instructor',
            mainImage: fetchedWorkshop.image || '', // Using 'image' from your updated schema for the main image
            // pageViews: 0, // Placeholder: Not in schema, set default or fetch separately
            registeredParticipants: fetchedWorkshop.attendees?.length || 0,
            daysRemaining: calculateDaysRemaining(fetchedWorkshop.date),
            dates: formatWorkshopDates(fetchedWorkshop.date),
            duration: fetchedWorkshop.duration,
            location: fetchedWorkshop.location,
            price: fetchedWorkshop.priceRange || fetchedWorkshop.budget || 'N/A',
            description: fetchedWorkshop.description,
            workshopHighlights: fetchedWorkshop.workshopHighlights || [], // Mapped directly from new schema field
            whoShouldAttend: fetchedWorkshop.whoShouldAttend || [], // Mapped directly from new schema field
            materialsProvided: fetchedWorkshop.materialsProvided || [], // Mapped directly from new schema field
            learningOutcomes: fetchedWorkshop.learningOutcomes || [], // Mapped directly from new schema field
            certificate: fetchedWorkshop.certificateDetails || fetchedWorkshop.certifications || 'Certificate of Completion', // Prefer new `certificateDetails`, then existing `certifications`, then default
            testimonials: [], // Placeholder: Not in schema, add if needed
            dateDetails: fetchedWorkshop.dateDetails || [],
            durationDetails: fetchedWorkshop.durationDetails || [],
            locationDetails: fetchedWorkshop.locationDetails || [],
            priceDetails:fetchedWorkshop.priceDetails || [],
            pageViews: fetchedWorkshop.profileViews || 0,
            
            image: fetchedWorkshop.instructor?.profilePicture || '', // Instructor's profile image
            artistDescription: fetchedWorkshop.instructor?.biographyEnglish || 'No bio available.',
        };
          setWorkshopDetails(formattedDetails);

        } else {
          setError(response.message || "Workshop not found or failed to load.");
          setWorkshopDetails(null);
        }
      } catch (err) {
        console.error("Error fetching workshop data:", err);
        setError(err.message || "Failed to load workshop details due to an unexpected error.");
        setWorkshopDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshopData();
  }, [workshopId]); // Re-run effect if workshopId changes

  // Helper function to calculate days remaining
  const calculateDaysRemaining = (workshopDateString) => {
    if (!workshopDateString) return 'N/A';
    const workshopDate = new Date(workshopDateString);
    const now = new Date();
    const diffTime = workshopDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : '0';
  };

  // Helper function to format workshop dates
  const formatWorkshopDates = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch (e) {
      console.error("Error formatting date:", e);
      return 'Invalid Date';
    }
  };


  if (loading) {
    return <div className="text-center py-10 text-xl  mt-72">Loading workshop details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600 text-xl font-montserrat-medium">Error: {error}</div>;
  }

  if (!workshopDetails) {
    return <div className="text-center py-10 text-gray-700 text-xl font-montserrat-medium">Workshop not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xs:flex-col lg:flex-row ">
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          <SideProfileWorkshop workshopDetails={workshopDetails} />
        </aside>

        <main className="flex-grow p-4">
          <div className="lg:mt-32 px-0 mb-4 border-b border-gray-400 ">
            <HeaderProfileWorkshop workshopDetails={workshopDetails} />
          </div>

          <MainProfileWorkshop workshopDetails={workshopDetails} />

          <footer className="mt-auto p-4">
            <FooterWorkshopProfile workshopDetails={workshopDetails} />
          </footer>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default WorkshopProfile;