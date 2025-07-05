// import React from "react";

// import BidderProfile from "../components/BidderProfile/profileBidder";
// import Navbar from "../components/NavigationBar/Navbar";
// import SideProfileBidder from "../components/BidderProfile/SideProfileBidder";
// import HeaderBidderProfile from "../components/BidderProfile/headerBidderProfile";
// import BidProfileFooter from "../components/BidderProfile/BidProfileFooter";
// import Footer from "../components/Footer/footer";

// import image1 from "../assets/Aramco.png";

// const bidderDetails = {
//   initiativeName: 'Calligraphy Initiative',
//   host: 'Saudi Aramco',
//   pageViews: 25000,
//   bidsSubmitted: 50,
//   daysRemaining: 79,
//   imageUrl: image1,
//   keyDates: [
//     { label: 'Bid Submission Deadline', value: 'November 15, 2024' },
//     { label: 'Selected Artists Announcement', value: 'January 1, 2025' },
//     { label: 'Project Completion Deadline', value: 'March 1, 2025' }
//   ],
//   eligibilityCriteria: [
//     'Open to Saudi nationals and international calligraphers with expertise in Arabic script.',
//     'Artists of all experience levels are encouraged to apply, with a demonstrated portfolio in Arabic calligraphy.',
//     'Collaborative submissions are allowed, but the lead artist must be clearly identified.'
//   ],
//   overview: `The Calligraphy Initiative by Saudi Aramco is a prestigious project aimed at preserving and celebrating the rich tradition of 
// Arabic calligraphy, a fundamental aspect of Saudi Arabia’s cultural heritage. This initiative invites talented calligraphers 
// from across the Kingdom and beyond to participate in a unique opportunity to create works that merge the timeless 
// beauty of traditional Arabic script with modern artistic interpretations.
// Through this initiative, Saudi Aramco seeks to commission a series of calligraphic artworks that reflect the Kingdom’s 
// heritage, values, and the evolving nature of Arabic calligraphy in the contemporary art world. These artworks will be 
// displayed in Aramco’s cultural centers, public spaces, and corporate offices, serving as a testament to the enduring 
// significance of calligraphy in Saudi Arabia’s cultural identity.`,
//   goals: [
//     'To preserve and promote Arabic calligraphy as a key element of Saudi Arabia’s cultural heritage.',
//     'To foster creativity and innovation in the field of calligraphy by encouraging modern interpretations of traditional scripts.',
//     'To provide a platform for emerging and established calligraphers to showcase their work.',
//     'To integrate calligraphy into contemporary public and corporate spaces, enhancing their cultural and aesthetic value',
//   ],
//   bidRequirements: [
//         'Submit a portfolio containing 3-5 examples of your recent calligraphy work. The portfolio should demonstrate your technical skills, creativity, and familiarity with traditional Arabic scripts. (Accepted formats: PDF, JPEG - minimum resolution of 300 dpi).',
//     'A detailed project proposal (up to 500 words) outlining your concept for the calligraphic artwork. The proposal should describe how your work will reflect Saudi Arabia’s cultural heritage and how it can be integrated into modern contexts (Include sketches or digital renderings of the proposed work.',
//     'A proposed budget for the creation of the artwork, including materials, time, and any additional resources required.',
//     'A breakdown of costs, including artist fees, materials, and any other expenses.',
//     'A proposed timeline for the creation and completion of the artwork, ensuring alignment with the project’s overall schedule.',
//     'A short artist statement (200 words) explaining your artistic philosophy and your connection to Arabic calligraphy.',
//     'Provide at least two professional references who can speak to your experience and skills in calligraphy.',
//   ],
//   selectionCriteria: [
//     'Artistic merit and originality of the proposal.',
//     'Technical proficiency in Arabic calligraphy.',
//     'Alignment with the cultural and thematic goals of the initiative.',
//     'Feasibility of the proposed budget and timeline',
//   ],
//   prizesAndCompensation: [
//     'SAR 75,000 Cash Prize: Awarded to the selected artists as a commission fee for the creation of the artwork.',
//     'Exhibition Opportunity: The completed works will be prominently displayed in Aramco’s cultural centers, public spaces, and corporate offices',
//     'Publication and Media Coverage: Selected artworks will be featured in a special publication celebrating Saudi calligraphy, with media coverage provided through Aramco’s channels and partners',
//   ]
// };


// const BiddersProfileComponent =()=>{

//   return(

//      <div className="min-h-screen flex flex-col">
//        {/* Navbar at the top */}
//        <Navbar />
//        {/* Header section */}
     

//        {/* Main content area with FilterMenu and Cards */}
//        <div className="flex flex-grow xs:flex-col lg:flex-row ">
//          {/* Sidebar filter menu on the left */}
//          <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
//            <SideProfileBidder 
//              bidderDetails={bidderDetails}
//            />
//          </aside>

//          {/* Main section */}
//          <main className="flex-grow p-4">
//          <div className="lg:mt-32 px-0 mb-4 border-b border-gray-400 ">
//          <HeaderBidderProfile
//            bidderDetails={bidderDetails}
//          />
//        </div>

//            <BidderProfile {...bidderDetails} />

//             <div className=" mt-auto lg:p-4 ">
//                 <BidProfileFooter />
//             </div>

//          </main>
//        </div>

//        <Footer />

//     </div>


//     // <div className="min-h-screen flex flex-col">
//     //   {/* Navbar at the top */}
//     //   <Navbar /> 
      
//     //   <div className="mt-36 mr-1">
//     //   <HeaderBidderProfile initiativeName={bidderDetails.initiativeName} host={bidderDetails.host} pageViews={bidderDetails.pageViews}bidsSubmitted={bidderDetails.bidsSubmitted} daysRemaining={bidderDetails.daysRemaining} />
//     //   </div>
  
//     //   {/* Main content area with FilterMenu and Cards */}
//     //   <div className="flex flex-grow mr-4">
        
//     //     {/* Sidebar filter menu on the left */}
//     //     <aside className="w-1/5 p-4 mt-0">
//     //       <SideProfileBidder 
//     //         imageUrl={bidderDetails.imageUrl}
//     //         initiativeName={bidderDetails.initiativeName}
//     //         keyDates={bidderDetails.keyDates}
//     //         eligibilityCriteria={bidderDetails.eligibilityCriteria}  
//     //       />
//     //     </aside>
//     //     <main className="flex-grow p-4">
//     //       <BidderProfile {...bidderDetails} />

//     //       {/* Footer always at the bottom */}
//     //       <footer className="bg-gray-200 mt-auto">
//     //           <BidProfileFooter />
//     //         </footer>

//     //     </main>
//     //   </div>
//     // </div>


//   );

// };

// export default BiddersProfileComponent;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { getOpenCallById } from "../api/bid"; // Import the new API function

import BidderProfileMain from "../components/BidderProfile/profileBidder";
import Navbar from "../components/NavigationBar/Navbar";
import SideProfileBidder from "../components/BidderProfile/SideProfileBidder";
import HeaderBidderProfile from "../components/BidderProfile/headerBidderProfile";
import BidProfileFooter from "../components/BidderProfile/BidProfileFooter";
import Footer from "../components/Footer/footer";

const BiddersProfileComponent = () => {
  const { openCallId } = useParams(); // Get the openCallId from the URL
  const [bidderDetails, setBidderDetails] = useState(null); // This will hold the fetched open call data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpenCallData = async () => {
      console.log("Open Call ID received:", openCallId);
      if (!openCallId) {
        setError("Open Call ID is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await getOpenCallById(openCallId);
        
        if (response.success && response.openCall) {

          let daysRemainingCount = 0;
          if (response.openCall.deadlineDate) {
            const deadlineDateString = response.openCall.deadlineDate; // e.g., '2025-08-24'
            // Create a Date object for the deadline.
            // Parse as UTC to avoid local timezone issues, then set to end of day.
            // Or, directly use YYYY-MM-DD for local parsing, and set to end of day.
            // Given it's just a date string, it's safer to interpret it as the start of that day
            // and then consider the deadline as the end of that day.
            const deadline = new Date(deadlineDateString);
            
            // Set the deadline to the end of the day (23:59:59.999)
            // This ensures that '2025-08-24' means the deadline expires at the very end of Aug 24th.
            deadline.setHours(23, 59, 59, 999);

            const now = new Date();
            // No need to set 'now' to start of day if 'deadline' is set to end of day.
            // Calculate time difference in milliseconds
            const timeDifference = deadline.getTime() - now.getTime();

            // Calculate days remaining. Math.ceil is appropriate here because if
            // there's even a fraction of a day left, it counts as a full day.
            // For example, if 24 hours and 1 minute are left, it's 2 days.
            // If 23 hours and 59 minutes are left, it's 1 day.
            daysRemainingCount = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            
            // Ensure daysRemaining is not negative if deadline has passed
            daysRemainingCount = Math.max(0, daysRemainingCount);

            // Optional: If you want to strictly show '0 days remaining' once the deadline day has passed,
            // even if there are a few hours left from current time until 23:59:59 of deadline day,
            // you could use:
            // const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            // const deadlineStart = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());
            // daysRemaining = Math.max(0, (deadlineStart.getTime() - todayStart.getTime()) / (1000 * 60 * 60 * 24));
            // But the current `Math.ceil` with deadline end time is generally more user-friendly for "remaining time".
          }

          // Flatten the patronId object if it's populated for easier access
          const formattedDetails = {
            ...response.openCall,
            hostedBy: response.openCall.patronId?.companyName || response.openCall.hostedBy || 'Unknown Host',
            // Add other patron details if needed for display, e.g., patronId.companyLogo
            imageUrl: response.openCall.image || response.openCall.patronId?.companyLogo || 'https://via.placeholder.com/150?text=No+Image', // Use primary image or company logo
            
            // Transform keyDates from array of strings to array of objects {label, value} for SideProfileBidder
            keyDates: response.openCall.keyDates ,
            // ? response.openCall.keyDates.map((dateString, idx) => ({
            //     label: `Phase ${idx + 1}`, // Generic label
            //     value: dateString
            // })) : [],

            
            pageViews: response.openCall.profileViews, // Placeholder
            bidsSubmitted: 0, // Placeholder
            daysRemaining: daysRemainingCount, // Placeholder, calculate from deadlineDate if possible
          };
          setBidderDetails(formattedDetails);
        } else {
          setError(response.message || "Failed to load Open Call details.");
          setBidderDetails(null);
        }
      } catch (err) {
        console.error("Error fetching open call data:", err);
        setError(err.message || "Failed to load Open Call details due to a network error.");
        setBidderDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOpenCallData();
  }, [openCallId]); // Re-fetch if openCallId changes

  if (loading) {
    return <div className="text-center py-10 text-xl mt-72">Loading bid details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600 text-xl font-montserrat-medium">Error: {error}</div>;
  }

  if (!bidderDetails) {
    return <div className="text-center py-10 text-gray-700 text-xl font-montserrat-medium">Bid not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xs:flex-col lg:flex-row ">
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          {/* Pass fetched bidderDetails */}
          <SideProfileBidder bidderDetails={bidderDetails} />
        </aside>

        <main className="flex-grow p-4">
          <div className="lg:mt-32 px-0 mb-4 border-b border-gray-400 ">
            {/* Pass fetched bidderDetails */}
            <HeaderBidderProfile bidderDetails={bidderDetails} />
          </div>

          {/* Pass fetched bidderDetails (now formatted for direct use by its props) */}
          <BidderProfileMain {...bidderDetails} /> {/* Use BidderProfileMainContent */}

          <div className=" mt-auto lg:p-4 ">
            <BidProfileFooter /> {/* BidProfileFooter does not seem to take props from here */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BiddersProfileComponent;
