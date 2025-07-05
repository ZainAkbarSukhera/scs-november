// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// const HeaderCreativeProfile = ({ CreatorName, host, profession,website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center ml-4">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-bold mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl text-red-500">{host}</p>
//         <p className="text-base text-palatinate-purple">{profession}</p>
//         <a href="https://www.theqandeel.com" target="_blank" className="text-black text-xs hover:underline mr-4">
//            {website}
//           </a>
//       </div>

//       {/* Follow Button and Social Media Links */}
//       <div className="flex flex-row  ml-16 items-start space-x-2 mt-4 lg:mt-0">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700">
//           Follow
//         </button>

//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" className="text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" className="text-blue-500 hover:underline">
//             <FontAwesomeIcon icon={faLinkedin} className="mr-1" />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex flex-col items-start space-y-2 mt-4 mr-8 ml-96  lg:mt-0">
//         <div className="text-sm text-gray-600 mb-2">
//           Profile Views: <strong>{ProfileViews}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Appreciations: <strong>{Appreciations}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Followers: <strong>{Followers}</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';


// const HeaderCreativeProfile = ({ CreatorName, host, profession, website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-montserrat-bold text-yankees-blue mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl text-red-500">{host}</p>
//         <p className="text-base text-palatinate-purple">{profession}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline">
//           {website}
//         </a>
//       </div>

//       {/* Middle Section: Follow Button and Social Media Links */}
//       <div className="flex flex-grow justify-start items-start ml-16 space-x-4 mt-4 lg:mt-0">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700 font-montserrat-regular">
//           Follow
//         </button>

//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline">
//           <FontAwesomeIcon icon={faXTwitter} className='mr-1' />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex font-montserrat-light  flex-col items-start mt-4 mr-8 lg:mt-0">
//         <div className="text-sm text-gray-600 mb-2">Profile Views:<strong className='ml-48'>{ProfileViews}</strong></div>
//         <div className="text-sm text-gray-600 mb-2">Appreciations: <strong className='ml-48'>{Appreciations}</strong></div>
//         <div className="text-sm text-gray-600 mb-2">Followers: <strong className='ml-48'>{Followers}</strong></div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// const HeaderCreativeProfile = ({ CreatorName, host, profession, website, ProfileViews, Appreciations, Followers }) => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4 ">
//       {/* Left Section: Initiative Name and Host */}
//       <div>
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-4xl font-montserrat-bold text-yankees-blue mb-8">{CreatorName}</h1>
//         </div>
//         <p className="text-2xl font-montserrat-regular text-red-500">{host}</p>
//         <p className="text-base font-montserrat-regular text-palatinate-purple">{profession}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline">
//           {website}
//         </a>
//       </div>

//       {/* Middle Section: Follow Button and Social Media Links */}
//       <div className="flex flex-grow justify-start items-start ml-16 space-x-4 mt-0 ">
//         <button className="text-sm w-20 py-1 rounded-lg text-white bg-red-700 font-montserrat-regular">
//           Follow
//         </button>
//         <div className="flex items-center">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline">
//             <FontAwesomeIcon icon={faXTwitter} className="mr-1" />@theqandeel
//           </a>
//         </div>
//       </div>

//       {/* Right Section: Stats */}
//       <div className="flex flex-col items-start mt-0 lg:mt-0 lg:ml-8">
//         <div className="text-sm font-montserrat-light text-gray-600 mb-2">
//           Profile Views: <strong className="ml-48">{ProfileViews}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Appreciations: <strong className="ml-48">{Appreciations}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2">
//           Followers: <strong className="ml-52">{Followers}</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';



// const HeaderCreativeProfile = ({  ProfileViews, Appreciations, Followers }) => {
  
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start mx-6 lg:space-x-10 xs:mb-8">
//     {/* Top Section: Initiative Name, Follow Button, Social Media Links, and Stats */}
//     <div className="w-full flex flex-col lg:flex-row lg:justify-start gap-14 lg:items-start xs:items-center xs:mb-8">
      
//       {/* Left Section: Initiative Name and Host */}
     
//       {/* Middle Section: Follow Button, Social Media Links */}
//       <div className="lg:flex xs:flex-col  lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 lg:mt-1">
//         <button className="text-sm lg:w-20 lg:py-1 xs:w-48 xs:py-2 rounded-lg text-white bg-madder-lake hover:bg-red-600 font-montserrat-regular xs:ml-10 xs:mb-4">
//           Follow
//         </button>
//         <div className="flex items-center space-x-4 text-yankees-blue">
//           <a
//             href="https://www.instagram.com/theqandeel"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-montserrat-light text-sm hover:underline flex items-center space-x-1"
//           >
//             <FontAwesomeIcon className="w-8 h-8" icon={faInstagram} /> <span>@theqandeel</span>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/theqandeel"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="font-montserrat-light text-sm hover:underline flex items-center space-x-1 "
//           >
//             <FontAwesomeIcon className="w-8 h-8" icon={faXTwitter} /> <span>@theqandeel</span>
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* Stats Section */}
//     <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light xs:ml-11">
//       <div className="flex justify-between w-full text-sm ">
//         <span className='whitespace-nowrap'>Profile Views:</span>
//         <span className="font-montserrat-light  ml-32">{ProfileViews}</span>
//       </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className='whitespace-nowrap'>Appreciations:</span>
//         <span className="font-montserrat-light ml-32">{Appreciations}</span>
//       </div>
//       <div className="flex justify-between w-full text-sm">
//         <span className='whitespace-nowrap'>Followers:</span>
//         <span className="font-montserrat-light ml-32">{Followers}</span>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default HeaderCreativeProfile;


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons'; // Ensure all icons are imported if used
import { toast } from 'react-toastify';
// Make sure 'react-toastify/dist/ReactToastify.css' is imported somewhere globally in your app (e.g., App.js)

// Import BOTH API functions for follow and unfollow
import { followArtistApi, unfollowArtistApi } from '../../api/user'; // Adjust path if necessary

const HeaderCreatorProfile = ({
  ProfileViews,
  Appreciations,
  Followers,
  socialMedia,
  creatorId,
  currentUserId,
  isAuthenticated,
  initialIsFollowing,
  setArtistData // This prop is crucial for updating parent state
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isProcessingFollow, setIsProcessingFollow] = useState(false);
  const [currentFollowerCount, setCurrentFollowerCount] = useState(Followers);

  // --- DEBUGGING LOGS (these will print on every render) ---
  console.log("--- HeaderCreatorProfile Render Check ---");
  console.log("  Prop: isAuthenticated =", isAuthenticated);
  console.log("  Prop: currentUserId =", currentUserId);
  console.log("  Prop: creatorId =", creatorId);
  console.log("  State: isFollowing =", isFollowing);
  console.log("  State: isProcessingFollow =", isProcessingFollow);

  // --- CORRECTED: The button should be disabled ONLY if not authenticated OR if an operation is in progress.
  // It should be clickable if 'isFollowing' is true (to unfollow).
  const isDisabled = !isAuthenticated || isProcessingFollow;
  console.log("  Calculated 'disabled' status =", isDisabled);
  console.log("----------------------------------------");
  // --- END DEBUGGING LOGS ---


  // Update internal state if initialIsFollowing or Followers prop changes from parent
  // This is important if user logs in/out or artist data re-fetches
  useEffect(() => {
    setIsFollowing(initialIsFollowing);
  }, [initialIsFollowing]);

  useEffect(() => {
    setCurrentFollowerCount(Followers);
  }, [Followers]);


  const handleFollowClick = async () => {
    console.log("✅ Follow/Unfollow button clicked! Executing handleFollowClick.");

    if (!isAuthenticated || !currentUserId) {
      toast.error("Please log in to follow/unfollow artists.");
      return;
    }

    if (!creatorId) {
      toast.error("Artist ID is missing. Cannot proceed.");
      return;
    }

    // Disable button to prevent multiple clicks during API call
    setIsProcessingFollow(true); 
    
    try {
      let response;
      if (isFollowing) {
        // --- UNFOLLOW LOGIC ---
        console.log("Attempting to unfollow artist...");
        response = await unfollowArtistApi(currentUserId, creatorId);
        if (response.success) {
          setIsFollowing(false); // Update local state
          setCurrentFollowerCount(prevCount => prevCount - 1); // Decrement follower count
          toast.success("Artist unfollowed successfully!");
          
          // Update the parent component's artistData to reflect the change
          setArtistData(prevData => {
            // Filter out the currentUserId from the followers array
            const updatedFollowers = prevData.followers ? prevData.followers.filter(id => id !== currentUserId) : [];
            return { 
              ...prevData, 
              followersCount: prevData.followersCount - 1,
              followers: updatedFollowers
            };
          });
        } else {
          toast.error(response.message || "Failed to unfollow artist.");
        }
      } else {
        // --- FOLLOW LOGIC ---
        console.log("Attempting to follow artist...");
        response = await followArtistApi(currentUserId, creatorId);
        if (response.success) {
          setIsFollowing(true); // Update local state
          setCurrentFollowerCount(prevCount => prevCount + 1); // Increment follower count
          toast.success("You are now following this artist!");
          
          // Update the parent component's artistData to reflect the change
          setArtistData(prevData => {
            // Add current user to followers array, ensuring it's an array
            const updatedFollowers = [...(prevData.followers || []), currentUserId];
            return { 
              ...prevData, 
              followersCount: prevData.followersCount + 1,
              followers: updatedFollowers
            };
          });
        } else {
          toast.error(response.message || "Failed to follow artist.");
        }
      }
    } catch (error) {
      console.error("🚫 Error during follow/unfollow operation:", error);
      toast.error("Failed to process request. Please try again.");
    } finally {
      setIsProcessingFollow(false); // Re-enable button after operation
    }
  };

  const renderSocialLink = (platform, icon, label) => {
    const url = socialMedia?.[platform];
    const displayLabel = socialMedia?.[`${platform}Handle`] || label;

    if (url) {
      return (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-montserrat-light text-sm hover:underline flex items-center space-x-1"
        >
          <FontAwesomeIcon className="text-3xl" icon={icon} /> <span>{displayLabel}</span>
        </a>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start mx-6 lg:space-x-10 xs:mb-8">
      <div className="w-full flex flex-col lg:flex-row lg:justify-start gap-14 lg:items-start xs:items-center xs:mb-8">
        <div className="lg:flex xs:flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 lg:mt-1">
          <button
            onClick={handleFollowClick}
            className={`text-sm lg:w-20 lg:py-1 xs:w-48 xs:py-2 rounded-lg text-white font-montserrat-regular xs:ml-10 xs:mb-4
              ${isFollowing ? 'bg-red-200 hover:bg-red-300' : 'bg-madder-lake hover:bg-red-600'}
              ${isDisabled ? 'cursor-not-allowed opacity-70' : ''}
            `}
            // Button is disabled if user is not authenticated OR an API call is in progress.
            // It IS clickable if isFollowing is true (to unfollow) or false (to follow).
            disabled={isDisabled}
          >
            {isProcessingFollow ? 'Processing...' : (isFollowing ? 'Following' : 'Follow')}
          </button>
          <div className="flex items-center space-x-4 text-yankees-blue">
            {renderSocialLink('instagram', faInstagram, 'Instagram')}
            {renderSocialLink('twitter', faXTwitter, 'X (Twitter)')}
            {/* You can uncomment and add other social links here if you have their icons imported */}
            {/* {renderSocialLink('linkedin', faLinkedin, 'LinkedIn')} */}
            {/* {renderSocialLink('behance', faBehance, 'Behance')} */}
            {/* {renderSocialLink('facebook', faFacebook, 'Facebook')} */}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2 text-yankees-blue font-montserrat-light xs:ml-11">
        <div className="flex justify-between w-full text-sm ">
          <span className='whitespace-nowrap'>Profile Views:</span>
          <span className="font-montserrat-light ml-32">{ProfileViews}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className='whitespace-nowrap'>Appreciations:</span>
          <span className="font-montserrat-light ml-32">{Appreciations}</span>
        </div>
        <div className="flex justify-between w-full text-sm">
          <span className='whitespace-nowrap'>Followers:</span>
          <span className="font-montserrat-light ml-32">{currentFollowerCount}</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCreatorProfile;