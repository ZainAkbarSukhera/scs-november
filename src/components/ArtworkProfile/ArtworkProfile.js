import React from "react";
import SideArtworkProfile from "./SideArtworkProfile";
import HeaderArtworkProfile from "./HeaderArtworkProfile";
import Navbar from "../NavigationBar/Navbar";
import ArtworkProfileFooter from "./ArtworkProfileFooter";

import abq1 from "../../assets/abq_1.jpg";
import abq2 from "../../assets/abq_2.jpg";
import abq3 from "../../assets/abq_3.jpg";
import abq4 from "../../assets/abq_pm_2.jpg";
import abq5 from "../../assets/abq_pm_4.png";

import MainArtworkProfile from "./MainArtworkProfile";

const artworks = [
  {
    id:1,
    image: abq1,
    title: "After Marylin",
    artist: "Noura Al-Mutairi",
    initialLikes: 25700,
    initialViews: 50000,
    price: 100000,
  },
  {
    id:2,
    image: abq2,
    title: "Landscapes (XI)",
    artist: "Ahmed Al-Turki",
    initialLikes: 19500,
    initialViews: 37000,
    price: 300000,
  },
  {
    id:3,
    image: abq3,
    title: "Frog",
    artist: "Hanan Al-Ahmadi",
    initialLikes: 17400,
    initialViews: 30000,
    price: 25000,
  },
  {
    id:4,
    image: abq4,
    title: "Landscapes (VIII)",
    artist: "Ahmed Al-Turki",
    initialLikes: 15400,
    initialViews: 25000,
    price: 54000,
  },
];

const artworkDetails = {
  artName: "Kingdom of Love (2012)",
  artistName: "Abdullah Qandeel",
  ownerName: "Misk Foundation",
  image: abq1,
  artworkDescription: ` "A Kingdom of Love" is a captivating piece from Abdullah Qandeel, 
  one of Saudi Arabia's most prominent contemporary artists. 
  Created in 2012, this oil on canvas work measures 150 x 200 cm, 
  making it an impressive statement piece that commands 
  attention in any space. The artwork embodies Qandeel's bold and 
  expressive style, characterized by dynamic brushstrokes and a 
  vibrant color palette.

  The painting explores themes of love, unity, and cultural identity, 
  depicted through abstract forms that evoke a sense of movement 
  and emotion. The rich textures and interplay of colors invite 
  viewers to interpret the piece in their own way, making it a deeply 
  personal and evocative work of art.
  This piece is a unique, one-of-a-kind creation, underscoring its 
  rarity and the exclusivity of owning a Qandeel original. "A 
  Kingdom of Love" is signed by Abdullah Qandeel in the lower right 
  corner, ensuring its authenticity. The artwork comes with a 
  Certificate of Authenticity directly from the artist, further 
  solidifying its provenance.
  The painting is presented in a custom-made contemporary black 
  frame, designed to complement the boldness of the artwork 
  without detracting from its visual impact. The frame is included in 
  the sale, providing a ready-to-hang masterpiece for collectors.
  Priced at SAR 1,200,000, "A Kingdom of Love" offers collectors the 
  opportunity to acquire a significant work from a leading figure in 
  Saudi contemporary art, reflecting both artistic value and cultural 
  importance.`,
  size: "150cmx200cm",
  format: "Oil on Canvas",
  certifications: "Copyrighted with SAIP",
  price: 125000,
  yearOfCreation: "2012",
  frame: "Unframed (canvas only)",
  rarity: "Rare",
  signature: "Signed by Artist",
  Views: 50000,
  Appreciations: 20000,
  Favourited: 30000,
};

const ArtworkProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area with FilterMenu ,Cards */}
      <div className="flex flex-grow">
        {/* Sidebar filter menu on the left */}
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          <SideArtworkProfile artworkDetails={artworkDetails} />
        </aside>

        {/* Main section */}
        <main className="flex-grow p-4">
          {/* Header section */}
          <div className="mt-32 px-0 mb-4 border-b border-gray-400">
            <HeaderArtworkProfile artworkDetails={artworkDetails} />
          </div>

          {/* Main artwork profile section */}
          <MainArtworkProfile artworkDetails={artworkDetails} />

          <footer className="bg-gray-200 mt-auto">
            <ArtworkProfileFooter artworks={artworks} />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ArtworkProfile;
