// import React from "react";
// import SideArtworkProfile from "./SideArtworkProfile";
// import HeaderArtworkProfile from "./HeaderArtworkProfile";
// import Navbar from "../NavigationBar/Navbar";
// import ArtworkProfileFooter from "./ArtworkProfileFooter";
// import Footer from "../Footer/footer";

// import abq1 from "../../assets/abq_1.jpg";
// import abq2 from "../../assets/abq_2.jpg";
// import abq3 from "../../assets/abq_3.jpg";
// import abq4 from "../../assets/abq_pm_2.jpg";
// import abq5 from "../../assets/abq_pm_4.png";

// import MainArtworkProfile from "./MainArtworkProfile";

// const artworks = [
//   {
//     id:1,
//     image: abq1,
//     title: "After Marylin",
//     artist: "Noura Al-Mutairi",
//     initialLikes: 25700,
//     initialViews: 50000,
//     price: 100000,
//   },
//   {
//     id:2,
//     image: abq2,
//     title: "Landscapes (XI)",
//     artist: "Ahmed Al-Turki",
//     initialLikes: 19500,
//     initialViews: 37000,
//     price: 300000,
//   },
//   {
//     id:3,
//     image: abq3,
//     title: "Frog",
//     artist: "Hanan Al-Ahmadi",
//     initialLikes: 17400,
//     initialViews: 30000,
//     price: 25000,
//   },
//   {
//     id:4,
//     image: abq4,
//     title: "Landscapes (VIII)",
//     artist: "Ahmed Al-Turki",
//     initialLikes: 15400,
//     initialViews: 25000,
//     price: 54000,
//   },
// ];

// const artworkDetails = {
//   artName: "Kingdom of Love (2012)",
//   artistName: "Abdullah Qandeel",
//   ownerName: "Misk Foundation",
//   image: abq1,
//   artworkDescription: ` "A Kingdom of Love" is a captivating piece from Abdullah Qandeel, 
//   one of Saudi Arabia's most prominent contemporary artists. 
//   Created in 2012, this oil on canvas work measures 150 x 200 cm, 
//   making it an impressive statement piece that commands 
//   attention in any space. The artwork embodies Qandeel's bold and 
//   expressive style, characterized by dynamic brushstrokes and a 
//   vibrant color palette.

//   The painting explores themes of love, unity, and cultural identity, 
//   depicted through abstract forms that evoke a sense of movement 
//   and emotion. The rich textures and interplay of colors invite 
//   viewers to interpret the piece in their own way, making it a deeply 
//   personal and evocative work of art.
//   This piece is a unique, one-of-a-kind creation, underscoring its 
//   rarity and the exclusivity of owning a Qandeel original. "A 
//   Kingdom of Love" is signed by Abdullah Qandeel in the lower right 
//   corner, ensuring its authenticity. The artwork comes with a 
//   Certificate of Authenticity directly from the artist, further 
//   solidifying its provenance.
//   The painting is presented in a custom-made contemporary black 
//   frame, designed to complement the boldness of the artwork 
//   without detracting from its visual impact. The frame is included in 
//   the sale, providing a ready-to-hang masterpiece for collectors.
//   Priced at SAR 1,200,000, "A Kingdom of Love" offers collectors the 
//   opportunity to acquire a significant work from a leading figure in 
//   Saudi contemporary art, reflecting both artistic value and cultural 
//   importance.`,
//   size: "150cmx200cm",
//   format: "Oil on Canvas",
//   certifications: "Copyrighted with SAIP",
//   price: 125000,
//   yearOfCreation: "2012",
//   frame: "Unframed (canvas only)",
//   rarity: "Rare",
//   signature: "Signed by Artist",
//   Views: 50000,
//   Appreciations: 20000,
//   Favourited: 30000,
// };

// const ArtworkProfile = () => {
//   return (
//         <div className="min-h-screen flex flex-col">
//        {/* Navbar at the top */}
//        <Navbar />

//        {/* Main content area with FilterMenu ,Cards */}
//        <div className="flex flex-grow xs:flex-col lg:flex-row ">
//          {/* Sidebar filter menu on the left */}
//          <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
//            <SideArtworkProfile artworkDetails={artworkDetails} />
//          </aside>

//          {/* Main section */}
//          <main className="flex-grow p-4">
//            {/* Header section */}
//            <div className="lg:mt-32  xs:mt-4 px-0 mb-4 border-b border-gray-400">
//              <HeaderArtworkProfile artworkDetails={artworkDetails} />
//            </div>

//            {/* Main artwork profile section */}
//            <MainArtworkProfile artworkDetails={artworkDetails} />

//            <footer className="bg-gray-200 mt-auto">
//              <ArtworkProfileFooter artworks={artworks} />
//            </footer>
//          </main>
//        </div>
//        <Footer />
//      </div>
//   );
// };

// export default ArtworkProfile;

// ArtworkProfile.jsx
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Import useLocation
import { getArtworksById, getArtworkByArtworkId } from "../../api/artwork";

import SideArtworkProfile from "./SideArtworkProfile";
import HeaderArtworkProfile from "./HeaderArtworkProfile";
import MainArtworkProfile from "./MainArtworkProfile";
import ArtworkProfileFooter from "./ArtworkProfileFooter";
import Navbar from "../NavigationBar/Navbar";
import Footer from "../Footer/footer";

const ArtworkProfile = () => {
  const { artworkId } = useParams();
  const location = useLocation(); // Use useLocation to access query parameters

  const [artworkDetails, setArtworkDetails] = useState(null);
  const [moreArtworksByArtist, setMoreArtworksByArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // New state to manage the currently displayed image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchArtworkData = async () => {
      console.log("Artwork Id received: ", artworkId);
      if (!artworkId) {
        setError("Artwork ID is missing from the URL.");
        setLoading(false);
        return;
      }

      // Extract imageIndex from URL query parameters
      const params = new URLSearchParams(location.search);
      const initialImageIndex = parseInt(params.get('imageIndex'), 10);
      // Set the initial image index, default to 0 if not provided or invalid
      setCurrentImageIndex(isNaN(initialImageIndex) ? 0 : initialImageIndex);


      try {
        setLoading(true);
        setError(null);

        const artworkResponse = await getArtworkByArtworkId(artworkId);
        setArtworkDetails(artworkResponse.artwork);

        if (artworkResponse.artwork && artworkResponse.artwork.artistId) {
          const artistId = artworkResponse.artwork.artistId._id;
          console.log("Artist id we have now is:", artistId);
          const artistArtworksResponse = await getArtworksById(artistId);
          console.log("artistArtworks:", artistArtworksResponse);

          const filteredArtworks = artistArtworksResponse.data.filter(
            (art) => art._id !== artworkId
          ).slice(0, 4);
          setMoreArtworksByArtist(filteredArtworks);
        }

      } catch (err) {
        console.error("Failed to fetch artwork data:", err);
        setError(err.message || "Failed to load artwork details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtworkData();
  }, [artworkId, location.search]); // Re-run effect if artworkId or query params change

  // Function to change the displayed image (e.g., for a carousel or thumbnail clicks within ArtworkProfile)
  const handleImageChange = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };


  if (loading) {
    return <div className="text-center py-10 text-xl  mt-72">Loading artwork details...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600 text-xl font-montserrat-medium">Error: {error}</div>;
  }

  if (!artworkDetails) {
    return <div className="text-center py-10 mt-72 text-gray-700 text-xl font-montserrat-medium">Artwork not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow xs:flex-col lg:flex-row ">
        <aside className="w-full sm:w-auto md:w-1/5 lg:w-1/4 p-4 mt-32">
          <SideArtworkProfile artworkDetails={artworkDetails} />
        </aside>

        <main className="flex-grow p-4">
          <div className="lg:mt-32 xs:mt-4 px-0 mb-4 border-b border-gray-400">
            <HeaderArtworkProfile artworkDetails={artworkDetails} />
          </div>

          {/* Pass artworkDetails and currentImageIndex to MainArtworkProfile */}
          {/* Also pass a handler to change the image if MainArtworkProfile has controls for it */}
          <MainArtworkProfile
            artworkDetails={artworkDetails}
            initialImageIndex={currentImageIndex} // Use this to set the initial image
            onImageChange={handleImageChange} // Pass a setter if MainArtworkProfile allows changing images
          />

          <footer className="bg-gray-200 mt-auto">
            <ArtworkProfileFooter artworks={moreArtworksByArtist} />
          </footer>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ArtworkProfile;