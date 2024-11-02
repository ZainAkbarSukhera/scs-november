import React from "react";

import Navbar from "../components/NavigationBar/Navbar.js"
import OurVision from "../components/OurVision/OurVision.js"
import OurMission from "../components/OurMission/OurMission.js";
import Hero from "../components/Hero/Home.js";
import Connect from "../components/Connect.js";
import Bid from "../components/Bid.js";
import Market from "../components/Market.js";
import Learn from "../components/Learn.js";
import Patron from "../components/Patrons.js";
import Intermediaries from "../components/Intermediaries.js";
import Footer from "../components/Footer/footer.js";
import CreativeImpact from "../components/CreativeImpact.js";
function Landing() {
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
      <Patron />
      <Intermediaries />
      <CreativeImpact />
      <Footer />
    </div>
  )
}

export default Landing;