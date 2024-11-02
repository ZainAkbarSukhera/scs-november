import React from "react";

import CreatorProfile from "../components/CreatorProfile/ContentCreatorProfile";
import Navbar from "../components/NavigationBar/Navbar";
import SideProfileCreator from "../components/CreatorProfile/SideProfileCreator";
import HeaderCreatorProfile from "../components/CreatorProfile/headerCreatorProfile";

import image1 from "../assets/abqandeelprofile.jpg";

const CreatorDetails =  {
  CreatorName: "Abdullah Qandeel",
  host: 'Jeddah- Saudi Arabia',
  profession: 'CONTEMPORARY ARTIST',
  website: 'www.theqandeel.com',
  ProfileViews: 25000,
  Appreciations: 5000,
  Followers: 7900,
  imageUrl: image1,
  profilebio:"Abdullah Qandeel is a prominent Saudi contemporary artist known for his bold and dynamic abstract paintings. Born in 1988 in Jeddah, Saudi Arabia, Qandeel’s artistic journey began with a deep interest in exploring identity, cultural heritage, and the complexities of modern life. Educated in both the Middle East and the West, his works reflect a unique blend of influences that challenge traditional norms while embracing modernity. Over the years, Qandeel has gained international recognition, exhibiting his work in major cities around the world and becoming a leading figure in Saudi Arabia’s contemporary art scene.",
};

const sampleUserData = {
  skills: ["Abstract Painting",
                 "Colour Theory",
                 "Mixed Media Techniques",
                 "Large-Scale Art",
                 "Concept Development",
                 "Expressive Brushwork",
                 "Public Art",
                 "Installation Art",],
  experience: ["Worked at Company A", "Freelanced in Graphic Design", "5 years of experience"],
  exhibitions: ["Exhibition A, 2022", "Exhibition B, 2023"],
  achievements: ["Awarded Artist of the Year", "Published in Art Magazine"],
  education: ["Bachelor's in Fine Arts", "Certificate in Digital Design"],
  digital_tools: ["Adobe Photoshop", "Illustrator", "Procreate"],
};


const CreatorProfileComponent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Header section */}
     

      {/* Main content area with FilterMenu and Cards */}
      <div className="flex flex-grow ">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:w-auto md:w-1/5 p-4 mt-32">
          <SideProfileCreator 
            creatorDetails={CreatorDetails}
            userData={sampleUserData}
          />
        </aside>

        {/* Main section */}
        <main className="flex-grow p-4">
        <div className="mt-32 px-0">
        <HeaderCreatorProfile 
          ProfileViews={CreatorDetails.ProfileViews} 
          Appreciations={CreatorDetails.Appreciations} 
          Followers={CreatorDetails.Followers} 
        />
      </div>

          <CreatorProfile />
        </main>
      </div>

      {/* Footer always at the bottom */}
      {/* <footer className="bg-gray-200 mt-auto p-4"> */}
        {/* Footer content (e.g., <BidProfileFooter />) */}
      {/* </footer> */}
    </div>
  );
};

export default CreatorProfileComponent;