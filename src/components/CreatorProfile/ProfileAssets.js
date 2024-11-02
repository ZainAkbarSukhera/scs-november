import React from 'react';

import abq1 from "../../assets/abq_1.jpg";
import abq2 from '../../assets/Landscapes-13.png';
import abq3 from "../../assets/abq_3.jpg";
import abq4 from "../../assets/abq_pm_2.jpg";
import abq8 from '../../assets/abq8.png';
import abq9 from '../../assets/abq9.png';
import abq10 from '../../assets/abq10.png';
import abq11 from '../../assets/abq11.png';
import abq12 from '../../assets/abq12.png';

import CreatorProfileCard from './CreatorProfileCard';
import PrintSouvenirsCard from '../ArtMarketCard/PrintSouvenirsCard';

const artworks =
[
  {
    image: abq1,
    title: 'After Marylin',
    artist: 'Noura Al-Mutairi',
    initialLikes: 25700,
    initialViews: 50000,
  },
  {
    image: abq2,
    title: 'Landscapes (XI)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 19500,
    initialViews: 37000,
  },
  {
    image: abq3,
    title: 'Frog',
    artist: 'Hanan Al-Ahmadi',
    initialLikes: 17400,
    initialViews: 30000,
  },
  {
    image: abq4,
    title: 'Landscapes (VIII)',
    artist: 'Ahmed Al-Turki',
    initialLikes: 15400,
    initialViews: 25000,
  },
];

const prints_souvenirs = {
  images:[abq2, abq8, abq9, abq10, abq11, abq12],
  name: 'Will-Battle (2021)',
  artist: 'Abdullah Qandeel',
};






const ProfileAssets = () => {

  return (
    <div>
      <div className="mt-8">
        <p className="border-b border-gray-400 text-yankees-blue mb-4">
          <span className="font-montserrat-medium text-sm">PRIMARY MARKET -</span>
          <span className="font-montserrat-light text-xs ml-1">
            refers to the sale of artworks directly from the artist or through intermediaries, where the work is sold for the first time
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
          {artworks.map((art, index) => (
            <CreatorProfileCard key={index} {...art} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
            Discover More
          </button>
        </div>
      </div>
  
      <div className="mt-20">
        <p className="border-b border-gray-400 text-yankees-blue mb-4">
          <span className="font-montserrat-medium text-sm">SECONDARY MARKET -</span>
          <span className="font-montserrat-light text-xs ml-1">
            refers to the resale of artworks that have already been sold at least once
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
          {artworks.map((art, index) => (
            <CreatorProfileCard key={index} {...art} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
            Discover More
          </button>
        </div>
      </div>
  
      <div className="mt-20">
        <p className="border-b border-gray-400 text-yankees-blue mb-4">
          <span className="font-montserrat-medium text-sm">NFTs</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 py-2">
          {artworks.map((art, index) => (
            <CreatorProfileCard key={index} {...art} />
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
            Discover More
          </button>
        </div>
      </div>
  
      <div className="mt-20 mb-4">
        <p className="border-b border-gray-400 text-yankees-blue mb-4">
          <span className="font-montserrat-medium text-sm">PRINTS & SOUVENIRS</span>
        </p>
        <div className="flex justify-between py-2">
          <PrintSouvenirsCard printData={prints_souvenirs} />
        </div>
        <div className="text-center mt-6">
          <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAssets;