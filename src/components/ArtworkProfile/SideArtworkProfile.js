import React from "react";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { artworkSideTitles } from "../../static/data";

const SideArtworkProfile = ({artworkDetails}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-start mb-8">
        <div className="border-b-2 border-black mb-2 pb-1 w-full">
          <h1 className="text-3xl font-montserrat-bold text-yankees-blue whitespace-nowrap">
            {artworkDetails.artName}
          </h1>
        </div>
        <p className="text-2xl font-montserrat-regular text-red-500">
          {artworkDetails.artistName}
        </p>
        <p className="text-palatinate-purple font-montserrat-light text-xs mt-1">
          Owner: {artworkDetails.ownerName}
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
        {artworkSideTitles.map((detail) => (
          artworkDetails[detail.id] && ( // Only render if artworkDetails has the key
            <div key={detail.id} className="flex items-start space-x-2">
              <img src={detail.img} alt={`${detail.name} icon`} className="w-6 h-6" />
              <div>
                <p className="text-sm text-yankees-blue font-montserrat-light">{detail.name}:</p>
                <p className="text-sm text-yankees-blue font-montserrat-medium">
                  {artworkDetails[detail.id]}
                  {detail.id === 'price' ? ' SAR' : ''} 
                </p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default SideArtworkProfile;

