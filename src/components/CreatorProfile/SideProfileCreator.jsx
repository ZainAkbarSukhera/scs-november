// import React from "react";
// import {
//   ChevronDoubleDownIcon,
//   ChevronDoubleUpIcon,
// } from "@heroicons/react/20/solid";

// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from '@headlessui/react'


// import badge_icon from "../../assets/badges_icon.png";
// import badges from "../../assets/all_badges.png";
// import skill_icon from "../../assets/skill_icon2.png";
// import experience_icon from "../../assets/experience_icon.png";
// import achievement_icon from "../../assets/achievement_icon.png";
// import digitaltools_icon from "../../assets/digitaltools_icon.png";
// import education_icon from "../../assets/education_icon.png";
// import exhibition_icon from "../../assets/exhibition_icon.png";
// import { creatorSideTitles } from "../../static/data";


// const sideProfileBidder =  ({
//   creatorDetails,
//   userData
// }) => {
//   return(
      


// <div className="bg-white">
//       <div className="flex flex-col lg:mb-8 ">
//       <div className="flex flex-col lg:items-start xs:items-center">
//         <div className="border-b-2 border-black mb-2 pb-1">
//           <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
//             {creatorDetails.CreatorName}
//           </h1>
//         </div>
//         <p className="text-2xl font-montserrat-regular text-red-500">{creatorDetails.host}</p>
//         <p className="text-base font-montserrat-regular text-palatinate-purple">
//           {creatorDetails.profession}
//         </p>
//         <a
//           href={creatorDetails.website}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-yankees-blue font-montserrat-light text-xs hover:underline mt-1"
//         >
//           {creatorDetails.website}
//         </a>
//       </div>

//       <img
//         src={creatorDetails.imageUrl}
//         alt="creatorImage"
//         className="w-full h-auto rounded-md shadow-md col-span-1 mt-2"
//       />

// <p className=" text-sm  text-justify font-montserrat-light mb-4 mt-4">
//            {creatorDetails.profilebio}
//                  </p>


//         {/* Sidebar */}
//         <form className="hidden lg:block">
//           {creatorSideTitles.map((section) => (
//             <Disclosure key={section.id} as="div" defaultOpen={true} className="py-2">
//               <h3 className="flow-root">
//                 <DisclosureButton className="group flex w-full justify-between items-center bg-white py-3 text-sm text-yankees-blue hover:text-blue-950">
//                   <div className="flex items-center mb-0">
//                     <img src={section.img} alt="" className="w-8" />
//                     <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm whitespace-nowrap">
//                       {section.name}
//                     </h3>
//                     <span className="ml-2 flex items-center">
//                           <ChevronDoubleUpIcon
//                             className="h-2 w-2 group-data-[open]:hidden"
//                             aria-hidden="true"
//                           />
//                           <ChevronDoubleDownIcon
//                             aria-hidden="true"
//                             className="h-2 w-2 [.group:not([data-open])_&]:hidden"
//                           />
//                         </span>
//                   </div>
//                 </DisclosureButton>
//               </h3>
//               <DisclosurePanel className="pt-0">
//                 <div className="space-y-4">
//                   {section.id === "skills" ? (
//                     <div className="flex flex-wrap gap-2">
//                       {userData.skills && userData.skills.length > 0 ? (
//                         userData.skills.map((skill, index) => (
//                           <span
//                             key={index}
//                             className="px-2 py-0.5 text-xs font-montserrat-light text-yankees-blue bg-white border-2 border-yankees-blue rounded-full"
//                           >
//                             {skill}
//                           </span>
//                         ))
//                       ) : (
//                         <p className="text-xs text-gray-500"> N/A</p>
//                       )}
//                     </div>
//                   ) : (
//                     // Display each sentence on a new line for other sections
//                     <div className="text-xs font-montserrat-light text-yankees-blue space-y-1">
//                       {userData[section.id] && userData[section.id].length > 0 ? (
//                         userData[section.id].map((sentence, index) => (
//                           <p key={index}>{sentence}</p>
//                         ))
//                       ) : (
//                         <p className="text-gray-500">N/A</p>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </DisclosurePanel>
//             </Disclosure>
//           ))}
//         </form>
//       </div>
//     </div>

//   );

  // return (
  //   <div className="flex flex-col mb-8 ">
  //     <div className="flex flex-col items-start">
  //       <div className="border-b-2 border-black mb-2 pb-1">
  //         <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
  //           {CreatorName}
  //         </h1>
  //       </div>
  //       <p className="text-2xl font-montserrat-regular text-red-500">{host}</p>
  //       <p className="text-base font-montserrat-regular text-palatinate-purple">
  //         {profession}
  //       </p>
  //       <a
  //         href={website}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-yankees-blue font-montserrat-light text-xs hover:underline mt-1"
  //       >
  //         {website}
  //       </a>
  //     </div>

  //     <img
  //       src={imageUrl}
  //       alt="creatorImage"
  //       className="w-full h-auto rounded-md shadow-md col-span-1 mt-2"
  //     />

  //     <div className=" flex flex-col lg:col-span-2">
  //       <p className=" text-sm  text-justify font-montserrat-light mb-4 mt-4">
  //         {profilebio}
  //       </p>
  //       <div className="mt-4">
  //         {/* Badges Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img src={badge_icon} alt="badge icon" className="w-8" />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               BADGES
  //             </h3>
  //           </div>
  //           <div>
  //             <img src={badges} alt="all badges" className="w-48" />
  //           </div>
  //         </div>

  //         {/* skill Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img src={skill_icon} alt="skill icon" className="w-8" />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               SKILLS
  //             </h3>
  //           </div>
  //           <div className="space-x-2">
  //             {[
  //               "Abstract Painting",
  //               "Colour Theory",
  //               "Mixed Media Techniques",
  //               "Large-Scale Art",
  //               "Concept Development",
  //               "Expressive Brushwork",
  //               "Public Art",
  //               "Installation Art",
  //             ].map((SkillLevel) => (
  //               <span className="border border-black rounded-md text-xs font-montserrat-light text-black ">
  //                 {SkillLevel}
  //               </span>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Experience Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img
  //               src={experience_icon}
  //               alt="experience icon"
  //               className="w-8"
  //             />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               EXPERIENCE
  //             </h3>
  //           </div>
  //           <div>
  //             {[
  //               "Chief Operating Officer - UMT (2023 - Present)",
  //               "Art Consultant - PIF (2020-2021)",
  //               "Creative Art Director - AQ Studios (2010 - Present)",
  //             ].map((Experience) => (
  //               <p className=" text-xs text-black font-montserrat-light">
  //                 {Experience}
  //               </p>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Exhibitions Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img
  //               src={exhibition_icon}
  //               alt="exhibition icon"
  //               className="w-8"
  //             />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               EXHIBITIONS
  //             </h3>
  //           </div>
  //           <div>
  //             {[
  //               "Solo Exhibition: 'Vision in Motion' – New York (2022)",
  //               "Solo Exhibition: 'Color and Chaos' – Athr Gallery, Jeddah (2018)",
  //               "Group Exhibition: 'Art Dubai' – Dubai, UAE (2020)",
  //               "Solo Exhibition: 'Beyond Boundaries' – London (2019)",
  //               "Group Exhibition: 'Contemporary Voices' – Paris (2017)",
  //               "Solo Exhibition: 'The Awakening Series' – Riyadh (2016)",
  //             ].map((Exhibition) => (
  //               <p className="text-xs text-black font-montserrat-light">
  //                 {Exhibition}
  //               </p>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Achievements Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img
  //               src={achievement_icon}
  //               alt="achievement icon"
  //               className="w-8"
  //             />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               ACHIEVEMENTS
  //             </h3>
  //           </div>
  //           <div>
  //             {[
  //               "Venice Biennale – Saudi Pavilion (2019)",
  //               "Sharjah Biennial – United Arab Emirates (2017)",
  //               "Biennale of Contemporary Art – Florence, Italy (2015)",
  //             ].map((Achievements) => (
  //               <p className=" text-xs text-black font-montserrat-light">
  //                 {Achievements}
  //               </p>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Education Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img src={education_icon} alt="education icon" className="w-8" />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               EDUCATION
  //             </h3>
  //           </div>
  //           <div>
  //             {[
  //               "Bachelor of Arts in Fine Arts – Parsons School of Design, New York, USA",
  //             ].map((Education) => (
  //               <p className=" text-xs text-black font-montserrat-light">
  //                 {Education}
  //               </p>
  //             ))}
  //           </div>
  //         </div>

  //         {/* Digital Tools Section */}
  //         <div className="mb-6">
  //           <div className="flex items-center mb-2">
  //             <img
  //               src={digitaltools_icon}
  //               alt="digital tools icon"
  //               className="w-8"
  //             />
  //             <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
  //               DIGITAL TOOLS
  //             </h3>
  //           </div>
  //           <div>
  //             {[
  //               "Adobe Illustrator",
  //               "Adobe Indesign",
  //               "Adobe Photoshop",
  //               "Keynote",
  //               "Canva",
  //             ].map((DigitalTools) => (
  //               <p className=" text-xs text-black font-montserrat-light">
  //                 {DigitalTools}
  //               </p>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
// };

// export default sideProfileBidder;

import React from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

import { creatorSideTitles } from "../../static/data";


const SideProfileCreator = ({
  creatorDetails,
  userData
}) => {
  // Function to ensure the URL has a protocol
  const getFullWebsiteUrl = (url) => {
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      return `http://${url}`; // Prepend http:// if no protocol is found
    }
    return url;
  };

  const websiteUrl = getFullWebsiteUrl(creatorDetails.website);

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:mb-8 ">
        <div className="flex flex-col lg:items-start xs:items-center">
          <div className="border-b-2 border-black mb-2 pb-1">
            <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
              {creatorDetails.CreatorName}
            </h1>
          </div>
          <p className="text-2xl font-montserrat-regular text-red-500 whitespace-nowrap">{creatorDetails.host}</p>
          <p className="text-base font-montserrat-regular text-palatinate-purple">
            {creatorDetails.profession}
          </p>
          {creatorDetails.website ? ( // Only render the link if website exists
            <a
              href={websiteUrl} // Use the processed URL here
              target="_blank"
              rel="noopener noreferrer"
              className="text-yankees-blue font-montserrat-light text-xs hover:underline mt-1"
            >
              {creatorDetails.website}
            </a>
          ) : (
            <p className="text-yankees-blue font-montserrat-light text-xs mt-1"></p>
          )}
        </div>

        <img
          src={creatorDetails.imageUrl}
          alt="creatorImage"
          className="w-full h-auto rounded-md shadow-md col-span-1 mt-2"
        />

        {/* This is the key change: Added 'break-words' to force long strings to wrap */}
        <p className="text-sm text-justify font-montserrat-light mb-4 mt-4 break-words">
          {creatorDetails.profilebio}
        </p>


        {/* Sidebar */}
        <form className="hidden lg:block">
          {creatorSideTitles.map((section) => (
            <Disclosure key={section.id} as="div" defaultOpen={true} className="py-2">
              <h3 className="flow-root">
                <DisclosureButton className="group flex w-full justify-between items-center bg-white py-3 text-sm text-yankees-blue hover:text-blue-950">
                  <div className="flex items-center mb-0">
                    <img src={section.img} alt="" className="w-8" />
                    <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm whitespace-nowrap">
                      {section.name}
                    </h3>
                    <span className="ml-2 flex items-center">
                      <ChevronDoubleUpIcon
                        className="h-2 w-2 group-data-[open]:hidden"
                        aria-hidden="true"
                      />
                      <ChevronDoubleDownIcon
                        aria-hidden="true"
                        className="h-2 w-2 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </div>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-0">
                <div className="space-y-4">
                  {section.id === "skills" ? (
                    <div className="flex flex-wrap gap-2">
                      {userData.skills && userData.skills.length > 0 ? (
                        userData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 text-xs font-montserrat-light text-yankees-blue bg-white border-2 border-yankees-blue rounded-full"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-xs text-gray-500"> N/A</p>
                      )}
                    </div>
                  ) : (
                    <div className="text-xs font-montserrat-light text-yankees-blue space-y-1">
                      {userData[section.id] && userData[section.id].length > 0 ? (
                        userData[section.id].map((sentence, index) => (
                          <p key={index}>{sentence}</p>
                        ))
                      ) : (
                        <p className="text-gray-500">N/A</p>
                      )}
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SideProfileCreator;