// import React from "react";
// import logo from "../assets/logo.png";
// import desk from "../assets/desk.png";
// import islamic from "../assets/islamic.png";
// import sky from "../assets/sky.png";
// import earn from "../assets/earn.png";
// import {FaBell, FaSearch, FaUserCircle } from "react-icons/fa";



// const Navbar = () => {
//     return(
//         <>
//         <nav className="bg-[#f5f5f5] flex justify-between px-4">
//             <div className="flex items-center text-xl">
//                 <img src={logo} alt="logo" className="w-60" />
//             </div>
//             <div className="">
//             <ul className="py-6 text-[16px] text-gray-950 flex space-x-4">
//                 <li className=""><a href="">About EBL</a></li>
//                 <li><a href="">Retail & SME</a></li>
//                 <li><a href="">Corporate</a></li>
//                 <li><a href="">Islamic Banking</a></li>
//                 <li><a href="">Treasury, FIs & OBU</a></li>
//                 <li><a href="">Investor Relations</a></li>
//                 <li><a href="">Career</a></li>
//             </ul>
//             </div>
//         </nav>
       
// </>
//     )
// }
// export default Navbar;

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   const navItems = [
//     { id: 1, text: 'About EBL' },
//     { id: 2, text: 'Retail & SME' },
//     { id: 3, text: 'Corporate' },
//     { id: 4, text: 'Islamic Banking' },
//     { id: 5, text: 'Treasury, FIs & OBU' },
//     { id: 6, text: 'Investor Relations' },
//     { id: 7, text: 'Career' },
//   ];

//   return (
//     <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//       {/* Logo */}
//       <img src={logo} className='w-full text-3xl font-bold text-[#00df9a]' />

//       {/* Desktop Navigation */}
//       <ul className='hidden md:flex'>
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation Icon */}
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       {/* Mobile Navigation Menu */}
//       <ul
//         className={
//           nav
//             ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
//             : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
//         }
//       >
//         {/* Mobile Logo */}
//         <img src={logo} className='w-full text-3xl font-bold text-[#00df9a]' />

//         {/* Mobile Navigation Items */}
//         {navItems.map(item => (
//           <li
//             key={item.id}
//             className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
//           >
//             {item.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import logo from '../assets/logo.png';


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="bg-[#f5f5f5]   
//  flex justify-between px-4">
//         <div className="flex items-center text-xl">
//           <img src={logo} alt="logo" className="w-60" />
//         </div>
//         <div className="relative">
//           <button className="flex items-center justify-center p-2 rounded-full bg-gray-200" onClick={toggleMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">   

//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>   

//           <ul className={`absolute top-full right-0 bg-white shadow-md rounded-md py-4 px-2 ${isMenuOpen ? 'block' : 'hidden'}`}>
//             <li className="text-gray-900 py-2 px-4"><a href="">About EBL</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Retail & SME</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Corporate</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Islamic Banking</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Treasury, FIs & OBU</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Investor Relations</a></li>
//             <li className="text-gray-900 py-2 px-4"><a href="">Career</a></li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'About EBL' },
    { id: 2, text: 'Retail & SME' },
    { id: 3, text: 'Corporate' },
    { id: 4, text: 'Islamic Banking' },
    { id: 5, text: 'Treasury, FIs & OBU' },
    { id: 6, text: 'Investor Relations' },
    { id: 7, text: 'Career' },
  ];

  return (
    <div className='bg-[#F5F5F5] flex justify-between items-center h-full w-full mx-auto px-4 text-black'>
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <img src={logo} className='w-60' alt='logo' />

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#2635a4] hover:text-white rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f5f5f5] ease-in-out duration-500 z-my-custom-index'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <img src={logo} className='w-60' alt='logo' />

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;