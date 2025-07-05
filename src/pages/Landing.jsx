// import React from "react";

// import Navbar from "../components/NavigationBar/Navbar.jsx"
// import OurVision from "../components/OurVision/OurVision.jsx"
// import OurMission from "../components/OurMission/OurMission.jsx";
// import Hero from "../components/Hero/Home.jsx";
// import Connect from "../components/Connect.jsx";
// import Bid from "../components/Bid.jsx";
// import Market from "../components/Market.jsx";
// import Learn from "../components/Learn.jsx";
// import Patron from "../components/Patrons.jsx";
// import Intermediaries from "../components/Intermediaries.jsx";
// import Footer from "../components/Footer/footer.jsx";
// import CreativeImpact from "../components/CreativeImpact.jsx";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { scroller } from "react-scroll";
// function Landing() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const sectionId = location.hash.replace("#", "");
//       scroller.scrollTo(sectionId, {
//         smooth: true,
//         duration: 0,
//         offset: -70, // Optional: Adjust offset for fixed headers
//       });
//     }
//   }, [location]);

//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <OurVision />
//       <OurMission />
//       <Connect />
//       <Bid />
//       <Market />
//       <Learn />
//       <section id="patrons">
//       <Patron />
//       </section>
//       <Intermediaries />

//       <section id='creative-impact'>
//       <CreativeImpact />
//       </section>
    
      
//       <Footer />
//     </div>
//   )
// }

// export default Landing;


import React from "react";

import Navbar from "../components/NavigationBar/Navbar.jsx"
import OurVision from "../components/OurVision/OurVision.jsx"
import OurMission from "../components/OurMission/OurMission.jsx";
import Hero from "../components/Hero/Home.jsx";
import Connect from "../components/Connect.jsx";
import Bid from "../components/Bid.jsx";
import Market from "../components/Market.jsx";
import Learn from "../components/Learn.jsx";
import Patron from "../components/Patrons.jsx";
import Intermediaries from "../components/Intermediaries.jsx";
import Footer from "../components/Footer/footer.jsx";
import CreativeImpact from "../components/CreativeImpact.jsx";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
function Landing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 0,
        offset: -70, // Optional: Adjust offset for fixed headers
      });
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Hero />
      <OurVision />
      <OurMission />
      <Connect />
      <Bid />
      <Market />
      <Learn />
      <section id="patrons">
      <Patron />
      </section>
      <Intermediaries />

      <section id='creative-impact'>
      <CreativeImpact />
      </section>
    
      
      <Footer />
    </div>
  )
}

export default Landing;