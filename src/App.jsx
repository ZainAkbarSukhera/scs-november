// import React from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import all pages/components
// import Navbar from './components/NavigationBar/Navbar';
// import BiddersProfile from './pages/BiddersProfile';
// import ArtLearn from './pages/Art-Learn';
// import ArtConnect from './pages/Art-Connect';
// import CreatorProfile from './pages/CreatorProfile';
// import ArtBid from './pages/Art-Bid';
// import ArtMarket from './pages/Art-Market';
// import Landing from './pages/Landing';
// import ScrollToTop from './components/ScrollToTop';
// import Login1 from './components/Login1';
// import SignUp from './components/SignUp';
// import ArtworkProfile from './components/ArtworkProfile/ArtworkProfile';
// import WorkshopProfile from './components/WorkshopProfile/WorkshopProfile';
// import PatronsProfile from './components/Patron&IntermediaryProfile/PIProfile';
// import  IntermediaryProfile from './components/Patron&IntermediaryProfile/PIProfile';
// import CheckoutPage from './pages/CheckoutPage';
// import PaymentPage from './pages/PaymentPage';

// // import LandingPatronsSection from './components/Patrons';
// // import LandingIntermediarySection from './components/Intermediaries';
// // import { Elements } from "@stripe/react-stripe-js";

// export default function App() {
//   return (
//     <Router>
//       <ScrollToTop/>
//       <Navbar/>

//       {/* <Elements stripe={stripePromise}> */}
//       <Routes>
//         <Route path="/" element={<Landing/>} />
//         <Route path="/about" element={<Landing/>} />
//         <Route path="/bidders-profile" element={<BiddersProfile />} />
//         <Route path="/art-learn" element={<ArtLearn />} />
//         <Route path="/art-connect" element={<ArtConnect />} />
//         <Route path="/creative-profile" element={<CreatorProfile />} />
//         <Route path="/art-bid" element={<ArtBid/>}/>
//         <Route path="/art-market" element={<ArtMarket/>}/>
//         <Route path="/login" element={<Login1/>}/>
//         <Route path="/signup" element={<SignUp/>}/>
//         <Route path='/artwork-profile' element={<ArtworkProfile />}/>
//         <Route path='/workshop-profile' element={<WorkshopProfile />}/>
//         <Route path='/patrons-profile' element={<PatronsProfile />}/>
//         <Route path='/intermediary-profile' element={<IntermediaryProfile />}/>
//         <Route path='/payment' element={<PaymentPage />}/>
//         <Route path='/checkout' element={<CheckoutPage />}/>

//         {/* <Route path='/landing-patrons' element={<LandingPatronsSection />}/>
//         <Route path ='/landing-intermediary' element={<LandingIntermediarySection />} /> */}





//         {/* <Route path='/wishlist' element={<CheckoutPage />}/>
//         <Route path='/cart' element={<PaymentPage />}/> */}
//       </Routes>
//       {/* </Elements> */}
      
//       <ToastContainer
//   position="bottom-center"
//   autoClose={5000}
//   hideProgressBar={false}
//   newestOnTop={false}
//   closeOnClick
//   rtl={false}
//   pauseOnFocusLoss
//   draggable
//   pauseOnHover
//   theme="light" // Set theme to light
// />
//     </Router>
//   );
// }



import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

// Import all pages/components
import Navbar from './components/NavigationBar/Navbar';
import BiddersProfile from './pages/BiddersProfile';
import ArtLearn from './pages/Art-Learn';
import ArtConnect from './pages/Art-Connect';
import CreatorProfile from './pages/CreatorProfile';
import ArtBid from './pages/Art-Bid';
import ArtMarket from './pages/Art-Market';
import Landing from './pages/Landing';
import ScrollToTop from './components/ScrollToTop';
import Login1 from './components/Login1';
import SignUp from './components/SignUp';
import ArtworkProfile from './components/ArtworkProfile/ArtworkProfile';
import WorkshopProfile from './components/WorkshopProfile/WorkshopProfile';
import PatronsProfile from './components/Patron&IntermediaryProfile/PIProfile';
import  IntermediaryProfile from './components/Patron&IntermediaryProfile/PIProfile';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from './pages/PaymentPage';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
// import SignupPageAuthenticator from './pages/SignUpAuthenticator';
// import { useSelector } from "react-redux";

// import LandingPatronsSection from './components/Patrons';
// import LandingIntermediarySection from './components/Intermediaries';
// import { Elements } from "@stripe/react-stripe-js";

export default function App() {
  // const isAuth=useSelector(state =>state.user.auth);
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>

      {/* <Elements stripe={stripePromise}> */}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<Landing/>} />
        <Route path="/bid-details/:openCallId" element={<BiddersProfile />} />
        <Route path="/art-learn" element={<ArtLearn />} />
        <Route path="/art-connect" element={<ArtConnect />} />
        <Route path="/creative-profile/:id" element={<CreatorProfile />} />
        <Route path="/art-bid" element={<ArtBid/>}/>
        <Route path="/art-market" element={<ArtMarket/>}/>
        <Route path="/login" element={<Login1/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/artwork-profile/:artworkId' element={<ArtworkProfile />}/>
        <Route path="/workshop-profile/:workshopId" element={<WorkshopProfile />} />
        <Route path='/patron-profile/:patronId' element={<PatronsProfile />}/>
        <Route path='/intermediary-profile' element={<IntermediaryProfile />}/>
        <Route path='/payment' element={<PaymentPage />}/>
        <Route path='/checkout' element={<CheckoutPage />}/>

        {/* <Route path='/cart'  element={<Cart />}/>
        <Route path='/wishlist' element={<Wishlist/>}/> */}

        {/* <Route path='/landing-patrons' element={<LandingPatronsSection />}/>
        <Route path ='/landing-intermediary' element={<LandingIntermediarySection />} /> */}





        {/* <Route path='/wishlist' element={<CheckoutPage />}/>
        <Route path='/cart' element={<PaymentPage />}/> */}
      </Routes>
      {/* </Elements> */}
      
      <ToastContainer
  position="bottom-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light" // Set theme to light
/>
    </Router>
  );
}
