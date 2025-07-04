import React from "react";
import { Menu } from "lucide-react"; // optional: if you're using lucide icons
import Headroom from 'react-headroom';
const Nav = () => {
  return (
   <Headroom >
     <div className="navbar shadow-2xl h-24 text-black lg:px-16 font-extrabold z-50 backdrop-blur-md">
      {/* Left side (Logo and dropdown for mobile) */}
      <div className="navbar">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* You can use an SVG or a library icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#">Home</a>
            </li>
          
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#aboutS">About Us</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#ss">Services</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
              <a href="#gallary">Gallery</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
               <a href="#price">MemberShip Plan</a>
            </li>
            <li className="hover:text-[#7F22FE] transition-colors duration-200">
               <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a href="#" data-aos="fade-down" className=" text-lg   poppins-bold">
          <span className="text-4xl text-[#7F22FE] ">NG </span> FITNESS GYM
        </a>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium ">
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
            <a href="#">Home</a>
          </li>
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
            <a href="#aboutS">About Us</a>
          </li>
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
           <a href="#ss">Services</a>
          </li>
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
            <a href="#gallary">Gallery</a>
          </li>
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
            <a href="#price">MemberShip Plan</a>
          </li>
          <li
            data-aos="fade-down"
            className="hover:text-[#7F22FE] transition-colors duration-200"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
   </Headroom>
  );
};

export default Nav;
