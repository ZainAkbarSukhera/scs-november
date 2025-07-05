// import React from "react";
// import { MdHexagon } from "react-icons/md";

// import badge_icon from "../../assets/badges_icon.png";
// import badges from "../../assets/all_badges.png";
// import skill_icon from "../../assets/skill_icon2.png";
// import experience_icon from "../../assets/experience_icon.png";
// import achievement_icon from "../../assets/achievement_icon.png";
// import digitaltools_icon from "../../assets/digitaltools_icon.png";
// import education_icon from "../../assets/education_icon.png";
// import exhibition_icon from "../../assets/exhibition_icon.png";

// const sideProfileCreator = ({ imageUrl, profilebio }) => {
//   return (
//     <div className="flex flex-col mb-8">
//       {/* Profile Image */}
//       <img
//         src={imageUrl}
//         alt="creatorImage"
//         className="w-full h-auto rounded-md shadow-md mb-4 xs:mb-6"
//       />

//       <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
//         {/* Profile Bio */}
//         <p className="text-sm font-montserrat-regular mb-4 mt-4 xs:text-xs">
//           {profilebio}
//         </p>

//         <div className="mt-4">
//           {/* Badges Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img src={badge_icon} alt="badge icon" className="w-8" />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 BADGES
//               </h3>
//             </div>
//             <div className="xs:w-full xs:mx-auto">
//               <img src={badges} alt="all badges" className="w-48 xs:w-full" />
//             </div>
//           </div>

//           {/* Skills Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img src={skill_icon} alt="skill icon" className="w-8" />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 SKILLS
//               </h3>
//             </div>
//             <div className="flex flex-wrap space-x-2">
//               {[
//                 "Abstract Painting",
//                 "Colour Theory",
//                 "Mixed Media Techniques",
//                 "Large-Scale Art",
//                 "Concept Development",
//                 "Expressive Brushwork",
//                 "Public Art",
//                 "Installation Art",
//               ].map((SkillLevel, idx) => (
//                 <span
//                   key={idx}
//                   className="border border-black rounded-md text-xs font-montserrat-light text-black p-1"
//                 >
//                   {SkillLevel}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img
//                 src={experience_icon}
//                 alt="experience icon"
//                 className="w-8"
//               />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 EXPERIENCE
//               </h3>
//             </div>
//             <div>
//               {[
//                 "Chief Operating Officer - UMT (2023 - Present)",
//                 "Art Consultant - PIF (2020-2021)",
//                 "Creative Art Director - AQ Studios (2010 - Present)",
//               ].map((Experience, idx) => (
//                 <p
//                   key={idx}
//                   className="text-xs text-black font-montserrat-light"
//                 >
//                   {Experience}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Exhibitions Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img
//                 src={exhibition_icon}
//                 alt="exhibition icon"
//                 className="w-8"
//               />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 EXHIBITIONS
//               </h3>
//             </div>
//             <div>
//               {[
//                 "Solo Exhibition: 'Vision in Motion' – New York (2022)",
//                 "Solo Exhibition: 'Color and Chaos' – Athr Gallery, Jeddah (2018)",
//                 "Group Exhibition: 'Art Dubai' – Dubai, UAE (2020)",
//                 "Solo Exhibition: 'Beyond Boundaries' – London (2019)",
//                 "Group Exhibition: 'Contemporary Voices' – Paris (2017)",
//                 "Solo Exhibition: 'The Awakening Series' – Riyadh (2016)",
//               ].map((Exhibition, idx) => (
//                 <p
//                   key={idx}
//                   className="text-xs text-black font-montserrat-light"
//                 >
//                   {Exhibition}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Achievements Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img
//                 src={achievement_icon}
//                 alt="achievement icon"
//                 className="w-8"
//               />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 ACHIEVEMENTS
//               </h3>
//             </div>
//             <div>
//               {[
//                 "Venice Biennale – Saudi Pavilion (2019)",
//                 "Sharjah Biennial – United Arab Emirates (2017)",
//                 "Biennale of Contemporary Art – Florence, Italy (2015)",
//               ].map((Achievements, idx) => (
//                 <p
//                   key={idx}
//                   className="text-xs text-black font-montserrat-light"
//                 >
//                   {Achievements}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Education Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img src={education_icon} alt="education icon" className="w-8" />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 EDUCATION
//               </h3>
//             </div>
//             <div>
//               {[
//                 "Bachelor of Arts in Fine Arts – Parsons School of Design, New York, USA",
//               ].map((Education, idx) => (
//                 <p
//                   key={idx}
//                   className="text-xs text-black font-montserrat-light"
//                 >
//                   {Education}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Digital Tools Section */}
//           <div className="mb-6">
//             <div className="flex items-center mb-2">
//               <img
//                 src={digitaltools_icon}
//                 alt="digital tools icon"
//                 className="w-8"
//               />
//               <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
//                 DIGITAL TOOLS
//               </h3>
//             </div>
//             <div>
//               {[
//                 "Adobe Illustrator",
//                 "Adobe Indesign",
//                 "Adobe Photoshop",
//                 "Keynote",
//                 "Canva",
//               ].map((DigitalTools, idx) => (
//                 <p
//                   key={idx}
//                   className="text-xs text-black font-montserrat-light"
//                 >
//                   {DigitalTools}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default sideProfileCreator;


import React from "react";
import { MdHexagon } from "react-icons/md";

import badge_icon from "../../assets/badges_icon.png";
import badges from "../../assets/all_badges.png";
import skill_icon from "../../assets/skill_icon2.png";
import experience_icon from "../../assets/experience_icon.png";
import achievement_icon from "../../assets/achievement_icon.png";
import digitaltools_icon from "../../assets/digitaltools_icon.png";
import education_icon from "../../assets/education_icon.png";
import exhibition_icon from "../../assets/exhibition_icon.png";

const sideProfileCreator = ({ imageUrl, profilebio }) => {
  return (
    <div className="flex flex-col mb-8">
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt="creatorImage"
        className="w-full h-auto rounded-md shadow-md mb-4 xs:mb-6"
      />

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Profile Bio */}
        <p className="text-sm font-montserrat-regular mb-4 mt-4 xs:text-xs">
          {profilebio}
        </p>

        <div className="mt-4">
          {/* Badges Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img src={badge_icon} alt="badge icon" className="w-8" />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                BADGES
              </h3>
            </div>
            <div className="xs:w-full xs:mx-auto">
              <img src={badges} alt="all badges" className="w-48 xs:w-full" />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img src={skill_icon} alt="skill icon" className="w-8" />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                SKILLS
              </h3>
            </div>
            <div className="flex flex-wrap space-x-2">
              {[
                "Abstract Painting",
                "Colour Theory",
                "Mixed Media Techniques",
                "Large-Scale Art",
                "Concept Development",
                "Expressive Brushwork",
                "Public Art",
                "Installation Art",
              ].map((SkillLevel, idx) => (
                <span
                  key={idx}
                  className="border border-black rounded-md text-xs font-montserrat-light text-black p-1"
                >
                  {SkillLevel}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src={experience_icon}
                alt="experience icon"
                className="w-8"
              />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                EXPERIENCE
              </h3>
            </div>
            <div>
              {[
                "Chief Operating Officer - UMT (2023 - Present)",
                "Art Consultant - PIF (2020-2021)",
                "Creative Art Director - AQ Studios (2010 - Present)",
              ].map((Experience, idx) => (
                <p
                  key={idx}
                  className="text-xs text-black font-montserrat-light"
                >
                  {Experience}
                </p>
              ))}
            </div>
          </div>

          {/* Exhibitions Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src={exhibition_icon}
                alt="exhibition icon"
                className="w-8"
              />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                EXHIBITIONS
              </h3>
            </div>
            <div>
              {[
                "Solo Exhibition: 'Vision in Motion' – New York (2022)",
                "Solo Exhibition: 'Color and Chaos' – Athr Gallery, Jeddah (2018)",
                "Group Exhibition: 'Art Dubai' – Dubai, UAE (2020)",
                "Solo Exhibition: 'Beyond Boundaries' – London (2019)",
                "Group Exhibition: 'Contemporary Voices' – Paris (2017)",
                "Solo Exhibition: 'The Awakening Series' – Riyadh (2016)",
              ].map((Exhibition, idx) => (
                <p
                  key={idx}
                  className="text-xs text-black font-montserrat-light"
                >
                  {Exhibition}
                </p>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src={achievement_icon}
                alt="achievement icon"
                className="w-8"
              />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                ACHIEVEMENTS
              </h3>
            </div>
            <div>
              {[
                "Venice Biennale – Saudi Pavilion (2019)",
                "Sharjah Biennial – United Arab Emirates (2017)",
                "Biennale of Contemporary Art – Florence, Italy (2015)",
              ].map((Achievements, idx) => (
                <p
                  key={idx}
                  className="text-xs text-black font-montserrat-light"
                >
                  {Achievements}
                </p>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img src={education_icon} alt="education icon" className="w-8" />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                EDUCATION
              </h3>
            </div>
            <div>
              {[
                "Bachelor of Arts in Fine Arts – Parsons School of Design, New York, USA",
              ].map((Education, idx) => (
                <p
                  key={idx}
                  className="text-xs text-black font-montserrat-light"
                >
                  {Education}
                </p>
              ))}
            </div>
          </div>

          {/* Digital Tools Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src={digitaltools_icon}
                alt="digital tools icon"
                className="w-8"
              />
              <h3 className="ml-2 text-yankees-blue font-montserrat-light text-sm">
                DIGITAL TOOLS
              </h3>
            </div>
            <div>
              {[
                "Adobe Illustrator",
                "Adobe Indesign",
                "Adobe Photoshop",
                "Keynote",
                "Canva",
              ].map((DigitalTools, idx) => (
                <p
                  key={idx}
                  className="text-xs text-black font-montserrat-light"
                >
                  {DigitalTools}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sideProfileCreator;
