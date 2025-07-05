// import { React,useState } from "react";

// const ProfileProjects =({projects})=> {

//   return (
//     <div>
//     <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium mb-4">
//       Projects
//     </h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-6 p-4">
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className="overflow-hidden flex flex-col"
//         >
//           <div className="relative">
//             {/* Display up to three photos */}
//             {project.photos && project.photos.length > 1 ? (
//               <div className="grid grid-cols-3 gap-1">
//                 {project.photos.slice(0, 3).map((photo, idx) => (
//                   <img
//                     key={idx}
//                     src={photo}
//                     alt={`Project ${index + 1} Photo ${idx + 1}`}
//                     className="object-cover w-full h-44"
//                   />
//                 ))}
//               </div>
//             ) : (
//               project.photos && project.photos[0] && (
//                 <img
//                   src={project.photos[0]}
//                   alt={`Project ${index + 1}`}
//                   className="object-cover w-full h-44"
//                 />
//               )
//             )}
//           </div>

//           {/* Project name  description */}
//           <div >
//             <h2 className="text-base font-montserrat-medium text-yankees-blue">{project.name}</h2>
//             <p className="text-sm font-montserrat-light text-yankees-blue">{project.description}</p>
//           </div>

          
//         </div>
//       ))}
//     </div>

  
//     <div className="text-center mt-6">
//       <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//         Discover More
//       </button>
//     </div>
    
//   </div>
//   );
// };

// export default ProfileProjects;


import React from 'react';

const ProfileProjects = ({ projects }) => {

  // Add a check for no projects to display a message
  if (!projects || projects.length === 0) {
    return (
      <div>
        <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium mb-4">
          Projects
        </h2>
        <div className="text-center py-8 text-gray-600 font-montserrat-light">
          No projects to display yet.
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="border-b border-gray-400 text-lg text-yankees-blue font-montserrat-medium mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-x-6 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden flex flex-col"
          >
            <div className="relative">
              {/* Display up to three photos from projectImages */}
              {/* Ensure project.projectImages exists and has items */}
              {project.projectImages && project.projectImages.length > 1 ? (
                <div className="grid grid-cols-3 gap-1">
                  {project.projectImages.slice(0, 3).map((image, idx) => ( // Changed 'photo' to 'image' for clarity
                    <img
                      key={idx}
                      src={image} // Use 'image' (the URL) directly
                      alt={`${project.projectName || 'Project'} Photo ${idx + 1}`} // Better alt text
                      className="object-cover w-full h-44"
                    />
                  ))}
                </div>
              ) : (
                // If only one or no image, display the first one if it exists
                project.projectImages && project.projectImages[0] && (
                  <img
                    src={project.projectImages[0]} // Use the first image
                    alt={project.projectName || 'Project Image'} // Better alt text
                    className="object-cover w-full h-44"
                  />
                )
              )}
            </div>

            {/* Project name and displayed venue (formerly description) */}
            <div>
              <h2 className="text-base font-montserrat-medium text-yankees-blue">
                {project.projectName || 'Untitled Project'} {/* Use projectName */}
              </h2>
              <p className="text-sm font-montserrat-light text-yankees-blue">
                {project.displayedVenue || 'No venue specified'} {/* Use displayedVenue */}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div> */}

    </div>
  );
};

export default ProfileProjects;