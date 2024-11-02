import { React,useState } from "react";

const ProfileProjects =({projects})=> {

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
              {/* Display up to three photos */}
              {project.photos && project.photos.length > 1 ? (
                <div className="grid grid-cols-3 gap-1">
                  {project.photos.slice(0, 3).map((photo, idx) => (
                    <img
                      key={idx}
                      src={photo}
                      alt={`Project ${index + 1} Photo ${idx + 1}`}
                      className="object-cover w-full h-44"
                    />
                  ))}
                </div>
              ) : (
                project.photos && project.photos[0] && (
                  <img
                    src={project.photos[0]}
                    alt={`Project ${index + 1}`}
                    className="object-cover w-full h-44"
                  />
                )
              )}
            </div>
  
            {/* Project name  description */}
            <div >
              <h2 className="text-base font-montserrat-medium text-yankees-blue">{project.name}</h2>
              <p className="text-sm font-montserrat-light text-yankees-blue">{project.description}</p>
            </div>

            
          </div>
        ))}
      </div>

    
      <div className="text-center mt-6">
        <button className="px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
          Discover More
        </button>
      </div>
      
    </div>
  );
};

export default ProfileProjects;

