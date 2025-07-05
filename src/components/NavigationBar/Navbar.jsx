// // last updated doc
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/SCS Logo.png';
// import { FaTimes, FaBars } from 'react-icons/fa';

// const Navbar = () => {
//   const navigate=useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const location = useLocation();

//       // Toggle the mobile menu
//       const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//       };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Set active link based on current path
//     setActiveLink(location.pathname);
//   }, [location]);

//   const navItems = [
//     { link: 'About', path: '/about' },
//     { link: 'Art-Connect', path: '/art-connect' },
//     { link: 'Art-Bid', path: '/art-bid' },
//     { link: 'Art-Market', path: '/art-market' },
//     { link: 'Art-Learn', path: '/art-learn' },

//   ];

//   return (
//     <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : 'bg-transparent'} transition-all duration-75`}>
//       <nav className='flex justify-between items-center py-4 px-8'>
//         <a href="/" className='flex items-center'>
//           <img src={logo} alt="Logo" className='w-20 h-auto' />
//         </a>

//         {/* Navigation Links for Desktop */}
//         <ul className='hidden md:flex space-x-14 items-center text-base'>
//           {navItems.map(({ link, path }) => (
//             <Link 
//               key={path} 
//               to={path} 
//               onClick={() => setActiveLink(path)}
//               className={`cursor-pointer text-yankees-blue font-montserrat-light px-4 py-2 rounded-lg ${
//                 activeLink === path ? ' text-zinc-100  border-r-2 border-yankees-blue bg-yankees-blue' : ''
//               }`}
            
//             >
//               {link}
//             </Link>
//           ))}
//         </ul>

//         {/* Authentication Buttons for Desktop */}
//         <div className='hidden md:flex space-x-1'>
//           <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light'
//            onClick={() => { navigate('/signup')}}>
//             Sign Up
//           </button>
//           <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light'
//            onClick={() => { navigate('/login')}}>
//             Login
//           </button>
//         </div>

//  {/* Mobile Menu Button */}
//  <button 
//  onClick={toggleMenu} 
//  className='md:hidden mr-8 text-gray-700 focus:outline-none'
// >
//  {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
// </button>

//
//        </nav>
// {/* Mobile Menu */}
// {isMenuOpen && (
//   <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 ${isMenuOpen ? "block fixed top-10 right-0 left-0" : "hidden"}`}>
//     {navItems.map(({ link, path }) => (
//       <Link 
//         key={path} 
//         to={path} 
//         spy={true} 
//         smooth={true} 
//         offset={-100} 
//         duration={500}
//         onClick={toggleMenu}
//         className='block text-base text-gray-700 hover:text-yankees-blue font-montserrat-light'
//       >
//         {link}
//       </Link>
//     ))}
//     <div className='space-y-2'>
//       <button   
//       className='bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 font-montserrat-light'
//       onClick={() => { navigate('/login'); toggleMenu(); }}>
//         Login
//       </button>
//       <button 
//        className='bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 font-montserrat-light'
//        onClick={() => { navigate('/signup'); toggleMenu(); }}>
//         Sign Up
//       </button>
//     </div>
//   </div>
//       )}
//      </header>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import logo from '../../assets/SCS Logo.png';
// import { FaTimes, FaBars, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
// import Cart from "../Cart/Cart";
// import Wishlist from "../Wishlist/Wishlist"

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { cart } = useSelector((state) => state.cart);
//   const [openCart, setOpenCart] = useState(false);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const [openWishlist, setOpenWishlist] = useState(false);
//   const location = useLocation();

//   // Check login status on component mount
//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     setIsLoggedIn(loggedInStatus === 'true');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   // Toggle the mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Set active link based on current path
//     setActiveLink(location.pathname);
//   }, [location]);

//   const navItems = [
//     { link: 'About', path: '/about' },
//     { link: 'Art-Connect', path: '/art-connect' },
//     { link: 'Art-Bid', path: '/art-bid' },
//     { link: 'Art-Market', path: '/art-market' },
//     { link: 'Art-Learn', path: '/art-learn' },
//   ];

//   return (
//     <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : 'bg-transparent'} transition-all duration-75`}>
//       <nav className='flex justify-between items-center py-4 px-8'>
//         <a href="/" className='flex items-center'>
//           <img src={logo} alt="Logo" className='w-20 h-auto' />
//         </a>

//         {/* Navigation Links for Desktop */}
//         <ul className='hidden md:flex space-x-14 items-center text-lg'>
//           {navItems.map(({ link, path }) => (
//             <Link 
//               key={path} 
//               to={path} 
//               onClick={() => setActiveLink(path)}
//               className={`cursor-pointer text-yankees-blue font-montserrat-light px-4 py-2 rounded-lg ${
//                 activeLink === path ? ' text-zinc-100  border-r-2 border-yankees-blue bg-yankees-blue' : ''
//               }`}
//             >
//               {link}
//             </Link>
//           ))}
//         </ul>

//         {/* Authentication or User Icons for Desktop */}
//         <div className='hidden md:flex space-x-4 items-center'>
//           {/* {isLoggedIn ? ( */}
//             <>
//               {/* <div className={"flex items-center"}> */}
//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenWishlist(true)}>
//                 <FaHeart size={20} />
//                 <span className="absolute right-0 top-0 rounded-full w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {wishlist && wishlist.length}
//                 </span>
//               </div>
//             {/* </div> */}

//               <div
//                 className="relative cursor-pointer mr-[15px]"
//                 onClick={() => setOpenCart(true)}>
//                  <FaShoppingCart size={20} />
//                 <span className="absolute right-0 top-0 rounded-full  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
//                   {cart && cart.length}
//                 </span>
//               </div>

//               <button onClick={() => navigate('/account')} className='text-yankees-blue'>
//                 <FaUser size={20} />
//               </button>
//               <button onClick={handleLogout} className='bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 font-montserrat-light'>
//                 Logout
//               </button>
//             </>
//           {/* ) : (
//             <>
//               <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light' onClick={() => { navigate('/signup') }}>
//                 Sign Up
//               </button>
//               <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light' onClick={() => { navigate('/login') }}>
//                 Login
//               </button>
//             </>
//           )} */}

//             {/* cart popup */}
//             {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

//             {/* wishlist popup */}
//             {openWishlist ? (
//               <Wishlist setOpenWishlist={setOpenWishlist} />
//             ) : null}
//         </div>

//         {/* Mobile Menu Button */}
//           <button onClick={toggleMenu} className='md:hidden mr-8 text-gray-700 focus:outline-none'>
//             {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
//           </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 ${isMenuOpen ? "block fixed top-10 right-0 left-0" : "hidden"}`}>
//           {navItems.map(({ link, path }) => (
//             <Link 
//               key={path} 
//               to={path} 
//               onClick={toggleMenu}
//               className='block text-base text-gray-700 hover:text-yankees-blue font-montserrat-light'
//             >
//               {link}
//             </Link>
//           ))}
//           <div className='space-y-2'>
//             {isLoggedIn ? (
//               <>
//                 <button onClick={() => { navigate('/wishlist'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Wishlist
//                 </button>
//                 <button onClick={() => { navigate('/cart'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Cart
//                 </button>
//                 <button onClick={() => { navigate('/account'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Account
//                 </button>
//                 <button onClick={() => { handleLogout(); toggleMenu(); }} className='bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 font-montserrat-light'>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button onClick={() => { navigate('/login'); toggleMenu(); }} className='bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 font-montserrat-light'>
//                   Login
//                 </button>
//                 <button onClick={() => { navigate('/signup'); toggleMenu(); }} className='bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 font-montserrat-light'>
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import logo from '../../assets/SCS Logo.png';
// import { FaTimes, FaBars, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
// import Cart from "../Cart/Cart";
// import Wishlist from "../Wishlist/Wishlist";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { cart } = useSelector((state) => state.cart);
//   const [openCart, setOpenCart] = useState(false);
//   const { wishlist } = useSelector((state) => state.wishlist);
//   const [openWishlist, setOpenWishlist] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem('isLoggedIn');
//     setIsLoggedIn(loggedInStatus === 'true');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   const navItems = [
//     { link: 'About', path: '/about' },
//     { link: 'Art-Connect', path: '/art-connect' },
//     { link: 'Art-Bid', path: '/art-bid' },
//     { link: 'Art-Market', path: '/art-market' },
//     { link: 'Art-Learn', path: '/art-learn' },
//   ];

//   return (
//     <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : ''} transition-all duration-75`}>
//       <nav className='flex justify-between items-center py-4 px-8'>
//         <Link to="/" className='flex items-center'>
//           <img src={logo} alt="Logo" className='w-20 h-auto' />
//         </Link>

//         {/* Navigation Links for Desktop */}
//         <ul className='hidden md:flex space-x-14 items-center text-lg'>
//           {navItems.map(({ link, path }) => (
//             <Link 
//               key={path} 
//               to={path} 
//               onClick={() => setActiveLink(path)}
//               className={`cursor-pointer text-yankees-blue font-montserrat-light px-4 py-2 rounded-lg ${
//                 activeLink === path ? 'text-zinc-100 border-r-2 border-yankees-blue bg-yankees-blue' : ''
//               }`}
//             >
//               {link}
//             </Link>
//           ))}
//         </ul>

//         {/* Authentication or User Icons for Desktop */}
       
//         <div className='hidden md:flex space-x-4 items-center'>
//         {isLoggedIn ? (
//             <>
//           <div
//             className="relative cursor-pointer "
//             onClick={() => setOpenWishlist(true)}
//             aria-label="Open Wishlist"
//           >
//             <FaHeart size={20} className='text-yankees-blue' />
//             <span className="absolute right-0 top-0 rounded-full w-4 h-4 p-0 m-0 text-yankees-blue font-mono text-[12px] leading-tight text-center">
//               {wishlist && wishlist.length}
//             </span>
//           </div>

//           <div
//             className="relative cursor-pointer"
//             onClick={() => setOpenCart(true)}
//             aria-label="Open Cart"
//           >
//             <FaShoppingCart size={20} className='text-yankees-blue' />
//             <span className="absolute right-0 top-0 rounded-full w-4 h-4 p-0 m-0  font-mono text-[12px] leading-tight text-center">
//               {cart && cart.length}
//             </span>
//           </div>

         
//               <button onClick={() => navigate('/account')} className='text-yankees-blue' aria-label="Account">
//                 <FaUser size={20} />
//               </button>
//               <button onClick={handleLogout} className='bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 font-montserrat-light' aria-label="Logout">
//                 Logout
//               </button>
//             </>
//            ) : (
//             <>
//               <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light' onClick={() => navigate('/signup')}>
//                 Sign Up
//               </button>
//               <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light' onClick={() => navigate('/login')}>
//                 Login
//               </button>
//             </>
//           )} 

//           {/* Cart popup */}
//           {openCart && <Cart setOpenCart={setOpenCart} />}

//           {/* Wishlist popup */}
//           {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={toggleMenu} className='md:hidden mr-8 text-gray-700 focus:outline-none' aria-label="Toggle Menu">
//           {isMenuOpen ? <FaBars className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 fixed top-10 right-0 left-0`}>
//           {navItems.map(({ link, path }) => (
//             <Link 
//               key={path} 
//               to={path} 
//               onClick={toggleMenu}
//               className='block text-base text-gray-700 hover:text-yankees-blue font-montserrat-light'
//             >
//               {link}
//             </Link>
//           ))}
//           <div className='space-y-2'>
//             {isLoggedIn ? (
//               <>
//                 <button onClick={() => { navigate('/wishlist'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Wishlist
//                 </button>
//                 <button onClick={() => { navigate('/cart'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Cart
//                 </button>
//                 <button onClick={() => { navigate('/account'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
//                   Account
//                 </button>
//                 <button onClick={() => { handleLogout(); toggleMenu(); }} className='bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 font-montserrat-light'>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button onClick={() => { navigate('/login'); toggleMenu(); }} className='bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 font-montserrat-light'>
//                   Login
//                 </button>
//                 <button onClick={() => { navigate('/signup'); toggleMenu(); }} className='bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 font-montserrat-light'>
//                   Sign Up
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


// src/components/NavigationBar/Navbar.jsx
import React, { useEffect, useState, useCallback } from 'react'; // Added useCallback
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../assets/SCS Logo.png';
import { FaTimes, FaBars, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { toast } from "react-toastify";
import { resetUser } from "../redux/actions/user"; // Ensure this path is correct

// Import jwt-decode library
// You'll need to install this: npm install jwt-decode or yarn add jwt-decode
import { jwtDecode } from 'jwt-decode'; // Note the named import for newer versions of jwt-decode

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const isAuthenticated = user?.auth || false;
  console.log("user: ", user);
  console.log("isAuthenticated: ", isAuthenticated);

  const dispatch = useDispatch();
  const { cart = [] } = useSelector((state) => state.cart || {});
  const { wishlist = [] } = useSelector((state) => state.wishlist || {});
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  // Use useCallback to memoize handleLogout
  const handleLogout = useCallback(() => {
    dispatch(resetUser()); // Clear Redux user state
    localStorage.removeItem('token'); // Remove token from localStorage
    toast.success("You have been logged out.");
    navigate("/login"); // Redirect to login page
  }, [dispatch, navigate]); // Dependencies for useCallback


  // --- NEW: Token Expiration Check Effect ---
  useEffect(() => {
    const checkTokenExpiration = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          // JWT `exp` is in seconds, Date.now() is in milliseconds
          if (decodedToken.exp * 1000 < Date.now()) {
            console.warn("Token expired! Logging out automatically.");
            handleLogout(); // Call the memoized logout function
          }
        } catch (error) {
          // Handle cases where the token is malformed or invalid
          console.error("Error decoding token or invalid token:", error);
          toast.error("Your session is invalid. Please log in again.");
          handleLogout(); // Log out in case of invalid token
        }
      } else if (isAuthenticated) {
        // If there's no token but Redux still thinks user is authenticated,
        // it means state is out of sync. Force logout.
        console.warn("No token in localStorage but isAuthenticated is true. Forcing logout.");
        handleLogout();
      }
    };

    // Run the check immediately on component mount
    checkTokenExpiration();

    // Set up an interval to check periodically (e.g., every minute)
    // Be mindful of performance for very frequent checks.
    const intervalId = setInterval(checkTokenExpiration, 120 * 1000); // Check every 2 minute

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [isAuthenticated, handleLogout]); // Add isAuthenticated and handleLogout to dependencies

  // --- EXISTING LOGIC ---
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItems = [
    { link: 'About', path: '/about' },
    { link: 'Art-Connect', path: '/art-connect' },
    { link: 'Art-Bid', path: '/art-bid' },
    { link: 'Art-Market', path: '/art-market' },
    { link: 'Art-Learn', path: '/art-learn' },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : ''} transition-all duration-75`}>
      <nav className='flex justify-between items-center py-4 px-8'>
        <Link to="/" className='flex items-center'>
          <img src={logo} alt="Logo" className='w-20 h-auto' />
        </Link>

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex space-x-14 items-center text-lg'>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              onClick={() => setActiveLink(path)}
              className={`cursor-pointer text-yankees-blue font-montserrat-light px-4 py-2 rounded-lg ${
                activeLink === path ? 'text-zinc-100 border-r-2 border-yankees-blue bg-yankees-blue' : ''
              }`}
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Authentication or User Icons for Desktop */}
        
        <div className='hidden md:flex space-x-4 items-center'>
        {isAuthenticated ? (
            <>
          <div
            className="relative cursor-pointer "
            onClick={() => setOpenWishlist(true)}
            aria-label="Open Wishlist"
          >
            <FaHeart size={20} className='text-yankees-blue' />
            <span className="absolute right-0 top-0 rounded-full w-4 h-4 p-0 m-0 text-yankees-blue font-mono text-[12px] leading-tight text-center">
              {wishlist && wishlist.length}
            </span>
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => setOpenCart(true)}
            aria-label="Open Cart"
          >
            <FaShoppingCart size={20} className='text-yankees-blue' />
            <span className="absolute right-0 top-0 rounded-full w-4 h-4 p-0 m-0  font-mono text-[12px] leading-tight text-center">
              {cart && cart.length}
            </span>
          </div>

              <button onClick={handleLogout} className='bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 font-montserrat-light' aria-label="Logout">
                Logout
              </button>
            </>
            ) : (
            <>
              <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light' onClick={() => navigate('/signup')}>
                Sign Up
              </button>
              <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light' onClick={() => navigate('/login')}>
                Login
              </button>
            </>
          )} 

          {/* Cart popup */}
          {openCart && <Cart setOpenCart={setOpenCart} />}

          {/* Wishlist popup */}
          {openWishlist && <Wishlist setOpenWishlist={setOpenWishlist} />}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className='md:hidden mr-8 text-gray-700 focus:outline-none' aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />} {/* Corrected to show FaTimes when open */}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 fixed top-10 right-0 left-0`}>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              onClick={toggleMenu}
              className='block text-base text-gray-700 hover:text-yankees-blue font-montserrat-light'
            >
              {link}
            </Link>
          ))}
          <div className='space-y-2'>
            {isAuthenticated ? (
              <>
                <button onClick={() => { navigate('/wishlist'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
                  Wishlist
                </button>
                <button onClick={() => { navigate('/cart'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
                  Cart
                </button>
                <button onClick={() => { handleLogout(); toggleMenu(); }} className='bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 font-montserrat-light'>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => { navigate('/login'); toggleMenu(); }} className='bg-red-600 text-white w-full py-2 rounded hover:bg-red-700 font-montserrat-light'>
                  Login
                </button>
                <button onClick={() => { navigate('/signup'); toggleMenu(); }} className='bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 font-montserrat-light'>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;