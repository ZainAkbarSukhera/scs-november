// import React from "react";

// import Navbar from "../NavigationBar/Navbar";
// import HeaderPatronsProfile from "./HeaderPIProfile";
// import SidePatronsProfile from "./SidePIProfile";
// import ContentPatronsProfile from "./ContentPIProfile";
// import FooterPatronsProfile from "./FooterPIProfile";
// import Footer from "../Footer/footer";

// import image1 from '../../assets/pifLogo.png';
// import image2 from '../../assets/ithralogo.png';
// import image3 from '../../assets/miskLogo.png';
// import image4 from '../../assets/heritagecomission.png';
// import image5 from '../../assets/saudiartcouncil.png';
// import miskImg from '../../assets/miskLogo.png';

// const patronDetails= {
//   profileViews: 5000,      
//   Appreciations: 30000,    
//   Followers: 17500,
//   artworksBought: 45,
//   artworksResold:3,
//   artworksSupported:12,
//   totalFinancialContribution:"320,000 SAR",
//   patronName: "Misk Foundation",
//   location: "Riyadh, Saudi Arabia",
//   website:"https://misk.org.sa/en/",
//   image: miskImg,
//   userRole:"Patron",
//   profilebio: "Established by HRH Prince Mohammed Bin Salman Bin Abdulaziz in 2011, the Misk Foundation is a non-profit organization dedicated to cultivating and encouraging learning and leadership in the youth for a better future in Saudi Arabia. To this end, Misk supports the youth across the country by providing various means to foster, empower, and establish a healthy environment for their creative talents to grow and flourish. The foundation invests in empowering the youth of Saudi Arabia through two main tracks: education and entrepreneurship, and culture and the creative arts, with science and technology as a supporting field. Misk pursues these goals by both designing programs and partnering with local and global organizations in diverse fields. Through an array of incubators, the foundation invests in the intellectual capital and capabilities of Saudi Arabia's youth. The Misk Foundation believes that its endeavors will support and enhance efforts to establish a knowledge-based society, which will, in turn, bring fulfillment and add value to Saudi Arabia.",

// };

// const patron = [
//   {
//     name: 'Public Investment Fund',
//     image: image1, // replace with actual image path
//   },
//   {
//     name: 'Misk Foundation',
//     image: image3, // replace with actual image path
//   },
//   {
//     name: 'Ithra (King Abdulaziz Center for World Culture)',
//     image: image2, // replace with actual image path
//   },
//   {
//     name: 'Heritage Commission (Ministry of Culture)',
//     image: image4, // replace with actual image path
//   },
//   {
//     name: 'Saudi Art Council',
//     image: image5, // replace with actual image path
//   },
 
// ];


// const PatronsProfile = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//     {/* Navbar at the top */}
//     <Navbar />
  
//     {/* Main content area with FilterMenu and Cards */}
//     <div className="flex flex-col lg:flex-row flex-grow xs:flex-col">
//       {/* Sidebar filter menu on the left */}
//       <aside className="w-full lg:w-1/4 p-4  mt-32">
//         <SidePatronsProfile patronDetails={patronDetails} />
//       </aside>
  
//       {/* Main section */}
//       <main className="w-full lg:w-3/4 p-4">
//         {/* Header Section */}
//         <div className="mt-8 lg:mt-32">
//           <HeaderPatronsProfile patronDetails={patronDetails} />
//         </div>
  
//         {/* Content Section */}
//         <div className="mt-6">
//           <ContentPatronsProfile patronDetails={patronDetails} />
//         </div>
  
//         {/* Footer Section */}
//         <footer className="mt-12">
//           <FooterPatronsProfile patronsDetail={patron} />
//         </footer>
//       </main>
//     </div>
  
//     {/* Main Footer */}
//     <Footer />
//   </div>
//   );
// };

// export default PatronsProfile;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // Import useParams to get ID
// import { getPatronById, getAllPatrons } from "../../api/patron"; // Import API functions
// import { getArtworksByPatronId } from "../../api/artwork";

// import Navbar from "../NavigationBar/Navbar";
// import HeaderPatronsProfile from "./HeaderPIProfile"; // Assuming PI stands for Patron/Intermediary
// import SidePatronsProfile from "./SidePIProfile";
// import ContentPatronsProfile from "./ContentPIProfile";
// import FooterPatronsProfile from "./FooterPIProfile";
// import Footer from "../Footer/footer";

// const PatronsProfile = () => {
//   const { patronId } = useParams(); // Get the patronId from the URL
//   const [patronDetails, setPatronDetails] = useState(null);
//   const [similarPatrons, setSimilarPatrons] = useState([]);
//   const [primaryMarketArtworks, setPrimaryMarketArtworks] = useState([]);
//   const [secondaryMarketArtworks, setSecondaryMarketArtworks] = useState([]);
//   const [nftArtworks, setNftArtworks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Initialize Intl.DisplayNames for country names
//   // This can be outside the component or memoized if performance is critical
//   const countryDisplayName = new Intl.DisplayNames(['en'], { type: 'region' });

//       // Helper function to format social media URLs based on platform
//   const getFormattedSocialUrl = (platform, link) => {
//     if (!link) return ''; // Return empty if no link
//     // Remove common prefixes if they exist (http://, https://, www.) for cleaner handling
//     let cleanedLink = link.replace(/^(https?:\/\/)?(www\.)?/i, '');

//     switch (platform) {
//       case 'instagram':
//         // Ensure it doesn't start with / if it's just a handle
//         { const instagramHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
//         return `https://www.instagram.com/${instagramHandle}`; }
//       case 'twitter': // X (Twitter)
//         { const twitterHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
//         return `https://twitter.com/${twitterHandle}`; } // Use twitter.com, it redirects to x.com
//       case 'linkedin':
//         // LinkedIn URLs are usually full, ensure https://
//         return cleanedLink.startsWith('linkedin.com') ? `https://${cleanedLink}` : `https://www.linkedin.com/in/${cleanedLink}`;
//       case 'behance':
//         return cleanedLink.startsWith('behance.net') ? `https://${cleanedLink}` : `https://www.behance.net/${cleanedLink}`;
//       case 'facebook':
//         return cleanedLink.startsWith('facebook.com') ? `https://${cleanedLink}` : `https://www.facebook.com/${cleanedLink}`;
//       default:
//         // For any other links, just ensure https://
//         return cleanedLink.startsWith('http') ? cleanedLink : `https://${cleanedLink}`;
//     }
//   };

//   // Helper function to safely add '@' prefix to a handle if it's not a URL
//   // and doesn't already start with '@'
//   const formatHandleForDisplay = (handleText) => {
//     if (!handleText) return '';
//     // Check if it's already a URL (basic check, don't add '@' to URLs)
//     if (handleText.startsWith('http://') || handleText.startsWith('https://')) {
//         return handleText;
//     }
//     // Add '@' if it's not already present
//     return handleText.startsWith('@') ? handleText : `@${handleText}`;
//   };

//   useEffect(() => {
//     const fetchPatronData = async () => {
//       console.log("Patron ID received:", patronId);
//       if (!patronId) {
//         setError("Patron ID is missing from the URL.");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);

//         // 1. Fetch details for the specific patron
//         const patronResponse = await getPatronById(patronId);

//         if (patronResponse.success && patronResponse.patron) {
//           const fetchedPatron = patronResponse.patron;
//           console.log("fetched patron: ", fetchedPatron);

//           // Get full country name using Intl.DisplayNames
//           const fullCountryName = fetchedPatron.location?.country
//             ? countryDisplayName.of(fetchedPatron.location.country.toUpperCase()) // Ensure country code is uppercase
//             : 'N/A';

//           // Map fetched data to the structure your components expect
//           const formattedDetails = {
//             _id: fetchedPatron._id,
//             profileViews: fetchedPatron.stats?.profileViews || 0,
//             Appreciations: fetchedPatron.stats?.appreciations || 0,
//             Followers: fetchedPatron.stats?.followers || 0,
//             artworksBought: fetchedPatron.stats?.artworksBought || '0',
//             artworksResold: fetchedPatron.stats?.artworksResold || '0',
//             artworksSupported: fetchedPatron.stats?.artworksSupported || '0',
//             totalFinancialContribution: fetchedPatron.stats?.financialContribution || '0 SAR',
//             patronName: fetchedPatron.organisationName?.english || 'Unknown Organization',
//             // Updated location to include full country name
//             location: `${fetchedPatron.location?.city || 'N/A'}, ${fullCountryName}`,
//             website: fetchedPatron.website || '', // Using socialMediaLinks.website as a fallback
//             image: fetchedPatron.profilePicture || '',
//             userRole: fetchedPatron.role || 'PATRON',
//             profilebio: fetchedPatron.aboutUs?.english || '',
//             // socialMediaLinks: fetchedPatron.socialMediaLinks || {},
//                 socialMediaLinks: {
//       // Use the new helper function to construct full, well-formed URLs
//       instagram: getFormattedSocialUrl('instagram', fetchedPatron.socialMediaLinks?.instagram),
//       behance: getFormattedSocialUrl('behance', fetchedPatron.socialMediaLinks?.behance),
//       twitter: getFormattedSocialUrl('twitter', fetchedPatron.socialMediaLinks?.twitter),
//       linkedin: getFormattedSocialUrl('linkedin', fetchedPatron.socialMediaLinks?.linkedin),
//       facebook: getFormattedSocialUrl('facebook', fetchedPatron.socialMediaLinks?.facebook),

//       // Apply formatHandleForDisplay to the display handles
//       instagramHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.instagram || 'instagram'),
//       twitterHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.twitter || 'twitter'),
//       linkedinHandle: fetchedPatron.socialMediaLinks?.linkedin || 'LinkedIn Profile', // LinkedIn doesn't typically use @handle
//       behanceHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.behance || 'behance'),
//       facebookHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.facebook || 'facebook'),
//     }
//           };
//           setPatronDetails(formattedDetails);

//           // 2. Fetch all patrons for the "View Similar Patrons" section
//           const allPatronsResponse = await getAllPatrons();

//           console.log("Patron response bhaiiya: ", allPatronsResponse);
//           if (allPatronsResponse && Array.isArray(allPatronsResponse.patrons)) {
//             console.log("Here i am!");
//             const filteredSimilarPatrons = allPatronsResponse.patrons
//               .filter(patron => patron._id !== patronId)
//               .slice(0, 5)
//               .map(patron => ({
//                 name: patron.organisationName?.english || 'Unknown Patron',
//                 image: patron.profilePicture || '',
//                 _id: patron._id
//               }));
//             setSimilarPatrons(filteredSimilarPatrons);
//           } else {
//             console.warn("Could not fetch similar patrons or invalid response:", allPatronsResponse);
//             setSimilarPatrons([]);
//           }

//         } else {
//           setError(patronResponse.message || "Patron profile not found or failed to load.");
//           setPatronDetails(null);
//           setSimilarPatrons([]);
//         }

//           // --- 2. Fetch all artworks for this patron ---
//           const artworksResponse = await getArtworksByPatronId(patronId);

//           if (artworksResponse.success && Array.isArray(artworksResponse.artworks)) {
//             // Filter artworks by displayOption
//             const primary = artworksResponse.artworks.filter(
//               (art) => art.displayOption === "Primary Market"
//             );
//             const secondary = artworksResponse.artworks.filter(
//               (art) => art.displayOption === "Secondary Market"
//             );
//             const nfts = artworksResponse.artworks.filter(
//               (art) => art.displayOption === "NFTs"
//             );

//             setPrimaryMarketArtworks(primary);
//             setSecondaryMarketArtworks(secondary);
//             setNftArtworks(nfts);
//           } else {
//             console.warn("No artworks found for this patron or invalid response format:", artworksResponse);
//             setPrimaryMarketArtworks([]);
//             setSecondaryMarketArtworks([]);
//             setNftArtworks([]);
//           }

//       } catch (err) {
//         console.error("Error fetching patron data:", err);
//         setError(err.message || "Failed to load patron profile due to an unexpected error.");
//         setPatronDetails(null);
//          setPrimaryMarketArtworks([]);
//           setSecondaryMarketArtworks([]);
//           setNftArtworks([]);
//         setSimilarPatrons([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatronData();
//   }, [patronId]); // Re-fetch if patronId in the URL changes

  

//   if (loading) {
//     return <div className="text-center py-10 text-xl font-montserrat-medium">Loading patron profile...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-10 text-red-600 text-xl font-montserrat-medium">Error: {error}</div>;
//   }

//   if (!patronDetails) {
//     return <div className="text-center py-10 text-gray-700 text-xl font-montserrat-medium">Patron profile not found.</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <div className="flex flex-col lg:flex-row flex-grow xs:flex-col">
//         <aside className="w-full lg:w-1/4 p-4 mt-32">
//           {/* Pass fetched patronDetails */}
//           <SidePatronsProfile patronDetails={patronDetails} />
//         </aside>

//         <main className="w-full lg:w-3/4 p-4">
//           <div className="mt-8 lg:mt-32">
//             {/* Pass fetched patronDetails */}
//             <HeaderPatronsProfile patronDetails={patronDetails} />
//           </div>

//           <div className="mt-6">
//             {/* Pass fetched patronDetails (though ContentPatronsProfile still uses hardcoded gallery data for now) */}
//             <ContentPatronsProfile  primaryMarketArtworks={primaryMarketArtworks}
//               secondaryMarketArtworks={secondaryMarketArtworks}
//               nftArtworks={nftArtworks} />
//           </div>

//           <footer className="mt-12">
//             {/* Pass the dynamically fetched similar patrons */}
//             <FooterPatronsProfile patronsDetail={similarPatrons} />
//           </footer>
//         </main>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default PatronsProfile;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get ID
import { getPatronById, getAllPatrons } from "../../api/patron"; // Import API functions
import { getArtworksByPatronId } from "../../api/artwork";

import Navbar from "../NavigationBar/Navbar";
import HeaderPatronsProfile from "./HeaderPIProfile"; // Assuming PI stands for Patron/Intermediary
import SidePatronsProfile from "./SidePIProfile";
import ContentPatronsProfile from "./ContentPIProfile";
import FooterPatronsProfile from "./FooterPIProfile";
import Footer from "../Footer/footer";

const PatronsProfile = () => {
  const { patronId } = useParams(); // Get the patronId from the URL
  const [patronDetails, setPatronDetails] = useState(null);
  const [similarPatrons, setSimilarPatrons] = useState([]);
  const [primaryMarketArtworks, setPrimaryMarketArtworks] = useState([]);
  const [secondaryMarketArtworks, setSecondaryMarketArtworks] = useState([]);
  const [nftArtworks, setNftArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize Intl.DisplayNames for country names
  // This can be outside the component or memoized if performance is critical
  const countryDisplayName = new Intl.DisplayNames(['en'], { type: 'region' });

      // Helper function to format social media URLs based on platform
  const getFormattedSocialUrl = (platform, link) => {
    if (!link) return ''; // Return empty if no link
    // Remove common prefixes if they exist (http://, https://, www.) for cleaner handling
    let cleanedLink = link.replace(/^(https?:\/\/)?(www\.)?/i, '');

    switch (platform) {
      case 'instagram':
        // Ensure it doesn't start with / if it's just a handle
        { const instagramHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
        return `https://www.instagram.com/${instagramHandle}`; }
      case 'twitter': // X (Twitter)
        { const twitterHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
        return `https://twitter.com/${twitterHandle}`; } // Use twitter.com, it redirects to x.com
      case 'linkedin':
        // LinkedIn URLs are usually full, ensure https://
        return cleanedLink.startsWith('linkedin.com') ? `https://${cleanedLink}` : `https://www.linkedin.com/in/${cleanedLink}`;
      case 'behance':
        return cleanedLink.startsWith('behance.net') ? `https://${cleanedLink}` : `https://www.behance.net/${cleanedLink}`;
      case 'facebook':
        return cleanedLink.startsWith('facebook.com') ? `https://${cleanedLink}` : `https://www.facebook.com/${cleanedLink}`;
      default:
        // For any other links, just ensure https://
        return cleanedLink.startsWith('http') ? cleanedLink : `https://${cleanedLink}`;
    }
  };

  // Helper function to safely add '@' prefix to a handle if it's not a URL
  // and doesn't already start with '@'
  const formatHandleForDisplay = (handleText) => {
    if (!handleText) return '';
    // Check if it's already a URL (basic check, don't add '@' to URLs)
    if (handleText.startsWith('http://') || handleText.startsWith('https://')) {
        return handleText;
    }
    // Add '@' if it's not already present
    return handleText.startsWith('@') ? handleText : `@${handleText}`;
  };

  useEffect(() => {
    const fetchPatronData = async () => {
      console.log("Patron ID received:", patronId);
      if (!patronId) {
        setError("Patron ID is missing from the URL.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // 1. Fetch details for the specific patron
        const patronResponse = await getPatronById(patronId);

        if (patronResponse.success && patronResponse.patron) {
          const fetchedPatron = patronResponse.patron;
          console.log("fetched patron: ", fetchedPatron);

          // Get full country name using Intl.DisplayNames
          const fullCountryName = fetchedPatron.location?.country
            ? countryDisplayName.of(fetchedPatron.location.country.toUpperCase()) // Ensure country code is uppercase
            : 'N/A';

          // Map fetched data to the structure your components expect
          const formattedDetails = {
            _id: fetchedPatron._id,
            profileViews: fetchedPatron.stats?.profileViews || 0,
            Appreciations: fetchedPatron.stats?.appreciations || 0,
            Followers: fetchedPatron.stats?.followers || 0,
            artworksBought: fetchedPatron.stats?.artworksBought || '0',
            artworksResold: fetchedPatron.stats?.artworksResold || '0',
            artworksSupported: fetchedPatron.stats?.artworksSupported || '0',
            totalFinancialContribution: fetchedPatron.stats?.financialContribution || '0 SAR',
            patronName: fetchedPatron.organisationName?.english || 'Unknown Organization',
            // Updated location to include full country name
            location: `${fetchedPatron.location?.city || 'N/A'}, ${fullCountryName}`,
            website: fetchedPatron.website || '', // Using socialMediaLinks.website as a fallback
            image: fetchedPatron.profilePicture || '',
            userRole: fetchedPatron.role || 'PATRON',
            profilebio: fetchedPatron.aboutUs?.english || '',
            // socialMediaLinks: fetchedPatron.socialMediaLinks || {},
                socialMediaLinks: {
      // Use the new helper function to construct full, well-formed URLs
      instagram: getFormattedSocialUrl('instagram', fetchedPatron.socialMediaLinks?.instagram),
      behance: getFormattedSocialUrl('behance', fetchedPatron.socialMediaLinks?.behance),
      twitter: getFormattedSocialUrl('twitter', fetchedPatron.socialMediaLinks?.twitter),
      linkedin: getFormattedSocialUrl('linkedin', fetchedPatron.socialMediaLinks?.linkedin),
      facebook: getFormattedSocialUrl('facebook', fetchedPatron.socialMediaLinks?.facebook),

      // Apply formatHandleForDisplay to the display handles
      instagramHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.instagram || 'instagram'),
      twitterHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.twitter || 'twitter'),
      linkedinHandle: fetchedPatron.socialMediaLinks?.linkedin || 'LinkedIn Profile', // LinkedIn doesn't typically use @handle
      behanceHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.behance || 'behance'),
      facebookHandle: formatHandleForDisplay(fetchedPatron.socialMediaLinks?.facebook || 'facebook'),
    }
          };
          setPatronDetails(formattedDetails);

          // 2. Fetch all patrons for the "View Similar Patrons" section
          const allPatronsResponse = await getAllPatrons();

          console.log("Patron response bhaiiya: ", allPatronsResponse);
          if (allPatronsResponse && Array.isArray(allPatronsResponse.patrons)) {
            console.log("Here i am!");
            const filteredSimilarPatrons = allPatronsResponse.patrons
              .filter(patron => patron._id !== patronId)
              .slice(0, 5)
              .map(patron => ({
                name: patron.organisationName?.english || 'Unknown Patron',
                image: patron.profilePicture || '',
                _id: patron._id
              }));
            setSimilarPatrons(filteredSimilarPatrons);
          } else {
            console.warn("Could not fetch similar patrons or invalid response:", allPatronsResponse);
            setSimilarPatrons([]);
          }

        } else {
          setError(patronResponse.message || "Patron profile not found or failed to load.");
          setPatronDetails(null);
          setSimilarPatrons([]);
        }

          // --- 2. Fetch all artworks for this patron ---
          const artworksResponse = await getArtworksByPatronId(patronId);

          if (artworksResponse.success && Array.isArray(artworksResponse.artworks)) {
            // Filter artworks by displayOption
            const primary = artworksResponse.artworks.filter(
              (art) => art.displayOption === "Primary Market"
            );
            const secondary = artworksResponse.artworks.filter(
              (art) => art.displayOption === "Secondary Market"
            );
            const nfts = artworksResponse.artworks.filter(
              (art) => art.displayOption === "NFTs"
            );

            setPrimaryMarketArtworks(primary);
            setSecondaryMarketArtworks(secondary);
            setNftArtworks(nfts);
          } else {
            console.warn("No artworks found for this patron or invalid response format:", artworksResponse);
            setPrimaryMarketArtworks([]);
            setSecondaryMarketArtworks([]);
            setNftArtworks([]);
          }

      } catch (err) {
        console.error("Error fetching patron data:", err);
        setError(err.message || "Failed to load patron profile due to an unexpected error.");
        setPatronDetails(null);
         setPrimaryMarketArtworks([]);
          setSecondaryMarketArtworks([]);
          setNftArtworks([]);
        setSimilarPatrons([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPatronData();
  }, [patronId]); // Re-fetch if patronId in the URL changes

  

  if (loading) {
    return <div className="text-center py-10 text-xl mt-72">Loading patron profile...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600 text-xl font-montserrat-medium">Error: {error}</div>;
  }

  if (!patronDetails) {
    return <div className="text-center py-10 text-gray-700 text-xl font-montserrat-medium">Patron profile not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col lg:flex-row flex-grow xs:flex-col">
        <aside className="w-full lg:w-1/4 p-4 mt-32">
          {/* Pass fetched patronDetails */}
          <SidePatronsProfile patronDetails={patronDetails} />
        </aside>

        <main className="w-full lg:w-3/4 p-4">
          <div className="mt-8 lg:mt-32">
            {/* Pass fetched patronDetails */}
            <HeaderPatronsProfile patronDetails={patronDetails} />
          </div>

          <div className="mt-6">
            {/* Pass fetched patronDetails (though ContentPatronsProfile still uses hardcoded gallery data for now) */}
            <ContentPatronsProfile  primaryMarketArtworks={primaryMarketArtworks}
              secondaryMarketArtworks={secondaryMarketArtworks}
              nftArtworks={nftArtworks} />
          </div>

          <footer className="mt-12">
            {/* Pass the dynamically fetched similar patrons */}
            <FooterPatronsProfile patronsDetail={similarPatrons} />
          </footer>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default PatronsProfile;

