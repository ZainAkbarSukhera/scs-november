import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

import tashkeil_Logo from '../../assets/tashkeilLogo.png';

// const Footer = () => {
//   return (
//     <footer className="bg-[#07354D] text-white py-10">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Quick Links</h2>
//             <ul className="space-y-2">
//               <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
//               <li><a href="#creatives" className="hover:text-gray-300">Creatives</a></li>
//               <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
//               <li><a href="#marketplace" className="hover:text-gray-300">Marketplace</a></li>
//               <li><a href="#workshops" className="hover:text-gray-300">Workshops</a></li>
//               <li><a href="#patrons" className="hover:text-gray-300">Patrons</a></li>
//               <li><a href="#impact" className="hover:text-gray-300">Creative Impact</a></li>
//             </ul>
//           </div>
//
//           {/* Newsletter Signup */}
//           <div>
//             <h2 className="text-xl font-bold mb-4">Newsletter Signup</h2>
//             <p className="mb-4">Stay Connected</p>
//             <p className="text-gray-300 mb-4">Sign up for our newsletter to receive latest updates, open calls, and creative opportunities</p>
//             <div className="flex">
//               <input 
//                 type="email" 
//                 placeholder="Email Address" 
//                 className="p-2 rounded-l-lg focus:outline-none w-full"
//               />
//               <button className="bg-red-600 hover:bg-red-700 text-white px-16 rounded-r-lg">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Disclaimer */}
//           <div className="text-sm text-gray-400 mb-4 md:mb-0">
//             <p className="mb-2 font-bold">Disclaimer:</p>
//             <p>
//               The information provided on the Saudi Streams of Creativity portal is for general informational purposes only and is provided "as is" without any warranties of any kind, either express or implied. Saudi Streams of Creativity makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this portal. Users assume all risk associated with the use of the portal. Saudi Streams of Creativity shall not be held liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use this portal. Links to external websites are provided for convenience only and do not constitute an endorsement by Saudi Streams of Creativity. Unauthorized use or reproduction of content from this portal is strictly prohibited.
//             </p>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4 text-xl">
//             <a href="https://www.whatsapp.com" className="hover:text-gray-400"><FaWhatsapp /></a>
//             <a href="https://www.instagram.com" className="hover:text-gray-400"><FaInstagram /></a>
//             <a href="https://www.twitter.com" className="hover:text-gray-400"><FaTwitter /></a>
//             <a href="https://www.linkedin.com" className="hover:text-gray-400"><FaLinkedin /></a>
//           </div>
//         </div>

//         <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
//           {/* Links */}
//           <div className="flex space-x-8 mb-4 md:mb-0">
//             <a href="#privacy" className="hover:text-white">Privacy Policy</a>
//             <a href="#terms" className="hover:text-white">Terms of Use</a>
//           </div>
//           {/* Copyright */}
//           <p>© 2024 Saudi Streams of Creativity. All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-yankees-blue text-white py-10">
//         <div className="px-10">
//           <div className="flex justify-between">
//             <div>
//               <img src={tashkeil_Logo} alt="Tashkeil Logo" />
//             </div>
//             {/* Quick Links */}
//             <div>
//               <h2 className="text-xl font-bold mb-2 font-montserrat-light">Quick Links</h2>
//               <ul className="space-y-2">
//                 <li><a href="/" className="hover:text-gray-300 font-montserrat-light">About Us</a></li>
//                 <li><a href="/art-connect" className="hover:text-gray-300 font-montserrat-light">Creatives</a></li>
//                 <li><a href="/art-bid" className="hover:text-gray-300 font-montserrat-light">Projects</a></li>
//                 <li><a href="/art-market" className="hover:text-gray-300 font-montserrat-light">Marketplace</a></li>
//                 <li><a href="/art-learn" className="hover:text-gray-300 font-montserrat-light">Workshops</a></li>
//                 <li><a href="#patrons" className="hover:text-gray-300 font-montserrat-light">Patrons</a></li>
//                 <li><a href="#impact" className="hover:text-gray-300 font-montserrat-light">Creative Impact</a></li>
//               </ul>
//             </div>

//             {/* Newsletter Signup */}
//             <div>
//               <h2 className="text-xl font-bold font-montserrat-light mb-2">Newsletter Signup</h2>
//               <p className="mb-2 font-montserrat-light">Stay Connected</p>
//               <p className="text-gray-300 mb-2 font-montserrat-light">Sign up for our newsletter to receive the latest updates, open calls, and creative opportunities</p>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Email Address" 
//                   className="p-2 rounded-l-lg focus:outline-none w-full font-montserrat-light"
//                 />
//                 <button className="bg-fire-opal hover:bg-orange-400 text-white px-16 rounded-r-lg font-montserrat-light">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
//             {/* Disclaimer */}
//             <div className="text-sm text-gray-300 mb-4 md:mb-0">
//               <p className="mb-2 font-bold font-montserrat-light">Disclaimer:</p>
//               <p className='font-montserrat-light text-justify'>
//                 The information provided on the Saudi Streams of Creativity portal is for general informational purposes only and is provided "as is" without any warranties of any kind, either express or implied. Saudi Streams of Creativity makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this portal. Users assume all risk associated with the use of the portal. Saudi Streams of Creativity shall not be held liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use this portal. Links to external websites are provided for convenience only and do not constitute an endorsement by Saudi Streams of Creativity. Unauthorized use or reproduction of content from this portal is strictly prohibited.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* White Bar Below Footer */}
//       <div className="bg-white py-4">
//         <div className="flex flex-col px-10 md:flex-row justify-between items-center text-yankees-blue text-sm">
//           {/* Social Media Icons */}
//           <div className="flex space-x-4 text-xl">
//             <a href="https://www.whatsapp.com" className="hover:text-gray-500"><FaWhatsapp /></a>
//             <a href="https://www.instagram.com" className="hover:text-gray-500"><FaInstagram /></a>
//             <a href="https://www.twitter.com" className="hover:text-gray-500"><FaTwitter /></a>
//             <a href="https://www.linkedin.com" className="hover:text-gray-500"><FaLinkedin /></a>
//           </div>

//           {/* Privacy Policy and Terms of Use */}
//           <div className="flex font-xl space-x-24 my-4 md:my-0">
//             <a href="#privacy" className="hover:text-yankees-blue font-montserrat-regular">Privacy Policy</a>
//             <a href="#terms" className="hover:text-yankees-blue font-montserrat-regular">Terms of Use</a>
//           </div>

//           {/* Copyright */}
//           <p className="text-sm text-yankees-blue font-montserrat-light">© 2024 Tashkeil. All Rights Reserved</p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Footer;

// const Footer = () => {
//   const navigate = useNavigate();

//   const navigateToSection = (hash) => {
//     navigate(`/#${hash}`);
//   };

//   return (
//     <>
//     <footer className="bg-yankees-blue text-white py-10">
//       <div className="px-4 sm:px-10">
//         <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
//           {/* Logo Section */}
//           <div>
//             <img src={tashkeil_Logo} alt="Tashkeil Logo" className="w-52 mx-auto  md:mx-0" />
//           </div>

//           {/* Quick Links */}
         
//           <div>
//             <h2 className="text-xl sm:text-center font-bold mb-2 font-montserrat-light xs:text-center">Quick Links</h2>
//             <ul className="space-y-2 text-center md:text-left">
//               <li><RouterLink to="/" className="hover:text-gray-300 font-montserrat-light">About Us</RouterLink></li>
//               <li><RouterLink to="/art-connect" className="hover:text-gray-300 font-montserrat-light">Creatives</RouterLink></li>
//               <li><RouterLink to="/art-bid" className="hover:text-gray-300 font-montserrat-light">Projects</RouterLink></li>
//               <li><RouterLink to="/art-market" className="hover:text-gray-300 font-montserrat-light">Marketplace</RouterLink></li>
//               <li><RouterLink to="/art-learn" className="hover:text-gray-300 font-montserrat-light">Workshops</RouterLink></li>
//               <li><button onClick={() => navigateToSection("patrons")} className="hover:text-gray-300 font-montserrat-light">Patrons</button></li>
//               <li><button onClick={() => navigateToSection("creative-impact")} className="hover:text-gray-300 font-montserrat-light">Creative Impact</button></li>
//             </ul>
//           </div>

//           {/* Newsletter Signup */}
//           <div className="text-center md:text-left">
//             <h2 className="text-xl font-bold font-montserrat-light mb-2">Newsletter Signup</h2>
//             <p className="mb-2 font-montserrat-light">Stay Connected</p>
//             <p className="text-gray-300 mb-2 font-montserrat-light">
//               Sign up for our newsletter to receive the latest updates, open calls, and creative opportunities.
//             </p>
//             <div className="flex justify-center md:justify-start">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="p-2 w-full max-w-xs rounded-l-lg focus:outline-none font-montserrat-light"
//               />
//               <button className="bg-fire-opal hover:bg-orange-400 text-white px-6 rounded-r-lg font-montserrat-light">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           {/* Disclaimer */}
//           <div className="text-sm text-gray-300 text-center md:text-left">
//             <p className="mb-2 font-bold font-montserrat-light">Disclaimer:</p>
//             <p className=" text-justify font-montserrat-light">
//             The information provided on the Saudi Streams of Creativity portal is for general informational purposes only and is provided "as is" without any warranties of any kind, either express or implied. Saudi Streams of Creativity makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this portal. Users assume all risk associated with the use of the portal. Saudi Streams of Creativity shall not be held liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use this portal. Links to external websites are provided for convenience only and do not constitute an endorsement by Saudi Streams of Creativity. Unauthorized use or reproduction of content from this portal is strictly prohibited.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>

//     {/* White Bar Below Footer */}
//     <div className="bg-white py-4">
//       <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 text-yankees-blue text-sm">
//         {/* Social Media Icons */}
//         <div className="flex space-x-4 text-xl mb-4 sm:mb-0">
//           <a href="https://www.whatsapp.com" className="hover:text-gray-500"><FaWhatsapp /></a>
//           <a href="https://www.instagram.com" className="hover:text-gray-500"><FaInstagram /></a>
//           <a href="https://www.twitter.com" className="hover:text-gray-500"><FaTwitter /></a>
//           <a href="https://www.linkedin.com" className="hover:text-gray-500"><FaLinkedin /></a>
//         </div>

//         {/* Privacy Policy and Terms of Use */}
//         <div className="flex space-x-8 mb-4 sm:mb-0">
//           <a href="#privacy" className="hover:text-yankees-blue font-montserrat-regular">Privacy Policy</a>
//           <a href="#terms" className="hover:text-yankees-blue font-montserrat-regular">Terms of Use</a>
//         </div>

//         {/* Copyright */}
//         <p className="text-center sm:text-left text-sm text-yankees-blue font-montserrat-light">
//           © 2024 Tashkeil. All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   </>
//   );
// };

// export default Footer;

const Footer = () => {
  const navigate = useNavigate();

  const navigateToSection = (hash) => {
    navigate(`/#${hash}`);
  };

  return (
    <>
    <footer className="bg-yankees-blue text-white py-10">
      <div className="px-4 sm:px-10">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div>
            <img src={tashkeil_Logo} alt="Tashkeil Logo" className="w-52 mx-auto  md:mx-0" />
          </div>

          {/* Quick Links */}
         
          <div>
            <h2 className="text-xl sm:text-center font-bold mb-2 font-montserrat-light xs:text-center">Quick Links</h2>
            <ul className="space-y-2 text-center md:text-left">
              <li><RouterLink to="/" className="hover:text-gray-300 font-montserrat-light">About Us</RouterLink></li>
              <li><RouterLink to="/art-connect" className="hover:text-gray-300 font-montserrat-light">Creatives</RouterLink></li>
              <li><RouterLink to="/art-bid" className="hover:text-gray-300 font-montserrat-light">Projects</RouterLink></li>
              <li><RouterLink to="/art-market" className="hover:text-gray-300 font-montserrat-light">Marketplace</RouterLink></li>
              <li><RouterLink to="/art-learn" className="hover:text-gray-300 font-montserrat-light">Workshops</RouterLink></li>
              <li><button onClick={() => navigateToSection("patrons")} className="hover:text-gray-300 font-montserrat-light">Patrons</button></li>
              <li><button onClick={() => navigateToSection("creative-impact")} className="hover:text-gray-300 font-montserrat-light">Creative Impact</button></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold font-montserrat-light mb-2">Newsletter Signup</h2>
            <p className="mb-2 font-montserrat-light">Stay Connected</p>
            <p className="text-gray-300 mb-2 font-montserrat-light">
              Sign up for our newsletter to receive the latest updates, open calls, and creative opportunities.
            </p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 w-full max-w-xs rounded-l-lg focus:outline-none font-montserrat-light"
              />
              <button className="bg-fire-opal hover:bg-orange-400 text-white px-6 rounded-r-lg font-montserrat-light">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Disclaimer */}
          <div className="text-sm text-gray-300 text-center md:text-left">
            <p className="mb-2 font-bold font-montserrat-light">Disclaimer:</p>
            <p className=" text-justify font-montserrat-light">
            The information provided on the Saudi Streams of Creativity portal is for general informational purposes only and is provided "as is" without any warranties of any kind, either express or implied. Saudi Streams of Creativity makes no representations or warranties regarding the accuracy, completeness, or reliability of any information on this portal. Users assume all risk associated with the use of the portal. Saudi Streams of Creativity shall not be held liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use or inability to use this portal. Links to external websites are provided for convenience only and do not constitute an endorsement by Saudi Streams of Creativity. Unauthorized use or reproduction of content from this portal is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </footer>

    {/* White Bar Below Footer */}
    <div className="bg-white py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 text-yankees-blue text-sm">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl mb-4 sm:mb-0">
          <a href="https://www.whatsapp.com" className="hover:text-gray-500"><FaWhatsapp /></a>
          <a href="https://www.instagram.com" className="hover:text-gray-500"><FaInstagram /></a>
          <a href="https://www.twitter.com" className="hover:text-gray-500"><FaTwitter /></a>
          <a href="https://www.linkedin.com" className="hover:text-gray-500"><FaLinkedin /></a>
        </div>

        {/* Privacy Policy and Terms of Use */}
        <div className="flex space-x-8 mb-4 sm:mb-0">
          <a href="#privacy" className="hover:text-yankees-blue font-montserrat-regular">Privacy Policy</a>
          <a href="#terms" className="hover:text-yankees-blue font-montserrat-regular">Terms of Use</a>
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-left text-sm text-yankees-blue font-montserrat-light">
          © 2024 Tashkeil. All Rights Reserved.
        </p>
      </div>
    </div>
  </>
  );
};

export default Footer;