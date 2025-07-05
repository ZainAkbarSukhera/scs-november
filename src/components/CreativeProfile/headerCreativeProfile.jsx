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

// const HeaderCreativeProfile = ({ CreatorName, host, profession, website, ProfileViews, Appreciations, Followers }) =>  {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mx-4">
//       {/* Left Section: Initiative Name and Host */}
//       <div className="mb-4 xs:w-full lg:w-auto">
//         <div className="border-b-2 border-black mb-2">
//           <h1 className="text-3xl xs:text-2xl font-montserrat-bold text-yankees-blue mb-4">{CreatorName}</h1>
//         </div>
//         <p className="text-xl xs:text-lg font-montserrat-regular text-red-500 mb-2">{host}</p>
//         <p className="text-base font-montserrat-regular text-palatinate-purple mb-2">{profession}</p>
//         <a href={website} target="_blank" rel="noopener noreferrer" className="text-black text-xs hover:underline">
//           {website}
//         </a>
//       </div>
  
//       {/* Middle Section: Follow Button and Social Media Links */}
//       <div className="flex flex-col xs:flex-row items-start xs:justify-start xs:space-x-4 mt-4 lg:mt-0">
//         <button className="text-sm w-24 py-1 rounded-lg text-white bg-red-700 font-montserrat-regular mb-2 xs:mb-0">
//           Follow
//         </button>
  
//         <div className="flex flex-col xs:flex-row items-start">
//           <a href="https://www.instagram.com/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline mb-2 xs:mb-0 xs:mr-4">
//             <FontAwesomeIcon icon={faInstagram} className="mr-1" />@theqandeel
//           </a>
//           <a href="https://www.linkedin.com/in/theqandeel" target="_blank" rel="noopener noreferrer" className="font-montserrat-regular text-blue-500 hover:underline">
//             <FontAwesomeIcon icon={faXTwitter} className="mr-1" />@theqandeel
//           </a>
//         </div>
//       </div>
  
//       {/* Right Section: Stats */}
//       <div className="flex flex-col items-start mt-4 xs:mt-4 lg:mt-0 lg:ml-8">
//         <div className="text-sm font-montserrat-light text-gray-600 mb-2 xs:text-xs">
//           Profile Views: <strong className="ml-48 xs:ml-12">{ProfileViews}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2 xs:text-xs">
//           Appreciations: <strong className="ml-48 xs:ml-12">{Appreciations}</strong>
//         </div>
//         <div className="text-sm text-gray-600 mb-2 xs:text-xs">
//           Followers: <strong className="ml-52 xs:ml-12">{Followers}</strong>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderCreativeProfile;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons'; // Ensure all icons are imported if used
import { toast } from 'react-toastify';
// Make sure 'react-toastify/dist/ReactToastify.css' is imported somewhere globally in your app (e.g., App.js)

import { followArtistApi, unfollowArtistApi } from '../../api/user'; // Import both API functions

const HeaderCreatorProfile = ({
  ProfileViews,
  Appreciations,
  Followers,
  socialMedia,
  creatorId,
  currentUserId,
  isAuthenticated,
  initialIsFollowing,
  setArtistData
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

  // The button should be disabled ONLY if not authenticated OR if an operation is in progress.
  // It should be clickable if 'isFollowing' is true (to unfollow).
  const isDisabled = !isAuthenticated || isProcessingFollow;
  console.log("  Calculated 'disabled' status =", isDisabled);
  console.log("----------------------------------------");
  // --- END DEBUGGING LOGS ---


  // Update internal state if initialIsFollowing or Followers prop changes from parent
  useEffect(() => {
    setIsFollowing(initialIsFollowing);
  }, [initialIsFollowing]);

  useEffect(() => {
    setCurrentFollowerCount(Followers);
  }, [Followers]);


  const handleFollowClick = async () => {
    // This log will only print if the button is clicked and is NOT disabled
    console.log("✅ Follow/Unfollow button clicked! Executing handleFollowClick.");

    if (!isAuthenticated || !currentUserId) {
      toast.error("Please log in to follow/unfollow artists.");
      return;
    }

    if (!creatorId) {
      toast.error("Artist ID is missing. Cannot proceed.");
      return;
    }

    setIsProcessingFollow(true); // Disable button to prevent multiple clicks
    
    try {
      let response;
      if (isFollowing) {
        // If currently following, initiate unfollow
        console.log("Attempting to unfollow artist...");
        response = await unfollowArtistApi(currentUserId, creatorId);
        if (response.success) {
          setIsFollowing(false);
          setCurrentFollowerCount(prevCount => prevCount - 1);
          toast.success("Artist unfollowed successfully!");
          
          // Update the parent component's artistData to reflect the change
          setArtistData(prevData => ({ 
            ...prevData, 
            followersCount: prevData.followersCount - 1,
            // Filter out the currentUserId from the followers array
            followers: prevData.followers ? prevData.followers.filter(id => id !== currentUserId) : []
          }));
        } else {
          toast.error(response.message || "Failed to unfollow artist.");
        }
      } else {
        // If not following, initiate follow
        console.log("Attempting to follow artist...");
        response = await followArtistApi(currentUserId, creatorId);
        if (response.success) {
          setIsFollowing(true);
          setCurrentFollowerCount(prevCount => prevCount + 1);
          toast.success("You are now following this artist!");
          
          // Update the parent component's artistData to reflect the change
          setArtistData(prevData => ({ 
            ...prevData, 
            followersCount: prevData.followersCount + 1,
            followers: [...(prevData.followers || []), currentUserId] // Add current user to followers array
          }));
        } else {
          toast.error(response.message || "Failed to follow artist.");
        }
      }
    } catch (error) {
      console.error("🚫 Error during follow/unfollow operation:", error);
      toast.error("Failed to process request. Please try again.");
    } finally {
      setIsProcessingFollow(false); // Re-enable button
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
              ${isFollowing ? 'bg-gray-500 hover:bg-gray-600' : 'bg-madder-lake hover:bg-red-600'}
              ${isDisabled ? 'cursor-not-allowed opacity-70' : ''}
            `}
            // Button is disabled if user is not authenticated OR an API call is in progress.
            // It IS clickable if isFollowing is true (to unfollow).
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