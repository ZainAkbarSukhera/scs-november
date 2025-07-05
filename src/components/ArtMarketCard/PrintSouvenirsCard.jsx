// import React from "react";
// import { useNavigate } from "react-router-dom";



// const PrintSouvenirsCard =({printData})=> {
//   const navigate=useNavigate();
//   const handleOnClick = () => {
//     navigate('/artwork-profile');}

//     return (
//       <div className="container mx-auto p-4 bg-white">
//       {/* Image Row */}
//       <div className="lg:flex lg:flex-wrap lg:gap-2 xs:grid xs:grid-cols-2 xs:gap-4">
//         {printData.images.map((image, index) => (
//           <div
//             key={index}
//             className={`${
//               index === 0 ? 'w-88' : 'w-auto'
//             }`}
//           >
//             <img
//               src={image}
//               alt={`Image ${index + 1}`}
//               onClick={handleOnClick}
//               className="object-cover h-52 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100"
//             />
//           </div>
//         ))}
//       </div>
    
//       {/* Text Section */}
//       <div className="flex flex-col items-start mt-1">
//         <span className="text-sm font-montserrat-medium text-yankees-blue">{printData.name}</span>
//         <span className="text-xs text-yankees-blue font-montserrat-light">{printData.artist}</span>
//       </div>
//     </div>
//     );
// };

// export default PrintSouvenirsCard;



import React from "react";
import { useNavigate } from "react-router-dom";


const PrintSouvenirsCard = ({ printData }) => {
  const navigate = useNavigate();

  // Modify handleOnClick to accept artworkId and the index of the clicked image
  const handleOnClick = (artworkId, clickedImageIndex) => {
    console.log("Navigating from PrintSouvenirsCard. Artwork ID:", artworkId, "Image Index:", clickedImageIndex);
    // Navigate to the artwork profile, passing the image index as a query parameter
    navigate(`/artwork-profile/${artworkId}?imageIndex=${clickedImageIndex}`);
  };

  return (
    <div className="container mx-auto p-4 bg-white">
      {/* Iterate over the printData array (each item is an artwork object) */}
      {printData.map((artwork, artworkIndex) => (
        <div key={artwork._id || artworkIndex} className="mb-8">
          {" "}
          {/* Add margin-bottom for separation */}
          {/* Image Row */}
          <div className="lg:flex lg:flex-wrap lg:gap-2 xs:grid xs:grid-cols-2 xs:gap-4">
            {/* Check if images array exists before mapping */}
            {artwork.images &&
              artwork.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className={`${imageIndex === 0 ? "w-48" : "w-auto"}`}
                >
                  <img
                    src={image.url}
                    alt={`${artwork.name} Image ${imageIndex + 1}`}
                    // Pass artwork._id and the current imageIndex to handleOnClick
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent any parent click handlers
                        handleOnClick(artwork._id, imageIndex);
                    }}
                    className="object-cover h-48 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100"
                  />
                </div>
              ))}
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-start mt-1">
            <span className="text-sm font-montserrat-medium text-yankees-blue">
              {artwork.title}
            </span>
            <span className="text-xs text-yankees-blue font-montserrat-light">
              {artwork.yearOfCreation}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrintSouvenirsCard;