// import react from 'react';
// import ServiceCard from './serviceCard';
// import ProfileProjects from './ProfileProjects';
// import ProfileFooter from './ProfileFooter';

// import abq1 from "../../assets/abq_1.jpg";
// import abq2 from "../../assets/abq_2.jpg";
// import abq3 from "../../assets/abq_3.jpg";
// import abq4 from "../../assets/abq_pm_2.jpg";
// import abq5 from "../../assets/abq_pm_4.png";
// import abq6 from "../../assets/abq_pm_8.png";
// import abq7 from "../../assets/abq_sm_4.png";
// import abq8 from "../../assets/abq_pm_1.PNG";
// import abq9 from "../../assets/abq_pm_3.PNG";
// import abq10 from "../../assets/abq_pm_5.PNG";
// import abq11 from "../../assets/abq_pm_6.PNG";
// import abq12 from "../../assets/abq_pm_7.PNG";
// import abq13 from "../../assets/abq_pm_8.png";
// import abq14 from "../../assets/abq_sm_1.PNG";
// import abq15 from "../../assets/abq_sm_2.PNG";
// import abq16 from "../../assets/abq_sm_3.PNG";
// import abq_eoa_1 from '../../assets/abq_eoa_1.jpg';
// import abq_eoa_2 from '../../assets/abq_eoa_2.jpg';
// import abq_va_1 from '../../assets/abq_va_1.png';
// import abq_va_2 from '../../assets/abq_va_2.png';
// import abq_va_3 from '../../assets/abq_va_3.png';

// import nugamshi from '../../assets/nugamshi_portrait.png';
// import basma from '../../assets/basma_portrait.png';
// import halla from '../../assets/halla_portrait.jpg';
// import shaker from '../../assets/shaker_portrait.png';

// const services = [
//   {
//     title: "Graphic Design",
//     service: "Custom Logo Design",
//     deliveryTime: "5 days",
//     cost: 150
//   },
//   {
//     title: "Web Development",
//     service: "E-commerce Website Development",
//     deliveryTime: "14 days",
//     cost: 1200
//   },
//   {
//     title: "Content Writing",
//     service: "SEO Blog Article Writing",
//     deliveryTime: "3 days",
//     cost: 75
//   },
//   {
//     title: "Digital Marketing",
//     service: "Social Media Marketing Package",
//     deliveryTime: "30 days",
//     cost: 500
//   },
//   {
//     title: "Photography",
//     service: "Product Photography Session",
//     deliveryTime: "7 days",
//     cost: 300
//   },
//   {
//     title: "Consulting",
//     service: "Business Strategy Consultation",
//     deliveryTime: "2 days",
//     cost: 200
//   }
// ];

// const artists=[
//   {image: nugamshi, name: 'Nugamshi'},
//   {image: halla, name:'Halla bint Khaled'},
//   {image: basma, name:'Basma Felemban'},
//   {image: shaker, name:'Shaker Kashgeri'},
// ];

// const projects= [
//   {
//     name: "Vogue Arabia",
//     description: "Creativity Terminal (2019)",
//     photos: [
//       abq_va_1,abq_va_2,abq_va_3
//     ],
//   },
//   {
//     name: "Edge of Arabia",
//     description: "KSA/LAX Exhibition ",
//     photos: [abq_eoa_1],
//   },
//   {
//     name: "Edge of Arabia",
//     description: " USA Tour (2014-2019)",
//     photos: [
//       abq_eoa_2
//     ],
//   },

// ];

// const ProfileServices = () =>  {

//   return (
//     <div>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
//       {services.map((service, index) => (
//         <ServiceCard key={index} {...service} />
//       ))}
//     </div>
//     <div className="text-center mt-6">
//       <button className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light">
//         Discover More
//       </button>
//   </div>

//     <div className=" mt-20">
//     <ProfileProjects projects={projects} />
//     </div>

//     <div className="xs:p-2 mx-auto mt-20">
//       <ProfileFooter artists={artists} />
//     </div>
// </div>

//   );
    

// };

// export default ProfileServices;



import React, { useState, useEffect } from 'react';
import ServiceCard from './serviceCard';
import ProfileProjects from './ProfileProjects'; // This component will receive the sliced projects
import ProfileFooter from './ProfileFooter';
import { getServicesByArtistId, getAllArtists } from '../../api/artist';

const ProfileServices = ({ creatorId, projects }) => {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [serviceError, setServiceError] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);

  const [recommendedArtists, setRecommendedArtists] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [artistError, setArtistError] = useState(null);

  // State to control how many services are displayed
  const [showAllServices, setShowAllServices] = useState(false);
  // State to control how many projects are displayed
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Effect for fetching SERVICES for the current artist
  useEffect(() => {
    const fetchServices = async () => {
      if (!creatorId) {
        console.warn("Creator ID is missing, cannot fetch services.");
        setLoadingServices(false);
        setServiceError("No creator ID provided to fetch services.");
        return;
      }

      try {
        setLoadingServices(true);
        setServiceError(null);

        const response = await getServicesByArtistId(creatorId);

        console.log("Services are: ", response);

        if (response && response.success) {
          setServices(response.data || []);
          setServiceImage(response.servicePicture || null);
        } else {
          setServices([]);
          setServiceImage(null);
          console.warn("No service data received or invalid response:", response);
          setServiceError(response.message || "Failed to load services due to invalid response.");
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setServiceError("Failed to load services for this artist. Please try again.");
        setServices([]);
        setServiceImage(null);
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, [creatorId]);

  // Effect for fetching ALL artists for the footer (recommended artists)
  useEffect(() => {
    const fetchAllArtistsForFooter = async () => {
      try {
        setLoadingArtists(true);
        setArtistError(null);

        const artistsData = await getAllArtists();

        if (artistsData && Array.isArray(artistsData)) {
          const otherArtists = artistsData.filter(artist => artist._id !== creatorId);

          setRecommendedArtists(otherArtists.slice(0, 4)); // Still slice for recommended artists in footer
        } else {
          setRecommendedArtists([]);
          console.warn("No artist data received or invalid response from getAllArtists (expected direct array).", artistsData);
        }
      } catch (err) {
        console.error("Error fetching all artists for footer:", err);
        setArtistError("Failed to load recommended artists.");
        setRecommendedArtists([]);
      } finally {
        setLoadingArtists(false);
      }
    };

    fetchAllArtistsForFooter();
  }, [creatorId]); // Re-run if creatorId changes (to filter out current artist)

  // Determine which services to display
  const servicesToDisplay = showAllServices ? services : services.slice(0, 4);

  // Determine which projects to display
  const projectsToDisplay = showAllProjects ? projects : projects.slice(0, 3);

  // Handler for Discover More Services button click
  const handleDiscoverMoreServicesClick = () => {
    setShowAllServices(true);
  };

  // Handler for Discover More Projects button click
  const handleDiscoverMoreProjectsClick = () => {
    setShowAllProjects(true);
  };

  // Consolidate loading/error for main services display
  if (loadingServices) {
    return <div className="text-center py-8">Loading services...</div>;
  }

  if (serviceError) {
    return <div className="text-center py-8 text-red-500">{serviceError}</div>;
  }

  return (
    <div>
      {/* Services Section */}
      {services.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No services found for this artist.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
            {servicesToDisplay.map((service, index) => (
              <ServiceCard key={index} service={service} serviceImage={serviceImage} />
            ))}
          </div>
          {/* Conditionally render Discover More Services button */}
          {services.length > 4 && !showAllServices && (
            <div className="text-center mt-6">
              <button
                className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
                onClick={handleDiscoverMoreServicesClick}
              >
                Discover More 
              </button>
            </div>
          )}
        </>
      )}

      {/* Projects Section */}
      <div className="mt-20">
        {/* ProfileProjects will receive the sliced projects */}
        {projects && projects.length > 0 ? (
          <ProfileProjects projects={projectsToDisplay} />
        ) : (
          <div className="text-center py-8 text-gray-600">No projects found for this artist.</div>
        )}
      </div>
      {/* Conditionally render Discover More Projects button */}
      {projects && projects.length > 3 && !showAllProjects && (
        <div className="text-center mt-6">
          <button
            className="px-8 sm:px-32 py-2 text-white bg-palatinate-purple rounded hover:bg-fuchsia-800 font-montserrat-light"
            onClick={handleDiscoverMoreProjectsClick}
          >
            Discover More 
          </button>
        </div>
      )}

      {/* Recommended Artists Section (Footer) */}
      <div className="xs:p-2 mx-auto mt-20">
        {loadingArtists ? (
          <div className="text-center w-full">Loading recommended artists...</div>
        ) : artistError ? (
          <div className="text-center w-full text-red-500">{artistError}</div>
        ) : (
          <ProfileFooter artists={recommendedArtists} />
        )}
      </div>
    </div>
  );
};

export default ProfileServices;