import React from "react";
// import { FaImage, FaUserFriends, FaDollarSign, FaCertificate, FaWallet, FaPercentage, FaMobileAlt, FaLightbulb, FaFileUpload, FaChalkboardTeacher, FaCity } from "react-icons/fa";

import supported from '../assets/artistSupportedCI.png';
import listed from '../assets/artworkListedCI.png';
import sold from '../assets/artworkSoldCI.png';
import covered from '../assets/citiesCoveredCI.png';
import registered from '../assets/creativesRegisteredCI.png';
import hosted from '../assets/workshopHostedCI.png';
import nft from '../assets/nftCI.png';
import patron from '../assets/patronCI.png';
import pListed from '../assets/projectListedCI.png';
import sales from '../assets/totalSalesCI.png';
import submission from '../assets/projectSubmissionCI.png';
import intermediaries from '../assets/intermediariesCI.png';

const CreativeImpact = () =>  {
  // Hardcoded statistics for now
  const stats = [
    { icon: listed, value: 200, label: "Artworks Listed" },
    { icon: supported, value: 55, label: "Artists Supported" },
    { icon: sold, value: 75, label: "Artworks Sold" },
    { icon: patron, value: 30, label: "Patrons" },
    {icon:intermediaries,value: 14, label: "Intermediaries"},
    { icon: nft, value: 47, label: "NFTs Minted and Sold" },
    { icon: sales, value: "3.5 M", label: "Total Sales Generated" },
    { icon: registered, value: 2100, label: "Creatives Registered" },
    { icon: pListed, value: 21, label: "Projects Listed" },
    { icon: submission, value: 300, label: "Project Submissions" },
    { icon: hosted, value: 25, label: "Workshops Hosted" },
    { icon: covered, value: 8, label: "Cities Covered" },
  ];

  return (
    <div className="bg-white px-8 py-16">
      <div className="flex justify-between items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat-medium font-bold text-yankees-blue mb-16">
            Creative Impact By Numbers
          </h2>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={stat.icon} alt={'Icon Stats'} className="text-5xl text-[#A14E95] mb-4 w-28 h-24" />
              <p className="text-4xl font-montserrat-medium text-palatinate-purple">{stat.value}</p>
              <p className="text-palatinate-purple font-montserrat-light text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CreativeImpact;
