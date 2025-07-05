// import React from "react";

// import CreatorProfile from "../components/CreatorProfile/ContentCreatorProfile";
// import Navbar from "../components/NavigationBar/Navbar";
// import SideProfileCreator from "../components/CreatorProfile/SideProfileCreator";
// import HeaderCreatorProfile from "../components/CreatorProfile/headerCreatorProfile";

// import image1 from "../assets/abqandeelprofile.jpg";
// import Footer from "../components/Footer/footer";

// const CreatorDetails =  {
//   CreatorName: "Abdullah Qandeel",
//   host: 'Jeddah- Saudi Arabia',
//   profession: 'CONTEMPORARY ARTIST',
//   website: 'www.theqandeel.com',
//   ProfileViews: 25000,
//   Appreciations: 5000,
//   Followers: 7900,
//   imageUrl: image1,
//   profilebio:"Abdullah Qandeel is a prominent Saudi contemporary artist known for his bold and dynamic abstract paintings. Born in 1988 in Jeddah, Saudi Arabia, Qandeel’s artistic journey began with a deep interest in exploring identity, cultural heritage, and the complexities of modern life. Educated in both the Middle East and the West, his works reflect a unique blend of influences that challenge traditional norms while embracing modernity. Over the years, Qandeel has gained international recognition, exhibiting his work in major cities around the world and becoming a leading figure in Saudi Arabia’s contemporary art scene.",
// };

// const sampleUserData = {
//   skills: ["Abstract Painting",
//                  "Colour Theory",
//                  "Mixed Media Techniques",
//                  "Large-Scale Art",
//                  "Concept Development",
//                  "Expressive Brushwork",
//                  "Public Art",
//                  "Installation Art",],
//   experience: ["Worked at Company A", "Freelanced in Graphic Design", "5 years of experience"],
//   exhibitions: ["Exhibition A, 2022", "Exhibition B, 2023"],
//   achievements: ["Awarded Artist of the Year", "Published in Art Magazine"],
//   education: ["Bachelor's in Fine Arts", "Certificate in Digital Design"],
//   digital_tools: ["Adobe Photoshop", "Illustrator", "Procreate"],
// };


// const CreatorProfileComponent = () => {
//   return (
//        <div className="min-h-screen flex flex-col">
//        {/* Navbar at the top */}
//        <Navbar />

//        {/* Header section */}
     

//        {/* Main content area with FilterMenu and Cards */}
//        <div className="lg:flex lg:flex-grow lg:flex-row xs:flex-col ">
//          {/* Sidebar filter menu on the left */}
//          <aside className="w-full sm:w-auto md:w-1/5 p-4 mt-32">
//            <SideProfileCreator 
//              creatorDetails={CreatorDetails}
//              userData={sampleUserData}
//            />
//          </aside>

//          {/* Main section */}
//          <main className="flex-grow p-4">
//          <div className="lg:mt-32 px-0">
//          <HeaderCreatorProfile 
//            ProfileViews={CreatorDetails.ProfileViews} 
//            Appreciations={CreatorDetails.Appreciations} 
//            Followers={CreatorDetails.Followers} 
//          />
//        </div>

//            <CreatorProfile />
//         </main>
//        </div>
//       <Footer />
//      </div>
//   );
// };

// export default CreatorProfileComponent;


import React, { useEffect, useState, useMemo } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Ensure you have react-toastify configured globally

import CreatorProfileContent from "../components/CreatorProfile/ContentCreatorProfile";
import Navbar from "../components/NavigationBar/Navbar";
import SideProfileCreator from "../components/CreatorProfile/SideProfileCreator";
import HeaderCreatorProfile from "../components/CreatorProfile/headerCreatorProfile";
import Footer from "../components/Footer/footer";
import { getArtistById } from "../api/artist"; // Assuming this API function is correct

// --- CORRECTED REDUX SELECTORS BASED ON YOUR USER REDUCER ---
// Your user reducer directly stores _id and auth at the top level of the 'user' slice.
const selectCurrentUserId = (state) => {
  console.log("REDUX_DEBUG: Full Redux State:", state); // Still helpful for overall context
  console.log("REDUX_DEBUG: state.user slice:", state.user);
  console.log("REDUX_DEBUG: state.user._id (from Reducer):", state.user?._id); // Directly access _id
  return state.user?._id; // Corrected: Access _id directly from state.user
};

const selectIsAuthenticated = (state) => {
  console.log("REDUX_DEBUG: state.user.auth (from Reducer):", state.user?.auth); // Directly access auth
  return state.user?.auth; // Corrected: Access auth directly from state.user
};
// --- END CORRECTED REDUX SELECTORS ---


const CreatorProfileComponent = () => {
  const { id } = useParams();
  const [artistData, setArtistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get current user ID and authentication status from Redux store using the now-correct selectors
  const currentUserId = useSelector(selectCurrentUserId);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  
  const [initialIsFollowing, setInitialIsFollowing] = useState(false); 

  console.log("CREATOR_PROFILE_COMPONENT_PROPS_OUT: currentUserId =", currentUserId);
  console.log("CREATOR_PROFILE_COMPONENT_PROPS_OUT: isAuthenticated =", isAuthenticated);


  const countryDisplayName = useMemo(() => {
    try {
      return new Intl.DisplayNames(['en'], { type: 'region' });
    } catch (error) {
      console.error("Error initializing Intl.DisplayNames (fallback to code):", error);
      return { of: (code) => code };
    }
  }, []);

  const getFullCountryName = (countryCode) => {
    if (!countryCode) return '';
    try {
      return countryDisplayName.of(countryCode.toUpperCase()) || countryCode;
    } catch (e) {
      console.warn(`Could not get full country name for code "${countryCode}":`, e);
      return countryCode;
    }
  };


  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        let fetchedArtist = null;

        if (id) {
          const response = await getArtistById(id);
          if (response?.data) { 
            fetchedArtist = response.data;
          } else if (response) {
            fetchedArtist = response;
          } else {
            setError("Failed to fetch artist from API or invalid response.");
            toast.error("Failed to fetch artist data due to invalid response.");
          }
        } else {
          setError("No artist ID provided in the URL.");
          toast.error("Artist ID is missing from the URL.");
        }

        if (fetchedArtist) {
          setArtistData(fetchedArtist);
          const isUserFollowing = currentUserId && 
                                  Array.isArray(fetchedArtist.followers) &&
                                  fetchedArtist.followers.includes(currentUserId);
          setInitialIsFollowing(isUserFollowing);

        } else if (!error) {
          setError("Artist data not found.");
          toast.error("Artist profile not found.");
        }
      } catch (err) {
        console.error("Error fetching artist details:", err);
        setError(err.response?.data?.message || err.message || "An unexpected error occurred.");
        toast.error("Error fetching artist details: " + (err.response?.data?.message || err.message || "Please try again."));
      } finally {
        setLoading(false);
      }
    };

    fetchArtistDetails();
  }, [id, currentUserId]); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading profile...
      </div>
    );
  }

  if (error || !artistData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Error: {error || "Artist data could not be loaded."}
      </div>
    );
  }

  const getFormattedSocialUrl = (platform, link) => {
    if (!link) return '';
    let cleanedLink = link.replace(/^(https?:\/\/)?(www\.)?/i, '');

    switch (platform) {
      case 'instagram':
        { const instagramHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
        return `https://www.instagram.com/${instagramHandle}`; }
      case 'twitter':
        { const twitterHandle = cleanedLink.startsWith('/') ? cleanedLink.substring(1) : cleanedLink;
        return `https://twitter.com/${twitterHandle}`; }
      case 'linkedin':
        return cleanedLink.startsWith('linkedin.com') ? `https://${cleanedLink}` : `https://www.linkedin.com/in/${cleanedLink}`;
      case 'behance':
        return cleanedLink.startsWith('behance.net') ? `https://${cleanedLink}` : `https://www.behance.net/${cleanedLink}`;
      case 'facebook':
        return cleanedLink.startsWith('facebook.com') ? `https://${cleanedLink}` : `https://www.facebook.com/${cleanedLink}`;
      case 'website':
        return cleanedLink.startsWith('http') ? cleanedLink : `https://${cleanedLink}`;
      default:
        return cleanedLink.startsWith('http') ? cleanedLink : `https://${cleanedLink}`;
    }
  };

  const formatHandleForDisplay = (handleText) => {
    if (!handleText) return '';
    if (handleText.startsWith('http://') || handleText.startsWith('https://')) {
        return handleText;
    }
    return (handleText.startsWith('@') || handleText.includes('/') || handleText.includes('.')) 
           ? handleText 
           : `@${handleText}`;
  };

  const creatorDetails = {
    creatorId: id,
    CreatorName: artistData.fullNameEnglish || '',
    fullNameArabic: artistData.fullNameArabic || '',
    host: artistData.city && artistData.country
        ? `${artistData.city}, ${getFullCountryName(artistData.country)}`
        : artistData.city || getFullCountryName(artistData.country) || '',
    profession: artistData.fieldOfExpertise || '',
    website: getFormattedSocialUrl('website', artistData.website) || '',
    ProfileViews: artistData.profileViews || 0,
    Appreciations: artistData.appreciationCount || 0,
    Followers: artistData.followersCount || 0,
    imageUrl: artistData.profilePicture || 'https://via.placeholder.com/150?text=Profile',
    profilebioEnglish: artistData.biographyEnglish || '',
    profilebioArabic: artistData.biographyArabic || '',

    skills: artistData.skills || [],
    experience: artistData.experience || '',
    budget: artistData.budget || null,
    availability: artistData.availability || '',
    workCategoryClassification: artistData.workCategoryClassification || '',

    exhibitions: artistData.exhibitions || [],
    achievements: artistData.achievements || [],
    education: artistData.education || [],
    digitalTools: artistData.digitalTools || [],
    individualSkills: artistData.individualSkills || [],
    experienceDetails: artistData.experienceDetails || [],

    socialMedia: {
        instagram: getFormattedSocialUrl('instagram', artistData.socialMediaLinks?.instagram),
        behance: getFormattedSocialUrl('behance', artistData.socialMediaLinks?.behance),
        twitter: getFormattedSocialUrl('twitter', artistData.socialMediaLinks?.twitter),
        linkedin: getFormattedSocialUrl('linkedin', artistData.socialMediaLinks?.linkedin),
        facebook: getFormattedSocialUrl('facebook', artistData.socialMediaLinks?.facebook),

        instagramHandle: formatHandleForDisplay(artistData.socialMediaLinks?.instagram),
        twitterHandle: formatHandleForDisplay(artistData.socialMediaLinks?.twitter),
        linkedinHandle: artistData.socialMediaLinks?.linkedin || 'LinkedIn Profile',
        behanceHandle: formatHandleForDisplay(artistData.socialMediaLinks?.behance),
        facebookHandle: formatHandleForDisplay(artistData.socialMediaLinks?.facebook),
    },
    projects: artistData.projects || [],
  };

  const sampleUserData = { 
    skills: artistData.individualSkills || [],
    experience: artistData.experienceDetails || [],
    exhibitions: artistData.exhibitions || [],
    achievements: artistData.achievements || [],
    education: artistData.education || [],
    digital_tools: artistData.digitalTools || [],
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="lg:flex lg:flex-grow lg:flex-row xs:flex-col ">
        <aside className="w-full sm:w-auto md:w-1/5 p-4 mt-32">
          <SideProfileCreator
            creatorDetails={creatorDetails}
            userData={sampleUserData}
          />
        </aside>

        <main className="flex-grow p-4">
          <div className="lg:mt-32 px-0">
            <HeaderCreatorProfile
              ProfileViews={creatorDetails.ProfileViews}
              Appreciations={creatorDetails.Appreciations}
              Followers={creatorDetails.Followers}
              socialMedia={creatorDetails.socialMedia}
              creatorId={creatorDetails.creatorId}
              currentUserId={currentUserId} // Now should be correctly populated
              isAuthenticated={isAuthenticated} // Now should be correctly populated
              initialIsFollowing={initialIsFollowing} 
              setArtistData={setArtistData}
            />
          </div>

          <CreatorProfileContent
            creatorDetails={creatorDetails}
            projects={creatorDetails.projects}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CreatorProfileComponent;
