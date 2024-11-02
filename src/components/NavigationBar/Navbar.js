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

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import logo from '../../assets/SCS Logo.png';
import { FaTimes, FaBars, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import Cart from "../Cart/Cart";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const [openCart, setOpenCart] = useState(false);
  const location = useLocation();

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on current path
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
    <header className={`w-full fixed top-0 left-0 right-0 z-50 ${isSticky ? 'bg-stone-50 shadow-lg' : 'bg-transparent'} transition-all duration-75`}>
      <nav className='flex justify-between items-center py-4 px-8'>
        <a href="/" className='flex items-center'>
          <img src={logo} alt="Logo" className='w-20 h-auto' />
        </a>

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex space-x-14 items-center text-lg'>
          {navItems.map(({ link, path }) => (
            <Link 
              key={path} 
              to={path} 
              onClick={() => setActiveLink(path)}
              className={`cursor-pointer text-yankees-blue font-montserrat-light px-4 py-2 rounded-lg ${
                activeLink === path ? ' text-zinc-100  border-r-2 border-yankees-blue bg-yankees-blue' : ''
              }`}
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Authentication or User Icons for Desktop */}
        <div className='hidden md:flex space-x-4 items-center'>
          {/* {isLoggedIn ? ( */}
            <>
              <button onClick={() => navigate('/wishlist')} className='text-yankees-blue'>
                <FaHeart size={20} />
              </button>

              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}>
                 <FaShoppingCart size={20} />
                <span className="absolute right-0 top-0 rounded-full  w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>

              <button onClick={() => navigate('/account')} className='text-yankees-blue'>
                <FaUser size={20} />
              </button>
              <button onClick={handleLogout} className='bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 font-montserrat-light'>
                Logout
              </button>
            </>
          {/* ) : (
            <>
              <button className='bg-fire-opal text-white py-1 px-8 rounded-lg hover:bg-orange-400 font-montserrat-light' onClick={() => { navigate('/signup') }}>
                Sign Up
              </button>
              <button className='bg-madder-lake text-white py-1 px-8 rounded-lg hover:bg-red-600 font-montserrat-light' onClick={() => { navigate('/login') }}>
                Login
              </button>
            </>
          )} */}

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

        </div>

        {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className='md:hidden mr-8 text-gray-700 focus:outline-none'>
            {isMenuOpen ? <FaTimes className='h-6 w-6' /> : <FaBars className='h-6 w-6' />}
          </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`space-y-4 px-4 mt-16 py-7 bg-stone-50 ${isMenuOpen ? "block fixed top-10 right-0 left-0" : "hidden"}`}>
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
            {isLoggedIn ? (
              <>
                <button onClick={() => { navigate('/wishlist'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
                  Wishlist
                </button>
                <button onClick={() => { navigate('/cart'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
                  Cart
                </button>
                <button onClick={() => { navigate('/account'); toggleMenu(); }} className='text-yankees-blue w-full py-2 rounded font-montserrat-light'>
                  Account
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