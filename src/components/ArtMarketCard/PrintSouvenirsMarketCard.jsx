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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { useNavigate } from "react-router-dom";


// const PrintSouvenirsMarketCard = ({ printData }) => {
//   const navigate = useNavigate();

//   // Handle click on an artwork, navigating to its specific profile
//   const handleOnClick = (artworkId) => {
//     navigate(`/artwork-profile/${artworkId}`); // Assuming artwork-profile route takes an ID
//   };

//   return (
//     <div className="container mx-auto p-4 bg-white">
//       {/* Iterate over the printData array (each item is an artwork object) */}
//       {printData.map((artwork, artworkIndex) => (
//         <div key={artwork._id || artworkIndex} className="mb-8">
//           {" "}
//           {/* Add margin-bottom for separation */}
//           {/* Image Row */}
//           <div className="lg:flex lg:flex-wrap lg:gap-2 xs:grid xs:grid-cols-2 xs:gap-4">
//             {/* Check if images array exists before mapping */}
//             {artwork.images &&
//               artwork.images.map((image, imageIndex) => (
//                 <div
//                   key={imageIndex}
//                   className={`${imageIndex === 0 ? "w-48" : "w-auto"}`}
//                 >
//                   <img
//                     src={image.url.url}
//                     alt={`${artwork.name} Image ${imageIndex + 1}`}
//                     // Pass artwork._id to handleOnClick
//                     onClick={() => handleOnClick(artwork._id)}
//                     className="object-cover h-48 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100"
//                   />
//                 </div>
//               ))}
//           </div>

//           {/* Text Section */}
//           <div className="flex flex-col items-start mt-1">
//             <span className="text-sm font-montserrat-medium text-red-600">
//               {artwork.title}
//             </span>
//             <span className="text-xs text-red-600 font-montserrat-light">
//               {artwork.yearOfCreation}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PrintSouvenirsMarketCard;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // PrintSouvenirsMarketCard.js
// import React from "react";
// import { useNavigate } from "react-router-dom";

// // eslint-disable-next-line no-unused-vars
// const PrintSouvenirsMarketCard = ({ printData, cardView }) => {
//   const navigate = useNavigate();

//   const handleOnClick = (artworkId) => {
//     console.log("printData ka ye scene hai bhai: ",artworkId);
//     // console.log("Abhai jee ye id match ho rahi hai: ", artworkId);
//     navigate(`/artwork-profile/${artworkId}`);
//   };

//   // --- COMMON STYLING FOR BOTH GRID AND LIST VIEWS (NOW THEY ARE THE SAME) ---
//   // The outer div container styling
//   const outerContainerClasses = "container mx-auto p-4 bg-white";

//   // Individual artwork item styling (e.g., for spacing between artwforks)
//   const artworkItemClasses = "mb-8";

//   // Image row container styling (for multiple images within an artwork)
//   const imageRowClasses = "lg:flex lg:flex-wrap lg:gap-2 xs:grid xs:grid-cols-2 xs:gap-4";

//   // Conditional wrapper class for the first image vs. subsequent images
//   const imageWrapperConditionalClasses = (imageIndex) => `${imageIndex === 0 ? "w-48" : "w-auto"}`;

//   // Individual image styling
//   const imageClasses = "object-cover h-48 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100";

//   // Text section styling
//   const textSectionClasses = "flex flex-col items-start mt-1";
//   const titleClasses = "text-sm font-montserrat-medium text-yankees-blue";
//   const yearClasses = "text-xs text-yankees-blue font-montserrat-light";


//   console.log("PrintData is as follows: ", printData);

//   return (
//     // Both grid and list view will use the same outer container classes
//     <div className={outerContainerClasses}>
//       {printData.map((artwork, artworkIndex) => (
//         // Both grid and list view will use the same individual artwork item classes
//         <div
//           key={artwork._id || artworkIndex}
//           className={artworkItemClasses}
//           onClick={() => handleOnClick(artwork.artworkId)} // The whole artwork div is clickable
//         >
//           {/* Image Row Container (Same for both views) */}
//           <div className={imageRowClasses}>
//             {/* Check if images array exists before mapping */}
//             {artwork.images &&
//               artwork.images.map((image, imageIndex) => (
//                 <div
//                   key={imageIndex}
//                   className={imageWrapperConditionalClasses(imageIndex)}
//                 >
//                   <img
//                     // Use image.url as per the provided original code's structure
//                     src={image.url}
//                     alt={image.altText || `${artwork.title} Image ${imageIndex + 1}`}
//                     className={imageClasses}
//                   />
//                 </div>
//               ))}
//           </div>

//           {/* Text Section (Same for both views) */}
//           <div className={textSectionClasses}>
//             <span className={titleClasses}>{artwork.title}</span>
//             <span className={yearClasses}>{artwork.yearOfCreation}</span>
//             {/* Artist and Price are not in the original PrintSouvenirsMarketCard's text section. */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PrintSouvenirsMarketCard;

// PrintSouvenirsMarketCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PrintSouvenirsMarketCard = ({ printData }) => {
  const navigate = useNavigate();

  // Modify handleOnClick to take artworkId and clickedImageIndex
  const handleOnClick = (artworkId, clickedImageIndex) => {
    console.log("Navigating to artwork profile with ID:", artworkId, "and image index:", clickedImageIndex);
    // Append the clickedImageIndex as a query parameter
    navigate(`/artwork-profile/${artworkId}?imageIndex=${clickedImageIndex}`);
  };

  // --- COMMON STYLING FOR BOTH GRID AND LIST VIEWS (NOW THEY ARE THE SAME) ---
  const outerContainerClasses = "container mx-auto p-4 bg-white";
  const artworkItemClasses = "mb-8";
  const imageRowClasses = "lg:flex lg:flex-wrap lg:gap-2 xs:grid xs:grid-cols-2 xs:gap-4";
  const imageWrapperConditionalClasses = (imageIndex) => `${imageIndex === 0 ? "w-48" : "w-auto"}`;
  const imageClasses = "object-cover h-48 col-span-1 transform transition duration-100 hover:scale-105 hover:shadow-lg hover:opacity-100";
  const textSectionClasses = "flex flex-col items-start mt-1";
  const titleClasses = "text-sm font-montserrat-medium text-yankees-blue";
  const yearClasses = "text-xs text-yankees-blue font-montserrat-light";

  console.log("PrintData is as follows: ", printData);

  return (
    <div className={outerContainerClasses}>
      {printData.map((artwork, artworkIndex) => (
        <div
          key={artwork._id || artworkIndex}
          className={artworkItemClasses}
          // The whole artwork div is now clickable to the artwork profile,
          // but we want the specific image to trigger navigation with its index.
          // So, remove onClick from here and add it to the image itself.
        >
          {/* Image Row Container (Same for both views) */}
          <div className={imageRowClasses}>
            {/* Check if images array exists before mapping */}
            {artwork.images &&
              artwork.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className={imageWrapperConditionalClasses(imageIndex)}
                >
                  <img
                    src={image.url}
                    alt={image.altText || `${artwork.title} Image ${imageIndex + 1}`}
                    className={imageClasses}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent parent div's onClick from firing if it existed
                        handleOnClick(artwork.artworkId, imageIndex); // Pass artworkId and imageIndex
                    }}
                  />
                </div>
              ))}
          </div>

          {/* Text Section (Same for both views) */}
          <div className={textSectionClasses}>
            <span className={titleClasses}>{artwork.title}</span>
            <span className={yearClasses}>{artwork.yearOfCreation}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrintSouvenirsMarketCard;